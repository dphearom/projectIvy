const VALUES = [
  ["01", "Accessibility", "Every student, regardless of geography or income, deserves access to quality guidance. We make it possible through technology and community."],
  ["02", "Authenticity", "Our mentors are Cambodian scholars who’ve walked the path. Real experience, real empathy, real results."],
  ["03", "Scale", "What we build in Cambodia becomes the model for academic advising across Southeast Asia — transforming human capital regionally."],
] as const;

const VisionMission = () => (
  <section className="about-sec alt" id="mission">
    <div className="wrap">
      <div className="shead" data-reveal>
        <span className="eyebrow gold">Vision &amp; Mission</span>
        <h2>Not just an advising service — an institution</h2>
        <p className="lead">
          We exist to make world-class academic guidance a right, not a privilege.
          Project IVY is building the foundation for Cambodia&rsquo;s next generation
          of global leaders, researchers, and changemakers — one student at a time.
        </p>
      </div>
      <div className="svc-grid">
        {VALUES.map(([n, t, d], i) => (
          <div className="svc" key={n} data-reveal data-reveal-d={String(i + 1)}>
            <div className="svc-num">{n}</div>
            <h3>{t}</h3>
            <p>{d}</p>
            <div className="svc-line" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMission;
