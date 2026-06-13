"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "What We Do" },
  { href: "/app", label: "Our App" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <Link href="/" className="nav-logo">
            <Image
              src="/brand_assets/logo.png"
              alt="Breksa AdvisED Global"
              width={45}
              height={44}
              priority
            />
          </Link>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link href="/about" className="btn btn-outline">
              Learn More
            </Link>
            <Link href="/events" className="btn btn-primary">
              Get Started
            </Link>
          </div>
          <button
            type="button"
            className={`hamburger${menuOpen ? " is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
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
