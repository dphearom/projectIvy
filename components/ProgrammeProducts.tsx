"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { CartIcon, ChevronDown } from "@/components/icons";
import { PLACEHOLDERS } from "@/lib/placeholders";
import { ADVISING_PROGRAM_DETAILS, type ProgramDetail, type ProgramTier } from "@/lib/programs";
import { scrollToHashWhenReady } from "@/lib/scroll-to-hash";

const PROGRAM_PHOTOS: Record<string, string> = {
  "university-readiness": PLACEHOLDERS.PROGRAM_READINESS,
  "university-application": PLACEHOLDERS.PROGRAM_APPLICATION,
  "graduate-school": PLACEHOLDERS.PROGRAM_GRADUATE_SCHOOL,
};

type ModalData = { program: ProgramDetail; tier: ProgramTier };

const TierModal = ({ data, onClose }: { data: ModalData; onClose: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const tierIndex = data.program.tiers.indexOf(data.tier) + 1;

  return (
    <div
      className="tier-modal-overlay"
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="tier-modal" role="dialog" aria-modal="true" aria-label={data.tier.name}>
        <button type="button" className="tier-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="tier-modal__scroll">
          <div className="tier-modal__img">
            <PlaceholderImage
              name={`${data.program.id}-pkg-${tierIndex}`}
              aspect="16 / 7"
            />
          </div>
          <div className="tier-modal__body">
            <h3 className="tier-modal__name">{data.tier.name}</h3>
            <span className="tier-modal__price">{data.tier.price}</span>
            <p className="tier-modal__tagline">{data.tier.tagline}</p>
            <div className="tier-modal__features">
              <h5>What&apos;s included</h5>
              <ul>
                {data.tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            {data.tier.deliverables && data.tier.deliverables.length > 0 && (
              <div className="tier-modal__features tier-modal__deliverables">
                <h5>Deliverables</h5>
                <ul>
                  {data.tier.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="tier-modal__footer">
              <a className="btn btn-gold" href="/contact">
                Enquire now <span className="arrow">→</span>
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

const ProgrammeProducts = () => {
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
    <section className="programme-catalog" id="programs" aria-label="Advising programs">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow gold center">Your roadmap</span>
          <h2>Choose your program</h2>
          <p>
            Programs from readiness through graduate school — select a program to explore packages
            and add it to your inquiry list.
          </p>
        </div>

        {cart.length > 0 && (
          <div className="programme-cart-bar" role="status">
            <span>
              {cart.length} program{cart.length !== 1 ? "s" : ""} in your inquiry list
            </span>
            <a className="btn btn-gold" href="/contact">
              Request consultation <span className="arrow">→</span>
            </a>
          </div>
        )}

        <div className="programme-product-list">
          {ADVISING_PROGRAM_DETAILS.map((program) => {
            const isOpen = expanded === program.id;
            const added = inCart(program.id);

            return (
              <article
                key={program.id}
                id={program.id}
                className={`programme-product${isOpen ? " expanded" : ""}${added ? " in-cart" : ""}`}
              >
                <div className="programme-product__shell">
                  <div className="programme-product__media">
                    <PlaceholderImage name={PROGRAM_PHOTOS[program.id]} aspect="4 / 3" />
                  </div>

                  <div className="programme-product__summary">
                    <div className="programme-product__head">
                      <h3>{program.title}</h3>
                      <p className="programme-product__tagline">{program.tagline}</p>
                      <p className="programme-product__desc programme-product__desc--summary">
                        {program.description}
                      </p>
                    </div>

                    <div className="programme-product__actions">
                      <button
                        type="button"
                        className="programme-product__toggle"
                        aria-expanded={isOpen}
                        onClick={() => toggleExpand(program.id)}
                      >
                        {isOpen ? "Hide packages" : "View details"}
                        <ChevronDown
                          className={`programme-product__chevron${isOpen ? " open" : ""}`}
                        />
                      </button>
                      <button
                        type="button"
                        className={`programme-product__cart${added ? " added" : ""}`}
                        onClick={() => addToCart(program.id)}
                        disabled={added}
                      >
                        <CartIcon />
                        {added ? "Added" : "Add to inquiry"}
                      </button>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="pkg-stack">
                    {program.tiers.map((tier, ti) => (
                      <article
                        key={tier.name}
                        className="pkg-card"
                        onClick={() => setModalData({ program, tier })}
                      >
                        <PlaceholderImage
                          name={`${program.id}-pkg-${ti + 1}`}
                          aspect="4 / 3"
                        />
                        <div className="pkg-card__body">
                          <h4 className="pkg-card__name">{tier.name}</h4>
                          <p className="pkg-card__tagline">{tier.tagline}</p>
                          <span className="pkg-card__price">{tier.price}</span>
                          <div className="pkg-card__actions">
                            <button
                              type="button"
                              className="pkg-card__details-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalData({ program, tier });
                              }}
                            >
                              See full details
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {modalData && <TierModal data={modalData} onClose={() => setModalData(null)} />}
    </section>
  );
};

export default ProgrammeProducts;
