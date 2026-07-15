import { desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { consultationRequests } from "@/database/schema";
import InquiriesTable from "@/components/admin/InquiriesTable";

export default async function AdminInquiriesPage() {
  const rows = await db
    .select()
    .from(consultationRequests)
    .orderBy(desc(consultationRequests.createdAt));

  return (
    <>
      <h1 className="[font-family:var(--font-manrope)] text-[1.5rem] font-semibold text-ink mb-6">
        Inquiries
      </h1>
      <InquiriesTable inquiries={rows} />
    </>
  );
}
