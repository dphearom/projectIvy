const Mission = () => {
  return (
    <section className="section mission" id="mission">
      <div className="container">
        <div className="mission-visual reveal">
          <div className="mission-img-box">
            <p className="mission-quote">
              A future where every student, regardless of background, has access to
              guidance, opportunity, and a path forward.
            </p>
            <div className="mission-divider" />
            <p className="mission-tag">— Our Vision for Cambodia and Southeast Asia</p>
          </div>
        </div>
        <div className="mission-content">
          <span className="section-label">Vision &amp; Mission</span>
          <h2 className="reveal">Building Cambodia&apos;s Academic Advising Infrastructure</h2>
          <p className="reveal reveal-delay-1 lead">
            We exist to make world-class academic guidance a right, not a privilege —
            starting in Cambodia, scaling across Southeast Asia.
          </p>
          <p className="reveal reveal-delay-2">
            Breksa is not just an advising service. We&apos;re building the foundation
            for Cambodia&apos;s next generation of global leaders, researchers, and
            changemakers — one student at a time.
          </p>
          <div className="mission-pillars">
            <div className="pillar reveal reveal-delay-1">
              <div className="dot" />
              <p>
                <strong>Accessibility:</strong> Every student, regardless of geography
                or income, deserves access to quality guidance. We make it possible
                through technology and community.
              </p>
            </div>
            <div className="pillar reveal reveal-delay-2">
              <div className="dot" />
              <p>
                <strong>Authenticity:</strong> Our mentors are Cambodian scholars
                who&apos;ve walked the path. Real experience, real empathy, real
                results.
              </p>
            </div>
            <div className="pillar reveal reveal-delay-3">
              <div className="dot" />
              <p>
                <strong>Scale:</strong> What we build in Cambodia will become the
                model for academic advising across Southeast Asia — transforming human
                capital regionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
