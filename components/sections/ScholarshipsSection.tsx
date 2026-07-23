"use client";

import { useState } from "react";
import { SCHOLARSHIPS } from "@/lib/scholarships";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import SmartImage from "@/components/SmartImage";
import VideoThumbnail from "@/components/VideoThumbnail";
import { ChevronDown } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/components/useTranslation";

type Props = {
  showPageHeader?: boolean;
};

const ScholarshipsSection = ({ showPageHeader = true }: Props) => {
  const { t, tRich, tArray, has } = useTranslation("scholarships");
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((current) => (current === id ? null : id));
  };

  return (
    <section className="pt-30 pb-30 bg-cream" id="scholarships">
      <div className="wrap">
        {showPageHeader && (
          <div className="text-center max-w-180 mx-auto" data-reveal>
            <Eyebrow center>{t("hero.eyebrow")}</Eyebrow>
            <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
              {tRich("hero.heading", { ivy: (chunks) => <span className="ivy-brand">{chunks}</span> }, "display")}
            </h2>
            <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
              {t("hero.subtitle")}
            </p>
          </div>
        )}

        <div className="max-w-190 mx-auto mb-12 text-center" data-reveal data-reveal-d="1">
          <p className="text-[1.02rem] text-ink-soft leading-[1.65]">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-7">
          {SCHOLARSHIPS.map((scholarship, i) => {
            const isOpen = expanded === scholarship.id;
            // Only scholarships already migrated into translations/en.json go through
            // the dictionary — everyone else still renders straight from lib/scholarships.ts
            // until their translation arrives.
            const isTranslated = has(`items.${scholarship.id}.title`);

            return (
              <article
                className="bg-paper border border-line rounded-(--radius) overflow-hidden transition-[transform,translate,box-shadow,border-color] duration-350 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)]"
                key={scholarship.id}
                id={scholarship.id}
                data-reveal
                data-reveal-d={String((i % 3) + 1)}
              >
                <div className="grid grid-cols-[280px_1fr] max-[980px]:grid-cols-1">
                  {scholarship.videos ? (
                    <VideoThumbnail
                      name={scholarship.photo ?? scholarship.id}
                      alt={scholarship.title}
                      available={Boolean(scholarship.photo)}
                      videos={scholarship.videos}
                      aspect="4 / 3"
                      className="rounded-none h-full min-h-55"
                      sizes="(max-width: 980px) 100vw, 280px"
                    />
                  ) : (
                    <SmartImage
                      name={scholarship.photo ?? scholarship.id}
                      alt={scholarship.title}
                      available={Boolean(scholarship.photo)}
                      aspect="4 / 3"
                      className="rounded-none h-full min-h-55"
                      sizes="(max-width: 980px) 100vw, 280px"
                    />
                  )}
                  <div className="pt-8 px-7 pb-6 flex flex-col justify-center max-[980px]:p-6">
                    <h3 className="text-[1.35rem] text-navy leading-[1.2]">
                      {isTranslated ? t(`items.${scholarship.id}.title`, "display") : scholarship.title}
                    </h3>
                    <p className="mt-3 mb-5 text-[0.98rem] text-ink-soft leading-[1.55]">
                      {isTranslated ? t(`items.${scholarship.id}.overview`) : scholarship.overview}
                    </p>
                    <Button
                      onClick={() => toggleExpand(scholarship.id)}
                      className="self-start"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? t("ui.showLess") : t("ui.learnMore")}
                      <ChevronDown
                        className={cn("transition-transform duration-300", isOpen && "rotate-180")}
                      />
                    </Button>
                  </div>
                </div>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(.2,.7,.2,1)]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-3 border-t border-line max-[680px]:grid-cols-1">
                      <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                        <h4 className="text-[1rem] text-navy mb-3">{t("ui.details")}</h4>
                        <p className="text-[0.9rem] text-ink-soft leading-[1.55]">
                          {isTranslated ? t(`items.${scholarship.id}.learnMore`) : scholarship.learnMore}
                        </p>
                      </div>

                      <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                        <h4 className="text-[1rem] text-navy mb-3">{t("ui.whoCanApply")}</h4>
                        <ul className="mt-2 pl-[1.1rem] [&>li+li]:mt-1.5">
                          {(isTranslated
                            ? tArray(`items.${scholarship.id}.eligibility`)
                            : scholarship.eligibility
                          ).map((item, itemIndex) => (
                            <li
                              key={typeof item === "string" ? item : itemIndex}
                              className="text-[0.9rem] text-ink-soft leading-[1.55]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                        <h4 className="text-[1rem] text-navy mb-3">{t("ui.howWeSelect")}</h4>
                        <p className="text-[0.9rem] text-ink-soft leading-[1.55]">{t("ui.decisionsBasedOn")}</p>
                        <ul className="mt-2 pl-[1.1rem] [&>li+li]:mt-1.5">
                          {(isTranslated
                            ? tArray(`items.${scholarship.id}.selectionCriteria`)
                            : scholarship.selectionCriteria
                          ).map((item, itemIndex) => (
                            <li
                              key={typeof item === "string" ? item : itemIndex}
                              className="text-[0.9rem] text-ink-soft leading-[1.55]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        {scholarship.footnote && (
                          <p className="mt-3 text-[0.84rem] italic text-ink-soft">
                            {isTranslated ? t(`items.${scholarship.id}.footnote`) : scholarship.footnote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
