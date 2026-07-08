import Link from "next/link";
import { asc } from "drizzle-orm";
import { db } from "@/lib/db";
import { events } from "@/database/schema";
import EventsTable from "@/components/admin/EventsTable";

export default async function AdminEventsPage() {
  const rows = await db
    .select({
      id: events.id,
      title: events.title,
      date: events.date,
      mode: events.mode,
      location: events.location,
      published: events.published,
    })
    .from(events)
    .orderBy(asc(events.date));

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="[font-family:var(--font-manrope)] text-[1.5rem] font-semibold text-ink mb-0">
          Events
        </h1>
        <Link href="/admin/events/new" className="btn btn-gold">
          + New Event
        </Link>
      </div>
      <EventsTable events={rows} />
    </>
  );
}
