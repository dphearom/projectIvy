"use server"

import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { requireRole } from "@/lib/auth"
import { db } from "@/lib/db"
import { consultationRequests } from "@/database/schema"
import { INQUIRY_STATUSES, type InquiryStatus } from "@/lib/inquiries"

export interface InquiryStatusState {
  error?: string
  success?: boolean
}

export async function updateInquiryStatus(
  _prev: InquiryStatusState,
  formData: FormData
): Promise<InquiryStatusState> {
  const session = await requireRole("admin")

  const id = Number(formData.get("id"))
  const status = formData.get("status") as string
  const notes = (formData.get("notes") as string)?.trim() || null

  if (!id) return { error: "Inquiry not found." }
  if (!INQUIRY_STATUSES.includes(status as InquiryStatus)) return { error: "Invalid status." }
  if (status === "archived" && !notes) return { error: "A remark is required to archive." }

  await db
    .update(consultationRequests)
    .set({
      status: status as InquiryStatus,
      notes,
      handledBy: session.userId,
      handledAt: new Date(),
    })
    .where(eq(consultationRequests.id, id))

  revalidatePath("/admin/inquiries")
  return { success: true }
}
