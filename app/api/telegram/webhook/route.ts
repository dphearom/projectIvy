import { NextRequest, NextResponse } from "next/server"
import { desc, eq, ne } from "drizzle-orm"
import { db } from "@/lib/db"
import { consultationRequests } from "@/database/schema"
import { sendTelegramMessage, sendTelegramHtml, sendTelegramDocument, escapeHtml } from "@/lib/telegram"
import { inquiryLabel, INQUIRY_STATUSES, type InquiryStatus } from "@/lib/inquiries"

const HELP_TEXT = [
  "Commands:",
  "/get — table of last 5 pending inquiries",
  "/get all — table of last 5 inquiries (excludes archived)",
  "/get archived — table of last 5 archived inquiries",
  "/get <id> — full detail for one inquiry",
  "/status <id> <pending|contacted|handled|archived> [notes] — update an inquiry's status (notes required to archive)",
  "/archive <id> <remark> — shortcut for /status <id> archived <remark>",
  "/export — CSV file of all inquiries",
].join("\n")

type ConsultationRequest = typeof consultationRequests.$inferSelect
type TelegramFrom = { username?: string; first_name?: string } | undefined

const TABLE_COLUMNS = [
  { key: "id", label: "ID", width: 3 },
  { key: "name", label: "Name", width: 16 },
  { key: "role", label: "Role", width: 7 },
  { key: "phone", label: "Contact", width: 16 },
  { key: "status", label: "Status", width: 9 },
] as const

function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max - 1) + "…" : str
}

function padCell(str: string, width: number): string {
  return truncate(str, width).padEnd(width)
}

function formatTable(rows: ConsultationRequest[]): string {
  const header = TABLE_COLUMNS.map((c) => c.label.padEnd(c.width)).join(" ")
  const divider = TABLE_COLUMNS.map((c) => "-".repeat(c.width)).join(" ")
  const lines = rows.map((row) =>
    TABLE_COLUMNS.map((c) => padCell(String(row[c.key as keyof ConsultationRequest] ?? ""), c.width)).join(" ")
  )
  return [header, divider, ...lines].join("\n")
}

function formatDetail(row: ConsultationRequest): string {
  const lines = [
    `Inquiry #${row.id}`,
    `Status: ${row.status}`,
    `Name: ${row.name} (${row.role})`,
    `Email: ${row.email}`,
    `Telegram: ${row.phone}`,
  ]
  if (row.role === "parent" && row.childName) lines.push(`Child: ${row.childName}`)
  lines.push(`School: ${row.school}`, `Grade: ${row.grade}`)
  if (row.inquiries.length > 0) lines.push(`Inquiries: ${row.inquiries.map(inquiryLabel).join(", ")}`)
  if (row.notes) lines.push(`Notes: ${row.notes}`)
  if (row.handledByTelegram) lines.push(`Last updated by: ${row.handledByTelegram}`)
  return lines.join("\n")
}

function csvEscape(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value
}

function toCsv(rows: ConsultationRequest[]): string {
  const headers = [
    "id", "role", "name", "email", "phone", "childName", "grade", "school",
    "inquiries", "status", "notes", "handledByTelegram", "handledAt", "createdAt",
  ]
  const lines = [headers.join(",")]
  for (const r of rows) {
    lines.push(
      [
        r.id,
        r.role,
        r.name,
        r.email,
        r.phone,
        r.childName ?? "",
        r.grade,
        r.school,
        r.inquiries.map(inquiryLabel).join("; "),
        r.status,
        r.notes ?? "",
        r.handledByTelegram ?? "",
        r.handledAt ? r.handledAt.toISOString() : "",
        r.createdAt.toISOString(),
      ]
        .map((v) => csvEscape(String(v)))
        .join(",")
    )
  }
  return lines.join("\n")
}

async function handleGet(arg: string | undefined, chatId: number) {
  if (arg && /^\d+$/.test(arg)) {
    const [row] = await db
      .select()
      .from(consultationRequests)
      .where(eq(consultationRequests.id, Number(arg)))
      .limit(1)
    await sendTelegramMessage(row ? formatDetail(row) : `No inquiry found with id ${arg}.`, chatId)
    return
  }

  let rows: ConsultationRequest[]
  let emptyMessage: string

  if (arg === "all") {
    rows = await db
      .select()
      .from(consultationRequests)
      .where(ne(consultationRequests.status, "archived"))
      .orderBy(desc(consultationRequests.createdAt))
      .limit(5)
    emptyMessage = "No inquiries yet."
  } else if (arg === "archived") {
    rows = await db
      .select()
      .from(consultationRequests)
      .where(eq(consultationRequests.status, "archived"))
      .orderBy(desc(consultationRequests.createdAt))
      .limit(5)
    emptyMessage = "No archived inquiries."
  } else {
    rows = await db
      .select()
      .from(consultationRequests)
      .where(eq(consultationRequests.status, "pending"))
      .orderBy(desc(consultationRequests.createdAt))
      .limit(5)
    emptyMessage = "No pending inquiries."
  }

  if (rows.length === 0) {
    await sendTelegramMessage(emptyMessage, chatId)
    return
  }

  await sendTelegramHtml(`<pre>${escapeHtml(formatTable(rows))}</pre>`, chatId)
}

async function applyStatusChange(
  id: number,
  status: InquiryStatus,
  noteParts: string[],
  chatId: number,
  from: TelegramFrom
) {
  const [existing] = await db.select().from(consultationRequests).where(eq(consultationRequests.id, id)).limit(1)
  if (!existing) {
    await sendTelegramMessage(`No inquiry found with id ${id}.`, chatId)
    return
  }

  const notes = noteParts.length > 0 ? noteParts.join(" ") : existing.notes
  if (status === "archived" && !notes) {
    await sendTelegramMessage("A remark is required to archive. Usage: /archive <id> <remark>", chatId)
    return
  }

  const handledByTelegram = from?.username ? `@${from.username}` : from?.first_name ?? null

  await db
    .update(consultationRequests)
    .set({ status, notes, handledByTelegram, handledAt: new Date() })
    .where(eq(consultationRequests.id, id))

  await sendTelegramMessage(`#${id} marked ${status}${notes ? ` — "${notes}"` : ""}`, chatId)
}

async function handleStatus(args: string[], chatId: number, from: TelegramFrom) {
  const [idArg, statusArg, ...noteParts] = args
  const id = Number(idArg)

  if (!idArg || Number.isNaN(id) || !statusArg) {
    await sendTelegramMessage("Usage: /status <id> <pending|contacted|handled|archived> [notes]", chatId)
    return
  }
  if (!INQUIRY_STATUSES.includes(statusArg as InquiryStatus)) {
    await sendTelegramMessage(`Status must be one of: ${INQUIRY_STATUSES.join(", ")}.`, chatId)
    return
  }

  await applyStatusChange(id, statusArg as InquiryStatus, noteParts, chatId, from)
}

async function handleArchive(args: string[], chatId: number, from: TelegramFrom) {
  const [idArg, ...reasonParts] = args
  const id = Number(idArg)

  if (!idArg || Number.isNaN(id) || reasonParts.length === 0) {
    await sendTelegramMessage("Usage: /archive <id> <remark> — a remark is required.", chatId)
    return
  }

  await applyStatusChange(id, "archived", reasonParts, chatId, from)
}

async function handleExport(chatId: number) {
  const rows = await db.select().from(consultationRequests).orderBy(desc(consultationRequests.createdAt))
  if (rows.length === 0) {
    await sendTelegramMessage("No inquiries to export.", chatId)
    return
  }

  const csv = toCsv(rows)
  const filename = `inquiries-${new Date().toISOString().slice(0, 10)}.csv`
  await sendTelegramDocument(filename, csv, "text/csv", chatId)
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-telegram-bot-api-secret-token")
  if (!process.env.TELEGRAM_WEBHOOK_SECRET || secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const update = await req.json()
  const message = update.message
  const text: string | undefined = message?.text
  const chatId: number | undefined = message?.chat?.id
  if (!text || !chatId) return NextResponse.json({ ok: true })

  if (String(chatId) !== process.env.TELEGRAM_CHAT_ID) return NextResponse.json({ ok: true })

  const [command, ...args] = text.trim().split(/\s+/)

  if (command === "/get") {
    await handleGet(args[0], chatId)
  } else if (command === "/status") {
    await handleStatus(args, chatId, message?.from)
  } else if (command === "/archive") {
    await handleArchive(args, chatId, message?.from)
  } else if (command === "/export") {
    await handleExport(chatId)
  } else if (command === "/help" || command === "/start") {
    await sendTelegramMessage(HELP_TEXT, chatId)
  }

  return NextResponse.json({ ok: true })
}
