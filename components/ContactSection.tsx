"use client";

import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";
import { useTranslation } from "@/components/useTranslation";
import {
  FacebookIcon,
  TelegramIcon,
  TikTokIcon,
  EmailIcon,
  GlobeIcon,
  MapPinIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

type Props = {
  inquiries?: string[];
};

const ContactSection = ({ inquiries }: Props) => {
  const { t } = useTranslation("contact.info");

  const socials = [
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
      href: "tg://resolve?phone=17403589348",
      img: "/images/telegram-qr-v2.png",
      alt: "QR code linking to Project IVY's Telegram",
      icon: <TelegramIcon />,
      name: "Telegram",
      desc: t("telegramQrLabel"),
      chip: "bg-[#229ED9]",
    },
    {
      href: "https://www.tiktok.com/@project_ivy_kh",
      img: "/images/tiktok-qr.png",
      alt: "QR code linking to Project IVY's TikTok",
      icon: <TikTokIcon />,
      name: "TikTok",
      desc: t("tiktokQrLabel"),
      chip: "bg-[#111111]",
    },
  ];

  return (
    <section className="bg-ivory pt-18 pb-27.5 max-[640px]:pt-14 max-[640px]:pb-16">
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
                    {t("telegramLabel")}:{" "}
                    <strong className="text-navy font-semibold">+1 740 358 9348</strong>
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
                <span className="min-w-0 break-words">{row.content}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-3 mt-7 max-[720px]:grid-cols-1 max-[720px]:gap-3 sm:gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center text-center bg-paper border border-line rounded-(--radius) p-4 sm:p-5 shadow-[0_18px_40px_-26px_rgba(14,23,41,0.2)] transition-transform duration-200 hover:-translate-y-1 max-[720px]:flex-row max-[720px]:items-center max-[720px]:text-left max-[720px]:gap-4"
              >
                <div className="w-full max-w-[160px] sm:max-w-[190px] rounded-xl border border-line overflow-hidden max-[720px]:w-[112px] max-[720px]:max-w-[112px] max-[720px]:flex-none">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    width={190}
                    height={190}
                    className="block w-full h-auto"
                  />
                </div>
                <div className="flex flex-col items-center max-[720px]:items-start max-[720px]:min-w-0">
                  <span
                    className={cn(
                      "mt-4 max-[720px]:mt-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.8rem] font-semibold text-white",
                      s.chip,
                    )}
                  >
                    {s.icon}
                    {s.name}
                  </span>
                  <span className="mt-2 text-[0.78rem] text-ink-soft leading-[1.45] max-w-[22ch] max-[720px]:max-w-none">
                    {s.desc}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div
          className="bg-paper border border-line rounded-(--radius) p-8 max-[640px]:p-5 shadow-[0_24px_50px_-28px_rgba(14,23,41,0.18)]"
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
