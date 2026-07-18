"use client";

import Eyebrow from "@/components/Eyebrow";
import { useTranslation } from "@/components/useTranslation";

const Mission = () => {
  const { t } = useTranslation("about.mission");

  return (
    <section className="py-30 bg-cream" id="mission">
      <div className="wrap">
        <div className="text-center max-w-180 mx-auto" data-reveal>
          <Eyebrow center>{t("eyebrow")}</Eyebrow>
          <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
            {t("heading", "display")}
          </h2>
          <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
            {t("paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
