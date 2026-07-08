import Eyebrow from "@/components/Eyebrow";

const Mission = () => (
  <section className="py-30 bg-cream" id="mission">
    <div className="wrap">
      <div className="text-center max-w-180 mx-auto" data-reveal>
        <Eyebrow center>Mission</Eyebrow>
        <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
          Our Mission
        </h2>
        <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
          To build a Khmer for Khmer ecosystem where experienced Cambodian scholars empower
          and equip the next generation with essential skills, allowing them to successfully
          navigate not only the admission process to global universities, but become future
          leaders and impactful global citizens.
        </p>
      </div>
    </div>
  </section>
);

export default Mission;
