import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEvents, getEventBySlug, type EventDTO } from "@/lib/events";
import BookingCard from "@/components/BookingCard";
import Eyebrow from "@/components/Eyebrow";

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
    <section className="bg-cream pt-15 pb-25">
      <div className="container">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink-soft mb-9 transition-colors duration-300 hover:text-ink"
        >
          ← Back to all events
        </Link>

        <div className="mb-10">
          <Eyebrow className="text-gold mb-3">{event.organizer}</Eyebrow>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] text-ink mt-3 mb-5">{event.title}</h1>
          <div className="flex flex-wrap gap-4.5 mb-4.5">
            {META_ICONS.map((m) => (
              <span className="inline-flex items-center gap-1.5 text-[0.9rem] text-ink-soft" key={m.icon}>
                <Image src={m.icon} alt="" width={16} height={16} style={{ width: "auto", height: "auto" }} />
                {m.value(event)}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                className="font-body font-semibold text-[11px] tracking-[0.12em] uppercase text-gold border border-[rgba(182,146,79,0.3)] rounded-full py-1 px-3 bg-[rgba(182,146,79,0.06)]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_380px] gap-12 items-start max-[980px]:grid-cols-1">
          <div className="flex flex-col">
            <div className="relative aspect-[16/9] rounded-(--radius) overflow-hidden mb-10">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 900px) 100vw, 700px"
                priority
              />
            </div>

            <div className="py-8 border-t border-line">
              <h2 className="text-[1.6rem] text-ink mb-3.5">About this event</h2>
              <p className="text-[1.05rem] text-ink-soft leading-[1.7]">{event.description}</p>
            </div>

            {event.agenda.length > 0 && (
              <div className="py-8 border-t border-line">
                <h2 className="text-[1.6rem] text-ink mb-3.5">What we&apos;ll cover</h2>
                <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                  {event.agenda.map((item, i) => (
                    <li key={item} className="flex gap-4 items-start text-[1.02rem] text-ink">
                      <span className="flex-none w-7 h-7 rounded-full bg-[rgba(182,146,79,0.12)] border border-[rgba(182,146,79,0.3)] text-gold text-[0.78rem] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside>
            <BookingCard event={event} />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
