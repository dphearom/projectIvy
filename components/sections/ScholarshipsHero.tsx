"use client";

import Eyebrow from "@/components/Eyebrow";
import HeroStage from "@/components/HeroStage";
import { PHOTO_READY, PLACEHOLDERS } from "@/lib/placeholders";
import { useTranslation } from "@/components/useTranslation";

const ScholarshipsHero = () => {
  const { t, tRich } = useTranslation("scholarships.hero");

  return (
    <HeroStage
      image={PLACEHOLDERS.SCHOLARSHIPS_HERO_BG}
      available={PHOTO_READY.has(PLACEHOLDERS.SCHOLARSHIPS_HERO_BG)}
      imagePosition="center 35%"
      className="min-h-[min(85vh,760px)]"
    >
      <div className="max-w-170 mx-auto mt-[clamp(7rem,26vh,13rem)]">
        <Eyebrow onNavy data-reveal>
          {t("eyebrow")}
        </Eyebrow>
        <h1
          className="text-[clamp(3.2rem,7.5vw,6.6rem)] leading-[0.97] tracking-[-0.01em] mt-6 text-balance"
          data-reveal
          data-reveal-d="1"
        >
          {tRich(
            "heading",
            { ivy: (chunks) => <span className="ivy-brand">{chunks}</span> },
            "display",
            "text-[clamp(2.4rem,5.6vw,5rem)]",
          )}
        </h1>
        <p
          className="mt-6.5 max-w-[42ch] mx-auto text-[1.18rem] leading-[1.62] text-cream-soft"
          data-reveal
          data-reveal-d="2"
        >
          {t("subtitle")}
        </p>
      </div>
    </HeroStage>
  );
};

export default ScholarshipsHero;
