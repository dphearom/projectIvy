import Image from "next/image";

const HeroIllo = () => (
  <div className="hero-illo" aria-hidden="true">
    <svg
      viewBox="0 0 1240 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMax meet"
    >
      <path d="M0 236 C 200 226 380 244 560 234 S 960 224 1240 238" opacity="0.6" />
      <path d="M404 250 C 480 196 760 196 836 250" opacity="0.8" />
      <path className="illo-dash" d="M70 292 C 210 282 250 252 372 252 S 540 238 600 214" strokeDasharray="1.5 11" />
      <path d="M540 212 H704" /><path d="M548 206 H696" /><path d="M556 200 H688" />
      <path d="M564 200 V 168" /><path d="M588 200 V 168" /><path d="M612 200 V 168" />
      <path d="M636 200 V 168" /><path d="M660 200 V 168" /><path d="M684 200 V 168" />
      <path d="M552 168 H696" /><path d="M556 162 H692" />
      <path d="M552 162 L624 130 L696 162" />
      <circle cx="624" cy="150" r="4.5" />
      <path d="M624 130 V 112" />
      <path d="M624 112 L644 117 L624 122 Z" />
      <g transform="translate(236 120)">
        <path d="M-26 0 L 14 -14 L 54 0 L 14 14 Z" />
        <path d="M-2 8 C -2 22 30 22 30 8" />
        <path d="M54 0 V 22" />
        <circle cx="54" cy="26" r="3.2" />
      </g>
      <g transform="translate(944 238)">
        <path d="M0 0 C -20 -10 -44 -10 -60 -2 L -60 16 C -44 8 -20 8 0 18" />
        <path d="M0 0 C 20 -10 44 -10 60 -2 L 60 16 C 44 8 20 8 0 18" />
        <path d="M0 0 V 18" />
      </g>
      {([
        [110, 250, -18, 0.9], [150, 244, 20, 0.7],
        [742, 250, -14, 0.85], [1010, 236, 10, 0.8],
      ] as [number, number, number, number][]).map(([x, y, r, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          <path d="M0 0 C 6 -9 16 -9 20 0 C 16 9 6 9 0 0 Z" />
          <path d="M2 0 H 18" />
        </g>
      ))}
      {([
        [400, 96, 1], [520, 70, 0.7], [812, 84, 0.9], [1086, 140, 0.8], [1140, 92, 0.6],
      ] as [number, number, number][]).map(([x, y, s], i) => (
        <path
          key={i}
          transform={`translate(${x} ${y}) scale(${s})`}
          d="M0 -8 C 1 -2 2 -1 8 0 C 2 1 1 2 0 8 C -1 2 -2 1 -8 0 C -2 -1 -1 -2 0 -8 Z"
        />
      ))}
      <path d="M470 60 q 7 -7 14 0 q 7 -7 14 0" opacity="0.7" />
      <path d="M880 52 q 6 -6 12 0 q 6 -6 12 0" opacity="0.7" />
    </svg>
  </div>
);

const Hero = () => {
  return (
    // `.hero-stage` is the landing-page hero (taller than `.subhero` used in AboutHero).
    // `.on-navy` sets text color to cream for readability over the dark background.
    <section className="hero-stage on-navy" id="top">
      {/* Blobs are GPU-composited in CSS (will-change: transform + translate3d) to prevent repaint stuttering. */}
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <span className="blob b4" />
      </div>
      <div className="grain" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-inner centered">
          <div className="hero-copy">
            <span className="hero-tag" data-reveal>
              <span className="dot" /> Cambodia&apos;s #1 Academic Advising Platform
            </span>
            <h1 className="hero-title" data-reveal data-reveal-d="1">
              Turn Your <span className="accent">Ambition</span><br />Into Admission
            </h1>
            <p className="hero-sub" data-reveal data-reveal-d="2">
              Project Ivy is Cambodia&rsquo;s academic advising service built for every student.
              We combine AI-powered tools with human mentorship to help you access scholarships,
              navigate applications, and turn ambition into admission.
            </p>
            <div className="hero-actions" data-reveal data-reveal-d="3">
              <a className="btn btn-gold" href="#events">
                Begin Your Journey <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost-light" href="#features">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

<HeroIllo />
    </section>
  );
};

export default Hero;
