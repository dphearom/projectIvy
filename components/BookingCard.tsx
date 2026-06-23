import BookingForm from "@/components/BookingForm";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@/components/icons";
import type { EventDTO } from "@/lib/events";

export default function BookingCard({ event }: { event: EventDTO }) {
  return (
    <div className="booking-card">
      <span className="price-tag">Free Registration</span>
      <h3>Reserve your spot</h3>
      <div className="booking-summary">
        <div className="booking-summary-item">
          <div className="b-icon"><CalendarIcon /></div>
          <div><div className="b-label">Date</div><div className="b-value">{event.date}</div></div>
        </div>
        <div className="booking-summary-item">
          <div className="b-icon"><ClockIcon /></div>
          <div><div className="b-label">Time</div><div className="b-value">{event.time}</div></div>
        </div>
        <div className="booking-summary-item">
          <div className="b-icon"><MapPinIcon /></div>
          <div><div className="b-label">Venue</div><div className="b-value">{event.venue}</div></div>
        </div>
      </div>
      <BookingForm
        eventTitle={event.title}
        eventId={event.id}
        rawDate={event.rawDate}
        rawTime={event.rawTime}
        venue={event.venue}
        location={event.location}
        description={event.description}
      />
    </div>
  );
}
