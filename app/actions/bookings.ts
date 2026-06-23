"use server"

import { Types } from "mongoose"
import connectToDatabase from "@/lib/mongodb"
import Booking from "@/database/booking.model"
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
  const eventId = input.eventId?.trim()

  // Validate on the server — never trust the client.
  if (!name) {
    return { ok: false, error: "Please enter your name." }
  }
  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }
  if (!eventId || !Types.ObjectId.isValid(eventId)) {
    return { ok: false, error: "We couldn't find that event." }
  }

  try {
    await connectToDatabase()

    // Friendly guard against registering twice with the same email.
    const existing = await Booking.findOne({ eventId, email }).lean()
    if (existing) {
      return { ok: false, error: "You're already registered for this event." }
    }

    await Booking.create({ eventId, name, email })
    return { ok: true }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : ""
    if (message.includes("Referenced event does not exist")) {
      return { ok: false, error: "We couldn't find that event." }
    }
    console.error("createBooking failed:", err)
    return { ok: false, error: "Something went wrong. Please try again." }
  }
}
