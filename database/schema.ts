import {
  pgTable,
  pgEnum,
  serial,
  text,
  timestamp,
  integer,
  boolean,
  date,
  time,
  unique,
} from "drizzle-orm/pg-core"

// ── Enums ──

export const userRoleEnum = pgEnum("user_role", ["mentee", "mentor", "admin"])

export const mentorStatusEnum = pgEnum("mentor_status", [
  "pending",
  "approved",
  "rejected",
  "suspended",
])

export const slotStatusEnum = pgEnum("slot_status", ["available", "booked"])

export const bookingStatusEnum = pgEnum("booking_status", [
  "pending_payment",
  "confirmed",
  "cancelled_by_student",
  "cancelled_by_mentor",
  "completed",
])

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "paid",
  "failed",
])

// ── Core: Users & Auth ──

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: userRoleEnum("role").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone"),
  avatarUrl: text("avatar_url"),
  emailVerified: boolean("email_verified").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const otpCodes = pgTable("otp_codes", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  code: text("code").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  used: boolean("used").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// ── Profiles ──

export const studentProfiles = pgTable("student_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  gender: text("gender"),
  school: text("school"),
  grade: text("grade"),
  intendedMajor: text("intended_major"),
  preferredCountry: text("preferred_country"),
  scholarshipInterest: boolean("scholarship_interest").default(false).notNull(),
  budgetRange: text("budget_range"),
  englishProficiency: text("english_proficiency"),
  goalsAndChallenges: text("goals_and_challenges"),
})

export const mentorProfiles = pgTable("mentor_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  bio: text("bio"),
  industry: text("industry"),
  organization: text("organization"),
  expertise: text("expertise").array(),
  expectations: text("expectations"),
  status: mentorStatusEnum("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// ── Mentor Availability & Bookings ──

export const mentorAvailabilitySlots = pgTable("mentor_availability_slots", {
  id: serial("id").primaryKey(),
  mentorId: integer("mentor_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  date: date("date").notNull(),
  startTime: time("start_time").notNull(),
  durationMinutes: integer("duration_minutes").default(45).notNull(),
  status: slotStatusEnum("status").default("available").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id")
    .notNull()
    .references(() => users.id, { onDelete: "restrict" }),
  mentorId: integer("mentor_id")
    .notNull()
    .references(() => users.id, { onDelete: "restrict" }),
  slotId: integer("slot_id")
    .notNull()
    .references(() => mentorAvailabilitySlots.id, { onDelete: "restrict" }),
  challenges: text("challenges"),
  expectations: text("expectations"),
  supportNeeded: text("support_needed"),
  status: bookingStatusEnum("status").default("confirmed").notNull(),
  paymentStatus: paymentStatusEnum("payment_status"),
  meetingLink: text("meeting_link"),
  followUpNote: text("follow_up_note"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// ── Events ──

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  overview: text("overview").notNull(),
  image: text("image").notNull(),
  venue: text("venue").notNull(),
  location: text("location").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  mode: text("mode").notNull(),
  audience: text("audience").notNull(),
  organizer: text("organizer").notNull(),
  agenda: text("agenda").array().notNull(),
  tags: text("tags").array().notNull(),
  formLink: text("form_link"),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const eventBookings = pgTable(
  "event_bookings",
  {
    id: serial("id").primaryKey(),
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "restrict" }),
    name: text("name").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [unique("event_bookings_event_email_uniq").on(t.eventId, t.email)]
)
