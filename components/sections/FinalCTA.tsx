// Dark grainy CTA band — same atmosphere pattern as QuoteBand and the hero sections.
// Uses .mission + blob/grain overlay system; see globals.css for .mission-* rules.
const FinalCTA = () => (
  <section className="mission" id="about">
    <div className="hero-bg">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
    </div>
    <div className="grain" />
    <div className="mission-inner">
      <span className="eyebrow gold center" data-reveal>Join the Movement</span>
      <h2 data-reveal data-reveal-d="1">
        We&rsquo;re not just guiding students — we&rsquo;re building the future{" "}
        <em>human capital of Cambodia</em>.
      </h2>
      <p data-reveal data-reveal-d="2">
        The journey to global opportunity starts with a single step. Whether you&rsquo;re
        a student with big dreams or a parent seeking the best path for your child —
        we&rsquo;re here to guide you, every step of the way.
      </p>
      <div className="mission-cta" data-reveal data-reveal-d="3">
        <a className="btn btn-gold" href="/events">Start Your Journey →</a>
        <a className="btn btn-ghost-light" href="/#features">Explore Our Services</a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
