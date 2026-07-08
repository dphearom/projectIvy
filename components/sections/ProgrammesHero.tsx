import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const ProgrammesHero = () => (
  <section className="hero-stage hero-stage--image on-navy page-hero-image" id="top">
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <PlaceholderImage name={PLACEHOLDERS.ADVISING_HERO_BG} className="ph-block--cover" />
    </div>
    <div className="grain" aria-hidden="true" />

    <div className="wrap">
      <div className="relative z-3 w-full flex flex-col items-center text-center">
        <div className="max-w-170 mx-auto">
          <span className="eyebrow gold" data-reveal>
            Advising Program
          </span>
          <h1
            className="text-[clamp(3.2rem,7.5vw,6.6rem)] leading-[0.97] tracking-[-0.01em] mt-6 text-balance"
            data-reveal
            data-reveal-d="1"
          >
            Programs at Project IVY
          </h1>
          <p
            className="mt-6.5 max-w-[42ch] mx-auto text-[1.18rem] leading-[1.62] text-cream-soft"
            data-reveal
            data-reveal-d="2"
          >
            Personalized advising roadmap from Grade 9 to university application — readiness
            and application programs built for every stage of the journey.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProgrammesHero;
