export default function EventsLoading() {
  return (
    <>
      <div className="page-header">
        <div className="hero-bg">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
        </div>
        <div className="grain" />
        <div className="page-header-inner">
          <span className="eyebrow gold center">Upcoming Events</span>
          <h1>Workshops &amp; Bootcamps to Get You There</h1>
        </div>
      </div>
      <section className="events">
        <div className="wrap">
          <div className="ev-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="ev-skeleton" aria-hidden="true">
                <div className="ev-skeleton__img" />
                <div className="ev-skeleton__body">
                  <div className="ev-skeleton__line ev-skeleton__line--short" />
                  <div className="ev-skeleton__line" />
                  <div className="ev-skeleton__line ev-skeleton__line--short" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
