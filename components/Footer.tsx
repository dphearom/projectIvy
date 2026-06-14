import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-bg" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/logo-light.png" alt="Project IVY — Breksa AdvisED Global" />
            <p>
              Cambodia&apos;s academic advising service built for every student. Combining AI-powered tools
              with human mentorship to unlock global opportunities.
            </p>
            <p className="foot-quote">&ldquo;Guiding your Education Journey&rdquo;</p>
            <div className="foot-social">
              <a
                href="https://www.facebook.com/profile.php?id=61565295581796"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.5H8v3.1h2.2V21h3.3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#features">1-on-1 Mentorship</Link></li>
              <li><Link href="/#features">AI Academic Roadmaps</Link></li>
              <li><Link href="/#features">Scholarship Discovery</Link></li>
              <li><Link href="/#features">Test Preparation</Link></li>
              <li><Link href="/#features">Essay Support</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/#features">Our Mentors</Link></li>
              <li><Link href="/events">Careers</Link></li>
              <li><Link href="/events">Press</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><Link href="/events">Book a Session</Link></li>
              <li><Link href="/events">Workshops &amp; Events</Link></li>
              <li><Link href="/#cta">Partner With Us</Link></li>
              <li><Link href="/#cta">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Breksa — AdvisED Global. All rights reserved.</span>
          <span>Cambodia&apos;s Academic Advising Platform</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
