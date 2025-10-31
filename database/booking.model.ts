import mongoose, { Schema, Document, Model, Types } from 'mongoose';

/**
 * TypeScript interface for Booking document
 */
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Booking schema definition
 */
const bookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => {
          // RFC 5322 compliant email regex
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Please provide a valid email address',
      },
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Pre-save hook to validate event reference
 * - Verifies that the referenced eventId exists in the Event collection
 * - Throws an error if the event does not exist
 * - Only validates on new bookings or when eventId is modified
 */
bookingSchema.pre('save', async function (next) {
  const booking = this as IBooking;

  // Validate event reference if new booking or eventId changed
  if (booking.isNew || booking.isModified('eventId')) {
    try {
      // Dynamically import Event model to avoid circular dependency
      const Event = mongoose.models.Event || (await import('./event.model')).default;
      
      const eventExists = await Event.findById(booking.eventId);
      
      if (!eventExists) {
        throw new Error(`Event with ID ${booking.eventId} does not exist`);
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Invalid event reference: ${error.message}`);
      }
      throw error;
    }
  }

  next();
});

// Create index on eventId for faster queries
bookingSchema.index({ eventId: 1 });

// Compound index for finding bookings by event and email
bookingSchema.index({ eventId: 1, email: 1 });

/**
 * Export Booking model
 * Use existing model if it exists (for Next.js hot reloading)
 */
const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;
