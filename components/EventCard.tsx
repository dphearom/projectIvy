import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  tags: string[];
  rawDate: string;
  onClick?: () => void;
}

const EventCard = ({ title, image, location, date, time, rawDate, onClick }: Props) => {
  let day = "";
  let month = "";
  try {
    const d = new Date(rawDate);
    if (!Number.isNaN(d.getTime())) {
      day = String(d.getDate());
      month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
    } else {
      const parts = date.split(/[ ,]+/);
      if (parts.length >= 2) {
        month = parts[0].toUpperCase();
        day = parts[1];
      }
    }
  } catch (e) {
    // fallback values
  }

  return (
    <button type="button" className="ev" onClick={onClick}>
      <div className="ev-img">
        <div className="ph" aria-label={title}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 380px"
            style={{ objectFit: "cover" }}
          />
        </div>
        {day && month && (
          <div className="ev-date">
            <b>{day}</b>
            <span>{month}</span>
          </div>
        )}
      </div>
      <div className="ev-body">
        <div className="ev-loc">{location}</div>
        <h3>{title}</h3>
        <div className="ev-meta">
          <span>
            {month} {day}, 2026 · {time}
          </span>
          <span className="go">Reserve →</span>
        </div>
      </div>
    </button>
  );
};

export default EventCard;
