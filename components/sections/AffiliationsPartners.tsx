const INSTITUTIONS = [
  "Harvard",
  "Stanford",
  "Princeton",
  "Kenyon College",
  "Aiglon College",
];

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

      <div className="affiliations-logos" data-reveal data-reveal-d="1">
        {INSTITUTIONS.map((name) => (
          <div className="affiliations-logo-slot" key={name}>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AffiliationsPartners;
