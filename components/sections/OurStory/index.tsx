"use client";

import Image from "next/image";
import { useTranslation } from "@/components/useTranslation";
import FounderMessage from "@/components/sections/FounderMessage";
import Eyebrow from "@/components/Eyebrow";
import "./styles.css";

const OurStory = () => {
  const { t, tRich } = useTranslation("home.founderStory");

  return (
    <section className="py-31 bg-cream" id="story">
      <div className="wrap">
        <div
          className="grid grid-cols-[0.86fr_1.14fr] gap-16 items-start mb-12 max-[980px]:grid-cols-1 max-[980px]:gap-10"
          data-reveal
        >
          {/* Photo column */}
          <div className="founder-photo max-[980px]:max-w-110" data-reveal>
            <Image
              src="/images/about/founder.jpg"
              alt="Somphors Tann, Founder & Program Director of Project IVY"
              width={540}
              height={680}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="absolute z-2 -left-5 bottom-7.5 bg-paper border border-line rounded-[14px] px-5.5 py-3.75 shadow-[0_26px_54px_-22px_rgba(19,35,63,0.4)]">
              <b className="font-display text-[1.3rem] text-ink block leading-[1.1]">
                {t("photoName", "display")}
              </b>
              <span className="text-[0.8rem] text-(--muted) tracking-[0.02em]">
                {tRich("photoRole", { ivy: (chunks) => <span className="ivy-brand">{chunks}</span> })}
              </span>
            </div>
          </div>

          {/* Bio column */}
          <div data-reveal data-reveal-d="2">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em] mb-5 text-balance">
              {t("heading", "display")}
            </h2>
            <p className="text-(--muted) text-[1.05rem] leading-[1.65] mb-4.5 max-w-[56ch]">
              {t("bio1")}
            </p>
            <p className="text-(--muted) text-[1.05rem] leading-[1.65] mb-4.5 max-w-[56ch]">
              {t("bio2")}
            </p>
            <p className="text-(--muted) text-[1.05rem] leading-[1.65] mb-0 max-w-[56ch]">
              {t("bio3")}
            </p>
          </div>
        </div>

        <div data-reveal data-reveal-d="3">
          <FounderMessage />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
