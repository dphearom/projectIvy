"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/events", label: "Events", icon: "📅" },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-navy text-white py-6 flex flex-col shrink-0 max-[768px]:w-full max-[768px]:p-4">
      <div className="pt-0 pb-6 px-5 flex items-center gap-[0.6rem] border-b border-white/10 mb-4">
        <Image src="/images/brand/logo-nav-light.png" alt="Project IVY" width={80} height={55} />
        <span className="text-[0.65rem] font-semibold uppercase bg-gold text-navy py-[0.15rem] px-2 rounded tracking-[0.05em]">
          Admin
        </span>
      </div>

      <nav className="flex flex-col gap-[0.2rem] px-3 max-[768px]:flex-row max-[768px]:overflow-x-auto">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-[0.6rem] py-[0.6rem] px-3 rounded-lg text-white/70 text-[0.9rem] no-underline transition-all duration-150 hover:text-white hover:bg-white/8",
                active && "text-white bg-white/12 font-medium",
              )}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
