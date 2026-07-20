"use client";

import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import HeroStage from "@/components/HeroStage";
import { useTranslation } from "@/components/useTranslation";
import { PHOTO_READY, PLACEHOLDERS } from "@/lib/placeholders";

const AboutHero = () => {
  const { t, tRich } = useTranslation("about.hero");

  return (
    <HeroStage
      image={PLACEHOLDERS.ABOUT_HERO_BG}
      available={PHOTO_READY.has(PLACEHOLDERS.ABOUT_HERO_BG)}
      imagePosition="center 30%"
      className="min-h-[min(72vh,640px)]"
    >
      <div className="max-w-170 mx-auto">
        <Eyebrow onNavy data-reveal>
          {tRich("eyebrow", { ivy: (chunks) => <span className="ivy-brand">{chunks}</span> })}
        </Eyebrow>
        <h1
          className="text-[clamp(3.2rem,7.5vw,6.6rem)] leading-[0.97] tracking-[-0.01em] mt-6 text-balance [&_em]:text-gold-soft [&_em]:font-semibold"
          data-reveal
          data-reveal-d="1"
        >
          {tRich(
            "heading",
            {
              em: (chunks) => <em>{chunks}</em>,
              nowrap: (chunks) => <span className="whitespace-nowrap">{chunks}</span>,
            },
            "display",
            "text-[clamp(2.4rem,5.6vw,5rem)] leading-[1.4] tracking-normal",
          )}
        </h1>
        <p
          className="mt-6.5 max-w-[42ch] mx-auto text-[1.18rem] leading-[1.62] text-cream-soft"
          data-reveal
          data-reveal-d="2"
        >
          {tRich("subtitle", { nowrap: (chunks) => <span className="whitespace-nowrap">{chunks}</span> })}
        </p>
        <div className="flex justify-center mt-9" data-reveal data-reveal-d="3">
          <Button href="#mission" arrow>
            {t("cta")}
          </Button>
        </div>
      </div>
    </HeroStage>
  );
};

export default AboutHero;
