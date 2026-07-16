import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "@/components/icons";

const NAV_COLS = [
  {
    heading: "Programs",
    links: [
      { label: "Exploration Program", href: "/programmes#middle-school" },
      { label: "University Readiness", href: "/programmes#university-readiness" },
      { label: "University Application", href: "/programmes#university-application" },
      { label: "Graduate School Advising", href: "/programmes#graduate-school" },
      { label: "Scholarships", href: "/scholarships" },
      // { label: "Service & Camps", href: "/camps" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Events", href: "/events" },
      // { label: "Camps", href: "/camps" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Book a Consultation", href: "/contact" },
      { label: "Workshops & Events", href: "/events" },
      { label: "Partner With Us", href: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="relative z-1 bg-[#091226] text-[rgba(247,241,230,0.72)] pt-20 pb-9">
    <div className="wrap">
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 max-[960px]:grid-cols-2 max-[960px]:gap-8">

        {/* Brand */}
        <div className="max-[960px]:col-span-full">
          <Image
            src="/images/brand/logo-light.png"
            alt="Project IVY — Breksa AdvisED Global"
            width={1665}
            height={1304}
            className="w-40 h-auto mb-1.5"
          />
          <p className="text-[14.5px] leading-[1.65] max-w-[30em] mt-3.5">
            Cambodia&apos;s academic advising service built for every student. Combining AI-powered
            tools with human mentorship to unlock global opportunities.
          </p>
          <p className="font-display italic text-[18px] text-gold-soft mt-4.5">
            &ldquo;Guiding your Education Journey&rdquo;
          </p>
          <div className="mt-5.5 flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61565295581796"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full border border-[rgba(243,237,226,0.18)] flex items-center justify-center text-cream-soft transition-[background,color,border-color] duration-250 hover:bg-gold hover:text-navy-3 hover:border-gold"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Nav columns */}
        {NAV_COLS.map((col) => (
          <div key={col.heading}>
            <h4 className="font-bold text-[13px] tracking-[0.14em] uppercase text-cream mb-4.5">
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-cream-soft transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-6.5 border-t border-[rgba(243,237,226,0.12)] flex justify-between items-center gap-4 text-[13px] text-[rgba(243,237,226,0.55)] max-[640px]:flex-col max-[640px]:items-start">
        <span>
          © 2026 Project <span className="ivy-brand">IVY</span>. All rights reserved.
        </span>
        <span>Cambodia&apos;s Academic Advising Platform</span>
      </div>
    </div>
  </footer>
);

export default Footer;
