import Link from "next/link";
import EventCard from "@/components/EventCard";
import ArrowRight from "@/components/ArrowRight";
import events from "@/lib/constants";

interface Props {
  /** When true, only show the first few events plus a "View All Events" link. */
  preview?: boolean;
  /** How many events to show in preview mode. */
  limit?: number;
  /** Hide the section's own heading (e.g. when a PageHeader already provides one). */
  hideHeader?: boolean;
}

const UpcomingEvents = ({ preview = false, limit = 3, hideHeader = false }: Props) => {
  const shown = preview ? events.slice(0, limit) : events;

  return (
    <section className="section events-section" id="events">
      <div className="container">
        {!hideHeader && (
          <div className="events-header">
            <span className="section-label">Upcoming Events</span>
            <h2 className="reveal">Workshops &amp; Bootcamps to Get You There</h2>
            <p className="reveal reveal-delay-1">
              Scholarship bootcamps, application workshops, and mentor meetups — all
              in one place. Reserve your spot and turn your ambition into admission.
            </p>
          </div>
        )}
        <div className="events-grid">
          {shown.map((event, i) => (
            <div
              key={event.slug}
              className={`reveal${i % 3 ? ` reveal-delay-${i % 3}` : ""}`}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
        {preview && (
          <div className="events-cta">
            <Link href="/events" className="btn btn-primary">
              View All Events
              <ArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
