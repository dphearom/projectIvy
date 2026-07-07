import Link from "next/link";
import { SCHOLARSHIPS } from "@/lib/scholarships";

type Props = {
  showPageHeader?: boolean;
};

const ScholarshipsSection = ({ showPageHeader = true }: Props) => (
  <section className={`about-sec scholarships-section${showPageHeader ? "" : " scholarships-section--embedded"}`} id="scholarships">
    <div className="wrap">
      {showPageHeader && (
        <div className="section-head" data-reveal>
          <span className="eyebrow center">Financial Support</span>
          <h2>Scholarships at Project IVY</h2>
          <p>
            Need-based scholarships available for university applications and IELTS.
          </p>
        </div>
      )}

      <div className="scholarships-intro" data-reveal data-reveal-d="1">
        <p>
          At Project IVY, we believe that financial limitations should not prevent motivated
          students from accessing high-quality academic advising, application support, and
          English test preparation. Through our need-based scholarship opportunities, selected
          students may receive partial support for Project IVY programs, university applications,
          and IELTS based on financial need, academic motivation, and commitment to the
          application journey.
        </p>
      </div>

      <div className="scholarships-grid">
        {SCHOLARSHIPS.map((scholarship, i) => (
          <article
            className="scholarship-card"
            key={scholarship.id}
            id={scholarship.id}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <div className="scholarship-card__head">
              <h3>{scholarship.title}</h3>
              <p className="scholarship-card__overview">{scholarship.overview}</p>
              <Link className="btn btn-gold scholarship-card__cta" href="/contact">
                Learn More / Apply Now <span className="arrow">→</span>
              </Link>
            </div>

            <div className="scholarship-card__details">
              <div className="scholarship-card__block">
                <h4>Learn More</h4>
                <p>{scholarship.learnMore}</p>
              </div>

              <div className="scholarship-card__block">
                <h4>Who Can Apply?</h4>
                <ul>
                  {scholarship.eligibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="scholarship-card__block">
                <h4>How We Select Scholarship Recipients</h4>
                <p>Scholarship decisions are based on:</p>
                <ul>
                  {scholarship.selectionCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {scholarship.footnote && <p className="scholarship-card__footnote">{scholarship.footnote}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ScholarshipsSection;
