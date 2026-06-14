"use client";
import { useEffect, useState } from "react";

// Section IDs must match `id` attributes on the actual section elements in about/page.tsx.
const LINKS = [
  { label: "The Problem",  id: "problem" },
  { label: "Our Vision",   id: "vision"  },
  { label: "Values",       id: "mission" },
  { label: "Who We Serve", id: "serve"   },
  { label: "Our Story",    id: "story"   },
];

export default function AboutNav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // heroObs: shows/hides the subnav bar — fires when the hero section (#top) leaves the viewport.
    const hero = document.getElementById("top");

    const heroObs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0.15 }
    );
    if (hero) heroObs.observe(hero);

    // secObs: highlights the active nav link as the user scrolls through sections.
    // rootMargin "-15% 0px -75% 0px" fires when a section's top edge crosses
    // the 15% mark from the top of the screen (bottom 75% of viewport is ignored).
    const sectionEls = LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );
    sectionEls.forEach((el) => secObs.observe(el));

    return () => { heroObs.disconnect(); secObs.disconnect(); };
  }, []);

  // CSS uses `position: fixed` + `translateY(-100%)` hidden / `translateY(60px)` visible.
  // We avoid `position: sticky` because sticky elements still occupy layout space when
  // shifted off-screen via translateY, which bleeds a ghost background strip into the page.
  return (
    <nav
      className={`about-subnav${visible ? " about-subnav--visible" : ""}`}
      aria-label="Page sections"
    >
      <div className="about-subnav-inner">
        {LINKS.map(({ label, id }) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
