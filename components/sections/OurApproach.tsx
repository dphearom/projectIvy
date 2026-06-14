const ROWS = [
  {
    flip: false,
    eyebrow: "Our Approach · 01",
    title: "An AI roadmap, tuned by people who've been there",
    body: "Breksa AI analyses your grades, goals and background to build a living plan — then your mentor refines it with judgment no algorithm has.",
    bullets: [
      "Best-fit programs ranked to your real profile",
      "Deadlines, tasks and milestones in one timeline",
      "Scholarship matches updated as you grow",
    ],
    badge: ["64%", "Average roadmap completed before deadlines"],
  },
  {
    flip: true,
    eyebrow: "Our Approach · 02",
    title: "Mentorship from those who made the journey",
    body: "Every student is paired with a Cambodian mentor who has lived the path to a global university — and knows exactly how to guide you there.",
    bullets: [
      "Weekly 1-on-1 sessions in Khmer or English",
      "Essay reviews from real admitted students",
      "Honest, personal guidance at every step",
    ],
    badge: ["1:1", "Dedicated mentor for every student"],
  },
];

const OurApproach = () => {
  return (
    <section className="our-approach" id="approach">
      <div className="wrap">
        {ROWS.map((row) => (
          <div className={`frow${row.flip ? " flip" : ""}`} key={row.eyebrow}>
            <div className="ftext" data-reveal>
              <span className="eyebrow gold">{row.eyebrow}</span>
              <h2>{row.title}</h2>
              <p>{row.body}</p>
              <ul className="flist">
                {row.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <a className="btn btn-ghost" href="/events">Learn more →</a>
            </div>
            <div className="fart" data-reveal data-reveal-d="2">
              <div className="fart-img">
                <span style={{ fontFamily:"ui-monospace,monospace", fontSize:"0.72rem", color:"var(--muted)", background:"var(--paper)", padding:"7px 12px", borderRadius:6, border:"1px solid var(--line)" }}>
                  {row.flip ? "PHOTO · mentor & student" : "APP SCREENSHOT · roadmap dashboard"}
                </span>
              </div>
              <div className="badge">
                <b>{row.badge[0]}</b>
                <span>{row.badge[1]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproach;
