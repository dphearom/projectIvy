"use server"

import { eq, and } from "drizzle-orm"
import { db } from "@/lib/db"
import { bookings, events } from "@/database/schema"
import { EMAIL_RE } from "@/lib/utils"

export interface BookingInput {
  eventId: string
  name: string
  email: string
}

export interface BookingResult {
  ok: boolean
  error?: string
}

export async function createBooking(input: BookingInput): Promise<BookingResult> {
  const name = input.name?.trim()
  const email = input.email?.trim().toLowerCase()
  const rawEventId = input.eventId?.trim()

  if (!name) {
    return { ok: false, error: "Please enter your name." }
  }
  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  const eventId = Number(rawEventId)
  if (!rawEventId || Number.isNaN(eventId) || eventId <= 0) {
    return { ok: false, error: "We couldn't find that event." }
  }

  try {
    const [event] = await db
      .select({ id: events.id })
      .from(events)
      .where(eq(events.id, eventId))
      .limit(1)

    if (!event) {
      return { ok: false, error: "We couldn't find that event." }
    }

    const [existing] = await db
      .select({ id: bookings.id })
      .from(bookings)
      .where(and(eq(bookings.eventId, eventId), eq(bookings.email, email)))
      .limit(1)

    if (existing) {
      return { ok: false, error: "You're already registered for this event." }
    }

    await db.insert(bookings).values({ eventId, name, email })
    return { ok: true }
  } catch (err: unknown) {
    console.error("createBooking failed:", err)
    return { ok: false, error: "Something went wrong. Please try again." }
  }
}
