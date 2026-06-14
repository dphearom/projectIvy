const ITEMS = [
  ["01", "K–12 Students", "Build the right foundation early — academic planning, extracurriculars, and scholarship awareness from the start."],
  ["02", "High Schoolers", "Navigate university applications, test prep, and scholarship hunting at the most critical decision point."],
  ["03", "Undergrad & Grad Applicants", "From Bachelor’s to PhD — find the right programs, funding, and support to reach your academic goals."],
  ["04", "Parents", "Understand the global education landscape and make informed decisions alongside your children with expert support."],
  ["05", "Lifelong Learners", "Professionals and career changers seeking new credentials, online programs, or international education opportunities."],
] as const;

const WhoWeServe = () => (
  <section className="about-sec" id="serve">
    <div className="wrap">
      <div className="shead" data-reveal>
        <span className="eyebrow gold">Who We Serve</span>
        <h2>Built for every stage of the journey</h2>
        <p className="lead">
          Whether you&rsquo;re a parent planning ahead, a high schooler exploring options,
          or a professional seeking advanced degrees — Project IVY has the guidance you need.
        </p>
      </div>
      <div className="serve-grid">
        {ITEMS.map(([n, t, d], i) => (
          <div className="serve" key={n} data-reveal data-reveal-d={String((i % 3) + 1)}>
            <div className="idx">{n}</div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeServe;
