import Image from "next/image";

const TEAM = [
  {
    name: "Somphors Tann",
    role: "Founder & CEO",
    bio: "From Siem Reap to Harvard — Somphors founded Project Ivy to ensure Cambodian students never have to navigate global education alone.",
    featured: true,
  },
  {
    name: "Advisor Name",
    role: "Head of Consulting",
    bio: "Placeholder bio for a senior advisor guiding students through scholarship and university applications.",
    featured: false,
  },
  {
    name: "Advisor Name",
    role: "Lead Mentor",
    bio: "Placeholder bio for a mentor supporting students through essays, profiles, and admissions strategy.",
    featured: false,
  },
];

const JOURNEY: [string, string, boolean][] = [
  ["Siem Reap, Cambodia", "Where the journey began", false],
  ["Jay Pritzker Academy", "Arts & academic excellence", false],
  ["Aiglon College, Switzerland", "International boarding school", false],
  ["Kenyon College", "Liberal arts degree", false],
  ["Harvard University", "Graduate education", true],
];

const OurTeam = () => (
  <section className="founder about-sec alt" id="team">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Our Team</span>
        <h2>Built by students who lived the journey</h2>
        <p>
          Project Ivy is led by Cambodian scholars and advisors who have walked the path
          from local classrooms to global universities — and are dedicated to helping the
          next generation do the same.
        </p>
      </div>

      <div className="founder-grid">
        <div className="founder-photo" data-reveal>
          <Image
            src="/brand_assets/founder.jpg"
            alt="Somphors Tann, Founder & CEO of Project Ivy, at her Harvard graduation"
            width={540}
            height={680}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="namecard">
            <b>{TEAM[0].name}</b>
            <span>{TEAM[0].role} · Project Ivy</span>
          </div>
        </div>

        <div className="founder-text" data-reveal data-reveal-d="2">
          <blockquote>
            Built by Cambodian students who went from rural communities to global
            education — now helping others do the same.
          </blockquote>
          <p>{TEAM[0].bio}</p>
          <p>
            She founded Project Ivy alongside a community of Khmer scholars who&rsquo;ve
            experienced firsthand how the right guidance at the right moment can change
            the entire trajectory of a life.
          </p>
        </div>
      </div>

      <div className="serve-grid team-grid">
        {TEAM.slice(1).map((member, i) => (
          <article className="serve" key={member.role} data-reveal data-reveal-d={String((i % 2) + 1)}>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p>{member.bio}</p>
          </article>
        ))}
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

export default OurTeam;
