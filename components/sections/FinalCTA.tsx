// Dark grainy CTA band — same atmosphere pattern as QuoteBand and the hero sections.
// Uses .mission + blob/grain overlay system; see globals.css for .mission-* rules.
const FinalCTA = () => (
  <section className="mission" id="about">
    <div className="hero-bg">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
    </div>
    <div className="grain" />
    <div className="mission-inner">
      <span className="eyebrow gold center" data-reveal>Start your journey</span>
      <h2 data-reveal data-reveal-d="1">
        Your Future Starts Here
      </h2>
      <p data-reveal data-reveal-d="2">
        Please contact us now to register for a Free 1-1 consultation with a Project Ivy advisor!
      </p>
      <div className="mission-cta" data-reveal data-reveal-d="3">
        <a className="btn btn-gold" href="/contact">
          Sign up for consultation <span className="arrow">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
