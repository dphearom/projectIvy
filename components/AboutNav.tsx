"use client";
import { useEffect, useState, type MouseEvent } from "react";
import { scrollToHashWhenReady } from "@/lib/scroll-to-hash";
import { cn } from "@/lib/utils";

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
      className={cn(
        "fixed top-0 left-0 right-0 z-40",
        "bg-[rgba(251,249,244,0.88)] backdrop-blur-[22px] backdrop-saturate-[140%]",
        "border-b border-[var(--line)] shadow-[0_4px_24px_-12px_rgba(14,23,41,0.1)]",
        "-translate-y-full opacity-0 pointer-events-none",
        "transition-[transform,opacity] duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)]",
        visible && "translate-y-[var(--nav-height-scroll)] opacity-100 pointer-events-auto",
      )}
      aria-label="Page sections"
    >
      <div className="flex items-center max-w-[var(--maxw)] mx-auto px-8 max-[680px]:px-2 overflow-x-auto scrollbar-hide">
        {LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "inline-flex items-center px-5 py-[15px] max-[680px]:px-3.5 max-[680px]:py-3.5",
              "font-body text-[13.5px] max-[680px]:text-[12.5px] font-medium tracking-[0.01em] whitespace-nowrap",
              "border-b-2 border-transparent transition-[color,border-color] duration-200",
              active === id
                ? "text-gold-deep border-gold"
                : "text-ink-soft hover:text-ink",
            )}
            onClick={handleSectionClick(id)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
