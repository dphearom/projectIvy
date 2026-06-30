"use client";

import { useEffect, useRef, useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
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
  const overlayRef = useRef<HTMLDivElement>(null);
  const slug = tier.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="tier-modal-overlay"
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="tier-modal" role="dialog" aria-modal="true" aria-label={tier.name}>
        <button type="button" className="tier-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="tier-modal__scroll">
          <div className="tier-modal__body">
            <h3 className="tier-modal__name">{tier.name}</h3>
            <span className="tier-modal__price">{tier.price}</span>
            <p className="tier-modal__tagline">{tier.tagline}</p>
            <div className="camp-modal__brochure">
              <PlaceholderImage name={`camps-brochure-${slug}-1`} aspect="4 / 3" />
              <PlaceholderImage name={`camps-brochure-${slug}-2`} aspect="4 / 3" />
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
              <div className="camp-modal__outcome">
                <h5>Outcome</h5>
                <p>{CAMP_OUTCOMES[tier.name]}</p>
              </div>
            )}
            <div className="tier-modal__footer">
              <a className="btn btn-gold" href="/contact">
                Enquire about this camp <span className="arrow">→</span>
              </a>
              <button type="button" className="btn btn-ghost-dark" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CampsProgram = () => {
  const [modalTier, setModalTier] = useState<ProgramTier | null>(null);
  const program = SERVICE_CAMPS_DETAIL;

  return (
    <section className="programme-catalog camps-catalog" id="camps-program">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow gold center">Service &amp; Cultural Immersion</span>
          <h2>{program.title}</h2>
          <p>{program.description}</p>
        </div>

        <div className="camps-grid">
          {program.tiers.map((tier, i) => {
            const slug = tier.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <article
                key={tier.name}
                className="camp-card"
                data-reveal
                data-reveal-d={String((i % 3) + 1)}
                onClick={() => setModalTier(tier)}
              >
                <PlaceholderImage name={`camps-${slug}`} aspect="4 / 3" />
                <div className="camp-card__body">
                  <span className="camp-card__tag">Custom pricing</span>
                  <h3 className="camp-card__name">{tier.name}</h3>
                  <p className="camp-card__tagline">{tier.tagline}</p>
                  <div className="camp-card__actions">
                    <button
                      type="button"
                      className="camp-card__btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalTier(tier);
                      }}
                    >
                      See full details
                    </button>
                    <a
                      className="camp-card__btn"
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
