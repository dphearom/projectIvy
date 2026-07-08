import Image from "next/image";
import FounderMessage from "@/components/sections/FounderMessage";
import "./styles.css";

const OurStory = () => (
  <section className="py-31 bg-cream" id="story">
    <div className="wrap">
      <div
        className="grid grid-cols-[0.86fr_1.14fr] gap-16 items-start mb-12 max-[980px]:grid-cols-1 max-[980px]:gap-10"
        data-reveal
      >
        {/* Photo column */}
        <div className="founder-photo max-[980px]:max-w-110" data-reveal>
          <Image
            src="/brand_assets/founder.jpg"
            alt="Somphors Tann, Founder & Programme Director of Project IVY"
            width={540}
            height={680}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute z-2 -left-5 bottom-7.5 bg-paper border border-line rounded-[14px] px-5.5 py-3.75 shadow-[0_26px_54px_-22px_rgba(19,35,63,0.4)]">
            <b className="font-display text-[1.3rem] text-ink block leading-[1.1]">Somphors Tann</b>
            <span className="text-[0.8rem] text-(--muted) tracking-[0.02em]">
              Founder &amp; Programme Director · Project IVY
            </span>
          </div>
        </div>

        {/* Bio column */}
        <div data-reveal data-reveal-d="2">
          <span className="eyebrow gold">Founder&apos;s Story</span>
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em] mb-5 text-balance">
            Meet the Founder
          </h2>
          <p className="text-(--muted) text-[1.05rem] leading-[1.65] mb-4.5 max-w-[56ch]">
            Ms. Somphors Tann is a Cambodian education professional and first-generation
            university graduate from a rural community in Siem Reap. She received a full
            scholarship to attend Aiglon College in Switzerland for high school (Grades
            9&ndash;12), followed by a full scholarship to pursue her bachelor&apos;s degree at
            Kenyon College in the United States, where she double majored in Economics and
            International Studies. She later earned a Master&apos;s degree in Human Development
            and Education from the Harvard Graduate School of Education.
          </p>
          <p className="text-(--muted) text-[1.05rem] leading-[1.65] mb-4.5 max-w-[56ch]">
            Her work focuses on expanding access to quality education, student advising, and
            human capital development in Cambodia. Somphors has experience working across
            both international and local education initiatives and is currently involved in
            building educational opportunities for students from underserved communities.
          </p>
          <p className="text-(--muted) text-[1.05rem] leading-[1.65] mb-0 max-w-[56ch]">
            Drawing from her personal journey, from studying by candlelight in rural Cambodia
            to graduating from Harvard, she is passionate about empowering young people to
            navigate education pathways, take risks, and unlock their full potential.
          </p>
        </div>
      </div>

      <div data-reveal data-reveal-d="3">
        <FounderMessage />
      </div>
    </div>
  </section>
);

export default OurStory;
