const FeaturedNews = () => (
  <section className="bg-[var(--ivory-2)] py-[110px]" id="news">
    <div className="wrap">
      <div className="section-head section-head--center" data-reveal>
        <h2>Latest from Project IVY</h2>
      </div>

      <div className="featured-news-spotlight featured-news-spotlight--empty" data-reveal data-reveal-d="1">
        <div className="featured-news-spotlight__body" style={{ textAlign: "center", padding: "3rem 2rem" }}>
          <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📰</p>
          <h3 style={{ marginBottom: "0.5rem" }}>More news coming soon</h3>
          <p className="featured-news-spotlight__excerpt">
            Stay tuned — we&apos;ll be sharing updates and announcements here.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedNews;
