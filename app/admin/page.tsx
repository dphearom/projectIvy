import { count } from "drizzle-orm";
import { db } from "@/lib/db";
import { events, eventBookings } from "@/database/schema";

export default async function AdminDashboard() {
  const [[eventCount], [bookingCount]] = await Promise.all([
    db.select({ value: count() }).from(events),
    db.select({ value: count() }).from(eventBookings),
  ]);

  const stats = [
    { label: "Total Events", value: eventCount?.value ?? 0 },
    { label: "Event Bookings", value: bookingCount?.value ?? 0 },
  ];

  return (
    <>
      <h1 className="admin-page-title">Dashboard</h1>
      <div className="admin-stats">
        {stats.map((stat) => (
          <div className="admin-stat-card" key={stat.label}>
            <span className="admin-stat-value">{stat.value}</span>
            <span className="admin-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
