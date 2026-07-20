"use client";

import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import DataTable from "@/components/admin/DataTable";
import InquiryDetailDialog, { type InquiryDetailRow } from "@/components/admin/InquiryDetailDialog";
import { Badge } from "@/components/ui/badge";
import { inquiryLabel } from "@/lib/inquiries";

const filterSelectCls =
  "h-[2.6rem] py-[0.65rem] pl-[0.85rem] pr-9 border border-[color-mix(in_srgb,var(--ink)_15%,transparent)] rounded-lg text-[0.9rem] bg-paper text-ink transition-colors duration-150 outline-none focus:border-gold appearance-none";

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-[#f5e6c8] text-[#8a6d1d]",
  contacted: "bg-[#dce8f7] text-[#1d4f8a]",
  handled: "bg-[#dcefdc] text-[#1d6b3a]",
  archived: "bg-[color-mix(in_srgb,var(--ink)_10%,transparent)] text-ink-soft",
};

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(date);

const columns: ColumnDef<InquiryDetailRow, unknown>[] = [
  {
    id: "submitted",
    header: "Submitted",
    accessorFn: (row) => row.createdAt.toISOString(),
    enableGlobalFilter: false,
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    id: "contact",
    header: "Contact",
    accessorFn: (row) => `${row.name} ${row.email} ${row.phone}`,
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.name}</div>
        <div className="text-ink-soft text-[0.85rem]">{row.original.email}</div>
        <div className="text-ink-soft text-[0.85rem]">{row.original.phone}</div>
        <span className="inline-block mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-gold-deep">
          {row.original.role}
        </span>
      </div>
    ),
  },
  {
    id: "student",
    header: "Student",
    accessorFn: (row) => row.childName ?? "",
    cell: ({ row }) => (row.original.role === "parent" ? (row.original.childName ?? "—") : "—"),
  },
  {
    id: "school",
    header: "School / Grade",
    accessorFn: (row) => `${row.school} ${row.grade}`,
    cell: ({ row }) => (
      <div>
        <div>{row.original.school}</div>
        <div className="text-ink-soft text-[0.85rem]">Grade {row.original.grade}</div>
      </div>
    ),
  },
  {
    id: "inquiries",
    header: "Inquiries",
    accessorFn: (row) => row.inquiries.map(inquiryLabel).join(", "),
    cell: ({ row }) =>
      row.original.inquiries.length > 0 ? row.original.inquiries.map(inquiryLabel).join(", ") : "—",
  },
  {
    id: "status",
    header: "Status",
    accessorFn: (row) => row.status,
    filterFn: "equalsString",
    enableGlobalFilter: false,
    cell: ({ row }) => (
      <Badge variant="outline" className={STATUS_STYLES[row.original.status] ?? STATUS_STYLES.pending}>
        {row.original.status}
      </Badge>
    ),
  },
];

const InquiriesTable = ({ inquiries }: { inquiries: InquiryDetailRow[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = inquiries.find((row) => row.id === selectedId) ?? null;

  return (
    <>
      <DataTable
        columns={columns}
        data={inquiries}
        onRowClick={(row) => setSelectedId(row.id)}
        rowClassName={(row) => (row.status === "archived" ? "opacity-50" : "")}
        searchPlaceholder="Search name, email, phone, school…"
        emptyMessage="No inquiries yet."
        filterSlot={(table) => {
          const value = (table.getColumn("status")?.getFilterValue() as string) ?? "all";
          return (
            <div className="relative">
              <select
                value={value}
                onChange={(e) => table.getColumn("status")?.setFilterValue(e.target.value === "all" ? undefined : e.target.value)}
                className={filterSelectCls}
              >
                <option value="all">All statuses</option>
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="handled">Handled</option>
                <option value="archived">Archived</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-ink-soft" />
            </div>
          );
        }}
      />
      <InquiryDetailDialog key={selectedId ?? "closed"} inquiry={selected} onClose={() => setSelectedId(null)} />
    </>
  );
};

export default InquiriesTable;
