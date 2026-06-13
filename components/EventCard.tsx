import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} className="event-card">
      <div className="poster-wrap">
        <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 380px" />
      </div>
      <div className="event-body">
        <span className="event-location">
          <Image src="/icons/pin.svg" alt="" width={13} height={13} style={{ width: "auto", height: "auto" }} />
          {location}
        </span>
        <h3 className="event-title">{title}</h3>
        <div className="event-meta">
          <span>
            <Image src="/icons/calendar.svg" alt="" width={14} height={14} style={{ width: "auto", height: "auto" }} />
            {date}
          </span>
          <span>
            <Image src="/icons/clock.svg" alt="" width={14} height={14} style={{ width: "auto", height: "auto" }} />
            {time}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
