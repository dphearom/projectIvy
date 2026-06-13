import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/components/ArrowRight";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Cambodia&apos;s #1 Academic Advising Platform
          </div>
          <h1>
            Bridging <span>Potential</span> and Opportunities
          </h1>
          <p className="hero-sub">
            Breksa – AdvisED Global is Cambodia&apos;s academic advising service
            built for every student. Combining AI-powered tools with human
            mentorship to help students access scholarships, navigate
            applications, discover career paths, and unlock global opportunities.
          </p>
          <div className="hero-ctas">
            <Link href="/events" className="btn btn-accent">
              <ArrowRight />
              Get Started
            </Link>
            <a href="#features" className="btn btn-white">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="phone-mockup-wrapper">
            <div className="phone-frame left">
              <div className="phone-screen">
                <Image src="/brand_assets/ai-function.png" alt="AI Feature" fill sizes="220px" />
              </div>
            </div>
            <div className="phone-frame center">
              <div className="phone-screen">
                <Image src="/brand_assets/homescreen.png" alt="Breksa App Home" fill sizes="240px" priority />
              </div>
            </div>
            <div className="phone-frame right">
              <div className="phone-screen">
                <Image src="/brand_assets/mentor.png" alt="Mentors" fill sizes="220px" />
              </div>
            </div>
          </div>

          <div className="floating-card card-1">
            <div className="icon" style={{ background: "#EEF0FF" }}>🎓</div>
            <div>
              <div className="icon-label">Scholarships</div>
              <div>130+ Opportunities</div>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="icon" style={{ background: "#FFF3D6" }}>🤖</div>
            <div>
              <div className="icon-label">Breksa AI</div>
              <div>24/7 Guidance</div>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="icon" style={{ background: "#F0FFF4" }}>✅</div>
            <div>
              <div className="icon-label">Success Rate</div>
              <div>95% Placement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
