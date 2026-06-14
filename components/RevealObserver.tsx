"use client";
// Mount this once per page (see layout.tsx or individual page files).
// It wires up scroll-triggered entrance animations for any element with [data-reveal].
// Use data-reveal-d="1|2|3" on sibling elements for staggered delay (CSS reads this attribute).

import { useEffect } from "react";

const RevealObserver = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in"); // CSS transition fires on .in — defined in globals.css
            obs.unobserve(e.target);      // fire-once: stop watching after the element animates in
          }
        }
      },
      // rootMargin bottom -32px means elements trigger slightly before they fully enter the viewport.
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null; // render-nothing component — exists only for its side effect
};

export default RevealObserver;
