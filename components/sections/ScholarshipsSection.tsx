"use client";

import { useState } from "react";
import { SCHOLARSHIPS } from "@/lib/scholarships";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import SmartImage from "@/components/SmartImage";
import VideoThumbnail from "@/components/VideoThumbnail";
import { ChevronDown } from "@/components/icons";
import { cn } from "@/lib/utils";

type Props = {
  showPageHeader?: boolean;
};

const ScholarshipsSection = ({ showPageHeader = true }: Props) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((current) => (current === id ? null : id));
  };

  return (
    <section className="pt-30 pb-30 bg-cream" id="scholarships">
      <div className="wrap">
        {showPageHeader && (
          <div className="text-center max-w-180 mx-auto" data-reveal>
            <Eyebrow center>Financial Support</Eyebrow>
            <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
              Scholarships at Project IVY
            </h2>
            <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
              Need-based scholarships available for university applications and IELTS.
            </p>
          </div>
        )}

        <div className="max-w-190 mx-auto mb-12 text-center" data-reveal data-reveal-d="1">
          <p className="text-[1.02rem] text-ink-soft leading-[1.65]">
            At Project IVY, we believe that financial limitations should not prevent motivated
            students from accessing high-quality academic advising, application support, and
            English test preparation. Through our need-based scholarship opportunities, selected
            students may receive partial support for Project IVY programs, university applications,
            and IELTS based on financial need, academic motivation, and commitment to the
            application journey.
          </p>
        </div>

        <div className="grid gap-7">
          {SCHOLARSHIPS.map((scholarship, i) => {
            const isOpen = expanded === scholarship.id;

            return (
              <article
                className="bg-paper border border-line rounded-(--radius) overflow-hidden transition-[transform,translate,box-shadow,border-color] duration-350 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)]"
                key={scholarship.id}
                id={scholarship.id}
                data-reveal
                data-reveal-d={String((i % 3) + 1)}
              >
                <div className="grid grid-cols-[280px_1fr] max-[980px]:grid-cols-1">
                  {scholarship.videoUrl ? (
                    <VideoThumbnail
                      name={scholarship.photo ?? scholarship.id}
                      alt={scholarship.title}
                      available={Boolean(scholarship.photo)}
                      videoUrl={scholarship.videoUrl}
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
                    <h3 className="text-[1.35rem] text-navy leading-[1.2]">{scholarship.title}</h3>
                    <p className="mt-3 mb-5 text-[0.98rem] text-ink-soft leading-[1.55]">
                      {scholarship.overview}
                    </p>
                    <Button
                      onClick={() => toggleExpand(scholarship.id)}
                      className="self-start"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Show less" : "Learn More"}
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
                        <h4 className="text-[1rem] text-navy mb-3">Learn More</h4>
                        <p className="text-[0.9rem] text-ink-soft leading-[1.55]">{scholarship.learnMore}</p>
                      </div>

                      <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                        <h4 className="text-[1rem] text-navy mb-3">Who Can Apply?</h4>
                        <ul className="mt-2 pl-[1.1rem] [&>li+li]:mt-1.5">
                          {scholarship.eligibility.map((item) => (
                            <li key={item} className="text-[0.9rem] text-ink-soft leading-[1.55]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                        <h4 className="text-[1rem] text-navy mb-3">How We Select Scholarship Recipients</h4>
                        <p className="text-[0.9rem] text-ink-soft leading-[1.55]">Scholarship decisions are based on:</p>
                        <ul className="mt-2 pl-[1.1rem] [&>li+li]:mt-1.5">
                          {scholarship.selectionCriteria.map((item) => (
                            <li key={item} className="text-[0.9rem] text-ink-soft leading-[1.55]">
                              {item}
                            </li>
                          ))}
                        </ul>
                        {scholarship.footnote && (
                          <p className="mt-3 text-[0.84rem] italic text-ink-soft">{scholarship.footnote}</p>
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
