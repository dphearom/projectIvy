import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-header" style={{ minHeight: "60vh" }}>
      <div className="hero-bg">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="grain" />
      <div className="page-header-inner" style={{ gap: "1.25rem" }}>
        <span className="eyebrow gold center">404</span>
        <h1 data-reveal>Page not found</h1>
        <p data-reveal data-reveal-d="1">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div data-reveal data-reveal-d="2" style={{ marginTop: "0.5rem" }}>
          <Link className="btn btn-gold" href="/">
            Back to home <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
