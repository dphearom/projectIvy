"use client";

import { useCallback, useEffect, useState } from "react";
import SmartImage from "@/components/SmartImage";
import VideoThumbnail from "@/components/VideoThumbnail";
import Button from "@/components/Button";
import TierModal from "@/components/TierModal";
import Eyebrow from "@/components/Eyebrow";
import { CartIcon, ChevronDown } from "@/components/icons";
import { PHOTO_READY, PLACEHOLDERS } from "@/lib/placeholders";
import {
  ADVISING_PROGRAM_DETAILS,
  tierVideoUrl,
  type ProgramDetail,
  type ProgramTier,
} from "@/lib/programs";
import { scrollToHashWhenReady } from "@/lib/scroll-to-hash";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/components/useTranslation";
import "./styles.css";

const PROGRAM_PHOTOS: Record<string, string> = {
  "middle-school": PLACEHOLDERS.PROGRAM_MIDDLE_SCHOOL,
  "university-readiness": PLACEHOLDERS.PROGRAM_READINESS,
  "university-application": PLACEHOLDERS.PROGRAM_APPLICATION,
  "graduate-school": PLACEHOLDERS.PROGRAM_GRADUATE_SCHOOL,
};

type ModalData = { program: ProgramDetail; tier: ProgramTier; tierIndex: number };

const TierThumbnail = ({
  programId,
  tierIndex,
  tierPhotoName,
  alt,
  aspect = "4 / 3",
  sizes,
}: {
  programId: string;
  tierIndex: number;
  tierPhotoName: string;
  alt: string;
  aspect?: string;
  sizes?: string;
}) => {
  const videoUrl = tierVideoUrl(programId, tierIndex);
  const available = PHOTO_READY.has(tierPhotoName);

  if (videoUrl) {
    return (
      <VideoThumbnail
        name={tierPhotoName}
        alt={alt}
        available={available}
        videoUrl={videoUrl}
        aspect={aspect}
        sizes={sizes}
      />
    );
  }

  return (
    <SmartImage
      name={tierPhotoName}
      alt={alt}
      available={available}
      aspect={aspect}
      className="rounded-none"
      sizes={sizes}
    />
  );
};

const ProgramTierModal = ({ data, onClose }: { data: ModalData; onClose: () => void }) => {
  const tierPhotoName = `programs/packages/${data.program.id}-pkg-${data.tierIndex + 1}`;
  const { t, tArray, tPlain } = useTranslation("programmes");
  const { t: tButton, tPlain: tButtonPlain } = useTranslation("shared.buttons");
  const tierPath = `details.${data.program.id}.tiers.${data.tierIndex}`;

  return (
    <TierModal
      title={t(`${tierPath}.name`, "display")}
      ariaLabel={tPlain(`${tierPath}.name`)}
      closeAriaLabel={tButtonPlain("close")}
      price={data.tier.price}
      tagline={t(`${tierPath}.tagline`)}
      onClose={onClose}
      media={
        <TierThumbnail
          programId={data.program.id}
          tierIndex={data.tierIndex}
          tierPhotoName={tierPhotoName}
          alt={data.tier.name}
          aspect="16 / 7"
          sizes="100vw"
        />
      }
      footer={
        <>
          <Button href="/contact" arrow>
            {tButton("enquireNow")}
          </Button>
          <Button variant="ghost-dark" onClick={onClose}>
            {tButton("close")}
          </Button>
        </>
      }
    >
      <div className="tier-modal__features">
        <h5>{t("ui.whatsIncluded")}</h5>
        <ul>
          {tArray(`${tierPath}.features`).map((f, i) => (
            <li key={typeof f === "string" ? f : i}>{f}</li>
          ))}
        </ul>
      </div>
      {data.tier.deliverables && data.tier.deliverables.length > 0 && (
        <div className="tier-modal__features mt-5 pt-5 border-t border-line">
          <h5>{t("ui.deliverables")}</h5>
          <ul>
            {tArray(`${tierPath}.deliverables`).map((d, i) => (
              <li key={typeof d === "string" ? d : i}>{d}</li>
            ))}
          </ul>
        </div>
      )}
      {data.tier.pricingSection && (
        <div className="tier-modal__features mt-5 pt-5 border-t border-line">
          <h5>{t(`${tierPath}.pricingSection.title`)}</h5>
          <ul>
            {tArray(`${tierPath}.pricingSection.items`).map((item, i) => (
              <li key={typeof item === "string" ? item : i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </TierModal>
  );
};

const ProgrammeProducts = () => {
  const { t, tArray } = useTranslation("programmes");
  const { t: tButton } = useTranslation("shared.buttons");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const expandFromHash = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (ADVISING_PROGRAM_DETAILS.some((p) => p.id === hash)) {
      setExpanded(hash);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && expanded === hash) {
      scrollToHashWhenReady(`#${hash}`);
    }
  }, [expanded]);

  useEffect(() => {
    expandFromHash();
    window.addEventListener("hashchange", expandFromHash);
    return () => window.removeEventListener("hashchange", expandFromHash);
  }, [expandFromHash]);

  const toggleExpand = (id: string) => {
    setExpanded((current) => (current === id ? null : id));
  };

  const addToCart = (id: string) => {
    setCart((current) => (current.includes(id) ? current : [...current, id]));
  };

  const inCart = (id: string) => cart.includes(id);

  return (
    <section className="bg-ivory pt-25 pb-27.5" id="programs" aria-label="Advising programs">
      <div className="wrap">
        <div className="text-center max-w-180 mx-auto" data-reveal>
          <Eyebrow center>{t("section.eyebrow")}</Eyebrow>
          <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
            {t("section.heading", "display")}
          </h2>
          <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
            {t("section.subtitle")}
          </p>
        </div>

        {cart.length > 0 && (
          <div
            className="flex items-center justify-between gap-5 flex-wrap mt-12 py-4.5 px-6 bg-paper border border-[rgba(184,150,90,0.35)] rounded-(--radius) shadow-[0_16px_40px_-24px_rgba(14,23,41,0.18)] max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:text-center"
            role="status"
          >
            <span className="font-semibold text-navy">
              {cart.length} {t(cart.length !== 1 ? "cart.plural" : "cart.singular")}
            </span>
            <Button
              href={`/contact?inquiries=${cart.join(",")}`}
              className="max-[980px]:justify-center max-[980px]:w-full"
              arrow
            >
              {t("cart.requestConsultation")}
            </Button>
          </div>
        )}

        <div className="mt-12 flex flex-col gap-6">
          {ADVISING_PROGRAM_DETAILS.map((program) => {
            const isOpen = expanded === program.id;
            const added = inCart(program.id);

            return (
              <article
                key={program.id}
                id={program.id}
                className={cn(
                  "scroll-mt-25 bg-paper border border-line rounded-(--radius) overflow-hidden transition-[border-color,box-shadow] duration-350",
                  "hover:border-[rgba(184,150,90,0.45)] hover:shadow-[0_24px_50px_-28px_rgba(14,23,41,0.22)]",
                  isOpen && "border-[rgba(184,150,90,0.45)] shadow-[0_24px_50px_-28px_rgba(14,23,41,0.22)]",
                  added && "border-[rgba(184,150,90,0.55)]",
                )}
              >
                <div className="grid grid-cols-[400px_1fr] max-[980px]:grid-cols-1">
                  <SmartImage
                    name={PROGRAM_PHOTOS[program.id]}
                    alt={program.title}
                    available={PHOTO_READY.has(PROGRAM_PHOTOS[program.id])}
                    aspect="unset"
                    className="rounded-none h-full min-h-55"
                    sizes="(max-width: 980px) 100vw, 400px"
                  />

                  <div className="flex flex-col justify-between py-7 px-8 gap-6 max-[980px]:p-6">
                    <div>
                      <h3 className="text-[clamp(1.5rem,2.2vw,1.85rem)] text-navy leading-[1.12] mt-3">
                        {t(`details.${program.id}.title`, "display")}
                      </h3>
                      <p className="mt-2.5 text-[0.98rem] text-ink-soft leading-[1.55]">
                        {t(`details.${program.id}.tagline`)}
                      </p>
                      <p className="mt-3 text-[0.96rem] text-ink-soft leading-[1.7] max-w-[72ch]">
                        {t(`details.${program.id}.description`)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap max-[980px]:flex-col max-[980px]:items-stretch">
                      <button
                        type="button"
                        className="font-body inline-flex items-center gap-2 text-[0.92rem] font-semibold text-navy bg-transparent border border-[rgba(27,36,54,0.18)] rounded-full py-2.75 px-5 cursor-pointer transition-[border-color,color,background] duration-250 hover:border-gold-deep hover:text-gold-deep max-[980px]:justify-center max-[980px]:w-full"
                        aria-expanded={isOpen}
                        onClick={() => toggleExpand(program.id)}
                      >
                        {isOpen ? tButton("hidePackages") : tButton("viewDetails")}
                        <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
                      </button>
                      <button
                        type="button"
                        className={cn(
                          "font-body inline-flex items-center gap-2 text-[0.92rem] font-semibold rounded-full py-2.75 px-5 border border-transparent transition-[background,transform,opacity] duration-250 max-[980px]:justify-center max-[980px]:w-full",
                          added
                            ? "bg-[rgba(184,150,90,0.15)] text-gold-deep cursor-default"
                            : "bg-gold text-navy-3 cursor-pointer hover:bg-gold-soft hover:-translate-y-px",
                        )}
                        onClick={() => addToCart(program.id)}
                        disabled={added}
                      >
                        <CartIcon />
                        {added ? tButton("added") : tButton("addToInquiry")}
                      </button>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-line bg-ivory-2 pt-7 px-7 pb-8 grid grid-cols-3 gap-4.5 animate-[pkg-stack-in_0.35s_ease_both] max-[760px]:grid-cols-1 max-[760px]:p-5">
                    {program.tiers.map((tier, ti) => {
                      const tierPhotoName = `programs/packages/${program.id}-pkg-${ti + 1}`;

                      return (
                        <article
                          key={tier.name}
                          className="bg-paper border border-line rounded-[calc(var(--radius)-2px)] overflow-hidden cursor-pointer transition-[border-color,box-shadow,transform,translate] duration-300 flex flex-col hover:border-[rgba(184,150,90,0.55)] hover:shadow-[0_18px_38px_-20px_rgba(14,23,41,0.22)] hover:-translate-y-1"
                          onClick={() => setModalData({ program, tier, tierIndex: ti })}
                        >
                          <TierThumbnail
                            programId={program.id}
                            tierIndex={ti}
                            tierPhotoName={tierPhotoName}
                            alt={tier.name}
                            sizes="(max-width: 760px) 100vw, 33vw"
                          />
                          <div className="pt-4 px-4.5 pb-5 flex flex-col flex-1">
                            <h4 className="text-[1.05rem] text-navy leading-[1.2]">
                              {t(`details.${program.id}.tiers.${ti}.name`)}
                            </h4>
                            <p className="mt-1.5 text-[0.87rem] text-ink-soft leading-[1.45]">
                              {t(`details.${program.id}.tiers.${ti}.tagline`)}
                            </p>
                            <span className="inline-block mt-3 text-[0.85rem] font-bold text-navy-3 bg-gold py-1 px-3 rounded-full self-start">
                              {tier.price}
                            </span>
                            {tier.pricingSection && (
                              <div className="mt-3.5 pt-3.5 border-t border-line">
                                <p className="text-[0.82rem] font-semibold text-navy">
                                  {t(`details.${program.id}.tiers.${ti}.pricingSection.title`)}
                                </p>
                                <ul className="mt-2 pl-[1.1rem] [&>li+li]:mt-1">
                                  {tArray(`details.${program.id}.tiers.${ti}.pricingSection.items`).map(
                                    (item, itemIndex) => (
                                      <li
                                        key={typeof item === "string" ? item : itemIndex}
                                        className="text-[0.8rem] text-ink-soft leading-[1.45]"
                                      >
                                        {item}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            )}
                            <div className="mt-3.5">
                              <button
                                type="button"
                                className="font-body inline-flex items-center justify-center w-full text-[0.85rem] font-semibold text-navy bg-transparent border border-[rgba(27,36,54,0.2)] rounded-full py-2.25 px-3.5 cursor-pointer transition-[border-color,color] duration-200 hover:border-gold-deep hover:text-gold-deep"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setModalData({ program, tier, tierIndex: ti });
                                }}
                              >
                                {tButton("seeFullDetails")}
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {modalData && <ProgramTierModal data={modalData} onClose={() => setModalData(null)} />}
    </section>
  );
};

export default ProgrammeProducts;
