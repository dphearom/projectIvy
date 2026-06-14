"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import type { EventDTO } from "@/lib/events";

export default function EventsGrid({ events }: { events: EventDTO[] }) {
  const [active, setActive] = useState<EventDTO | null>(null);

  return (
    <>
      <div className="ev-grid">
        {events.map((event, i) => (
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
