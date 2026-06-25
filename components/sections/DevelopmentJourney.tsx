import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const DevelopmentJourney = () => (
  <section className="home-journey" id="journey">
    <div className="wrap">
      <div className="frow">
        <div className="ftext" data-reveal>
          <span className="eyebrow">Development journey</span>
          <h2>Open the door to the world with the study abroad &ndash; scholarship program</h2>
          <p>
            Project Ivy is a leading unit in the field of training and study abroad consulting.
            We partner with many quality universities and high schools in the US, Canada, Australia,
            and beyond &mdash; guiding Cambodian students from discovery to admission.
          </p>
          <a className="btn btn-ghost" href="/about">
            Learn more <span className="arrow">→</span>
          </a>
        </div>
        <div className="fart" data-reveal data-reveal-d="2">
          <PlaceholderImage name={PLACEHOLDERS.HOME_PARTNER_MAP} aspect="4 / 3.2" />
        </div>
      </div>
    </div>
  </section>
);

export default DevelopmentJourney;
