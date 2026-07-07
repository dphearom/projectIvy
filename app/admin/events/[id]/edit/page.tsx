import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { events } from "@/database/schema";
import EventForm from "@/components/admin/EventForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditEventPage({ params }: PageProps) {
  const { id } = await params;
  const eventId = Number(id);
  if (Number.isNaN(eventId)) notFound();

  const [event] = await db
    .select()
    .from(events)
    .where(eq(events.id, eventId))
    .limit(1);

  if (!event) notFound();

  return (
    <>
      <h1 className="[font-family:var(--font-manrope)] text-[1.5rem] font-semibold text-ink mb-6">
        Edit Event
      </h1>
      <EventForm event={event} />
    </>
  );
}
