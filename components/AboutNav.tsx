"use client";
import { useEffect, useState, type MouseEvent } from "react";
import { scrollToHashWhenReady } from "@/lib/scroll-to-hash";

const LINKS = [
  { label: "Mission", id: "mission" },
  { label: "Vision", id: "vision" },
  { label: "Who We Are", id: "who-we-are" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "Our Advisors", id: "team" },
];

export default function AboutNav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");

    const heroObs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0.15 }
    );
    if (hero) heroObs.observe(hero);

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

  const handleSectionClick = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    scrollToHashWhenReady(`#${id}`);
  };

  return (
    <nav
      className={`about-subnav${visible ? " about-subnav--visible" : ""}`}
      aria-label="Page sections"
    >
      <div className="about-subnav-inner">
        {LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={handleSectionClick(id)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
