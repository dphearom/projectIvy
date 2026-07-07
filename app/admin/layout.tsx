import { eq } from "drizzle-orm";
import { requireRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { users } from "@/database/schema";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireRole("admin");

  const [user] = await db
    .select({ firstName: users.firstName, lastName: users.lastName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : "Admin";

  return (
    <div className="flex min-h-screen bg-ivory-2 max-[768px]:flex-col">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader userName={userName} />
        <div className="p-8 flex-1 max-[768px]:p-4">{children}</div>
      </div>
    </div>
  );
}
