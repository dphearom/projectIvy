"use client";

import { useTranslation } from "@/components/useTranslation";

const FeaturedNews = () => {
  const { t } = useTranslation("home.news");

  return (
    <section className="bg-ivory-2 py-27.5" id="news">
      <div className="wrap">
        <div className="text-center max-w-170 mx-auto" data-reveal>
          <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
            {t("heading", "display")}
          </h2>
        </div>

        <div
          className="bg-paper border border-line rounded-(--radius) overflow-hidden transition-[transform,translate,box-shadow,border-color] duration-350 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)] max-w-205 mx-auto mt-12"
          data-reveal
          data-reveal-d="1"
        >
          <div className="text-center py-12 px-8">
            <p className="text-2xl mb-2">📰</p>
            <h3 className="text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.3] text-navy mb-2">
              {t("title", "display")}
            </h3>
            <p className="mt-3.5 text-[1rem] leading-[1.65] text-ink-soft">
              {t("paragraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
