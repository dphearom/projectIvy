import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const ProgrammesHero = () => (
  <section className="hero-stage hero-stage--image on-navy page-hero-image" id="top">
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <PlaceholderImage name={PLACEHOLDERS.ADVISING_HERO_BG} className="ph-block--cover" />
    </div>
    <div className="grain" aria-hidden="true" />

    <div className="wrap">
      <div className="hero-inner centered">
        <div className="hero-copy page-hero-copy">
          <span className="eyebrow gold" data-reveal>
            Advising Program
          </span>
          <h1 className="hero-title" data-reveal data-reveal-d="1">
            Programs at Project IVY
          </h1>
          <p className="hero-sub" data-reveal data-reveal-d="2">
            Personalized advising roadmap from Grade 9 to university application — readiness
            and application programs built for every stage of the journey.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProgrammesHero;
