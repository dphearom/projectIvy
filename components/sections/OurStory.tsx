import Image from "next/image";
import FounderMessage from "@/components/sections/FounderMessage";

const OurStory = () => (
  <section className="founder our-story" id="story">
    <div className="wrap">
      <div className="founder-grid our-story__intro">
        <div className="founder-photo" data-reveal>
          <Image
            src="/brand_assets/founder.jpg"
            alt="Somphors Tann, Founder & Programme Director of Project IVY"
            width={540}
            height={680}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="namecard">
            <b>Somphors Tann</b>
            <span>Founder &amp; Programme Director · Project IVY</span>
          </div>
        </div>

        <div className="founder-bio" data-reveal data-reveal-d="2">
          <span className="eyebrow gold">Founder&apos;s Story</span>
          <h2>Meet the Founder</h2>
          <p>
            Ms. Somphors Tann is a Cambodian education professional and first-generation
            university graduate from a rural community in Siem Reap. She received a full
            scholarship to attend Aiglon College in Switzerland for high school (Grades
            9&ndash;12), followed by a full scholarship to pursue her bachelor&apos;s degree at
            Kenyon College in the United States, where she double majored in Economics and
            International Studies. She later earned a Master&apos;s degree in Human Development
            and Education from the Harvard Graduate School of Education.
          </p>
          <p>
            Her work focuses on expanding access to quality education, student advising, and
            human capital development in Cambodia. Somphors has experience working across
            both international and local education initiatives and is currently involved in
            building educational opportunities for students from underserved communities.
          </p>
          <p>
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
