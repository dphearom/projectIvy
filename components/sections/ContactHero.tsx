import Eyebrow from "@/components/Eyebrow";
import HeroStage from "@/components/HeroStage";
import { PHOTO_READY, PLACEHOLDERS } from "@/lib/placeholders";

const ContactHero = () => (
  <HeroStage
    image={PLACEHOLDERS.CONTACT_HERO_BG}
    available={PHOTO_READY.has(PLACEHOLDERS.CONTACT_HERO_BG)}
    imagePosition="center 32%"
    className="min-h-[min(85vh,760px)]"
  >
    <div className="max-w-170 mx-auto">
      <Eyebrow onNavy data-reveal>
        Get in Touch
      </Eyebrow>
      <h1
        className="text-[clamp(3.2rem,7.5vw,6.6rem)] leading-[0.97] tracking-[-0.01em] mt-6 text-balance"
        data-reveal
        data-reveal-d="1"
      >
        Contact us
      </h1>
      <p
        className="mt-6.5 max-w-[42ch] mx-auto text-[1.18rem] leading-[1.62] text-cream-soft"
        data-reveal
        data-reveal-d="2"
      >
        Please fill out the information form below — Project Ivy will contact you for
        consultation as soon as possible!
      </p>
    </div>
  </HeroStage>
);

export default ContactHero;
