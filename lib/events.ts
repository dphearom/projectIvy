import "server-only"
import { eq, asc, and } from "drizzle-orm"
import { db } from "./db"
import { events } from "@/database/schema"

export interface EventDTO {
  id: string
  title: string
  slug: string
  image: string
  location: string
  date: string
  time: string
  rawDate: string
  rawTime: string
  venue: string
  mode: string
  audience: string
  organizer: string
  overview: string
  description: string
  agenda: string[]
  tags: string[]
  formLink: string | null
}

function formatDate(raw: string): string {
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function formatTime(raw: string): string {
  const match = /^(\d{1,2}):(\d{2})$/.exec(raw.trim())
  if (!match) return raw
  let hour = Number(match[1])
  const minute = match[2]
  const meridiem = hour >= 12 ? "PM" : "AM"
  hour = hour % 12 || 12
  return `${hour}:${minute} ${meridiem}`
}

function toDTO(row: typeof events.$inferSelect): EventDTO {
  return {
    id: String(row.id),
    title: row.title,
    slug: row.slug,
    image: row.image,
    location: row.location,
    date: formatDate(row.date),
    time: formatTime(row.time),
    rawDate: row.date,
    rawTime: row.time,
    venue: row.venue,
    mode: row.mode,
    audience: row.audience,
    organizer: row.organizer,
    overview: row.overview,
    description: row.description,
    agenda: row.agenda,
    tags: row.tags,
    formLink: row.formLink,
  }
}

export async function getAllEvents(): Promise<EventDTO[]> {
  const rows = await db.select().from(events)
    .where(eq(events.published, true))
    .orderBy(asc(events.date))
  return rows.map(toDTO)
}

export async function getEventBySlug(slug: string): Promise<EventDTO | null> {
  const rows = await db.select().from(events)
    .where(and(eq(events.slug, slug), eq(events.published, true)))
    .limit(1)
  return rows.length > 0 ? toDTO(rows[0]) : null
}
