const CARDS = [
  ["01", "Life-changing decisions, made alone", "Most Cambodian students navigate critical academic and career decisions entirely on their own — without a mentor, advisor, or clear roadmap to follow."],
  ["02", "Quality advising is out of reach", "Existing advising services are expensive, biased, or geographically inaccessible — leaving rural and low-income students behind."],
] as const;

const Problem = () => (
  <section className="about-sec" id="problem">
    <div className="wrap">
      <div className="shead" data-reveal>
        <span className="eyebrow gold">The Problem</span>
        <h2>A guidance gap that&rsquo;s holding Cambodia back</h2>
        <p className="lead">
          Every year, thousands of talented Cambodian students miss out on scholarships,
          global universities, and fulfilling careers — not for lack of ambition, but for
          lack of access to the right guidance at the right time.
        </p>
        <p className="lead">
          Project IVY exists to close that gap — democratising world-class academic
          advising for every student, regardless of where they come from.
        </p>
      </div>
      <div className="svc-grid cols-2">
        {CARDS.map(([n, t, d], i) => (
          <div className="svc" key={n} data-reveal data-reveal-d={String(i + 1)}>
            <div className="svc-num">{n}</div>
            <h3>{t}</h3>
            <p>{d}</p>
            <div className="svc-line" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
