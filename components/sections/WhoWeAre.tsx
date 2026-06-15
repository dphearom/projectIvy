const CARDS = [
  {
    num: "01",
    title: "Who we are",
    desc:
      "Project Ivy is Cambodia\u2019s academic advising platform \u2014 built by Khmer scholars and mentors who have navigated the path from local classrooms to global universities.",
  },
  {
    num: "02",
    title: "What we do",
    desc:
      "We guide students through study abroad consulting, scholarship discovery, application support, and 1-on-1 mentorship \u2014 from grade 9 through university admission.",
  },
  {
    num: "03",
    title: "Why we exist",
    desc:
      "Too many talented students miss out on global opportunities for lack of guidance. We exist to make world-class advising accessible to every student, regardless of background.",
  },
] as const;

const WhoWeAre = () => (
  <section className="about-sec alt" id="who-we-are">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Who We Are</span>
        <h2>The foundation behind Project Ivy</h2>
      </div>
      <div className="feature-grid about-essentials-grid">
        {CARDS.map(({ num, title, desc }, i) => (
          <article className="f-card" key={title} data-reveal data-reveal-d={String(i + 1)}>
            <div className="f-num">{num}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAre;
