import ConsultationForm from "@/components/ConsultationForm";

const ContactSection = () => (
  <section className="contact-section">
    <div className="wrap contact-layout">
      <div className="contact-info" data-reveal>
        <h2>Project Ivy</h2>
        <p className="contact-address">
          Office: International Business School (IBS), Phnom Penh, Cambodia
        </p>
        <ul className="contact-details">
          <li>
            Hotline: <strong>+855 12 345 678</strong> · <strong>+855 98 765 432</strong>
          </li>
          <li>
            Email: <a href="mailto:info@projectivy.edu.kh">info@projectivy.edu.kh</a>
          </li>
          <li>
            Web: <a href="https://projectivy.edu.kh">www.projectivy.edu.kh</a>
          </li>
        </ul>
      </div>

      <div className="contact-form-wrap" data-reveal data-reveal-d="1">
        <ConsultationForm />
      </div>
    </div>
  </section>
);

export default ContactSection;
