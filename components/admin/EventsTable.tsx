import Link from "next/link";
import { unpublishEvent, publishEvent } from "@/app/actions/admin-events";

interface EventRow {
  id: number;
  title: string;
  date: string;
  mode: string;
  location: string;
  published: boolean;
}

const EventsTable = ({ events }: { events: EventRow[] }) => {
  if (events.length === 0) {
    return <p className="admin-empty">No events yet.</p>;
  }

  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Mode</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className={event.published ? "" : "admin-table__row--muted"}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.mode}</td>
              <td>{event.location}</td>
              <td>
                <span className={`admin-badge${event.published ? " admin-badge--live" : " admin-badge--draft"}`}>
                  {event.published ? "Live" : "Unpublished"}
                </span>
              </td>
              <td className="admin-table__actions">
                <Link
                  href={`/admin/events/${event.id}/edit`}
                  className="admin-btn admin-btn--edit"
                >
                  Edit
                </Link>
                {event.published ? (
                  <form action={unpublishEvent} style={{ display: "inline" }}>
                    <input type="hidden" name="id" value={event.id} />
                    <button type="submit" className="admin-btn admin-btn--unpublish">
                      Unpublish
                    </button>
                  </form>
                ) : (
                  <form action={publishEvent} style={{ display: "inline" }}>
                    <input type="hidden" name="id" value={event.id} />
                    <button type="submit" className="admin-btn admin-btn--publish">
                      Publish
                    </button>
                  </form>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
