import Link from "next/link";
import { unpublishEvent, publishEvent } from "@/app/actions/admin-events";
import { cn } from "@/lib/utils";

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
    return <p className="text-center text-ink-soft py-12">No events yet.</p>;
  }

  const btnCls =
    "text-[0.8rem] py-[0.3rem] px-[0.65rem] rounded-md no-underline border-none cursor-pointer transition-opacity duration-150 hover:opacity-85";
  const cellCls = (published: boolean) => cn("py-3 px-4 border-b border-[color-mix(in_srgb,var(--ink)_6%,transparent)] text-ink", !published && "opacity-55");

  return (
    <div className="overflow-x-auto bg-paper rounded-xl border border-[color-mix(in_srgb,var(--ink)_8%,transparent)]">
      <table className="w-full border-collapse text-[0.9rem]">
        <thead>
          <tr>
            <th className="text-left py-[0.85rem] px-4 font-semibold text-[0.8rem] uppercase tracking-[0.04em] text-ink-soft border-b border-[color-mix(in_srgb,var(--ink)_10%,transparent)]">
              Title
            </th>
            <th className="text-left py-[0.85rem] px-4 font-semibold text-[0.8rem] uppercase tracking-[0.04em] text-ink-soft border-b border-[color-mix(in_srgb,var(--ink)_10%,transparent)]">
              Date
            </th>
            <th className="text-left py-[0.85rem] px-4 font-semibold text-[0.8rem] uppercase tracking-[0.04em] text-ink-soft border-b border-[color-mix(in_srgb,var(--ink)_10%,transparent)]">
              Mode
            </th>
            <th className="text-left py-[0.85rem] px-4 font-semibold text-[0.8rem] uppercase tracking-[0.04em] text-ink-soft border-b border-[color-mix(in_srgb,var(--ink)_10%,transparent)]">
              Location
            </th>
            <th className="text-left py-[0.85rem] px-4 font-semibold text-[0.8rem] uppercase tracking-[0.04em] text-ink-soft border-b border-[color-mix(in_srgb,var(--ink)_10%,transparent)]">
              Status
            </th>
            <th className="text-left py-[0.85rem] px-4 font-semibold text-[0.8rem] uppercase tracking-[0.04em] text-ink-soft border-b border-[color-mix(in_srgb,var(--ink)_10%,transparent)]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="last:[&>td]:border-b-0">
              <td className={cellCls(event.published)}>{event.title}</td>
              <td className={cellCls(event.published)}>{event.date}</td>
              <td className={cellCls(event.published)}>{event.mode}</td>
              <td className={cellCls(event.published)}>{event.location}</td>
              <td className={cellCls(event.published)}>
                <span
                  className={cn(
                    "text-[0.75rem] font-semibold py-[0.2rem] px-2 rounded",
                    event.published ? "bg-[#e8f5e9] text-[#27ae60]" : "bg-[#f0f0f0] text-[#95a5a6]",
                  )}
                >
                  {event.published ? "Live" : "Unpublished"}
                </span>
              </td>
              <td className="py-3 px-4 border-b border-[color-mix(in_srgb,var(--ink)_6%,transparent)] text-ink flex gap-2">
                <Link
                  href={`/admin/events/${event.id}/edit`}
                  className={cn(btnCls, "bg-navy text-white")}
                >
                  Edit
                </Link>
                {event.published ? (
                  <form action={unpublishEvent} style={{ display: "inline" }}>
                    <input type="hidden" name="id" value={event.id} />
                    <button type="submit" className={cn(btnCls, "bg-[#95a5a6] text-white")}>
                      Unpublish
                    </button>
                  </form>
                ) : (
                  <form action={publishEvent} style={{ display: "inline" }}>
                    <input type="hidden" name="id" value={event.id} />
                    <button type="submit" className={cn(btnCls, "bg-[#27ae60] text-white")}>
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
