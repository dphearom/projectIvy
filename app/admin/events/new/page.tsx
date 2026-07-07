import EventForm from "@/components/admin/EventForm";

export default function NewEventPage() {
  return (
    <>
      <h1 className="[font-family:var(--font-manrope)] text-[1.5rem] font-semibold text-ink mb-6">
        Create Event
      </h1>
      <EventForm />
    </>
  );
}
