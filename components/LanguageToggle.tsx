"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/i18n/language";
import { cn } from "@/lib/utils";

const LABEL: Record<Language, string> = { en: "ENG", km: "KH" };
const OTHER: Record<Language, Language> = { en: "km", km: "en" };

type Props = {
  /** Mirrors Navbar's scrolled state so the toggle follows the same light/dark treatment as the nav links. */
  scrolled?: boolean;
  className?: string;
};

const LanguageToggle = ({ scrolled = false, className }: Props) => {
  const { language, setLanguage } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const other = OTHER[language];

  const expand = () => setExpanded(true);
  const collapse = () => setExpanded(false);

  const select = (next: Language) => {
    setLanguage(next);
    collapse();
  };

  return (
    <div
      role="group"
      aria-label="Select language"
      onMouseEnter={expand}
      onMouseLeave={collapse}
      onFocus={expand}
      onBlur={collapse}
      className={cn(
        "inline-flex items-center rounded-full border p-0.5",
        scrolled ? "border-line" : "border-[rgba(243,237,226,0.28)]",
        className,
      )}
    >
      {/* Currently selected language — always visible */}
      <button
        type="button"
        aria-pressed
        onClick={expand}
        className="font-body text-[12px] font-semibold rounded-full py-1.25 px-3 cursor-pointer whitespace-nowrap bg-gold text-navy-3 border-0"
      >
        {LABEL[language]}
      </button>

      {/* The other language — revealed on hover/focus, collapses again once picked */}
      <button
        type="button"
        aria-pressed={false}
        tabIndex={expanded ? 0 : -1}
        onClick={() => select(other)}
        className={cn(
          "font-body text-[12px] font-semibold rounded-full py-1.25 cursor-pointer whitespace-nowrap bg-transparent overflow-hidden min-w-0 border-0",
          "transition-[max-width,opacity,margin-left,padding-left,padding-right] duration-300 ease-[cubic-bezier(.2,.7,.2,1)]",
          scrolled ? "text-ink-soft hover:text-gold-deep" : "text-cream-soft hover:text-gold",
          expanded ? "max-w-14 opacity-100 ml-0.5 px-3" : "max-w-0 opacity-0 ml-0 px-0",
        )}
      >
        {LABEL[other]}
      </button>
    </div>
  );
};

export default LanguageToggle;
