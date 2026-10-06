"use client";

import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import { useTranslation } from "@/components/useTranslation";
import { PARTNERS } from "@/lib/partners";

const PartnersHome = () => {
  const { t } = useTranslation("home.partners");
  const partner = PARTNERS[0];

  if (!partner) return null;

  const logoSrc = partner.logoCobrand ?? partner.logoLight;

  return (
    <section className="bg-ivory py-20 max-[640px]:py-14">
      <div className="wrap">
        <div className="text-center max-w-170 mx-auto mb-10" data-reveal>
          <Eyebrow center>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-4.5 text-[clamp(1.75rem,3vw,2.4rem)] tracking-[-0.01em] text-navy">
            {t("heading", "display")}
          </h2>
        </div>

        <div className="flex flex-col items-center text-center" data-reveal data-reveal-d="1">
          <a
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity duration-200 hover:opacity-85"
            aria-label={`${partner.name} × Project IVY`}
          >
            <Image
              src={logoSrc}
              alt={`${partner.name} × Project IVY partnership`}
              width={774}
              height={242}
              className="w-full max-w-[340px] sm:max-w-[400px] h-auto"
            />
          </a>

          <p className="m-0 mt-7 max-w-[52ch] text-[0.98rem] leading-[1.55] text-ink-soft">
            {t("line")}
          </p>
          <a
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-[0.88rem] font-semibold text-gold-deep transition-colors duration-200 hover:text-navy"
          >
            {t("cta")}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersHome;
