const STATS = [
  {
    value: "20+",
    title: "Years of experience",
    desc: "In the consulting field for study abroad & scholarships",
  },
  {
    value: "3500",
    title: "Billion VND",
    desc: "Total value of scholarships awarded to Project Ivy students",
  },
  {
    value: "$20,000",
    title: "Comes with a full scholarship",
    desc: "Is the average annual scholarship amount Project Ivy students receive",
  },
];

const StatsBand = () => (
  <section className="stats-band">
    <div className="wrap">
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <article className="stat-card" key={stat.value} data-reveal data-reveal-d={String((i % 3) + 1)}>
            <div className="stat-value">{stat.value}</div>
            <h3>{stat.title}</h3>
            <p>{stat.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBand;
