const ROW_1 = ["Harvard", "Dartmouth", "Northwestern", "Georgia State", "Lafayette", "Lehigh"];
const ROW_2 = ["Asian University for Women", "Babson", "Denison", "Bucknell", "Aiglon", "Taft"];

const AffiliationsPartners = () => (
  <section className="affiliations-partners">
    <div className="wrap">
      <div className="affiliations-intro" data-reveal>
        <h2>Experienced advisors from leading institutions</h2>
        <p>
          Project IVY mentors bring firsthand experience from world-class universities and
          schools — guiding students with insight earned on the journey.
        </p>
      </div>
    </div>

    <div className="logo-marquee-group">
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {[...ROW_1, ...ROW_1].map((name, i) => (
            <div className="logo-marquee-slot" key={`r1-${i}`}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="logo-marquee logo-marquee--reverse">
        <div className="logo-marquee-track">
          {[...ROW_2, ...ROW_2].map((name, i) => (
            <div className="logo-marquee-slot" key={`r2-${i}`}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AffiliationsPartners;
