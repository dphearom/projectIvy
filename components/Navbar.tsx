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
    // Threshold of 24px prevents the navbar from flickering when the page loads at the very top.
    // { passive: true } tells the browser this listener won't call preventDefault — improves scroll perf.
    // CSS class `.nav.scrolled` handles the visual shrink + frosted-glass effect.
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open so the background doesn't scroll behind it.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`} id="nav">
        <div className="wrap nav-inner">
          <Link href="/#top" className="brand" aria-label="Project IVY home">
            {/* cream wordmark — visible over dark hero */}
            <img className="logo-light" src="/logo-nav-light.png" alt="Project IVY" />
            {/* navy wordmark — visible when nav scrolled to frosted-glass state */}
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
