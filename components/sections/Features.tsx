const SERVICES = [
  [
    "01",
    "1-on-1 Human Advising & Mentorship",
    "Connect with experienced Cambodian mentors who've navigated the global education system. Personalized guidance from people who've lived the journey."
  ],
  [
    "02",
    "AI-Powered Academic Roadmaps",
    "Breksa AI analyzes your profile, goals, and background to build a custom roadmap — identifying best-fit programs, scholarships, and next steps instantly."
  ],
  [
    "03",
    "Scholarship & Career Path Discovery",
    "Access a curated database of 130+ scholarship opportunities. Our tools match you to programs you qualify for and guide every application step."
  ],
  [
    "04",
    "Test Preparation",
    "Structured prep for IELTS, SAT, GRE, IB, and more. Resources, practice materials, and expert guidance to maximize your scores and open more doors."
  ],
  [
    "05",
    "Essay & Application Support",
    "Stand out with compelling personal statements, recommendation guidance, and application reviews crafted with mentors who know what top schools want."
  ],
  [
    "06",
    "Workshops & Group Sessions",
    "Join live and recorded workshops on scholarship hunting, interview prep, visa applications, and building your global network — in Khmer and English."
  ]
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="eyebrow center">What We Do</span>
          <h2>Everything a Student Needs to Succeed</h2>
          <p>
            From AI-powered roadmaps to 1-on-1 mentorship, we cover every step of the academic journey — from
            high school to graduate school and beyond.
          </p>
        </div>
        <div className="feature-grid">
          {SERVICES.map(([num, title, desc], i) => (
            <article
              className="f-card"
              key={num}
              data-reveal
              data-reveal-d={String((i % 3) + 1)}
            >
              <div className="f-num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
