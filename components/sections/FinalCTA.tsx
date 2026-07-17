"use client";

import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import GrainyBackdrop from "@/components/GrainyBackdrop";
import { useTranslation } from "@/components/useTranslation";

// Dark grainy CTA band — same atmosphere pattern as VisionQuote and the hero sections.
const FinalCTA = () => {
  const { t } = useTranslation("shared.finalCta");

  return (
    <section className="relative overflow-hidden text-cream py-32.5 bg-(--ink-2)" id="about">
      <GrainyBackdrop gradientClassName="bg-[radial-gradient(120%_130%_at_50%_120%,var(--g2),var(--g1)_70%)]" />
      <div className="relative z-3 text-center max-w-230 mx-auto px-8">
        <Eyebrow center onNavy data-reveal>{t("eyebrow")}</Eyebrow>
        <h2
          className="mt-6.5 mb-7 text-[clamp(2.4rem,5vw,4.2rem)] tracking-[-0.01em] text-balance"
          data-reveal
          data-reveal-d="1"
        >
          {t("heading", "display")}
        </h2>
        <p className="text-[1.18rem] text-cream-soft max-w-[60ch] mx-auto mb-9.5" data-reveal data-reveal-d="2">
          {t("paragraph")}
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap" data-reveal data-reveal-d="3">
          <Button href="/contact" arrow>
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
