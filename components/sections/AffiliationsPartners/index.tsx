"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

type School = { name: string; logo?: string };

const LOGO_STYLE: Record<string, React.CSSProperties> = {
  Lafayette: { maxHeight: 36, maxWidth: 120 },
  Kenyon: { maxHeight: 52, maxWidth: 52 },
  Bucknell: { maxHeight: 36, maxWidth: 120 },
  "Reed College": { maxHeight: 36, maxWidth: 120 },
  Harvard: { maxHeight: 36, maxWidth: 120 },
  Lehigh: { maxHeight: 36, maxWidth: 120 },
  Northwestern: { maxHeight: 36, maxWidth: 120 },
};

const ROW_1: School[] = [
  { name: "Harvard", logo: "harvard.svg" },
  { name: "Dartmouth", logo: "dartmouth.png" },
  { name: "Northwestern", logo: "northwestern.svg" },
  { name: "Georgia State", logo: "georgia-state.svg" },
  { name: "Lafayette", logo: "lafayette.png" },
  { name: "Lehigh", logo: "lehigh.png" },
  { name: "Tufts", logo: "tufts.png" },
  { name: "Kenyon", logo: "kenyon.webp" },
];

const ROW_2: School[] = [
  { name: "Asian University for Women", logo: "auw.png" },
  { name: "Babson", logo: "babson.svg" },
  { name: "Denison", logo: "denison.png" },
  { name: "Bucknell", logo: "bucknell.svg" },
  { name: "Aiglon", logo: "aiglon.png" },
  { name: "Taft", logo: "taft.png" },
  { name: "Syracuse", logo: "syracuse.svg" },
  { name: "Reed College", logo: "reed-college.png" },
];

const SchoolSlot = ({ school }: { school: School }) => (
  <div className="flex-none w-40 aspect-[2.4/1] rounded-[10px] border border-line bg-ivory-2 flex items-center justify-center px-4.5 py-3">
    {school.logo ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/images/logos/${school.logo}`}
        alt={school.name}
        width={160}
        height={60}
        loading="eager"
        decoding="sync"
        draggable={false}
        style={{ maxHeight: 60, maxWidth: 160, objectFit: "contain", ...LOGO_STYLE[school.name] }}
      />
    ) : (
      <span className="text-[0.72rem] font-semibold tracking-wider uppercase text-ink-soft text-center leading-[1.2]">
        {school.name}
      </span>
    )}
  </div>
);

type MarqueeConfig = {
  distance: number;
  copies: number;
};

const MarqueeRow = ({
  schools,
  duration,
  reverse = false,
}: {
  schools: School[];
  duration: number;
  reverse?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState<MarqueeConfig | null>(null);

  const measure = useCallback(() => {
    const setEl = measureRef.current;
    const containerEl = containerRef.current;
    if (!setEl || !containerEl) return;

    const setWidth = setEl.getBoundingClientRect().width;
    const containerWidth = containerEl.getBoundingClientRect().width;
    if (setWidth <= 0 || containerWidth <= 0) return;

    // One repeat period in a flat flex row = set width + one inter-item gap.
    const gap = parseFloat(getComputedStyle(setEl).columnGap || getComputedStyle(setEl).gap || "0");
    const period = setWidth + gap;

    const copies = Math.max(3, Math.ceil(containerWidth / period) + 2);
    setConfig({ distance: period, copies });
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure, schools]);

  useEffect(() => {
    const setEl = measureRef.current;
    const containerEl = containerRef.current;
    if (!setEl || !containerEl) return;

    const observer = new ResizeObserver(measure);
    observer.observe(setEl);
    observer.observe(containerEl);
    window.addEventListener("load", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", measure);
    };
  }, [measure, schools]);

  const trackStyle = {
    "--marquee-distance": `${config?.distance ?? 0}px`,
    "--marquee-duration": `${duration}s`,
    ...(config ? {} : { visibility: "hidden" as const }),
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-2.5 mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      {/* Hidden single-set ruler — period = width + one flex gap */}
      <div
        ref={measureRef}
        className="pointer-events-none absolute left-0 top-0 flex gap-4.5 opacity-0"
        aria-hidden
      >
        {schools.map((school) => (
          <SchoolSlot key={`measure-${school.name}`} school={school} />
        ))}
      </div>

      <div
        className={`logo-marquee-track flex w-max gap-4.5 ${
          reverse ? "logo-marquee-track--reverse" : "logo-marquee-track--forward"
        }`}
        style={trackStyle}
      >
        {Array.from({ length: config?.copies ?? 4 }, (_, copyIndex) =>
          schools.map((school, schoolIndex) => (
            <SchoolSlot
              key={`${copyIndex}-${schoolIndex}-${school.name}`}
              school={school}
            />
          )),
        )}
      </div>
    </div>
  );
};

const AffiliationsPartners = () => (
  <section className="bg-paper py-27.5 overflow-hidden">
    <div className="wrap">
      <div className="text-center max-w-170 mx-auto mb-12" data-reveal>
        <h2 className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em]">
          Experienced advisors from leading institutions
        </h2>
        <p className="mt-4.5 text-[1.05rem] leading-[1.65] text-ink-soft">
          Project IVY mentors bring firsthand experience from world-class universities and
          schools — guiding students with insight earned on the journey.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-4.5">
      <MarqueeRow schools={ROW_1} duration={38} />
      <MarqueeRow schools={ROW_2} duration={44} reverse />
    </div>
  </section>
);

export default AffiliationsPartners;
