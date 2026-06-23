"use client";

import { useEffect } from "react";

const RevealObserver = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );

    const observe = (el: Element) => {
      if (!el.classList.contains("in")) io.observe(el);
    };

    document.querySelectorAll("[data-reveal]").forEach(observe);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.hasAttribute("data-reveal")) observe(node);
          node.querySelectorAll("[data-reveal]").forEach(observe);
        }
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
};

export default RevealObserver;
