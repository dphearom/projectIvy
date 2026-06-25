const BLOCKS = [
  {
    num: "01",
    title: "Who We Are",
    desc:
      "Project IVY is an educational advisory and mentorship organization founded in Cambodia. We support high-potential students in navigating international education pathways with confidence and purpose.",
  },
  {
    num: "02",
    title: "What We Do",
    desc:
      "We provide expert guidance on academic planning, application strategy, scholarships, and personal branding. Through our programs, mentorship, and resources, we help students turn their potential into opportunity.",
  },
  {
    num: "03",
    title: "Why We Exist",
    desc:
      "We exist to level the playing field. Every Cambodian student deserves access to the right information, the right mentors, and the right opportunities to build a global future, regardless of their background.",
  },
] as const;

const WhoWeAre = () => (
  <section className="about-sec alt" id="who-we-are">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Who We Are</span>
        <h2>The foundation behind Project IVY</h2>
      </div>
      <div className="feature-grid about-essentials-grid">
        {BLOCKS.map(({ num, title, desc }, i) => (
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
