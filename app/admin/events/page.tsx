import { asc } from "drizzle-orm";
import { db } from "@/lib/db";
import { events } from "@/database/schema";
import EventsTable from "@/components/admin/EventsTable";
import Button from "@/components/Button";

export default async function AdminEventsPage() {
  const rows = await db.select().from(events).orderBy(asc(events.date));

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="[font-family:var(--font-manrope)] text-[1.5rem] font-semibold text-ink mb-0">
          Events
        </h1>
        <Button href="/admin/events/new">
          + New Event
        </Button>
      </div>
      <EventsTable events={rows} />
    </>
  );
}
