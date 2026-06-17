const BENEFICIARIES = [
  {
    idx: "01",
    title: "High school applicants",
    desc: "Students preparing for boarding school and university admissions with structured guidance from Grade 9 through acceptance.",
  },
  {
    idx: "02",
    title: "Scholarship seekers",
    desc: "Families navigating need-based aid, merit scholarships, and fully-funded opportunities at top global institutions.",
  },
  {
    idx: "03",
    title: "First-generation students",
    desc: "Ambitious learners without inherited networks — gaining mentors who've walked the path from local classrooms to world-class campuses.",
  },
  {
    idx: "04",
    title: "Parents & families",
    desc: "Informed partners in the journey — understanding timelines, costs, and options alongside expert advisors every step of the way.",
  },
] as const;

const Beneficiaries = () => (
  <section className="beneficiaries">
    <div className="wrap">
      <div className="beneficiaries-intro" data-reveal>
        <h2>Guidance for every stage of the journey</h2>
        <p>
          Whether you&rsquo;re planning early, applying now, or supporting someone you love —
          Project Ivy meets you where you are and helps you reach where you&rsquo;re going.
        </p>
      </div>
      <div className="serve-grid beneficiaries-grid">
        {BENEFICIARIES.map((item, i) => (
          <article className="serve" key={item.idx} data-reveal data-reveal-d={String((i % 4) + 1)}>
            <div className="idx">{item.idx}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Beneficiaries;
