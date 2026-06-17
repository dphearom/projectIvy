import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const ARTICLES = [
  {
    title: "The Launch of the IvyTalent Scholarship Program x Newton Grammar School: A Milestone in the Journey to Conquer International Scholarships",
    day: "02",
    month: "Apr",
    href: "/news",
  },
  {
    title: "Start Early, Stay Persistent, and Follow the Right Path: Pham Hong Minh's Journey to Winning a $300,000 U.S. Scholarship",
    day: "06",
    month: "May",
    href: "/news",
  },
  {
    title: "Project Ivy Honors: Nguyen Xuan Ha My Conquers Soka University of America",
    day: "14",
    month: "May",
    href: "/news",
  },
];

const FeaturedNews = () => (
  <section className="featured-news" id="news">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <h2>Latest from Project Ivy</h2>
      </div>
      <div className="ev-grid">
        {ARTICLES.map((article, i) => (
          <Link
            className="ev"
            href={article.href}
            key={article.title}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <div className="ev-img">
              <PlaceholderImage label="News image" aspect="16 / 10" className="ph-block--flat" />
              <div className="ev-date">
                <b>{article.day}</b>
                <span>{article.month}</span>
              </div>
            </div>
            <div className="ev-body">
              <h3>{article.title}</h3>
              <div className="ev-meta">
                <span>{article.month} {article.day}</span>
                <span className="go">Read →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="events-foot" data-reveal>
        <Link className="btn btn-ghost-dark" href="/news">
          View All News <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedNews;
