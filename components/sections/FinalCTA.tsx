// Dark grainy CTA band — same atmosphere pattern as VisionQuote and the hero sections.
const FinalCTA = () => (
  <section className="relative overflow-hidden text-cream py-32.5 bg-(--ink-2)" id="about">
    <div className="hero-bg bg-[radial-gradient(120%_130%_at_50%_120%,var(--g2),var(--g1)_70%)]">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
    </div>
    <div className="grain" />
    <div className="relative z-3 text-center max-w-230 mx-auto px-8">
      <span className="eyebrow gold center" data-reveal>Start your journey</span>
      <h2
        className="mt-6.5 mb-7 text-[clamp(2.4rem,5vw,4.2rem)] tracking-[-0.01em] text-balance"
        data-reveal
        data-reveal-d="1"
      >
        Your Future Starts Here
      </h2>
      <p className="text-[1.18rem] text-cream-soft max-w-[60ch] mx-auto mb-9.5" data-reveal data-reveal-d="2">
        Please contact us now to register for a Free 1-1 consultation with a Project Ivy advisor!
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap" data-reveal data-reveal-d="3">
        <a className="btn btn-gold" href="/contact">
          Sign up for advising <span className="arrow">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
