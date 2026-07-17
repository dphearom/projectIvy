"use client";

import ConsultationForm from "@/components/ConsultationForm";
import { useTranslation } from "@/components/useTranslation";

type Props = {
  inquiries?: string[];
};

const ContactSection = ({ inquiries }: Props) => {
  const { t } = useTranslation("contact.info");

  return (
    <section className="bg-ivory pt-18 pb-27.5">
      <div className="wrap grid grid-cols-[0.9fr_1.1fr] gap-14 items-start max-[980px]:grid-cols-1 max-[980px]:gap-9">
        <div data-reveal>
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-navy mb-4.5">
            Project <span className="ivy-brand">IVY</span>
          </h2>
          <p className="text-[1.02rem] leading-[1.65] text-ink-soft mb-5.5 max-w-[36ch]">
            {t("office")}
          </p>
          <ul className="list-none m-0 p-0 flex flex-col gap-3.5 text-[0.98rem] text-ink-soft leading-[1.55]">
            <li>
              {t("telegramLabel")}: <strong>+855889493577</strong> · <strong>+855964025628</strong>
            </li>
            <li>
              {t("emailLabel")}:{" "}
              <a
                href="mailto:projectivykh@gmail.com"
                className="text-navy font-medium transition-colors duration-200 hover:text-gold-deep"
              >
                projectivykh@gmail.com
              </a>
            </li>
            <li>
              {t("webLabel")}:{" "}
              <a
                href="https://project-ivy.com"
                className="text-navy font-medium transition-colors duration-200 hover:text-gold-deep"
              >
                https://project-ivy.com
              </a>
            </li>
          </ul>
        </div>

        <div
          className="bg-paper border border-line rounded-(--radius) p-8 shadow-[0_24px_50px_-28px_rgba(14,23,41,0.18)]"
          data-reveal
          data-reveal-d="1"
        >
          <ConsultationForm inquiries={inquiries} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
