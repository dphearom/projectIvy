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
import { cn } from "@/lib/utils";

type NavChild = { href: string; label: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

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
      ...ADVISING_PROGRAM_SUMMARIES.map((p) => ({ label: p.title, href: p.href })),
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

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

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
          "transition-[background,box-shadow,border-color] duration-[350ms]",
          scrolled && [
            "bg-[rgba(248,247,244,0.95)]",
            "backdrop-blur-[28px] backdrop-saturate-[160%]",
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
            "relative z-[1] flex items-center gap-5 mx-auto px-8 max-w-[var(--maxw)]",
            "transition-[height] duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)]",
            scrolled ? "h-[var(--nav-height-scroll)]" : "h-[var(--nav-height)]",
          )}
        >
          {/* Brand */}
          <Link href="/#top" className="inline-flex items-center flex-1 leading-none" aria-label="Project IVY home">
            <Image
              src="/logo-nav-light.png"
              alt="Project IVY"
              width={120}
              height={82}
              priority
              className={cn(
                "block w-auto transition-[height] duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)]",
                scrolled ? "hidden" : "h-[50px]",
              )}
            />
            <Image
              src="/logo-nav-dark.png"
              alt="Project IVY"
              width={120}
              height={82}
              priority
              className={cn(
                "block w-auto transition-[height] duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)]",
                scrolled ? "h-[36px]" : "hidden",
              )}
            />
          </Link>

          {/* Desktop links */}
          <div className="flex-1 flex justify-center max-[1100px]:hidden">
            <ul className="flex items-center flex-nowrap gap-[10px] list-none m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const key = item.label;
                const active = isActive(pathname, item.href);
                const hasChildren = Boolean(item.children?.length);
                const isOpen = openDropdown === key;

                const linkCls = cn(
                  "inline-flex items-center gap-[6px] relative",
                  "font-body text-[14.5px] font-medium leading-none whitespace-nowrap",
                  "py-[18px] px-3 cursor-pointer",
                  "transition-colors duration-[250ms]",
                  "after:content-[''] after:absolute after:left-[10px] after:right-[10px] after:bottom-[10px]",
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
                        {item.label}
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
                      {item.label}
                      <ChevronDown className="flex-none mt-[1px] opacity-75" />
                    </Link>

                    <ul
                      role="menu"
                      className={cn(
                        "absolute top-[calc(100%+2px)] left-0 z-[60]",
                        "min-w-[280px] w-max max-w-[380px]",
                        "list-none m-0 p-3",
                        "bg-paper border border-[var(--line)] rounded-[var(--radius)]",
                        "shadow-[0_20px_50px_-24px_rgba(14,23,41,0.28)]",
                        "opacity-0 invisible pointer-events-none",
                        "transition-[opacity,visibility] duration-[200ms]",
                        "group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto",
                        isOpen && "opacity-100 visible pointer-events-auto",
                      )}
                    >
                      {item.children?.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-3 mb-[2px] rounded-[10px] font-body text-[14px] leading-[1.45] text-ink-soft transition-[background-color,color] duration-200 hover:bg-ivory hover:text-navy"
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

          {/* Right: auth + hamburger */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <div className="flex items-center gap-[10px] max-[1100px]:hidden">
              <button
                type="button"
                className={cn(
                  "font-body text-[14px] font-semibold rounded-full cursor-pointer bg-transparent",
                  "py-[9px] px-[18px] border transition-[color,border-color] duration-[250ms]",
                  scrolled
                    ? "text-ink-soft border-[var(--line)] hover:text-gold-deep hover:border-[rgba(184,150,90,0.45)]"
                    : "text-cream-soft border-[rgba(243,237,226,0.28)] hover:text-gold-soft hover:border-[rgba(184,150,90,0.45)]",
                )}
              >
                Log in
              </button>
              <button
                type="button"
                className="font-body text-[14px] font-semibold rounded-full cursor-pointer py-[9px] px-[18px] border border-transparent bg-gold text-navy-3 shadow-[0_8px_24px_-12px_rgba(184,150,90,0.65)] transition-[background-color,transform] duration-[250ms] hover:bg-gold-soft hover:-translate-y-px"
              >
                Sign up
              </button>
            </div>

            <button
              type="button"
              className="hidden max-[1100px]:flex w-[42px] h-[42px] p-0 border-none bg-transparent cursor-pointer flex-col items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={cn("block w-[22px] h-[2px] mx-auto my-[5px] rounded-sm transition-[transform,opacity,background] duration-300", scrolled ? "bg-navy" : "bg-cream", menuOpen && "translate-y-[7px] rotate-45")} />
              <span className={cn("block w-[22px] h-[2px] mx-auto my-[5px] rounded-sm transition-[transform,opacity,background] duration-300", scrolled ? "bg-navy" : "bg-cream", menuOpen && "opacity-0")} />
              <span className={cn("block w-[22px] h-[2px] mx-auto my-[5px] rounded-sm transition-[transform,opacity,background] duration-300", scrolled ? "bg-navy" : "bg-cream", menuOpen && "-translate-y-[7px] -rotate-45")} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[49]",
          "w-[min(360px,88vw)] bg-[var(--ink-2)] text-cream",
          "overflow-y-auto py-5 pb-8",
          "shadow-[-8px_0_40px_rgba(0,0,0,0.35)]",
          "translate-x-full transition-transform duration-[400ms] ease-[cubic-bezier(.2,.7,.2,1)]",
          menuOpen && "translate-x-0",
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 pb-[18px] border-b border-[var(--line-light)]">
          <Link href="/" className="inline-flex items-center leading-none" onClick={() => setMenuOpen(false)}>
            <Image src="/logo-nav-light.png" alt="Project IVY" width={120} height={82} className="block h-[40px] w-auto" />
          </Link>
          <button
            type="button"
            className="w-[40px] h-[40px] border border-[var(--line-light)] rounded-full bg-transparent text-cream text-[24px] leading-none cursor-pointer"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="list-none m-0 pt-3 p-0">
          {NAV_ITEMS.map((item) => {
            const key = item.label;
            const mobileKey = `mobile-${key}`;
            const hasChildren = Boolean(item.children?.length);
            const isMobileOpen = openDropdown === mobileKey;

            const mobileLinkCls =
              "flex items-center justify-between w-full px-7 py-[14px] font-display text-[1.35rem] font-semibold text-cream bg-transparent border-none cursor-pointer text-left transition-colors duration-[250ms] hover:text-gold";

            if (!hasChildren) {
              return (
                <li key={key}>
                  <Link
                    href={item.href ?? "/"}
                    className={mobileLinkCls}
                    onClick={handleNavLinkClick(item.href ?? "/", true)}
                  >
                    {item.label}
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
                      className="flex-1 px-7 py-[14px] font-display text-[1.35rem] font-semibold text-cream transition-colors duration-[250ms] hover:text-gold"
                      onClick={handleNavLinkClick(item.href, true)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="flex-1 px-7 py-[14px] font-display text-[1.35rem] font-semibold text-cream">
                      {item.label}
                    </span>
                  )}
                  <button
                    type="button"
                    className="p-2 mr-5 bg-transparent border-none cursor-pointer text-cream"
                    aria-expanded={isMobileOpen}
                    aria-label={`Toggle ${item.label} submenu`}
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
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-[10px] mt-6 pt-5 px-7 border-t border-[var(--line-light)]">
          <button type="button" className="w-full font-body text-[14px] font-semibold rounded-full cursor-pointer py-[14px] px-[18px] border border-[var(--line-light)] text-cream-soft bg-transparent text-center">
            Log in
          </button>
          <button type="button" className="w-full font-body text-[14px] font-semibold rounded-full cursor-pointer py-[14px] px-[18px] border border-transparent bg-gold text-navy-3 text-center">
            Sign up
          </button>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[48] border-none p-0 bg-[rgba(8,15,30,0.55)] cursor-pointer"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
