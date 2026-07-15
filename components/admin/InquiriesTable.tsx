import { inquiryLabel } from "@/lib/inquiries";

interface InquiryRow {
  id: number;
  role: string;
  name: string;
  email: string;
  phone: string;
  childName: string | null;
  grade: string;
  school: string;
  inquiries: string[];
  createdAt: Date;
}

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(date);

const headCellCls =
  "text-left py-[0.85rem] px-4 font-semibold text-[0.8rem] uppercase tracking-[0.04em] text-ink-soft border-b border-[color-mix(in_srgb,var(--ink)_10%,transparent)]";
const cellCls =
  "py-3 px-4 border-b border-[color-mix(in_srgb,var(--ink)_6%,transparent)] text-ink align-top";

const InquiriesTable = ({ inquiries }: { inquiries: InquiryRow[] }) => {
  if (inquiries.length === 0) {
    return <p className="text-center text-ink-soft py-12">No inquiries yet.</p>;
  }

  return (
    <div className="overflow-x-auto bg-paper rounded-xl border border-[color-mix(in_srgb,var(--ink)_8%,transparent)]">
      <table className="w-full border-collapse text-[0.9rem]">
        <thead>
          <tr>
            <th className={headCellCls}>Submitted</th>
            <th className={headCellCls}>Contact</th>
            <th className={headCellCls}>Student</th>
            <th className={headCellCls}>School / Grade</th>
            <th className={headCellCls}>Inquiries</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((row) => (
            <tr key={row.id} className="last:[&>td]:border-b-0">
              <td className={cellCls}>{formatDate(row.createdAt)}</td>
              <td className={cellCls}>
                <div className="font-medium">{row.name}</div>
                <div className="text-ink-soft text-[0.85rem]">{row.email}</div>
                <div className="text-ink-soft text-[0.85rem]">{row.phone}</div>
                <span className="inline-block mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-gold-deep">
                  {row.role}
                </span>
              </td>
              <td className={cellCls}>{row.role === "parent" ? row.childName : "—"}</td>
              <td className={cellCls}>
                <div>{row.school}</div>
                <div className="text-ink-soft text-[0.85rem]">Grade {row.grade}</div>
              </td>
              <td className={cellCls}>
                {row.inquiries.length > 0 ? row.inquiries.map(inquiryLabel).join(", ") : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiriesTable;
