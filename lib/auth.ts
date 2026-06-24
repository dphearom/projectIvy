import "server-only"
import { redirect } from "next/navigation"
import { decrypt, getSessionToken, type SessionPayload } from "./session"

export async function getSession(): Promise<SessionPayload | null> {
  const token = await getSessionToken()
  if (!token) return null
  return decrypt(token)
}

export async function requireAuth(): Promise<SessionPayload> {
  const session = await getSession()
  if (!session) redirect("/login")
  return session
}

export async function requireRole(
  role: SessionPayload["role"]
): Promise<SessionPayload> {
  const session = await requireAuth()
  if (session.role !== role) redirect("/login")
  return session
}

export function redirectByRole(role: SessionPayload["role"]): never {
  switch (role) {
    case "admin":
      redirect("/admin")
    case "mentor":
      redirect("/mentor")
    case "mentee":
      redirect("/dashboard")
  }
}
