"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "@/components/icons";
import LanguageToggle from "@/components/LanguageToggle";
import { useTranslation } from "@/components/useTranslation";
import { ADVISING_PROGRAM_SUMMARIES } from "@/lib/programs";
import {
  getHashFromHref,
  getPathFromHref,
  scrollToHashWhenReady,
} from "@/lib/scroll-to-hash";
import { cn } from "@/lib/utils";

/** `key` is a translation key under the `nav` namespace, or `program.<id>` to reuse that
 * program's title from `home.advisingPrograms.programs.<id>.title` instead of duplicating it. */
type NavChild = { href: string; key: string };
type NavItem = { key: string; href?: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/" },
  {
    key: "aboutUs",
    href: "/about",
    children: [
      { key: "mission", href: "/about#mission" },
      { key: "vision", href: "/about#vision" },
      { key: "whoWeAre", href: "/about#who-we-are" },
      { key: "whyChooseUs", href: "/about#why-choose-us" },
      { key: "ourAdvisors", href: "/about#team" },
    ],
  },
  {
    key: "advisingProgram",
    href: "/programmes",
    children: [
      { key: "programsOverview", href: "/programmes" },
      ...ADVISING_PROGRAM_SUMMARIES.map((p) => ({ key: `program.${p.id}`, href: p.href })),
    ],
  },
  { key: "scholarships", href: "/scholarships" },
  { key: "contact", href: "/contact" },
];

const isActive = (pathname: string, href?: string) => {
  if (!href || href === "#") return false;
  const base = href.split("#")[0] || "/";
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
};

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { t: tNav, tPlain: tNavPlain } = useTranslation("nav");
  const { t: tProgram, tPlain: tProgramPlain } = useTranslation("home.advisingPrograms");

  // A `program.<id>` key reuses that program's title from home.advisingPrograms instead of
  // duplicating the string under `nav` — keeps the two in sync as programs change.
  const navLabel = (key: string) =>
    key.startsWith("program.") ? tProgram(`programs.${key.slice(8)}.title`) : tNav(key);
  const navLabelPlain = (key: string) =>
    key.startsWith("program.") ? tProgramPlain(`programs.${key.slice(8)}.title`) : tNavPlain(key);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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

  const toggleDropdown = (key: string) =>
    setOpenDropdown((cur) => (cur === key ? null : key));

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
      {/* ── Desktop nav bar ── */}
      <nav
        ref={navRef}
        id="nav"
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "border-b border-transparent",
          "transition-[background,box-shadow,border-color] duration-350",
          scrolled && [
            "bg-[rgba(248,247,244,0.95)]",
            "backdrop-blur-[28px] backdrop-saturate-160",
            "border-[rgba(255,255,255,0.45)]",
            "shadow-[0_1px_0_rgba(27,36,54,0.07),0_8px_32px_-16px_rgba(14,23,41,0.14)]",
          ],
        )}
      >
        {scrolled && (
          <div
            aria-hidden
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.38] mix-blend-overlay"
            style={{ backgroundImage: GRAIN_SVG, backgroundSize: "160px 160px" }}
          />
        )}

        <div
          className={cn(
            "relative z-1 flex items-center gap-5 mx-auto px-8 max-w-(--maxw)",
            "transition-[height] duration-350 ease-[cubic-bezier(.2,.7,.2,1)]",
            scrolled ? "h-(--nav-height-scroll)" : "h-(--nav-height)",
          )}
        >
          {/* Brand */}
          <Link href="/#top" className="inline-flex items-center flex-1 leading-none" aria-label="Project IVY home">
            <Image
              src="/images/brand/logo-nav-light.png"
              alt="Project IVY"
              width={120}
              height={82}
              priority
              className={cn(
                "block w-auto transition-[height] duration-350 ease-[cubic-bezier(.2,.7,.2,1)]",
                scrolled ? "hidden" : "h-12.5",
              )}
            />
            <Image
              src="/images/brand/logo-nav-dark.png"
              alt="Project IVY"
              width={120}
              height={82}
              priority
              className={cn(
                "block w-auto transition-[height] duration-350 ease-[cubic-bezier(.2,.7,.2,1)]",
                scrolled ? "h-9" : "hidden",
              )}
            />
          </Link>

          {/* Desktop links */}
          <div className="flex-1 flex justify-center max-[1100px]:hidden">
            <ul className="flex items-center flex-nowrap gap-2.5 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const key = item.key;
                const active = isActive(pathname, item.href);
                const hasChildren = Boolean(item.children?.length);
                const isOpen = openDropdown === key;

                const linkCls = cn(
                  "inline-flex items-center gap-1.5 relative",
                  "font-body text-[14.5px] font-medium leading-none whitespace-nowrap",
                  "py-4.5 px-3 cursor-pointer",
                  "transition-colors duration-250",
                  "after:content-[''] after:absolute after:left-2.5 after:right-2.5 after:bottom-2.5",
                  "after:h-[1.5px] after:bg-gold after:origin-left after:transition-transform after:duration-300",
                  scrolled
                    ? ["text-ink-soft", "hover:text-gold-deep"]
                    : ["text-cream-soft", "hover:text-gold"],
                  active
                    ? [scrolled ? "text-gold-deep font-semibold" : "text-gold font-semibold", "after:scale-x-100"]
                    : "after:scale-x-0",
                );

                if (!hasChildren) {
                  return (
                    <li key={key}>
                      <Link href={item.href ?? "/"} className={linkCls}>
                        {navLabel(item.key)}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={key} className="relative group">
                    <Link
                      href={item.href ?? "/"}
                      className={cn(
                        linkCls,
                        "group-hover:after:scale-x-100",
                        scrolled ? "group-hover:text-gold-deep" : "group-hover:text-gold",
                        isOpen && "after:scale-x-100",
                      )}
                    >
                      {navLabel(item.key)}
                      <ChevronDown className="flex-none mt-px opacity-75" />
                    </Link>

                    <ul
                      role="menu"
                      className={cn(
                        "absolute top-[calc(100%+2px)] left-0 z-60",
                        "min-w-70 w-max max-w-95",
                        "list-none m-0 p-3",
                        "bg-paper border border-line rounded-(--radius)",
                        "shadow-[0_20px_50px_-24px_rgba(14,23,41,0.28)]",
                        "opacity-0 invisible pointer-events-none",
                        "transition-[opacity,visibility] duration-200",
                        "group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto",
                        isOpen && "opacity-100 visible pointer-events-auto",
                      )}
                    >
                      {item.children?.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-3 mb-0.5 rounded-[10px] font-body text-[14px] leading-[1.45] text-ink-soft transition-[background-color,color] duration-200 hover:bg-ivory hover:text-navy"
                            onClick={handleNavLinkClick(child.href)}
                          >
                            {navLabel(child.key)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: language toggle + hamburger */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <LanguageToggle scrolled={scrolled} />
            <button
              type="button"
              className="hidden max-[1100px]:flex w-10.5 h-10.5 p-0 border-none bg-transparent cursor-pointer flex-col items-center justify-center"
              aria-label={navLabelPlain("toggleMenu")}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={cn("block w-5.5 h-0.5 mx-auto my-1.25 rounded-sm transition-[transform,opacity,background] duration-300", scrolled ? "bg-navy" : "bg-cream", menuOpen && "translate-y-1.75 rotate-45")} />
              <span className={cn("block w-5.5 h-0.5 mx-auto my-1.25 rounded-sm transition-[transform,opacity,background] duration-300", scrolled ? "bg-navy" : "bg-cream", menuOpen && "opacity-0")} />
              <span className={cn("block w-5.5 h-0.5 mx-auto my-1.25 rounded-sm transition-[transform,opacity,background] duration-300", scrolled ? "bg-navy" : "bg-cream", menuOpen && "-translate-y-1.75 -rotate-45")} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-56",
          "w-[min(360px,88vw)] bg-(--ink-2) text-cream",
          "overflow-y-auto py-5 pb-8",
          "shadow-[-8px_0_40px_rgba(0,0,0,0.35)]",
          "translate-x-full transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)]",
          menuOpen && "translate-x-0",
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 pb-4.5 border-b border-line-light">
          <Link href="/" className="inline-flex items-center leading-none" onClick={() => setMenuOpen(false)}>
            <Image src="/images/brand/logo-nav-light.png" alt="Project IVY" width={120} height={82} className="block h-10 w-auto" />
          </Link>
          <button
            type="button"
            className="w-10 h-10 border border-line-light rounded-full bg-transparent text-cream text-[24px] leading-none cursor-pointer"
            aria-label={navLabelPlain("closeMenu")}
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="list-none m-0 pt-3 p-0">
          {NAV_ITEMS.map((item) => {
            const key = item.key;
            const mobileKey = `mobile-${key}`;
            const hasChildren = Boolean(item.children?.length);
            const isMobileOpen = openDropdown === mobileKey;

            const mobileLinkCls =
              "flex items-center justify-between w-full px-7 py-3.5 font-body text-[1.35rem] font-semibold text-cream bg-transparent border-none cursor-pointer text-left transition-colors duration-250 hover:text-gold";

            if (!hasChildren) {
              return (
                <li key={key}>
                  <Link
                    href={item.href ?? "/"}
                    className={mobileLinkCls}
                    onClick={handleNavLinkClick(item.href ?? "/", true)}
                  >
                    {navLabel(item.key)}
                  </Link>
                </li>
              );
            }

            return (
              <li key={key}>
                <div className="flex items-center justify-between w-full">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex-1 px-7 py-[14px] font-body text-[1.35rem] font-semibold text-cream transition-colors duration-[250ms] hover:text-gold"
                      onClick={handleNavLinkClick(item.href, true)}
                    >
                      {navLabel(item.key)}
                    </Link>
                  ) : (
                    <span className="flex-1 px-7 py-[14px] font-body text-[1.35rem] font-semibold text-cream">
                      {navLabel(item.key)}
                    </span>
                  )}
                  <button
                    type="button"
                    className="p-2 mr-5 bg-transparent border-none cursor-pointer text-cream"
                    aria-expanded={isMobileOpen}
                    aria-label={navLabelPlain(item.key)}
                    onClick={() => toggleDropdown(mobileKey)}
                  >
                    <ChevronDown className={cn("flex-none transition-transform duration-300", isMobileOpen && "rotate-180")} />
                  </button>
                </div>
                <ul className={cn("list-none m-0 p-0 pb-2 bg-[rgba(14,23,41,0.45)]", isMobileOpen ? "block" : "hidden")}>
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-7 py-3 pl-10 font-body text-[14.5px] text-cream-soft transition-[color,background-color] duration-200 hover:text-gold hover:bg-[rgba(184,150,90,0.08)]"
                        onClick={handleNavLinkClick(child.href, true)}
                      >
                        {navLabel(child.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-55 border-none p-0 bg-[rgba(8,15,30,0.55)] cursor-pointer"
          aria-label={navLabelPlain("closeMenu")}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
