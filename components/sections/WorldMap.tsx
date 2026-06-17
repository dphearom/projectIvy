import PlaceholderImage from "@/components/PlaceholderImage";

const LOCATIONS = [
  { name: "Harvard", region: "USA", x: 26, y: 36 },
  { name: "Stanford", region: "USA", x: 14, y: 40 },
  { name: "Princeton", region: "USA", x: 27, y: 37 },
  { name: "Cornell", region: "USA", x: 26, y: 35 },
  { name: "Northwestern", region: "USA", x: 23, y: 36 },
  { name: "Emory", region: "USA", x: 24, y: 42 },
  { name: "Michigan", region: "USA", x: 23, y: 35 },
  { name: "Toronto", region: "Canada", x: 25, y: 32 },
  { name: "UBC", region: "Canada", x: 15, y: 30 },
  { name: "McGill", region: "Canada", x: 27, y: 31 },
  { name: "Sydney", region: "Australia", x: 86, y: 72 },
  { name: "Melbourne", region: "Australia", x: 84, y: 78 },
  { name: "ANU", region: "Australia", x: 87, y: 68 },
] as const;

const WorldMap = () => (
  <section className="world-map">
    <div className="world-map-stage" aria-label="Map highlighting partner university locations">
      <PlaceholderImage label="World map" className="ph-block--cover" />

      <div className="world-map-shade" aria-hidden="true" />

      <div className="world-map-copy" data-reveal>
        <h2>Where our students go</h2>
        <p>
          Project Ivy connects ambitious students with partner institutions across North
          America, Australia, and beyond — from Ivy League campuses to leading research
          universities worldwide.
        </p>
      </div>

      {LOCATIONS.map((loc, i) => (
        <div
          key={loc.name}
          className="world-map-pin"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          data-reveal
          data-reveal-d={String((i % 5) + 1)}
        >
          <span className="world-map-pin-dot" aria-hidden="true" />
          <span className="world-map-pin-label">
            {loc.name}
            <small>{loc.region}</small>
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default WorldMap;
