import PlaceholderImage from "@/components/PlaceholderImage";

const SCHOOLS = [
  {
    name: "Newton Grammar School",
    desc: "Newton Grammar School is a strategic partner of Project Ivy in guiding and supporting students on their journey to study abroad.",
  },
  {
    name: "Canadian International School",
    desc: "Canadian International School is a strategic partner of Project Ivy in guiding and supporting students on their journey to study abroad.",
  },
  {
    name: "Sedbergh Vietnam SSV",
    desc: "Sedbergh Vietnam SSV is a strategic partner of Project Ivy in guiding and supporting students on their journey to study abroad.",
  },
  {
    name: "Einstein School",
    desc: "Einstein School is a strategic partner of Project Ivy in guiding and supporting students on their journey to study abroad.",
  },
];

const PartnerSchools = () => (
  <section className="partner-schools">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Consulting images</span>
        <h2>At partner schools</h2>
      </div>
      <div className="partner-grid">
        {SCHOOLS.map((school, i) => (
          <article className="partner-card" key={school.name} data-reveal data-reveal-d={String((i % 3) + 1)}>
            <PlaceholderImage label={`${school.name} · partner school`} aspect="16 / 10" />
            <div className="partner-body">
              <h3>{school.name}</h3>
              <p>{school.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerSchools;
