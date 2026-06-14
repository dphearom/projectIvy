import Link from "next/link";

const AboutHero = () => (
  // id="top" is required: AboutNav's heroObs watches this element to show/hide the subnav bar.
  // Blobs are static (no drift) on this sub-hero — controlled in globals.css.
  <section className="hero subhero" id="top">
    <div className="hero-bg">
      <span className="blob b1" /><span className="blob b2" />
      <span className="blob b3" /><span className="blob b4" />
    </div>
    <div className="grain" />
    <div className="hero-inner centered">
      <div className="hero-copy">
        <span className="eyebrow gold" data-reveal>About Project IVY</span>
        <h1 className="hero-title" data-reveal data-reveal-d="1">
          Building Cambodia&rsquo;s <em>Academic Advising</em> Infrastructure
        </h1>
        <p className="hero-sub" data-reveal data-reveal-d="2">
          Making world-class academic guidance a right, not a privilege — starting in
          Cambodia, and scaling across Southeast Asia.
        </p>
        <div className="hero-cta" data-reveal data-reveal-d="3">
          <Link className="btn btn-gold" href="#story">Meet Our Founder →</Link>
          <Link className="btn btn-ghost-light" href="/events">Get Started</Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
