"use server"

import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { requireRole } from "@/lib/auth"
import { db } from "@/lib/db"
import { consultationRequests } from "@/database/schema"

export interface InquiryStatusState {
  error?: string
}

const STATUSES = ["pending", "contacted", "handled"] as const

export async function updateInquiryStatus(
  _prev: InquiryStatusState,
  formData: FormData
): Promise<InquiryStatusState> {
  const session = await requireRole("admin")

  const id = Number(formData.get("id"))
  const status = formData.get("status") as string
  const notes = (formData.get("notes") as string)?.trim() || null

  if (!id) return { error: "Inquiry not found." }
  if (!STATUSES.includes(status as (typeof STATUSES)[number])) return { error: "Invalid status." }

  await db
    .update(consultationRequests)
    .set({
      status: status as (typeof STATUSES)[number],
      notes,
      handledBy: session.userId,
      handledAt: new Date(),
    })
    .where(eq(consultationRequests.id, id))

  revalidatePath("/admin/inquiries")
  return {}
}
