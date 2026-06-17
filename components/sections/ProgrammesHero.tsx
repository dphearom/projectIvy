import PlaceholderImage from "@/components/PlaceholderImage";

const ProgrammesHero = () => (
  <section className="hero-stage hero-stage--image on-navy page-hero-image" id="top">
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <PlaceholderImage label="Consulting programs overview" className="ph-block--cover" />
    </div>
    <div className="grain" aria-hidden="true" />

    <div className="wrap">
      <div className="hero-inner centered">
        <div className="hero-copy page-hero-copy">
          <span className="eyebrow gold" data-reveal>
            Consulting programs
          </span>
          <h1 className="hero-title" data-reveal data-reveal-d="1">
            Programs at Project IVY
          </h1>
          <p className="hero-sub" data-reveal data-reveal-d="2">
            Discover your goals, explore academic fields, identify target schools, and develop
            an outstanding personal profile.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProgrammesHero;
