const REGIONS = [
  {
    label: "Universities in America",
    schools: ["Princeton", "Northwestern", "Cornell", "Brown", "Stanford", "Harvard", "Boston U", "Rochester", "Michigan", "Emory"],
  },
  {
    label: "Universities in Australia",
    schools: ["U of Adelaide", "ANU", "U of Sydney", "UNSW", "Melbourne", "U of Queensland", "Monash", "Western Sydney"],
  },
  {
    label: "Universities in Canada",
    schools: ["U of Alberta", "U of Toronto", "UBC", "McGill", "McMaster", "Waterloo", "York", "Western"],
  },
];

const PartnerUniversities = () => (
  <section className="partner-universities">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Affiliated member units</span>
        <h2>AdvisED Global Network</h2>
        <p>
          Project Ivy connects students with partner institutions across North America, Australia, and beyond.
        </p>
      </div>
      {REGIONS.map((region, ri) => (
        <div className="logo-region" key={region.label} data-reveal data-reveal-d={String((ri % 3) + 1)}>
          <h3>{region.label}</h3>
          <div className="logo-grid">
            {region.schools.map((school) => (
              <div className="logo-slot" key={school} aria-hidden="true">
                <span>{school}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PartnerUniversities;
