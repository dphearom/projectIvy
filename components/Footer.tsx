import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "@/components/icons";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Image
              src="/logo-light.png"
              alt="Project IVY — Breksa AdvisED Global"
              width={1665}
              height={1304}
              className="foot-logo"
            />
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
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Programs</h4>
            <ul>
              <li><Link href="/programmes#university-readiness">University Readiness</Link></li>
              <li><Link href="/programmes#university-application">University Application</Link></li>
              {/* <li><Link href="/camps">Service &amp; Camps</Link></li> */}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#team">Our Team</Link></li>
              <li><Link href="/events">Events</Link></li>
              {/* <li><Link href="/camps">Camps</Link></li> */}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><Link href="/contact">Book a Consultation</Link></li>
              <li><Link href="/events">Workshops &amp; Events</Link></li>
              <li><Link href="/contact">Partner With Us</Link></li>
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
