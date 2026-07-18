"use client";

import { useState } from "react";
import { useTranslation } from "@/components/useTranslation";
import { cn } from "@/lib/utils";

const FounderMessage = () => {
  const [expanded, setExpanded] = useState(false);
  const { t, tRich, tArray } = useTranslation("home.founderMessage");
  const body = tArray("body", "display");

  return (
    <div className="w-full border border-[rgba(182,146,79,0.28)] rounded-(--radius) bg-[rgba(243,237,226,0.45)]">
      <button
        type="button"
        className={cn(
          "flex items-start justify-between gap-6 w-full text-left cursor-pointer border-none font-[inherit] bg-transparent",
          "p-[clamp(24px,3.5vw,36px)] transition-[background] duration-250",
          "hover:bg-[rgba(243,237,226,0.65)]",
          "max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:gap-4",
        )}
        aria-expanded={expanded}
        aria-controls="founder-message-body"
        onClick={() => setExpanded((open) => !open)}
      >
        <span className="flex-1 min-w-0">
          <h3 className="font-display not-italic text-[clamp(1.25rem,2vw,1.5rem)] tracking-[0.02em] uppercase text-navy mb-3">
            {t("heading", "display")}
          </h3>
          <p className="font-display italic text-[clamp(1.05rem,2vw,1.25rem)] leading-normal text-navy m-0">
            {t("tagline", "display")}
          </p>
        </span>
        <span
          className={cn(
            "flex-none inline-flex items-center gap-2 text-[0.88rem] font-semibold tracking-[0.02em] text-gold-deep whitespace-nowrap pt-1",
            "max-[980px]:pt-0 max-[980px]:justify-end",
          )}
        >
          {expanded ? t("showLess") : t("readMore")}
          <svg
            className={cn("transition-transform duration-300", expanded && "rotate-180")}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>

      {expanded && (
        <div id="founder-message-body" className="border-t border-[rgba(182,146,79,0.2)]">
          <div className="p-[clamp(20px,3vw,28px)_clamp(24px,3.5vw,36px)_clamp(28px,3.5vw,40px)]">
            {body.map((paragraph, i) => (
              <p key={i} className="font-display italic text-[1.02rem] leading-[1.72] text-ink mb-4.5">
                {paragraph}
              </p>
            ))}
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-ink mt-7 pt-6 border-t border-[rgba(182,146,79,0.25)] mb-0">
              {t("signatureClosing", "display")}
              <br />
              <strong className="not-italic font-semibold text-navy">{t("signatureName", "display")}</strong>
              <br />
              {tRich("signatureTitle", { ivy: (chunks) => <span className="ivy-brand">{chunks}</span> }, "display")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderMessage;
