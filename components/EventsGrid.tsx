"use client";
// This wrapper exists so UpcomingEvents (a server component) doesn't need "use client".
// UpcomingEvents fetches events from the DB; EventsGrid owns the modal open/close state.

import { useState } from "react";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import type { EventDTO } from "@/lib/events"; // `import type` keeps lib/events off the client bundle

export default function EventsGrid({ events }: { events: EventDTO[] }) {
  const [active, setActive] = useState<EventDTO | null>(null);

  return (
    <>
      <div className="mt-15 grid grid-cols-3 gap-6.5 max-[980px]:grid-cols-2 max-[980px]:max-w-115 max-[980px]:mx-auto max-[680px]:grid-cols-1">
        {events.map((event, i) => (
          // data-reveal-d cycles 1→2→3 per card, creating a staggered entrance animation.
          // RevealObserver adds class "in" when each card scrolls into view.
          <div key={event.slug} data-reveal data-reveal-d={String((i % 3) + 1)}>
            <EventCard
              {...event}
              onClick={() => setActive(event)}
            />
          </div>
        ))}
      </div>
      {active && <EventModal event={active} onClose={() => setActive(null)} />}
    </>
  );
}
