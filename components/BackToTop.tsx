"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/icons";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 480;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 size-12.5 rounded-full",
        "flex items-center justify-center cursor-pointer border border-transparent",
        "bg-gold text-navy-3 shadow-[0_10px_28px_-10px_rgba(184,150,90,0.7)]",
        "transition-[transform,translate,opacity,box-shadow] duration-300",
        "hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(184,150,90,0.75)]",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
      )}
    >
      <ArrowUp />
    </button>
  );
};

export default BackToTop;
