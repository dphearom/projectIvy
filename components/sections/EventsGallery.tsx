import PlaceholderImage from "@/components/PlaceholderImage";

const GALLERY = [
  { label: "Project IVY 2026 bootcamp", layout: "a" },
  { label: "Boarding school workshop", layout: "b" },
  { label: "Common App guide session", layout: "c" },
  { label: "Meet the mentors", layout: "d" },
  { label: "Financial aid guidance", layout: "e" },
  { label: "Profile building workshop", layout: "f" },
] as const;

const EventsGallery = () => (
  <section className="events-gallery">
    <div className="wrap">
      <div className="events-gallery-intro" data-reveal>
        <h2>Moments from recent events</h2>
        <p>
          Workshops, bootcamps, and mentor sessions — glimpses of the community building
          futures together.
        </p>
      </div>

      <div className="events-gallery-collage">
        {GALLERY.map((item, i) => (
          <figure
            className={`events-gallery-item events-gallery-item--${item.layout}`}
            key={item.label}
            data-reveal
            data-reveal-d={String((i % 4) + 1)}
          >
            <PlaceholderImage label={item.label} className="ph-block--cover" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default EventsGallery;
