"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHashWhenReady } from "@/lib/scroll-to-hash";

const HashScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    scrollToHashWhenReady(hash);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash) scrollToHashWhenReady(hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
};

export default HashScrollHandler;
