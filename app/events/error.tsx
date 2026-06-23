"use client";

export default function EventsError({ reset }: { reset: () => void }) {
  return (
    <div className="page-header" style={{ minHeight: "60vh" }}>
      <div className="hero-bg">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="grain" />
      <div className="page-header-inner" style={{ gap: "1.25rem" }}>
        <span className="eyebrow gold center">Oops</span>
        <h1>Something went wrong</h1>
        <p>We couldn&apos;t load the events right now. Please try again.</p>
        <div style={{ marginTop: "0.5rem" }}>
          <button type="button" className="btn btn-gold" onClick={reset}>
            Try again <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
