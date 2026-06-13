import {
  model,
  models,
  Schema,
  type HydratedDocument,
  type Model,
  type Query,
  type Types,
} from "mongoose"

interface IEvent {
  title: string
  slug: string
  description: string
  overview: string
  image: string
  venue: string
  location: string
  date: string
  time: string
  mode: string
  audience: string
  agenda: string[]
  organizer: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

interface IBookingReference {
  eventId: Types.ObjectId
}

type RequiredStringField =
  | "title"
  | "description"
  | "overview"
  | "image"
  | "venue"
  | "location"
  | "date"
  | "time"
  | "mode"
  | "audience"
  | "organizer"

const requiredStringFields: RequiredStringField[] = [
  "title",
  "description",
  "overview",
  "image",
  "venue",
  "location",
  "date",
  "time",
  "mode",
  "audience",
  "organizer",
]

function createSlug(input: string): string {
  const slug = input
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

  if (!slug) {
    throw new Error("Unable to generate slug from title.")
  }

  return slug
}

function normalizeDateToIso(input: string): string {
  const parsed = new Date(input)

  if (Number.isNaN(parsed.getTime())) {
    throw new Error("Invalid date value.")
  }

  return parsed.toISOString()
}

function normalizeTime(input: string): string {
  const value = input.trim()
  const twentyFourHourMatch = value.match(/^([01]\d|2[0-3]):([0-5]\d)$/)

  if (twentyFourHourMatch) {
    return `${twentyFourHourMatch[1]}:${twentyFourHourMatch[2]}`
  }

  const meridiemMatch = value.match(/^(\d{1,2}):([0-5]\d)\s*([AaPp][Mm])$/)
  if (!meridiemMatch) {
    throw new Error("Invalid time value. Use HH:mm or h:mm AM/PM format.")
  }

  const [, rawHour, minute, meridiem] = meridiemMatch
  let hour = Number(rawHour)

  if (hour < 1 || hour > 12) {
    throw new Error("Invalid time hour value.")
  }

  const upperMeridiem = meridiem.toUpperCase()
  if (upperMeridiem === "AM") {
    hour = hour % 12
  } else {
    hour = hour % 12 + 12
  }

  return `${String(hour).padStart(2, "0")}:${minute}`
}

function normalizeStringArray(values: string[], fieldName: string): string[] {
  const normalized = values.map((value) => value.trim()).filter(Boolean)

  if (normalized.length === 0) {
    throw new Error(`${fieldName} must contain at least one item.`)
  }

  return normalized
}

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    overview: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
    mode: { type: String, required: true, trim: true },
    audience: { type: String, required: true, trim: true },
    agenda: {
      type: [String],
      required: true,
      validate: {
        validator: (values: string[]) => values.length > 0,
        message: "Agenda must contain at least one item.",
      },
    },
    organizer: { type: String, required: true, trim: true },
    tags: {
      type: [String],
      required: true,
      validate: {
        validator: (values: string[]) => values.length > 0,
        message: "Tags must contain at least one item.",
      },
    },
  },
  {
    timestamps: true,
  }
)

eventSchema.index({ slug: 1 }, { unique: true })

eventSchema.pre("save", function preSave(this: HydratedDocument<IEvent>) {
  // Ensure required text fields are present and not just whitespace.
  for (const field of requiredStringFields) {
    const value = this[field]
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(`${field} is required and cannot be empty.`)
    }
    this[field] = value.trim()
  }

  // Keep array fields normalized and non-empty for consistent reads.
  this.agenda = normalizeStringArray(this.agenda, "Agenda")
  this.tags = normalizeStringArray(this.tags, "Tags")

  // Persist date/time in a predictable format.
  this.date = normalizeDateToIso(this.date)
  this.time = normalizeTime(this.time)

  // Regenerate slug only when title changes to keep stable URLs.
  if (this.isModified("title") || !this.slug) {
    this.slug = createSlug(this.title)
  }
})

eventSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function preDeleteOne(this: HydratedDocument<IEvent>) {
    // Deny deleting an event while bookings still reference it.
    const BookingModel = this.model("Booking") as unknown as Model<IBookingReference>
    const relatedBookingExists = await BookingModel.exists({ eventId: this._id })
    if (relatedBookingExists) {
      throw new Error("Cannot delete event with existing bookings.")
    }
  }
)

eventSchema.pre(
  "findOneAndDelete",
  async function preFindOneAndDelete(
    this: Query<HydratedDocument<IEvent> | null, IEvent>
  ) {
    const eventToDelete = await this.model.findOne(this.getFilter()).select("_id").lean()
    if (!eventToDelete) {
      return
    }

    // Apply the same guard for query-based deletes.
    const BookingModel = this.model.db.model("Booking") as unknown as Model<IBookingReference>
    const relatedBookingExists = await BookingModel.exists({ eventId: eventToDelete._id })
    if (relatedBookingExists) {
      throw new Error("Cannot delete event with existing bookings.")
    }
  }
)

const Event: Model<IEvent> =
  (models.Event as Model<IEvent> | undefined) ?? model<IEvent>("Event", eventSchema)

export default Event
