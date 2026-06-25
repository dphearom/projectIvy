"use client";

import { useCallback, useEffect, useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { CartIcon, ChevronDown } from "@/components/icons";
import { PLACEHOLDERS } from "@/lib/placeholders";
import { SERVICE_CAMPS_DETAIL } from "@/lib/programs";

const ServiceCampsProgram = () => {
  const [expanded, setExpanded] = useState(false);

  const expandFromHash = useCallback(() => {
    if (window.location.hash === "#service-camps") {
      setExpanded(true);
    }
  }, []);

  useEffect(() => {
    expandFromHash();
    window.addEventListener("hashchange", expandFromHash);
    return () => window.removeEventListener("hashchange", expandFromHash);
  }, [expandFromHash]);

  const program = SERVICE_CAMPS_DETAIL;

  return (
    <section className="programme-catalog programme-catalog--events alt" id="service-camps">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow gold center">Service &amp; Camps</span>
          <h2>{program.title}</h2>
          <p>{program.description}</p>
        </div>

        <article className={`programme-product${expanded ? " expanded" : ""}`}>
          <div className="programme-product__shell">
            <div className="programme-product__media">
              <PlaceholderImage name={PLACEHOLDERS.PROGRAM_SERVICE_CAMPS} aspect="4 / 3" />
            </div>

            <div className="programme-product__summary">
              <div className="programme-product__head">
                <p className="programme-product__tagline">{program.tagline}</p>
              </div>

              <div className="programme-product__actions">
                <button
                  type="button"
                  className="programme-product__toggle"
                  aria-expanded={expanded}
                  aria-controls="service-camps-details"
                  onClick={() => setExpanded((current) => !current)}
                >
                  {expanded ? "Hide details" : "View details"}
                  <ChevronDown className={`programme-product__chevron${expanded ? " open" : ""}`} />
                </button>
                <a className="btn btn-gold" href="/contact">
                  Enquire about camps <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          <div
            id="service-camps-details"
            className="programme-product__details"
            hidden={!expanded}
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
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServiceCampsProgram;
