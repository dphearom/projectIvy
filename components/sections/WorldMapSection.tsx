"use client";

import dynamic from "next/dynamic";
import { useTranslation } from "@/components/useTranslation";

const WorldMapInner = dynamic(() => import("@/components/sections/WorldMapInner"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-navy-3" aria-label="Loading map" />,
});

const WorldMapCaption = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation("home.worldMap");

  return (
    <div className={className} data-reveal>
      <h2 className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em] text-cream">
        {t("heading", "display", "text-[clamp(1.5rem,2.6vw,2.1rem)]")}
      </h2>
      <p className="mt-3.5 text-[1.05rem] leading-[1.65] text-cream-soft max-w-[42ch]">
        {t("paragraph")}
      </p>
    </div>
  );
};

const WorldMapSection = () => (
  <section className="bg-navy-3 text-cream">
    <div
      className="relative w-full min-h-[clamp(420px,52vw,620px)] overflow-hidden"
      aria-label="Interactive map of advisor and student university locations"
    >
      <WorldMapInner />

      <WorldMapCaption className="hidden min-[641px]:block absolute z-3 left-[clamp(20px,5vw,72px)] bottom-[clamp(28px,6vw,64px)] max-w-[min(520px,calc(100%-40px))] p-[clamp(22px,3vw,32px)_clamp(24px,3.2vw,36px)] rounded-(--radius) bg-[rgba(14,23,41,0.78)] border border-[rgba(243,237,226,0.14)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)]" />
    </div>

    <WorldMapCaption className="min-[641px]:hidden py-9 px-6" />
  </section>
);

export default WorldMapSection;
