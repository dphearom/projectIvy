import EventsGrid from "@/components/EventsGrid"; // client wrapper — keeps this component server-side
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
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
    <section className="bg-ivory-2 py-27.5" id="events">
      <div className="wrap">
        {!hideHeader && (
          <div className="text-center max-w-180 mx-auto" data-reveal>
            <Eyebrow center>Upcoming Events</Eyebrow>
            <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
              Workshops &amp; Bootcamps to Get You There
            </h2>
            <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
              Scholarship bootcamps, application workshops, and mentor meetups — all in one place. Reserve
              your spot and turn your ambition into admission.
            </p>
          </div>
        )}

        {shown.length === 0 ? (
          <p className="text-ink-soft text-center py-10">
            No upcoming events right now — check back soon!
          </p>
        ) : (
          <EventsGrid events={shown} />
        )}

        {preview && shown.length > 0 && (
          <div className="text-center mt-13" data-reveal>
            <Button variant="ghost-dark" href="/events" arrow>
              View All Events
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
