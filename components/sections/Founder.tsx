import Image from "next/image";

const JOURNEY: [string, string][] = [
  ["Siem Reap, Cambodia", "Where the journey began"],
  ["Jay Pritzker Academy", "Arts & academic excellence"],
  ["Aiglon College, Switzerland", "International boarding school"],
  ["Kenyon College", "Liberal arts degree"],
  ["Harvard University", "Graduate education"],
];

const Founder = () => {
  return (
    <section className="section founder" id="founder">
      <div className="container">
        <div className="founder-photo-wrap">
          <div className="founder-photo reveal">
            <Image
              src="/brand_assets/founder.jpg"
              alt="Somphors Tann – Founder of Breksa AdvisED Global"
              fill
              sizes="420px"
            />
            <div className="founder-badge-overlay">
              <div className="name-tag">Somphors Tann</div>
              <div className="title-tag">Founder &amp; CEO · Breksa – AdvisED Global</div>
            </div>
          </div>
        </div>
        <div className="founder-content">
          <span className="section-label">Our Story</span>
          <h2 className="reveal">Built by Students Who Lived the Journey</h2>
          <div className="founder-quote reveal reveal-delay-1">
            <p>
              &quot;Built by Cambodian students who went from rural communities to
              global education — now helping others do the same.&quot;
            </p>
          </div>
          <p className="bio reveal reveal-delay-2">
            Somphors Tann grew up in Siem Reap, Cambodia, and navigated the path to
            global education largely on her own — from Jay Pritzker Academy to Aiglon
            College in Switzerland, Kenyon College, and ultimately Harvard University.
          </p>
          <p className="bio reveal reveal-delay-3">
            She founded Breksa – AdvisED Global alongside a community of Khmer
            scholars who&apos;ve experienced firsthand how the right guidance at the
            right moment can change the entire trajectory of a life. Now, they&apos;re
            dedicated to ensuring the next generation of Cambodian students
            doesn&apos;t have to figure it out alone.
          </p>
          <div className="journey-path reveal reveal-delay-4">
            {JOURNEY.map(([place, detail]) => (
              <div className="journey-step" key={place}>
                <div className="journey-dot" />
                <div className="journey-info">
                  <div className="place">{place}</div>
                  <div className="detail">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
