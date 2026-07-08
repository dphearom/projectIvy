"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";
import TierModal from "@/components/TierModal";
import Eyebrow from "@/components/Eyebrow";
import { SERVICE_CAMPS_DETAIL, type ProgramTier } from "@/lib/programs";

const CAMP_OUTCOMES: Record<string, string> = {
  "Impact Week":
    "Students develop leadership, empathy, teamwork, and evidence of meaningful community engagement.",
  "Blue Horizon Week":
    "Students build environmental awareness, resilience, and collaborative leadership skills.",
  "Roots & Horizons Week":
    "Students deepen cultural awareness while developing a broader global perspective valued by universities.",
  "Mindfulness Week":
    "Students develop emotional intelligence, self-awareness, resilience, and healthy habits for long-term success.",
  "Urban Discovery Week":
    "Students gain exposure to university life, careers, professional environments, and future pathways.",
};

const CampModal = ({ tier, onClose }: { tier: ProgramTier; onClose: () => void }) => {
  const slug = tier.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <TierModal
      title={tier.name}
      price={tier.price}
      tagline={tier.tagline}
      onClose={onClose}
      footer={
        <>
          <Button href="/contact" arrow>
            Enquire about this camp
          </Button>
          <Button variant="ghost-dark" onClick={onClose}>
            Close
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-2 gap-2.5 mb-6 max-[760px]:grid-cols-1">
        <PlaceholderImage
          name={`camps-brochure-${slug}-1`}
          aspect="4 / 3"
          className="rounded-[calc(var(--radius)-4px)]"
        />
        <PlaceholderImage
          name={`camps-brochure-${slug}-2`}
          aspect="4 / 3"
          className="rounded-[calc(var(--radius)-4px)]"
        />
      </div>
      <div className="tier-modal__features">
        <h5>Program activities</h5>
        <ul>
          {tier.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      {CAMP_OUTCOMES[tier.name] && (
        <div className="mt-5 py-4 px-5 bg-ivory-2 rounded-[calc(var(--radius)-4px)] border-l-[3px] border-gold">
          <h5 className="text-[0.95rem] text-navy mb-2">Outcome</h5>
          <p className="text-[0.9rem] text-ink-soft leading-[1.6]">{CAMP_OUTCOMES[tier.name]}</p>
        </div>
      )}
    </TierModal>
  );
};

const CampsProgram = () => {
  const [modalTier, setModalTier] = useState<ProgramTier | null>(null);
  const program = SERVICE_CAMPS_DETAIL;

  return (
    <section className="bg-ivory pt-25 pb-27.5" id="camps-program">
      <div className="wrap">
        <div className="text-center max-w-180 mx-auto" data-reveal>
          <Eyebrow center>Service &amp; Cultural Immersion</Eyebrow>
          <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
            {program.title}
          </h2>
          <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">{program.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-5.5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
          {program.tiers.map((tier, i) => {
            const slug = tier.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <article
                key={tier.name}
                className="bg-paper border border-line rounded-(--radius) overflow-hidden cursor-pointer transition-[border-color,box-shadow,transform,translate] duration-300 flex flex-col hover:border-[rgba(184,150,90,0.55)] hover:shadow-[0_22px_48px_-24px_rgba(14,23,41,0.26)] hover:-translate-y-1.25"
                data-reveal
                data-reveal-d={String((i % 3) + 1)}
                onClick={() => setModalTier(tier)}
              >
                <PlaceholderImage name={`camps-${slug}`} aspect="4 / 3" className="rounded-none" />
                <div className="pt-4.5 px-5 pb-5.5 flex flex-col flex-1">
                  <span className="inline-block text-[0.72rem] font-bold tracking-[0.06em] uppercase text-navy-3 bg-gold py-1 px-2.5 rounded-full mb-2.5 self-start">
                    Custom pricing
                  </span>
                  <h3 className="text-[1.15rem] text-navy mb-1.5 leading-[1.15]">{tier.name}</h3>
                  <p className="text-[0.9rem] text-ink-soft leading-[1.5] flex-1">{tier.tagline}</p>
                  <div className="mt-4 pt-3.5 border-t border-line flex gap-2">
                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center font-body text-[0.83rem] font-semibold text-navy bg-transparent border border-[rgba(27,36,54,0.2)] rounded-full py-2.25 px-3 cursor-pointer transition-[border-color,color] duration-200 hover:border-gold-deep hover:text-gold-deep"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalTier(tier);
                      }}
                    >
                      See full details
                    </button>
                    <a
                      className="flex-1 inline-flex items-center justify-center font-body text-[0.83rem] font-semibold text-navy bg-transparent border border-[rgba(27,36,54,0.2)] rounded-full py-2.25 px-3 cursor-pointer transition-[border-color,color] duration-200 hover:border-gold-deep hover:text-gold-deep"
                      href="/contact"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {modalTier && <CampModal tier={modalTier} onClose={() => setModalTier(null)} />}
    </section>
  );
};

export default CampsProgram;
