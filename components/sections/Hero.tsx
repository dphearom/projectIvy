import Button from "@/components/Button";
import HeroStage from "@/components/HeroStage";
import { PHOTO_READY, PLACEHOLDERS } from "@/lib/placeholders";

const Hero = () => (
  <HeroStage
    image={PLACEHOLDERS.HOME_HERO_BG}
    available={PHOTO_READY.has(PLACEHOLDERS.HOME_HERO_BG)}
    imagePosition="center 68%"
    mobileImagePosition="center 55%"
  >
    <h1
      className="text-[clamp(3.2rem,7.5vw,6.6rem)] leading-[0.97] tracking-[-0.01em] mt-4 sm:mt-[clamp(5rem,20vh,10rem)] text-balance"
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
      <Button href="#story" arrow>
        Learn more
      </Button>
    </div>
  </HeroStage>
);

export default Hero;
