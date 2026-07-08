import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const AboutHero = () => (
  <section className="hero-stage hero-stage--image on-navy min-h-[min(72vh,640px)]" id="top">
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <PlaceholderImage name={PLACEHOLDERS.ABOUT_HERO_BG} className="ph-block--cover" />
    </div>
    <div className="grain" aria-hidden="true" />
    <div className="wrap">
      <div className="relative z-3 w-full flex flex-col items-center text-center">
        <div className="max-w-170 mx-auto">
          <span className="eyebrow gold" data-reveal>
            About Project IVY
          </span>
          <h1
            className="text-[clamp(3.2rem,7.5vw,6.6rem)] leading-[0.97] tracking-[-0.01em] mt-6 text-balance [&_em]:text-gold-soft [&_em]:font-semibold"
            data-reveal
            data-reveal-d="1"
          >
            Building Cambodia&rsquo;s <em>Academic Advising</em> Infrastructure
          </h1>
          <p
            className="mt-6.5 max-w-[42ch] mx-auto text-[1.18rem] leading-[1.62] text-cream-soft"
            data-reveal
            data-reveal-d="2"
          >
            Making world-class academic guidance a right, not a privilege &mdash; starting in
            Cambodia, and scaling across Southeast Asia.
          </p>
          <div className="flex justify-center mt-9" data-reveal data-reveal-d="3">
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
