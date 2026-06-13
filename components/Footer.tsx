import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src="/brand_assets/logo.png"
                alt="Breksa"
                width={43}
                height={42}
              />
            </div>
            <p>
              Cambodia&apos;s academic advising service built for every student.
              Combining AI-powered tools with human mentorship to unlock global
              opportunities.
            </p>
            <div className="footer-tagline">&quot;Guiding your Education Journey&quot;</div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=61565295581796"
                className="social-link"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#features">1-on-1 Mentorship</a></li>
              <li><a href="#features">AI Academic Roadmaps</a></li>
              <li><a href="#features">Scholarship Discovery</a></li>
              <li><a href="#features">Test Preparation</a></li>
              <li><a href="#features">Essay Support</a></li>
              <li><a href="#events">Workshops &amp; Events</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#mission">About Us</a></li>
              <li><a href="#founder">Our Story</a></li>
              <li><a href="#app">Our Mentors</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#app">Download the App</a></li>
              <li><a href="#events">Book a Session</a></li>
              <li><a href="#">Partner With Us</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Breksa – AdvisED Global. All rights reserved.</p>
          <div className="footer-contact">Cambodia&apos;s Academic Advising Platform</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
