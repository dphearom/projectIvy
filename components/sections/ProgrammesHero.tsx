import Eyebrow from "@/components/Eyebrow";
import HeroStage from "@/components/HeroStage";
import { PHOTO_READY, PLACEHOLDERS } from "@/lib/placeholders";

const ProgrammesHero = () => (
  <HeroStage
    image={PLACEHOLDERS.ADVISING_HERO_BG}
    available={PHOTO_READY.has(PLACEHOLDERS.ADVISING_HERO_BG)}
    imagePosition="center 22%"
    className="min-h-[min(80vh,720px)]"
  >
    <div className="max-w-170 mx-auto mt-[clamp(7rem,26vh,13rem)]">
      <Eyebrow onNavy data-reveal>
        Advising Program
      </Eyebrow>
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
  </HeroStage>
);

export default ProgrammesHero;
