const FEATURES = [
  {
    icon: "🤝",
    bg: "#EEF0FF",
    title: "1-on-1 Human Advising & Mentorship",
    body: "Connect with experienced Cambodian mentors who've navigated the global education system. Get personalized guidance from people who've lived the journey.",
  },
  {
    icon: "🤖",
    bg: "#FFF3D6",
    title: "AI-Powered Academic Roadmaps",
    body: "Breksa AI analyzes your profile, goals, and background to build a custom academic roadmap — identifying your best-fit programs, scholarships, and next steps instantly.",
  },
  {
    icon: "🎓",
    bg: "#F0FFF4",
    title: "Scholarship & Career Path Discovery",
    body: "Access a curated database of 130+ scholarship opportunities. Our tools match you to programs you qualify for and guide you through every application step.",
  },
  {
    icon: "📝",
    bg: "#FFF0F5",
    title: "Test Preparation",
    body: "Structured prep for IELTS, SAT, GRE, IB, and more. Resources, practice materials, and expert guidance to maximize your scores and open more doors.",
  },
  {
    icon: "✍️",
    bg: "#F0F8FF",
    title: "Essay & Application Support",
    body: "Stand out with compelling personal statements, recommendation letter guidance, and application reviews crafted with mentors who know what top schools look for.",
  },
  {
    icon: "👥",
    bg: "#FFF5F0",
    title: "Workshops & Group Sessions",
    body: "Join live and recorded group workshops on scholarship hunting, interview prep, visa applications, and building your global network — all in Khmer and English.",
  },
];

const Features = () => {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="features-header">
          <span className="section-label">What We Do</span>
          <h2 className="reveal">Everything a Student Needs to Succeed</h2>
          <p className="reveal reveal-delay-1">
            From AI-powered roadmaps to 1-on-1 mentorship, we cover every step of
            the academic journey — from high school to graduate school and beyond.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`feature-card reveal${i % 3 ? ` reveal-delay-${i % 3}` : ""}`}
            >
              <div className="feature-icon" style={{ background: f.bg }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
