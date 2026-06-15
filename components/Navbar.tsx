"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavChild = { href: string; label: string };

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "Mission", href: "/about#mission" },
      { label: "Vision", href: "/about#vision" },
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Our Team", href: "/about#team" },
      { label: "Success Stories", href: "/about#stories" },
    ],
  },
  {
    label: "Consulting program",
    href: "/programmes",
    children: [
      { label: "Overview of consulting roadmap", href: "/programmes" },
      { label: "Grade 9 Counseling Program", href: "/programmes#grade-9" },
      { label: "Grade 10 Counseling Program", href: "/programmes#grade-10" },
      { label: "Grade 11 Counseling Program", href: "/programmes#grade-11" },
      { label: "Grade 12 Counseling Program", href: "/programmes#grade-12" },
    ],
  },
  {
    label: "Events & Information",
    href: "/events",
    children: [
      { label: "Upcoming Project Ivy Events", href: "/events" },
      {
        label: "Project Ivy's consulting and event calendar",
        href: "/events#calendar",
      },
      { label: "Update study abroad trends", href: "/news" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const LANGUAGES = [
  { code: "km", label: "ខ្មែរ", href: "#" },
  { code: "en", label: "English", href: "/" },
];

const ChevronDown = () => (
  <svg className="nav-chevron" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
    <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="nav-globe" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const isActive = (pathname: string, href?: string) => {
  if (!href || href === "#") return false;
  const base = href.split("#")[0] || "/";
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
};

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenDropdown(null);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((current) => (current === key ? null : key));
    setLangOpen(false);
  };

  return (
    <>
      <nav ref={navRef} className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <Link href="/#top" className="brand" aria-label="Project IVY home">
            <img className="logo-light" src="/logo-nav-light.png" alt="Project IVY" />
            <img className="logo-dark" src="/logo-nav-dark.png" alt="Project IVY" />
          </Link>

          <div className="nav-menu">
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => {
                const key = item.label;
                const active = isActive(pathname, item.href);
                const hasChildren = Boolean(item.children?.length);

                if (!hasChildren) {
                  return (
                    <li key={key} className={`nav-item${active ? " active" : ""}`}>
                      <Link href={item.href ?? "/"} className="nav-link">
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li
                    key={key}
                    className={`nav-item has-dropdown${active ? " active" : ""}${openDropdown === key ? " open" : ""
                      }`}
                  >
                    {item.href ? (
                      <Link href={item.href} className="nav-link">
                        {item.label}
                        <ChevronDown />
                      </Link>
                    ) : (
                      <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                        {item.label}
                        <ChevronDown />
                      </a>
                    )}
                    <ul className="nav-dropdown" role="menu">
                      {item.children?.map((child) => (
                        <li key={child.href} role="none">
                          <Link href={child.href} className="nav-dropdown-link" role="menuitem">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav-right">
            <div className={`nav-lang${langOpen ? " open" : ""}`}>
              <button
                type="button"
                className="nav-lang-trigger"
                aria-expanded={langOpen}
                aria-haspopup="menu"
                onClick={() => {
                  setLangOpen((o) => !o);
                  setOpenDropdown(null);
                }}
              >
                <GlobeIcon />
                <span>en</span>
                <ChevronDown />
              </button>
              <ul className="nav-dropdown nav-lang-menu" role="menu">
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang.code}
                    role="none"
                    className={lang.code === "en" ? "active" : undefined}
                  >
                    <Link href={lang.href} className="nav-dropdown-link" role="menuitem">
                      {lang.label}
                    </Link>
                  </li>
                ))}
              </ul>
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
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-head">
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img className="logo-light" src="/logo-nav-light.png" alt="Project IVY" />
          </Link>
          <button
            type="button"
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="mobile-list">
          {NAV_ITEMS.map((item) => {
            const key = item.label;
            const mobileKey = `mobile-${key}`;
            const hasChildren = Boolean(item.children?.length);

            if (!hasChildren) {
              return (
                <li key={key}>
                  <Link href={item.href ?? "/"} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={key} className={openDropdown === mobileKey ? "open" : ""}>
                <button
                  type="button"
                  className="mobile-trigger"
                  aria-expanded={openDropdown === mobileKey}
                  onClick={() => toggleDropdown(mobileKey)}
                >
                  {item.label}
                  <ChevronDown />
                </button>
                <ul className="mobile-sub">
                  {item.href && (
                    <li>
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  )}
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={() => setMenuOpen(false)}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mobile-lang">
          <span>Language</span>
          <div className="mobile-lang-links">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang.code}
                href={lang.href}
                className={lang.code === "en" ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="mobile-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
