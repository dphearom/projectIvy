import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const FEATURED_ARTICLE = {
  title:
    "Launch of Service & Camps Programs: Develop Leadership Through Meaningful Service and Real-World Impact",
  excerpt:
    "Project IVY introduces immersive week-long programs — from Impact Week to Urban Discovery — designed to build leadership, empathy, and evidence of meaningful community engagement.",
  day: "23",
  month: "Jun",
  href: "/programmes#service-camps",
};

const FeaturedNews = () => (
  <section className="featured-news" id="news">
    <div className="wrap">
      <div className="section-head section-head--center" data-reveal>
        <h2>Latest from Project IVY</h2>
      </div>

      <Link
        className="featured-news-spotlight"
        href={FEATURED_ARTICLE.href}
        data-reveal
        data-reveal-d="1"
      >
        <div className="featured-news-spotlight__media">
          <PlaceholderImage label="Service & Camps Programs" aspect="16 / 9" className="ph-block--flat" />
        </div>
        <div className="featured-news-spotlight__body">
          <div className="featured-news-spotlight__head">
            <span className="eyebrow gold">Program launch</span>
            <time className="featured-news-spotlight__date" dateTime="2026-06-23">
              {FEATURED_ARTICLE.month} {FEATURED_ARTICLE.day}
            </time>
          </div>
          <h3>{FEATURED_ARTICLE.title}</h3>
          <p className="featured-news-spotlight__excerpt">{FEATURED_ARTICLE.excerpt}</p>
          <div className="ev-meta">
            <span className="go">Explore programs →</span>
          </div>
        </div>
      </Link>

      <div className="events-foot" data-reveal>
        <Link className="btn btn-ghost-dark" href="/news">
          View All News <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedNews;
