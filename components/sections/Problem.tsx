const Problem = () => {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <div className="problem-text">
          <span className="section-label">The Problem</span>
          <h2 className="reveal">A Guidance Gap That&apos;s Holding Cambodia Back</h2>
          <p className="reveal reveal-delay-1">
            Every year, thousands of talented Cambodian students miss out on
            scholarships, global universities, and fulfilling careers — not for lack
            of ambition, but for lack of access to the right guidance at the right
            time.
          </p>
          <p className="reveal reveal-delay-2">
            Breksa exists to close that gap — democratizing world-class academic
            advising for every student, regardless of where they come from.
          </p>
        </div>
        <div className="problem-cards">
          <div className="problem-card reveal">
            <div className="icon-box">🌏</div>
            <h3>Life-Changing Decisions Without Guidance</h3>
            <p>
              Most Cambodian students navigate critical academic and career
              decisions entirely alone — without a mentor, advisor, or clear roadmap
              to follow.
            </p>
          </div>
          <div className="problem-card dark reveal reveal-delay-2">
            <div className="icon-box">💸</div>
            <h3>Quality Advising Is Out of Reach</h3>
            <p>
              Existing advising services are expensive, biased, or geographically
              inaccessible — leaving rural and low-income students behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
