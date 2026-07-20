"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/i18n/language";
import { cn } from "@/lib/utils";

const LABEL: Record<Language, string> = { en: "ENG", km: "ខ្មែរ" };

type Props = {
  /** Mirrors Navbar's scrolled state so the toggle follows the same light/dark treatment as the nav links. */
  scrolled?: boolean;
  className?: string;
};

const LanguageToggle = ({ scrolled = false, className }: Props) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Select language"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5",
        scrolled ? "border-line" : "border-[rgba(243,237,226,0.28)]",
        className,
      )}
    >
      {(["en", "km"] as Language[]).map((lang) => {
        const isSelected = lang === language;
        return (
          <button
            key={lang}
            type="button"
            aria-pressed={isSelected}
            onClick={() => setLanguage(lang)}
            className={cn(
              "font-body text-[12px] font-semibold rounded-full py-1.25 px-3 cursor-pointer whitespace-nowrap border-0",
              isSelected
                ? "bg-gold text-navy-3"
                : cn(
                    "bg-transparent",
                    scrolled ? "text-ink-soft hover:text-gold-deep" : "text-cream-soft hover:text-gold",
                  ),
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
