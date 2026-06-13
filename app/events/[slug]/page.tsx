import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEvents, getEventBySlug, type EventDTO } from "@/lib/events";
import BookingForm from "@/components/BookingForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ISR: prebuild known events, revalidate every minute, and render any newly
// added event on demand.
export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const events = await getAllEvents();
    return events.map((e) => ({ slug: e.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: "Event Not Found | Breksa – AdvisED Global" };
  return {
    title: `${event.title} | Breksa Events`,
    description: event.overview,
  };
}

const META_ICONS: { icon: string; value: (e: EventDTO) => string }[] = [
  { icon: "/icons/pin.svg", value: (e) => e.venue },
  { icon: "/icons/calendar.svg", value: (e) => e.date },
  { icon: "/icons/clock.svg", value: (e) => e.time },
  { icon: "/icons/mode.svg", value: (e) => e.mode },
  { icon: "/icons/audience.svg", value: (e) => e.audience },
];

const EventDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <section className="event-detail">
      <div className="container">
        <Link href="/events" className="event-back">
          ← Back to all events
        </Link>

        <div className="event-detail-head">
          <span className="section-label">{event.organizer}</span>
          <h1>{event.title}</h1>
          <div className="event-meta-row">
            {META_ICONS.map((m) => (
              <span className="event-meta-item" key={m.icon}>
                <Image src={m.icon} alt="" width={16} height={16} style={{ width: "auto", height: "auto" }} />
                {m.value(event)}
              </span>
            ))}
          </div>
          <div className="event-tags">
            {event.tags.map((tag) => (
              <span className="event-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="event-layout">
          <div className="event-content">
            <div className="event-banner">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 900px) 100vw, 700px"
                priority
              />
            </div>

            <div className="event-block">
              <h2>About this event</h2>
              <p>{event.description}</p>
            </div>

            {event.agenda.length > 0 && (
              <div className="event-block">
                <h2>What we&apos;ll cover</h2>
                <ul className="event-agenda">
                  {event.agenda.map((item, i) => (
                    <li key={item}>
                      <span className="marker">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside>
            <div className="booking-card">
              <span className="price-tag">Free Registration</span>
              <h3>Reserve your spot</h3>
              <div className="booking-summary">
                <div className="booking-summary-item">
                  <div className="b-icon">
                    <Image src="/icons/calendar.svg" alt="" width={16} height={16} style={{ width: "auto", height: "auto" }} />
                  </div>
                  <div>
                    <div className="b-label">Date</div>
                    <div className="b-value">{event.date}</div>
                  </div>
                </div>
                <div className="booking-summary-item">
                  <div className="b-icon">
                    <Image src="/icons/clock.svg" alt="" width={16} height={16} style={{ width: "auto", height: "auto" }} />
                  </div>
                  <div>
                    <div className="b-label">Time</div>
                    <div className="b-value">{event.time}</div>
                  </div>
                </div>
                <div className="booking-summary-item">
                  <div className="b-icon">
                    <Image src="/icons/pin.svg" alt="" width={16} height={16} style={{ width: "auto", height: "auto" }} />
                  </div>
                  <div>
                    <div className="b-label">Venue</div>
                    <div className="b-value">{event.venue}</div>
                  </div>
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
          </aside>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
