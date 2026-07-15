"use server"

import { db } from "@/lib/db"
import { consultationRequests } from "@/database/schema"
import { EMAIL_RE } from "@/lib/utils"

export type ConsultationInput = {
  role: "parent" | "student"
  name: string
  email: string
  phone: string
  childName?: string
  grade: string
  school: string
  inquiries: string[]
}

export async function submitConsultation(data: ConsultationInput) {
  if (!data.name.trim()) throw new Error("Full name is required.")
  if (!EMAIL_RE.test(data.email)) throw new Error("A valid email is required.")
  if (!data.phone.trim()) throw new Error("Telegram is required.")
  if (data.role === "parent" && !data.childName?.trim()) throw new Error("Child's name is required.")
  if (!data.grade) throw new Error("Grade is required.")
  if (!data.school.trim()) throw new Error("School is required.")

  await db.insert(consultationRequests).values({
    role: data.role,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    childName: data.role === "parent" ? (data.childName?.trim() ?? null) : null,
    grade: data.grade,
    school: data.school.trim(),
    inquiries: data.inquiries,
  })
}
