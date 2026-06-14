"use client";

import { useEffect } from "react";

const RevealObserver = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
};

export default RevealObserver;
