import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const EventsCalendar = () => (
  <section className="events-calendar about-sec alt" id="calendar">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Calendar</span>
        <h2>Project IVY&apos;s advising and event calendar</h2>
        <p>
          Workshops, bootcamps, and advising sessions — all in one place. Check back for
          upcoming dates and registration links.
        </p>
      </div>
      <div className="events-calendar-placeholder" data-reveal data-reveal-d="1">
        <PlaceholderImage name={PLACEHOLDERS.EVENTS_CALENDAR} aspect="21 / 9" />
      </div>
    </div>
  </section>
);

export default EventsCalendar;
