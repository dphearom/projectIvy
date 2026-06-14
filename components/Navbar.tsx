"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#top",       label: "Home" },
  { href: "/#features",  label: "What We Do" },
  { href: "/events",     label: "Events" },
  { href: "/about",      label: "About" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap nav-inner">
          <Link href="/#top" className="brand" aria-label="Project IVY home">
            {/* cream wordmark — visible over dark hero */}
            <img className="logo-light" src="/logo-nav-light.png" alt="Project IVY" />
            {/* navy wordmark — visible when nav scrolled */}
            <img className="logo-dark" src="/logo-nav-dark.png" alt="Project IVY" />
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <Link className="link-ghost" href="/#cta">
              Learn More
            </Link>
            <Link href="/events" className="btn btn-gold">
              Get Started <span className="arrow">→</span>
            </Link>
          </div>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/events" className="m-cta" onClick={() => setMenuOpen(false)}>
          Get Started →
        </Link>
      </div>
    </>
  );
};

export default Navbar;
