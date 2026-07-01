import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";
import { SERVICE_CAMPS_LAUNCH } from "@/lib/featured-news";

interface Props {
  id?: string;
}

const FeaturedSpotlight = ({ id }: Props) => (
  <Link
    className="featured-news-spotlight"
    href={SERVICE_CAMPS_LAUNCH.href}
    id={id}
    data-reveal
    data-reveal-d="1"
  >
    <div className="featured-news-spotlight__media">
      <PlaceholderImage name={PLACEHOLDERS.HOME_NEWS_FEATURED} aspect="16 / 9" className="ph-block--flat" />
    </div>
    <div className="featured-news-spotlight__body">
      <div className="featured-news-spotlight__head">
        <span className="eyebrow gold">Program launch</span>
        <time className="featured-news-spotlight__date" dateTime={SERVICE_CAMPS_LAUNCH.dateTime}>
          {SERVICE_CAMPS_LAUNCH.month} {SERVICE_CAMPS_LAUNCH.day}
        </time>
      </div>
      <h3>{SERVICE_CAMPS_LAUNCH.title}</h3>
      <p className="featured-news-spotlight__excerpt">{SERVICE_CAMPS_LAUNCH.excerpt}</p>
      <div className="ev-meta">
        <span className="go">Explore programs →</span>
      </div>
    </div>
  </Link>
);

export default FeaturedSpotlight;
