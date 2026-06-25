"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Mission", id: "mission" },
  { label: "Vision", id: "vision" },
  { label: "Who We Are", id: "who-we-are" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "Our Team", id: "team" },
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
