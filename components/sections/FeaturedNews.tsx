import Link from "next/link";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";

const FeaturedNews = () => (
  <section className="featured-news" id="news">
    <div className="wrap">
      <div className="section-head section-head--center" data-reveal>
        <h2>Latest from Project IVY</h2>
      </div>

      <FeaturedSpotlight />

      <div className="events-foot" data-reveal>
        <Link className="btn btn-ghost-dark" href="/events#service-camps">
          View All News <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedNews;
