import BookingForm from "@/components/BookingForm";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@/components/icons";
import type { EventDTO } from "@/lib/events";

export default function BookingCard({ event }: { event: EventDTO }) {
  return (
    <div className="sticky top-25 bg-paper border border-line rounded-(--radius) p-8 shadow-[0_24px_50px_-22px_rgba(19,35,63,0.15)]">
      <span className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-gold border border-[rgba(182,146,79,0.3)] rounded-full py-1 px-3 bg-[rgba(182,146,79,0.06)] inline-block mb-4">
        Free Registration
      </span>
      <h3 className="text-[1.5rem] text-ink mb-6">Reserve your spot</h3>
      <div className="flex flex-col gap-3.5 mb-6 pb-6 border-b border-line">
        <div className="flex items-start gap-3.5">
          <div className="size-9 flex-none rounded-[10px] bg-[rgba(182,146,79,0.08)] border border-[rgba(182,146,79,0.2)] flex items-center justify-center"><CalendarIcon /></div>
          <div>
            <div className="font-body text-[0.75rem] text-ink-soft uppercase tracking-[0.08em] font-semibold">Date</div>
            <div className="font-body text-[0.95rem] text-ink font-medium mt-0.5">{event.date}</div>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="size-9 flex-none rounded-[10px] bg-[rgba(182,146,79,0.08)] border border-[rgba(182,146,79,0.2)] flex items-center justify-center"><ClockIcon /></div>
          <div>
            <div className="font-body text-[0.75rem] text-ink-soft uppercase tracking-[0.08em] font-semibold">Time</div>
            <div className="font-body text-[0.95rem] text-ink font-medium mt-0.5">{event.time}</div>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="size-9 flex-none rounded-[10px] bg-[rgba(182,146,79,0.08)] border border-[rgba(182,146,79,0.2)] flex items-center justify-center"><MapPinIcon /></div>
          <div>
            <div className="font-body text-[0.75rem] text-ink-soft uppercase tracking-[0.08em] font-semibold">Venue</div>
            <div className="font-body text-[0.95rem] text-ink font-medium mt-0.5">{event.venue}</div>
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
  );
}
