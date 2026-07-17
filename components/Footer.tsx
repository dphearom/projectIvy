"use client";

import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "@/components/icons";
import { useTranslation } from "@/components/useTranslation";

const NAV_COLS = [
  {
    id: "programs",
    links: [
      { id: "exploration", href: "/programmes#middle-school" },
      { id: "universityReadiness", href: "/programmes#university-readiness" },
      { id: "universityApplication", href: "/programmes#university-application" },
      { id: "graduateSchool", href: "/programmes#graduate-school" },
      { id: "scholarships", href: "/scholarships" },
      // { id: "serviceCamps", href: "/camps" },
    ],
  },
  {
    id: "company",
    links: [
      { id: "aboutUs", href: "/about" },
      { id: "ourTeam", href: "/about#team" },
      { id: "events", href: "/events" },
      // { id: "camps", href: "/camps" },
    ],
  },
  {
    id: "contact",
    links: [
      { id: "bookConsultation", href: "/contact" },
      { id: "workshopsEvents", href: "/events" },
      { id: "partnerWithUs", href: "/contact" },
    ],
  },
] as const;

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
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
              {t("description")}
            </p>
            <p className="font-display italic text-[18px] text-gold-soft mt-4.5">
              {t("tagline", "display")}
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
            <div key={col.id}>
              <h4 className="font-bold text-[13px] tracking-[0.14em] uppercase text-cream mb-4.5">
                {t(`columns.${col.id}.heading`)}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-[14.5px] text-cream-soft transition-colors duration-200 hover:text-cream"
                    >
                      {t(`columns.${col.id}.links.${link.id}`)}
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
};

export default Footer;
