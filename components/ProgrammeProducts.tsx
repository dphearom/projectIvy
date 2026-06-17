"use client";

import { useCallback, useEffect, useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

type Programme = {
  id: string;
  grade: string;
  title: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  meta: { label: string; value: string }[];
};

const PROGRAMMES: Programme[] = [
  {
    id: "grade-9",
    grade: "Grade 9",
    title: "Grade 9 Counseling Program",
    tagline: "Discover your goals and aspirations",
    price: "Enquire for pricing",
    description:
      "Lay the foundation for your study abroad journey with structured guidance that helps you understand your strengths, interests, and long-term ambitions before the pressure of applications begins.",
    features: [
      "Goal-setting and self-discovery workshops",
      "Academic interest exploration sessions",
      "Early roadmap planning with your advisor",
      "Parent–student alignment consultations",
    ],
    meta: [
      { label: "Duration", value: "Full academic year" },
      { label: "Format", value: "Monthly 1-on-1 + group workshops" },
      { label: "Ideal for", value: "Students entering high school" },
    ],
  },
  {
    id: "grade-10",
    grade: "Grade 10",
    title: "Grade 10 Counseling Program",
    tagline: "Discover academic fields and career opportunities",
    price: "Enquire for pricing",
    description:
      "Explore academic disciplines and career paths with expert guidance, building the extracurricular profile and course selections that set you apart in competitive admissions.",
    features: [
      "Career field and major exploration",
      "Extracurricular strategy planning",
      "Summer program and enrichment guidance",
      "Academic course selection support",
    ],
    meta: [
      { label: "Duration", value: "Full academic year" },
      { label: "Format", value: "Bi-weekly 1-on-1 sessions" },
      { label: "Ideal for", value: "Sophomore-year students" },
    ],
  },
  {
    id: "grade-11",
    grade: "Grade 11",
    title: "Grade 11 Counseling Program",
    tagline: "Identify majors and target schools",
    price: "Enquire for pricing",
    description:
      "Narrow your focus with a data-driven approach to university shortlisting, standardized test planning, and a strategic profile that aligns with your dream schools.",
    features: [
      "University shortlisting and fit analysis",
      "Major selection and academic planning",
      "Standardized test timeline and prep strategy",
      "Leadership and profile-building roadmap",
    ],
    meta: [
      { label: "Duration", value: "Full academic year" },
      { label: "Format", value: "Weekly 1-on-1 sessions" },
      { label: "Ideal for", value: "Junior-year students" },
    ],
  },
  {
    id: "grade-12",
    grade: "Grade 12",
    title: "Grade 12 Counseling Program",
    tagline: "Develop an outstanding personal profile",
    price: "Enquire for pricing",
    description:
      "Bring your application to life with hands-on essay coaching, interview preparation, and final school list refinement — supported every step until acceptance.",
    features: [
      "Personal statement and essay coaching",
      "Mock interviews and presentation prep",
      "Final school list and application strategy",
      "Scholarship and financial aid guidance",
    ],
    meta: [
      { label: "Duration", value: "Full academic year" },
      { label: "Format", value: "Intensive weekly 1-on-1 sessions" },
      { label: "Ideal for", value: "Senior-year applicants" },
    ],
  },
];

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 6h15l-1.5 9H7.5L6 6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M6 6 5 3H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="20" r="1.5" fill="currentColor" />
    <circle cx="18" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`programme-product__chevron${open ? " open" : ""}`}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ProgrammeProducts = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]);

  const expandFromHash = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (PROGRAMMES.some((p) => p.id === hash)) {
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
            Select a grade-level counseling program to view full details. Add programs to your
            inquiry list and our team will follow up to discuss enrollment.
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
          {PROGRAMMES.map((program) => {
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
                    <PlaceholderImage label={`${program.grade} program`} aspect="4 / 3" />
                    <span className="programme-product__grade">{program.grade}</span>
                  </div>

                  <div className="programme-product__summary">
                    <div className="programme-product__head">
                      <span className="price-tag">{program.price}</span>
                      <h3>{program.title}</h3>
                      <p className="programme-product__tagline">{program.tagline}</p>
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
                        <ChevronIcon open={isOpen} />
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
                    <p className="programme-product__desc">{program.description}</p>

                    <div className="programme-product__features">
                      <h4>What&apos;s included</h4>
                      <ul>
                        {program.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="programme-product__meta">
                      {program.meta.map(({ label, value }) => (
                        <div key={label} className="programme-product__meta-item">
                          <span className="b-label">{label}</span>
                          <span className="b-value">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="programme-product__footer">
                      <span className="programme-product__price">{program.price}</span>
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
