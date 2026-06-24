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
      <div className="admin-page-header">
        <h1 className="admin-page-title">Events</h1>
        <Link href="/admin/events/new" className="btn btn-gold">
          + New Event
        </Link>
      </div>
      <EventsTable events={rows} />
    </>
  );
}
