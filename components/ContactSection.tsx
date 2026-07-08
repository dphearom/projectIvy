import ConsultationForm from "@/components/ConsultationForm";

const ContactSection = () => (
  <section className="contact-section">
    <div className="wrap contact-layout">
      <div className="contact-info" data-reveal>
        <h2>Project <span className="ivy-brand">IVY</span></h2>
        <p className="contact-address">
          Office: Phnom Penh, Cambodia
        </p>
        <ul className="contact-details">
          <li>
            Phone: <strong>+855889493577</strong> · <strong>+855964025628</strong>
          </li>
          <li>
            Email: <a href="mailto:projectivykh@gmail.com">projectivykh@gmail.com</a>
          </li>
          <li>
            Web: <a href="https://project-ivy-flame.vercel.app/">https://project-ivy-flame.vercel.app/</a>
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
