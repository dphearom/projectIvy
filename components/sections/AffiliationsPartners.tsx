const US_UNIVERSITIES = [
  "Harvard", "Stanford", "Princeton", "Cornell", "Northwestern", "Brown",
  "Boston U", "Emory", "Michigan", "Rochester",
];

const GLOBAL_UNIVERSITIES = [
  "U of Toronto", "UBC", "McGill", "U of Sydney", "UNSW", "Melbourne",
  "ANU", "U of Adelaide", "Monash", "Waterloo",
];

const PARTNER_SCHOOLS = [
  "Newton Grammar School", "Canadian International School",
  "Sedbergh Vietnam", "Einstein School", "AdvisED Global", "Project Ivy",
];

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <div className={`logo-marquee${reverse ? " logo-marquee--reverse" : ""}`}>
    <div className="logo-marquee-track">
      {[...items, ...items].map((name, i) => (
        <div className="logo-marquee-slot" key={`${name}-${i}`} aria-hidden={i >= items.length}>
          <span>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const AffiliationsPartners = () => (
  <section className="affiliations-partners">
    <div className="wrap">
      <div className="affiliations-intro" data-reveal>
        <h2>Trusted by leading institutions</h2>
        <p>
          Project Ivy partners with universities, schools, and organizations across the globe
          to open doors for the next generation of scholars.
        </p>
      </div>
    </div>

    <div className="logo-marquee-group" data-reveal data-reveal-d="1">
      <MarqueeRow items={US_UNIVERSITIES} />
      <MarqueeRow items={GLOBAL_UNIVERSITIES} reverse />
      <MarqueeRow items={PARTNER_SCHOOLS} />
    </div>
  </section>
);

export default AffiliationsPartners;
