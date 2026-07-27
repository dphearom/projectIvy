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
        "group fixed bottom-6 right-6 z-40 size-12.5 rounded-full overflow-hidden",
        "appearance-none border-0 outline-none flex items-center justify-center cursor-pointer text-navy-3",
        // liquid-glass gold: translucent gradient + blur + glossy ring/shadows
        "bg-[linear-gradient(135deg,rgba(205,176,133,0.92),rgba(184,150,90,0.96))] backdrop-blur-md",
        "ring-1 ring-[rgba(255,255,255,0.25)]",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(138,111,63,0.22),0_10px_28px_-10px_rgba(184,150,90,0.55)]",
        "transition-[transform,translate,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.4,0.5,1)]",
        "hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(138,111,63,0.22),0_18px_38px_-12px_rgba(184,150,90,0.65)]",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
      )}
    >
      {/* top sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-2 top-1 h-2/5 rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.38),transparent)]"
      />
      <span className="relative flex">
        <ArrowUp />
      </span>
    </button>
  );
};

export default BackToTop;
