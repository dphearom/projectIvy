import Image from "next/image";

const JOURNEY: [string, string, boolean][] = [
  ["Siem Reap, Cambodia", "Where the journey began", false],
  ["Jay Pritzker Academy", "Arts & academic excellence", false],
  ["Aiglon College, Switzerland", "International boarding school", false],
  ["Kenyon College", "Liberal arts degree", false],
  ["Harvard University", "Graduate education", true],
];

const Founder = () => (
  <section className="founder" id="story">
    <div className="wrap">
      <div className="founder-grid">
        <div className="founder-photo" data-reveal>
          <Image
            src="/brand_assets/founder.jpg"
            alt="Somphors Tann, Founder & CEO of Project IVY, at her Harvard graduation"
            width={540}
            height={680}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="namecard">
            <b>Somphors Tann</b>
            <span>Founder &amp; CEO · Project IVY</span>
          </div>
        </div>

        <div className="founder-text" data-reveal data-reveal-d="2">
          <span className="eyebrow gold">Our Story</span>
          <h2>Built by students who lived the journey</h2>
          <blockquote>
            Built by Cambodian students who went from rural communities to global
            education — now helping others do the same.
          </blockquote>
          <p>
            Somphors Tann grew up in Siem Reap, Cambodia, and navigated the path to
            global education largely on her own — from Jay Pritzker Academy to Aiglon
            College in Switzerland, Kenyon College, and ultimately Harvard University.
          </p>
          <p>
            She founded Project IVY alongside a community of Khmer scholars who&rsquo;ve
            experienced firsthand how the right guidance at the right moment can change
            the entire trajectory of a life. Now, they&rsquo;re dedicated to ensuring the
            next generation of Cambodian students doesn&rsquo;t have to figure it out alone.
          </p>
        </div>
      </div>

      <div className="timeline" data-reveal>
        <div className="tl-head">
          <h3>The path that started it all</h3>
          <span>From a rural community to Harvard Yard</span>
        </div>
        <div className="tl-track">
          {JOURNEY.map(([place, detail, grad]) => (
            <div className={`tl-node${grad ? " grad" : ""}`} key={place}>
              <span className="tl-dot" />
              <div className="tl-info">
                <h4>{place}</h4>
                <span>{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
