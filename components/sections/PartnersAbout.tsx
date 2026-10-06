"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import { useTranslation } from "@/components/useTranslation";
import { PARTNERS } from "@/lib/partners";

const PartnersAbout = () => {
  const { t } = useTranslation("about.partners");
  const partner = PARTNERS[0];

  if (!partner) return null;

  return (
    <section className="py-30 bg-paper" id="partners">
      <div className="wrap">
        <div className="text-center max-w-180 mx-auto" data-reveal>
          <Eyebrow center>{t("eyebrow")}</Eyebrow>
          <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
            {t("heading", "display")}
          </h2>
        </div>

        <article
          className="mt-14 max-w-3xl mx-auto bg-ivory border border-line rounded-(--radius) p-8 sm:p-10 shadow-[0_24px_50px_-28px_rgba(14,23,41,0.14)]"
          data-reveal
          data-reveal-d="1"
        >
          <a
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity duration-200 hover:opacity-80"
            aria-label={partner.name}
          >
            <Image
              src={partner.logoLight}
              alt={partner.name}
              width={240}
              height={56}
              className="h-11 w-auto sm:h-12"
            />
          </a>

          <p className="mt-6 text-[1.02rem] leading-[1.7] text-ink-soft">{t("blurb")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={partner.href} arrow target="_blank" rel="noopener noreferrer">
              {t("cta")}
            </Button>
            {partner.telegramHref && (
              <Button
                href={partner.telegramHref}
                variant="ghost-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("telegramCta")}
              </Button>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default PartnersAbout;
