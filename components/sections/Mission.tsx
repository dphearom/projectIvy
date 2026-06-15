const VALUES = [
  ["01", "Accessibility", "Every student, regardless of geography or income, deserves access to quality guidance. We make it possible through technology and community."],
  ["02", "Authenticity", "Our mentors are Cambodian scholars who've walked the path. Real experience, real empathy, real results."],
  ["03", "Scale", "What we build in Cambodia becomes the model for academic advising across Southeast Asia — transforming human capital regionally."],
] as const;

const Mission = () => (
  <section className="about-sec" id="mission">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Mission</span>
        <h2>Not just an advising service — an institution</h2>
        <p>
          We exist to make world-class academic guidance a right, not a privilege.
          Project Ivy is building the foundation for Cambodia&rsquo;s next generation of
          global leaders, researchers, and changemakers — one student at a time.
        </p>
      </div>
      <div className="values-grid">
        {VALUES.map(([n, t, d], i) => (
          <div className="value" key={n} data-reveal data-reveal-d={String(i + 1)}>
            <span className="vnum">{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Mission;
