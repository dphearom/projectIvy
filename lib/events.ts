// `server-only` throws a build error if this module is accidentally imported in a client component.
// Client components should use `import type { EventDTO }` — type imports are erased at compile time.
import "server-only"
import connectToDatabase from "./mongodb"
import Event from "@/database/event.model"

/** Plain, serializable shape passed to client components via props. No MongoDB types leak out. */
export interface EventDTO {
  id: string
  title: string
  slug: string
  image: string
  location: string
  date: string     // formatted for display: "Jul 15, 2026"
  time: string     // formatted for display: "9:00 AM"
  rawDate: string  // ISO date string — used to generate .ics calendar files in BookingForm
  rawTime: string  // 24h "HH:mm" — used to generate .ics calendar files in BookingForm
  venue: string
  mode: string
  audience: string
  organizer: string
  overview: string
  description: string
  agenda: string[]
  tags: string[]
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

type LeanEvent = {
  _id: unknown
  title: string
  slug: string
  image: string
  location: string
  date: string
  time: string
  venue: string
  mode: string
  audience: string
  organizer: string
  overview: string
  description: string
  agenda?: string[]
  tags?: string[]
}

function toDTO(d: LeanEvent): EventDTO {
  return {
    id: String(d._id),
    title: d.title,
    slug: d.slug,
    image: d.image,
    location: d.location,
    date: formatDate(d.date),
    time: formatTime(d.time),
    rawDate: d.date,
    rawTime: d.time,
    venue: d.venue,
    mode: d.mode,
    audience: d.audience,
    organizer: d.organizer,
    overview: d.overview,
    description: d.description,
    agenda: d.agenda ?? [],
    tags: d.tags ?? [],
  }
}

export async function getAllEvents(): Promise<EventDTO[]> {
  await connectToDatabase()
  const docs = await Event.find({}).sort({ date: 1 }).lean<LeanEvent[]>()
return docs.map(toDTO)
}

export async function getEventBySlug(slug: string): Promise<EventDTO | null> {
  await connectToDatabase()
  const doc = await Event.findOne({ slug }).lean<LeanEvent | null>()
  return doc ? toDTO(doc) : null
}
