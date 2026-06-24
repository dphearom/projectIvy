"use server"

import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { users } from "@/database/schema"
import { createSession, deleteSession } from "@/lib/session"
import { EMAIL_RE } from "@/lib/utils"

export interface LoginState {
  error?: string
}

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = (formData.get("email") as string)?.trim().toLowerCase()
  const password = formData.get("password") as string

  if (!email || !EMAIL_RE.test(email)) {
    return { error: "Please enter a valid email address." }
  }
  if (!password) {
    return { error: "Please enter your password." }
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

  if (!user) {
    return { error: "Invalid email or password." }
  }

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) {
    return { error: "Invalid email or password." }
  }

  await createSession(user.id, user.role)

  switch (user.role) {
    case "admin":
      redirect("/admin")
    case "mentor":
      redirect("/mentor")
    case "mentee":
      redirect("/dashboard")
  }
}

export async function logout() {
  await deleteSession()
  redirect("/login")
}
