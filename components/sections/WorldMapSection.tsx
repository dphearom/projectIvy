"use client";

import dynamic from "next/dynamic";

const WorldMapInner = dynamic(() => import("@/components/sections/WorldMapInner"), {
  ssr: false,
  loading: () => <div className="world-map-loading" aria-label="Loading map" />,
});

const WorldMapSection = () => (
  <section className="world-map">
    <div className="world-map-stage" aria-label="Interactive map of advisor and student university locations">
      <WorldMapInner />

      <div className="world-map-copy" data-reveal>
        <h2>Our global reach</h2>
        <p>
          Project IVY advisors bring experience from leading institutions worldwide &mdash; and
          help students pursue opportunities across the United States.
        </p>
      </div>
    </div>
  </section>
);

export default WorldMapSection;
