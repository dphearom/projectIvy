"use client";

import Eyebrow from "@/components/Eyebrow";
import GrainyBackdrop from "@/components/GrainyBackdrop";
import { useTranslation } from "@/components/useTranslation";

const VisionQuote = () => {
  const { t } = useTranslation("about.vision");

  return (
    <section className="relative overflow-hidden text-cream py-28 bg-(--ink-2)" id="vision">
      <GrainyBackdrop gradientClassName="bg-[radial-gradient(120%_130%_at_50%_0%,var(--g2),var(--g1)_72%)]" />
      <div className="relative z-3 max-w-250 mx-auto px-8 text-center">
        <span className="font-display text-[5rem] leading-[0.5] text-gold-soft opacity-60 block h-10.5" data-reveal>
          &ldquo;
        </span>
        <h2
          className="text-[clamp(2rem,4vw,3.3rem)] leading-[1.16] tracking-[-0.01em] mb-6.5 text-balance [&_em]:text-gold-soft"
          data-reveal
          data-reveal-d="1"
        >
          {t("quote", "display")}
        </h2>
        <Eyebrow center onNavy data-reveal data-reveal-d="2">
          {t("eyebrow")}
        </Eyebrow>
      </div>
    </section>
  );
};

export default VisionQuote;
