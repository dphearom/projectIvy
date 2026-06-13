import {
  model,
  models,
  Schema,
  type HydratedDocument,
  type Model,
  type Types,
} from "mongoose"
import Event from "./event.model"

interface IBooking {
  eventId: Types.ObjectId
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const bookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) => emailRegex.test(value),
        message: "Invalid email format.",
      },
    },
  },
  {
    timestamps: true,
  }
)

bookingSchema.index({ eventId: 1 })

bookingSchema.pre("save", async function preSave(this: HydratedDocument<IBooking>) {
  // Normalize fields before persistence.
  this.name = this.name.trim()
  const normalizedEmail = this.email.trim().toLowerCase()
  if (!emailRegex.test(normalizedEmail)) {
    throw new Error("Invalid email format.")
  }
  this.email = normalizedEmail

  // Prevent orphaned bookings by checking the referenced event exists.
  const eventExists = await Event.exists({ _id: this.eventId })
  if (!eventExists) {
    throw new Error("Referenced event does not exist.")
  }
})

const Booking: Model<IBooking> =
  (models.Booking as Model<IBooking> | undefined) ??
  model<IBooking>("Booking", bookingSchema)

export default Booking
