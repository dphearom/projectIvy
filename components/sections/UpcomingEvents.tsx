import Link from "next/link";
import EventsGrid from "@/components/EventsGrid"; // client wrapper — keeps this component server-side
import type { EventDTO } from "@/lib/events";     // type-only import — lib/events is server-only

interface Props {
  events: EventDTO[];
  preview?: boolean; // true on the landing page: shows `limit` cards + "View All" link
  limit?: number;    // how many cards to show in preview mode (default 3)
  hideHeader?: boolean; // true on /events page where a separate page header already exists
}

const UpcomingEvents = ({ events, preview = false, limit = 3, hideHeader = false }: Props) => {
  const shown = preview ? events.slice(0, limit) : events;

  return (
    <section className="events" id="events">
      <div className="wrap">
        {!hideHeader && (
          <div className="section-head" data-reveal>
            <span className="eyebrow center">Upcoming Events</span>
            <h2>Workshops &amp; Bootcamps to Get You There</h2>
            <p>
              Scholarship bootcamps, application workshops, and mentor meetups — all in one place. Reserve
              your spot and turn your ambition into admission.
            </p>
          </div>
        )}

        {shown.length === 0 ? (
          <p style={{ color: "var(--ink-soft)", textAlign: "center", padding: "40px 0" }}>
            No upcoming events right now — check back soon!
          </p>
        ) : (
          <EventsGrid events={shown} />
        )}

        {preview && shown.length > 0 && (
          <div className="events-foot" data-reveal>
            <Link className="btn btn-ghost-dark" href="/events">
              View All Events <span className="arrow">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
