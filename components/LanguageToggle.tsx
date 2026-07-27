"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/i18n/language";
import { cn } from "@/lib/utils";

const LABEL: Record<Language, string> = { en: "ENG", km: "ខ្មែរ" };
const ORDER: Language[] = ["en", "km"];

type Props = {
  /** Mirrors Navbar's scrolled state so the toggle follows the same light/dark treatment as the nav links. */
  scrolled?: boolean;
  className?: string;
};

const LanguageToggle = ({ scrolled = false, className }: Props) => {
  const { language, setLanguage } = useLanguage();
  const activeIndex = ORDER.indexOf(language);

  return (
    <div
      role="group"
      aria-label="Select language"
      className={cn(
        "relative inline-grid grid-cols-2 items-center rounded-full border p-1 min-w-[7.75rem]",
        scrolled ? "border-line" : "border-[rgba(243,237,226,0.28)]",
        className,
      )}
    >
      {/* Sliding "liquid glass" thumb — one grid column wide, springs between the two positions. */}
      <span
        aria-hidden
        style={{ transform: `translateX(${activeIndex * 100}%) translateZ(0)` }}
        className={cn(
          "pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full",
          "bg-[linear-gradient(135deg,var(--gold-soft),var(--gold))]",
          "ring-1 ring-[rgba(255,255,255,0.22)]",
          "shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(138,111,63,0.28),0_6px_16px_-6px_rgba(184,150,90,0.5)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
          "motion-reduce:transition-none",
        )}
      >
        {/* top sheen */}
        <span className="absolute inset-x-1.5 top-0.5 h-2/5 rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent)]" />
      </span>

      {ORDER.map((lang) => {
        const isSelected = lang === language;
        return (
          <button
            key={lang}
            type="button"
            aria-pressed={isSelected}
            onClick={() => setLanguage(lang)}
            className={cn(
              "relative z-10 font-body text-[12px] font-semibold rounded-full inline-flex items-center justify-center w-full py-1.5 px-3.5 cursor-pointer whitespace-nowrap border-0 bg-transparent leading-none",
              "transition-colors duration-300",
              isSelected
                ? "text-navy-3"
                : scrolled
                  ? "text-ink-soft hover:text-gold-deep"
                  : "text-cream-soft hover:text-gold",
            )}
          >
            {LABEL[lang]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
