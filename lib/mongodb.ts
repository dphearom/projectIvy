import "server-only"
import mongoose, { type ConnectOptions } from "mongoose"

type MongooseConnection = typeof mongoose

interface MongooseCache {
  conn: MongooseConnection | null
  promise: Promise<MongooseConnection> | null
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache
}

// Reuse the same cache object across hot reloads in development.
const cached = globalWithMongoose.mongooseCache ?? { conn: null, promise: null }
globalWithMongoose.mongooseCache = cached

const connectionOptions: ConnectOptions = {
  bufferCommands: false,
}

export async function connectToDatabase(): Promise<MongooseConnection> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      throw new Error("Missing MONGODB_URI environment variable.")
    }
    // Cache the in-flight promise to prevent parallel connection attempts.
    cached.promise = mongoose
      .connect(uri, connectionOptions)
      .then((mongooseInstance) => mongooseInstance)
  }

  try {
    cached.conn = await cached.promise
  } catch (error) {
    // Reset the promise so future calls can retry after a failure.
    cached.promise = null
    throw error
  }

  return cached.conn
}

export default connectToDatabase
