"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "@/components/icons";
import { ADVISING_PROGRAM_SUMMARIES } from "@/lib/programs";
import {
  getHashFromHref,
  getPathFromHref,
  scrollToHashWhenReady,
} from "@/lib/scroll-to-hash";

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
      { label: "Why Choose Us", href: "/about#why-choose-us" },
      { label: "Our Advisors", href: "/about#team" },
    ],
  },
  {
    label: "Advising Program",
    href: "/programmes",
    children: [
      { label: "Programs overview", href: "/programmes" },
      ...ADVISING_PROGRAM_SUMMARIES.map((program) => ({
        label: program.title,
        href: program.href,
      })),
    ],
  },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Contact", href: "/contact" },
];

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
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        navRef.current?.contains(target) ||
        mobileMenuRef.current?.contains(target)
      ) {
        return;
      }
      setOpenDropdown(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const handleNavLinkClick =
    (href: string, closeMenu = false) =>
    (e: ReactMouseEvent<HTMLAnchorElement>) => {
      const path = getPathFromHref(href);
      const hash = getHashFromHref(href);

      if (closeMenu) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }

      if (path === pathname && hash) {
        e.preventDefault();
        window.history.pushState(null, "", href);
        scrollToHashWhenReady(hash);
      }
    };

  return (
    <>
      <nav ref={navRef} className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <Link href="/#top" className="brand" aria-label="Project IVY home">
            <Image className="logo-light" src="/logo-nav-light.png" alt="Project IVY" width={120} height={82} priority />
            <Image className="logo-dark" src="/logo-nav-dark.png" alt="Project IVY" width={120} height={82} priority />
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
                        <ChevronDown className="nav-chevron" />
                      </Link>
                    ) : (
                      <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                        {item.label}
                        <ChevronDown className="nav-chevron" />
                      </a>
                    )}
                    <ul className="nav-dropdown" role="menu">
                      {item.children?.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            className="nav-dropdown-link"
                            role="menuitem"
                            onClick={handleNavLinkClick(child.href)}
                          >
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
            <div className="nav-auth">
              <button type="button" className="nav-auth-btn nav-auth-btn--login">
                Log in
              </button>
              <button type="button" className="nav-auth-btn nav-auth-btn--signup">
                Sign up
              </button>
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

      <div
        ref={mobileMenuRef}
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-head">
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <Image className="logo-light" src="/logo-nav-light.png" alt="Project IVY" width={120} height={82} />
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
                  <Link href={item.href ?? "/"} onClick={handleNavLinkClick(item.href ?? "/", true)}>
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={key} className={openDropdown === mobileKey ? "open" : ""}>
                <div className="mobile-item-row">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mobile-parent-link"
                      onClick={handleNavLinkClick(item.href, true)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="mobile-parent-link">{item.label}</span>
                  )}
                  <button
                    type="button"
                    className="mobile-dropdown-toggle"
                    aria-expanded={openDropdown === mobileKey}
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() => toggleDropdown(mobileKey)}
                  >
                    <ChevronDown className="nav-chevron" />
                  </button>
                </div>
                <ul className="mobile-sub">
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={handleNavLinkClick(child.href, true)}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mobile-auth">
          <button type="button" className="nav-auth-btn nav-auth-btn--login">
            Log in
          </button>
          <button type="button" className="nav-auth-btn nav-auth-btn--signup">
            Sign up
          </button>
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
