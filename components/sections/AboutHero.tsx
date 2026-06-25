import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const AboutHero = () => (
  <section className="hero-stage hero-stage--image on-navy page-hero-image" id="top">
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <PlaceholderImage name={PLACEHOLDERS.ABOUT_HERO_BG} className="ph-block--cover" />
    </div>
    <div className="grain" aria-hidden="true" />
    <div className="wrap">
      <div className="hero-inner centered">
        <div className="hero-copy page-hero-copy">
          <span className="eyebrow gold" data-reveal>
            About Project IVY
          </span>
          <h1 className="hero-title" data-reveal data-reveal-d="1">
            Building Cambodia&rsquo;s <em>Academic Advising</em> Infrastructure
          </h1>
          <p className="hero-sub" data-reveal data-reveal-d="2">
            Making world-class academic guidance a right, not a privilege &mdash; starting in
            Cambodia, and scaling across Southeast Asia.
          </p>
          <div className="hero-cta" style={{ marginTop: "36px" }} data-reveal data-reveal-d="3">
            <Link className="btn btn-gold" href="#mission">
              Explore our mission &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
