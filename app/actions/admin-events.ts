"use server"

import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { requireRole } from "@/lib/auth"
import { db } from "@/lib/db"
import { events } from "@/database/schema"

function createSlug(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

function extractEventData(formData: FormData) {
  return {
    title: (formData.get("title") as string)?.trim(),
    description: (formData.get("description") as string)?.trim(),
    overview: (formData.get("overview") as string)?.trim(),
    image: (formData.get("image") as string)?.trim(),
    venue: (formData.get("venue") as string)?.trim(),
    location: (formData.get("location") as string)?.trim(),
    date: (formData.get("date") as string)?.trim(),
    time: (formData.get("time") as string)?.trim(),
    mode: (formData.get("mode") as string)?.trim(),
    audience: (formData.get("audience") as string)?.trim(),
    organizer: (formData.get("organizer") as string)?.trim(),
    formLink: (formData.get("formLink") as string)?.trim() || null,
    agenda: (formData.get("agenda") as string)
      ?.split("\n")
      .map((s) => s.trim())
      .filter(Boolean) ?? [],
    tags: (formData.get("tags") as string)
      ?.split(",")
      .map((s) => s.trim())
      .filter(Boolean) ?? [],
  }
}

export interface EventFormState {
  error?: string
}

export async function createEvent(
  _prev: EventFormState,
  formData: FormData
): Promise<EventFormState> {
  await requireRole("admin")
  const data = extractEventData(formData)

  if (!data.title) return { error: "Title is required." }
  if (!data.description) return { error: "Description is required." }
  if (!data.date) return { error: "Date is required." }
  if (!data.time) return { error: "Time is required." }

  const slug = createSlug(data.title)

  try {
    await db.insert(events).values({ ...data, slug })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : ""
    if (msg.includes("unique")) {
      return { error: "An event with this title already exists." }
    }
    return { error: "Failed to create event." }
  }

  revalidatePath("/admin/events")
  revalidatePath("/events")
  redirect("/admin/events")
}

export async function updateEvent(
  _prev: EventFormState,
  formData: FormData
): Promise<EventFormState> {
  await requireRole("admin")
  const id = Number(formData.get("id"))
  if (!id) return { error: "Event not found." }

  const data = extractEventData(formData)

  if (!data.title) return { error: "Title is required." }
  if (!data.description) return { error: "Description is required." }
  if (!data.date) return { error: "Date is required." }
  if (!data.time) return { error: "Time is required." }

  const slug = createSlug(data.title)

  try {
    await db.update(events).set({ ...data, slug, updatedAt: new Date() }).where(eq(events.id, id))
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : ""
    if (msg.includes("unique")) {
      return { error: "An event with this title already exists." }
    }
    return { error: "Failed to update event." }
  }

  revalidatePath("/admin/events")
  revalidatePath("/events")
  redirect("/admin/events")
}

export async function unpublishEvent(formData: FormData) {
  await requireRole("admin")
  const id = Number(formData.get("id"))
  if (!id) return

  await db
    .update(events)
    .set({ published: false, updatedAt: new Date() })
    .where(eq(events.id, id))
  revalidatePath("/admin/events")
  revalidatePath("/events")
}

export async function publishEvent(formData: FormData) {
  await requireRole("admin")
  const id = Number(formData.get("id"))
  if (!id) return

  await db
    .update(events)
    .set({ published: true, updatedAt: new Date() })
    .where(eq(events.id, id))
  revalidatePath("/admin/events")
  revalidatePath("/events")
}
