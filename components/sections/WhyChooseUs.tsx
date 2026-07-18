"use client";

import Eyebrow from "@/components/Eyebrow";
import { useTranslation } from "@/components/useTranslation";

const REASON_IDS = [
  "built-by-khmer-scholars",
  "small-selective-personal",
  "real-deliverables-guaranteed",
  "holistic-approach",
] as const;

const WhyChooseUs = () => {
  const { t, tRich } = useTranslation("about.whyChooseUs");

  return (
    <section className="py-30 bg-cream" id="why-choose-us">
      <div className="wrap">
        <div className="text-center max-w-180 mx-auto" data-reveal>
          <Eyebrow center>{t("eyebrow")}</Eyebrow>
          <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
            {tRich("heading", { ivy: (chunks) => <span className="ivy-brand">{chunks}</span> }, "display")}
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
          {REASON_IDS.map((id, i) => (
            <article
              className="bg-paper border border-line rounded-(--radius) py-8 px-7 transition-[transform,translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)]"
              key={id}
              data-reveal
              data-reveal-d={String((i % 2) + 1)}
            >
              <h3 className="text-[1.2rem] text-navy leading-[1.2]">
                {t(`reasons.${id}.area`, "display")}
              </h3>
              <p className="mt-3 text-[0.95rem] text-ink-soft leading-[1.6]">
                {t(`reasons.${id}.detail`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
