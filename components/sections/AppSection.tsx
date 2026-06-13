import Image from "next/image";

const APP_FEATURES = [
  {
    title: "Breksa AI — 24/7 Smart Advisor",
    body: "Ask any question about scholarships, applications, or career paths. Get instant, personalized answers powered by AI trained on real Cambodian student journeys.",
  },
  {
    title: "Browse & Book Expert Mentors",
    body: "Filter mentors by university, field, or experience. Book 1-on-1 sessions directly in the app, with Khmer-speaking advisors who understand your context.",
  },
  {
    title: "Scholarship Database & Tracker",
    body: "Discover fully-funded and partial scholarships, track deadlines, and get alerts for new opportunities matched to your profile.",
  },
  {
    title: "Upcoming Workshops & Events",
    body: "Register for live sessions, webinars, and application boot camps — all in one place, with Khmer-language options available.",
  },
];

const AppSection = () => {
  return (
    <section className="section app-section" id="app">
      <div className="container">
        <div className="app-phones">
          <div className="app-phone short reveal">
            <div className="screen">
              <Image src="/brand_assets/ai-2.png" alt="Breksa AI Scholarship Advisor" fill sizes="200px" />
            </div>
          </div>
          <div className="app-phone tall reveal reveal-delay-1">
            <div className="screen">
              <Image src="/brand_assets/homescreen.png" alt="Breksa Home Screen" fill sizes="200px" />
            </div>
          </div>
          <div className="app-phone short reveal reveal-delay-2">
            <div className="screen">
              <Image src="/brand_assets/information.png" alt="Scholarship Information" fill sizes="200px" />
            </div>
          </div>
        </div>
        <div className="app-content">
          <span className="section-label">Our Mobile App</span>
          <h2 className="reveal">Your Advisor in Your Pocket — Anytime, Anywhere</h2>
          <p className="reveal reveal-delay-1">
            The Breksa app puts the full power of Cambodia&apos;s most comprehensive
            academic advising platform in your hands. Available in Khmer and
            English, designed for every student from Siem Reap to Phnom Penh.
          </p>
          <ul className="app-features">
            {APP_FEATURES.map((f, i) => (
              <li key={f.title} className={`app-feature-item reveal reveal-delay-${i + 1}`}>
                <div className="check">✓</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
