import { count } from "drizzle-orm";
import { db } from "@/lib/db";
import { events, eventBookings, consultationRequests } from "@/database/schema";

export default async function AdminDashboard() {
  const [[eventCount], [bookingCount], [inquiryCount]] = await Promise.all([
    db.select({ value: count() }).from(events),
    db.select({ value: count() }).from(eventBookings),
    db.select({ value: count() }).from(consultationRequests),
  ]);

  const stats = [
    { label: "Total Events", value: eventCount?.value ?? 0 },
    { label: "Event Bookings", value: bookingCount?.value ?? 0 },
    { label: "Inquiries", value: inquiryCount?.value ?? 0 },
  ];

  return (
    <>
      <h1 className="[font-family:var(--font-manrope)] text-[1.5rem] font-semibold text-ink mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {stats.map((stat) => (
          <div
            className="bg-paper rounded-xl p-6 flex flex-col gap-1 border border-[color-mix(in_srgb,var(--ink)_8%,transparent)]"
            key={stat.label}
          >
            <span className="text-[2rem] font-bold text-navy">{stat.value}</span>
            <span className="text-[0.85rem] text-ink-soft">{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
