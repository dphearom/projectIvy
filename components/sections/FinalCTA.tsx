const FinalCTA = () => {
  return (
    <section className="cta" id="cta">
      <img className="cta-watermark" src="/logo-light.png" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="cta-inner">
          <span className="eyebrow center on-navy" data-reveal>
            Join the Movement
          </span>
          <h2 data-reveal data-reveal-d="1">
            We Are Not Just Guiding Students — We Are Building the <span className="accent">Future of Cambodia</span>.
          </h2>
          <p data-reveal data-reveal-d="2">
            The journey to global opportunity starts with a single step. Whether you&apos;re a student with
            big dreams or a parent seeking the best path for your child — we&apos;re here to guide you every
            step of the way.
          </p>
          <div className="cta-actions" data-reveal data-reveal-d="3">
            <a className="btn btn-gold" href="/events">
              Start Your Journey Today <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost-light" href="/#features">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
