"use client";

import { useCallback, useEffect, useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { CartIcon, ChevronDown } from "@/components/icons";
import { PROGRAM_DETAILS } from "@/lib/programs";

const ProgrammeProducts = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]);

  const expandFromHash = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (PROGRAM_DETAILS.some((p) => p.id === hash)) {
      setExpanded(hash);
    }
  }, []);

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
    <section className="programme-catalog" id="programs" aria-label="Consulting programs">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow gold center">Your roadmap</span>
          <h2>Choose your program</h2>
          <p>
            Three pathways from readiness through application and service — select a program to
            view full details and add it to your inquiry list.
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
          {PROGRAM_DETAILS.map((program) => {
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
                    <PlaceholderImage label={program.title} aspect="4 / 3" />
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
                        aria-controls={`${program.id}-details`}
                        onClick={() => toggleExpand(program.id)}
                      >
                        {isOpen ? "Hide details" : "View details"}
                        <ChevronDown className={`programme-product__chevron${isOpen ? " open" : ""}`} />
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

                <div
                  id={`${program.id}-details`}
                  className="programme-product__details"
                  hidden={!isOpen}
                >
                  <div className="programme-product__details-inner">
                    {program.tiers.map((tier) => (
                      <div className="programme-tier" key={tier.name}>
                        <div className="programme-tier__head">
                          <div>
                            <h4>{tier.name}</h4>
                            <p className="programme-tier__tagline">{tier.tagline}</p>
                          </div>
                          <span className="price-tag">{tier.price}</span>
                        </div>

                        <div className="programme-product__features">
                          <h5>What&apos;s included</h5>
                          <ul>
                            {tier.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        {tier.deliverables && tier.deliverables.length > 0 && (
                          <div className="programme-product__features programme-product__features--deliverables">
                            <h5>Deliverables</h5>
                            <ul>
                              {tier.deliverables.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="programme-product__footer">
                      <span className="programme-product__price">Enquire for pricing</span>
                      <button
                        type="button"
                        className={`btn btn-gold programme-product__enroll${added ? " added" : ""}`}
                        onClick={() => addToCart(program.id)}
                        disabled={added}
                      >
                        <CartIcon />
                        {added ? "Added to inquiry" : "Add to inquiry"}
                      </button>
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

export default ProgrammeProducts;
