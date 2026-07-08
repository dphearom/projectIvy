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
        <div className="relative z-3 w-full text-center flex flex-col items-center">
          <h1
            className="text-[clamp(3.2rem,7.5vw,6.6rem)] leading-[0.97] tracking-[-0.01em] mt-6 text-balance"
            data-reveal
          >
            Project <span className="ivy-brand">IVY</span>
          </h1>
          <p
            className="mt-6.5 max-w-[42ch] mx-auto text-[1.18rem] leading-[1.62] text-cream-soft"
            data-reveal
            data-reveal-d="1"
          >
            Turn Your Ambition into Admission
          </p>
          <div className="flex flex-wrap gap-3.5 mt-9.5 justify-center" data-reveal data-reveal-d="2">
            <a className="btn btn-gold" href="#story">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
