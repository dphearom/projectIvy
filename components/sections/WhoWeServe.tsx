const AUDIENCES = [
  {
    emoji: "🏫",
    title: "K–12 Students",
    body: "Build the right foundation early — academic planning, extracurriculars, and scholarship awareness from the start.",
  },
  {
    emoji: "📚",
    title: "High Schoolers",
    body: "Navigate university applications, test prep, and scholarship hunting at the most critical decision point.",
  },
  {
    emoji: "🎓",
    title: "Undergrad & Grad Applicants",
    body: "From Bachelor's to PhD — find the right programs, funding, and support to reach your academic goals.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Parents",
    body: "Understand the global education landscape and make informed decisions alongside your children with expert support.",
  },
  {
    emoji: "🌱",
    title: "Lifelong Learners",
    body: "Professionals and career changers seeking new credentials, online programs, or international education opportunities.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="section serve" id="serve">
      <div className="container">
        <div className="serve-header">
          <span className="accent-label">Who We Serve</span>
          <h2 className="reveal">Built for Every Stage of the Journey</h2>
          <p className="reveal reveal-delay-1">
            Whether you&apos;re a parent planning ahead, a high schooler exploring
            options, or a professional seeking advanced degrees — Breksa has the
            guidance you need.
          </p>
        </div>
        <div className="serve-grid">
          {AUDIENCES.map((a, i) => (
            <div key={a.title} className={`serve-card reveal${i ? ` reveal-delay-${i}` : ""}`}>
              <span className="emoji">{a.emoji}</span>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
