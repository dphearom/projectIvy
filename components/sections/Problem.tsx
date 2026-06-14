const ITEMS = [
  ["01", "Life-changing decisions, made alone",
    "Most Cambodian students navigate critical academic and career decisions entirely on their own — without a mentor, advisor, or clear roadmap to follow."],
  ["02", "Quality advising is out of reach",
    "Existing advising is expensive, biased, or geographically inaccessible — leaving rural and low-income students furthest from opportunity behind."],
] as const;

// Two-column layout: sticky editorial intro (left) + numbered problem items (right).
// At 980px the grid collapses to single column and .problem-intro un-sticks (see globals.css).
const Problem = () => (
  <section className="problem-sec" id="problem">
    <div className="wrap problem-grid">
      <div className="problem-intro">
        <span className="eyebrow gold" data-reveal>The Problem</span>
        <h2 data-reveal data-reveal-d="1">A guidance gap that&rsquo;s holding Cambodia back</h2>
        <p className="lead" data-reveal data-reveal-d="2">
          Every year, thousands of talented Cambodian students miss out on scholarships,
          global universities, and fulfilling careers — not for lack of ambition, but for
          lack of access to the right guidance at the right time.
        </p>
        <p className="lead" data-reveal data-reveal-d="3">
          <strong>Project IVY exists to close that gap</strong> — democratising world-class
          academic advising for every student, regardless of where they come from.
        </p>
      </div>
      <div className="problem-list">
        {ITEMS.map(([n, t, d], i) => (
          <div className="problem-item" key={n} data-reveal data-reveal-d={String(i + 1)}>
            <div className="problem-num">{n}</div>
            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
