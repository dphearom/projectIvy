import { NextRequest, NextResponse } from "next/server"
import { desc, eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { consultationRequests } from "@/database/schema"
import { sendTelegramMessage } from "@/lib/telegram"
import { inquiryLabel } from "@/lib/inquiries"

const HELP_TEXT = [
  "Commands:",
  "/get — last 5 pending inquiries",
  "/get all — last 5 inquiries, any status",
  "/get <id> — full detail for one inquiry",
].join("\n")

type ConsultationRequest = typeof consultationRequests.$inferSelect

function formatSummaryLine(row: ConsultationRequest): string {
  return `#${row.id} · ${row.name} (${row.role}) — ${row.school}, Grade ${row.grade} — ${row.status}`
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

  const rows =
    arg === "all"
      ? await db.select().from(consultationRequests).orderBy(desc(consultationRequests.createdAt)).limit(5)
      : await db
          .select()
          .from(consultationRequests)
          .where(eq(consultationRequests.status, "pending"))
          .orderBy(desc(consultationRequests.createdAt))
          .limit(5)

  if (rows.length === 0) {
    await sendTelegramMessage(arg === "all" ? "No inquiries yet." : "No pending inquiries.", chatId)
    return
  }

  await sendTelegramMessage(rows.map(formatSummaryLine).join("\n"), chatId)
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

  const [command, arg] = text.trim().split(/\s+/)

  if (command === "/get") {
    await handleGet(arg, chatId)
  } else if (command === "/help" || command === "/start") {
    await sendTelegramMessage(HELP_TEXT, chatId)
  }

  return NextResponse.json({ ok: true })
}
