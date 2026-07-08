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
  <section className="py-30 bg-cream" id="why-choose-us">
    <div className="wrap">
      <div className="text-center max-w-180 mx-auto" data-reveal>
        <span className="eyebrow center">Why You Should Choose Us</span>
        <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
          What sets Project IVY apart
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
        {REASONS.map(({ area, detail }, i) => (
          <article
            className="bg-paper border border-line rounded-(--radius) py-8 px-7 transition-[transform,translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)]"
            key={area}
            data-reveal
            data-reveal-d={String((i % 2) + 1)}
          >
            <h3 className="text-[1.2rem] text-navy leading-[1.2]">{area}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-soft leading-[1.6]">{detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
