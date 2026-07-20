"use client";

import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import DataTable from "@/components/admin/DataTable";
import EventDetailDialog, { type EventDetailRow } from "@/components/admin/EventDetailDialog";
import { Badge } from "@/components/ui/badge";

const filterSelectCls =
  "h-[2.6rem] py-[0.65rem] pl-[0.85rem] pr-9 border border-[color-mix(in_srgb,var(--ink)_15%,transparent)] rounded-lg text-[0.9rem] bg-paper text-ink transition-colors duration-150 outline-none focus:border-gold appearance-none";

const columns: ColumnDef<EventDetailRow, unknown>[] = [
  {
    id: "title",
    header: "Title",
    accessorFn: (row) => `${row.title} ${row.location} ${row.mode}`,
    cell: ({ row }) => row.original.title,
  },
  {
    id: "date",
    header: "Date",
    accessorFn: (row) => row.date,
    enableGlobalFilter: false,
  },
  {
    id: "mode",
    header: "Mode",
    accessorFn: (row) => row.mode,
    enableGlobalFilter: false,
  },
  {
    id: "location",
    header: "Location",
    accessorFn: (row) => row.location,
    enableGlobalFilter: false,
  },
  {
    id: "published",
    header: "Status",
    accessorFn: (row) => (row.published ? "live" : "unpublished"),
    filterFn: "equalsString",
    enableGlobalFilter: false,
    cell: ({ row }) => (
      <Badge variant={row.original.published ? "default" : "secondary"}>
        {row.original.published ? "Live" : "Unpublished"}
      </Badge>
    ),
  },
];

const EventsTable = ({ events }: { events: EventDetailRow[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = events.find((row) => row.id === selectedId) ?? null;

  return (
    <>
      <DataTable
        columns={columns}
        data={events}
        onRowClick={(row) => setSelectedId(row.id)}
        rowClassName={(row) => (row.published ? "" : "opacity-55")}
        searchPlaceholder="Search title, location, mode…"
        emptyMessage="No events yet."
        filterSlot={(table) => {
          const value = (table.getColumn("published")?.getFilterValue() as string) ?? "all";
          return (
            <div className="relative">
              <select
                value={value}
                onChange={(e) => table.getColumn("published")?.setFilterValue(e.target.value === "all" ? undefined : e.target.value)}
                className={filterSelectCls}
              >
                <option value="all">All statuses</option>
                <option value="live">Live</option>
                <option value="unpublished">Unpublished</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-ink-soft" />
            </div>
          );
        }}
      />
      <EventDetailDialog key={selectedId ?? "closed"} event={selected} onClose={() => setSelectedId(null)} />
    </>
  );
};

export default EventsTable;
