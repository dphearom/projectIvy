import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import HeroStage from "@/components/HeroStage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const AboutHero = () => (
  <HeroStage image={PLACEHOLDERS.ABOUT_HERO_BG} className="min-h-[min(72vh,640px)]">
    <div className="max-w-170 mx-auto">
      <Eyebrow onNavy data-reveal>
        About Project IVY
      </Eyebrow>
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
        <Button href="#mission" arrow>
          Explore our mission
        </Button>
      </div>
    </div>
  </HeroStage>
);

export default AboutHero;
