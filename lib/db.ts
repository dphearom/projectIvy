import "server-only"
import { neon } from "@neondatabase/serverless"
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http"
import * as schema from "@/database/schema"

type Db = NeonHttpDatabase<typeof schema>

let dbInstance: Db | null = null

function createDb(): Db {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error(
      "No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?"
    )
  }
  return drizzle(neon(url), { schema })
}

export function getDb(): Db {
  if (!dbInstance) {
    dbInstance = createDb()
  }
  return dbInstance
}

export const db = new Proxy({} as Db, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver)
  },
})
