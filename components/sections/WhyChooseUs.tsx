const REASONS = [
  {
    area: "Built by Khmer Scholars",
    detail:
      "Our mentors are not generic admissions coaches. They are Cambodian students and alumni who earned scholarships to the world's best schools and chose to come back to share everything they know. They understand your background, your barriers, and your potential in a way no outside consultant can.",
  },
  {
    area: "Small, Selective, and Personal",
    detail:
      "Project IVY caps enrollment intentionally. Every student receives real one-on-one time with a mentor. You are not a number here. You are a scholar with a story worth telling, and we take the time to hear it.",
  },
  {
    area: "Real Deliverables: Guaranteed",
    detail:
      "You will not leave Project IVY with just inspiration. You will leave with a drafted personal statement, a personalised school list, a completed activity resume, a test prep strategy, and an application roadmap, or we will give you a full refund.",
  },
  {
    area: "Holistic Approach",
    detail:
      "We work on the whole application: your story, your strategy, your essays, your activities, and your mindset. We help you understand what top admissions officers actually look for and how to present who you are in a way that is authentic and compelling.",
  },
] as const;

const WhyChooseUs = () => (
  <section className="about-sec" id="why-choose-us">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Why You Should Choose Us</span>
        <h2>What sets Project IVY apart</h2>
      </div>
      <div className="why-choose-grid">
        {REASONS.map(({ area, detail }, i) => (
          <article className="why-choose-card" key={area} data-reveal data-reveal-d={String((i % 2) + 1)}>
            <h3>{area}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
