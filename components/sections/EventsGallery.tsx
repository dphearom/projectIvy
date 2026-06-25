import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const GALLERY = [
  { photo: PLACEHOLDERS.EVENT_GALLERY_BOOTCAMP, caption: "Project IVY 2026 bootcamp", layout: "a" },
  { photo: PLACEHOLDERS.EVENT_GALLERY_BOARDING, caption: "Boarding school workshop", layout: "b" },
  { photo: PLACEHOLDERS.EVENT_GALLERY_COMMON_APP, caption: "Common App guide session", layout: "c" },
  { photo: PLACEHOLDERS.EVENT_GALLERY_MENTORS, caption: "Meet the mentors", layout: "d" },
  { photo: PLACEHOLDERS.EVENT_GALLERY_FIN_AID, caption: "Financial aid guidance", layout: "e" },
  { photo: PLACEHOLDERS.EVENT_GALLERY_PROFILE, caption: "Profile building workshop", layout: "f" },
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
            key={item.photo}
            data-reveal
            data-reveal-d={String((i % 4) + 1)}
          >
            <PlaceholderImage name={item.photo} className="ph-block--cover" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default EventsGallery;
