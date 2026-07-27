"use client";

import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";
import { useTranslation } from "@/components/useTranslation";
import { FacebookIcon, TelegramIcon, EmailIcon, GlobeIcon, MapPinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

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
          <ul className="list-none m-0 p-0 mt-5 flex flex-col gap-3 text-[0.98rem] text-ink-soft leading-[1.5]">
            {[
              { icon: <MapPinIcon />, content: t("office") },
              {
                icon: <TelegramIcon />,
                content: (
                  <>
                    {t("telegramLabel")}: <strong className="text-navy font-semibold">+855889493577</strong> ·{" "}
                    <strong className="text-navy font-semibold">+855964025628</strong>
                  </>
                ),
              },
              {
                icon: <EmailIcon />,
                content: (
                  <>
                    {t("emailLabel")}:{" "}
                    <a
                      href="mailto:projectivykh@gmail.com"
                      className="text-navy font-medium transition-colors duration-200 hover:text-gold-deep"
                    >
                      projectivykh@gmail.com
                    </a>
                  </>
                ),
              },
              {
                icon: <GlobeIcon />,
                content: (
                  <>
                    {t("webLabel")}:{" "}
                    <a
                      href="https://project-ivy.com"
                      className="text-navy font-medium transition-colors duration-200 hover:text-gold-deep"
                    >
                      https://project-ivy.com
                    </a>
                  </>
                ),
              },
            ].map((row, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex-none size-9 rounded-full bg-[rgba(184,150,90,0.12)] text-gold-deep flex items-center justify-center">
                  {row.icon}
                </span>
                <span>{row.content}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4 mt-7 max-[520px]:grid-cols-1">
            {[
              {
                href: "https://www.facebook.com/people/Project-IVY/61565295581796/",
                img: "/images/facebook-qr.png",
                alt: "QR code linking to Project IVY's Facebook page",
                icon: <FacebookIcon />,
                name: "Facebook",
                desc: t("facebookQrLabel"),
                chip: "bg-[#1877F2]",
              },
              {
                href: "https://t.me/SomphorsT",
                img: "/images/telegram-qr.png",
                alt: "QR code linking to Somphors Tann's Telegram",
                icon: <TelegramIcon />,
                name: "Telegram",
                desc: t("telegramQrLabel"),
                chip: "bg-[#229ED9]",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center text-center bg-paper border border-line rounded-(--radius) p-5 shadow-[0_18px_40px_-26px_rgba(14,23,41,0.2)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-full max-w-[190px] rounded-xl border border-line overflow-hidden">
                  <Image src={s.img} alt={s.alt} width={190} height={190} className="block w-full h-auto" />
                </div>
                <span
                  className={cn(
                    "mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.8rem] font-semibold text-white",
                    s.chip,
                  )}
                >
                  {s.icon}
                  {s.name}
                </span>
                <span className="mt-2 text-[0.78rem] text-ink-soft leading-[1.45] max-w-[22ch]">
                  {s.desc}
                </span>
              </a>
            ))}
          </div>
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
