import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const Hero = () => {
  return (
    <section className="hero-stage hero-stage--image on-navy" id="top">
      <div className="hero-bg hero-bg--image" aria-hidden="true">
        <PlaceholderImage name={PLACEHOLDERS.HOME_HERO_BG} className="ph-block--cover" />
      </div>
      <div className="grain" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-inner centered">
          <div className="hero-copy">
            <h1 className="hero-title" data-reveal>
              Project Ivy
            </h1>
            <p className="hero-sub" data-reveal data-reveal-d="1">
              Turn Your Ambition into Admission
            </p>
            <div className="hero-actions" data-reveal data-reveal-d="2">
              <a className="btn btn-gold" href="#story">
                Learn more <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
