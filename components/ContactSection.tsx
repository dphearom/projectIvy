"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";
import { useTranslation } from "@/components/useTranslation";
import {
  FacebookIcon,
  TelegramIcon,
  TikTokIcon,
  InstagramIcon,
  EmailIcon,
  GlobeIcon,
  MapPinIcon,
} from "@/components/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  inquiries?: string[];
};

type Social = {
  id: string;
  href: string;
  img: string;
  alt: string;
  icon: ReactNode;
  name: string;
  desc: ReactNode;
};

const ContactSection = ({ inquiries }: Props) => {
  const { t } = useTranslation("contact.info");
  const [active, setActive] = useState<Social | null>(null);

  const socials: Social[] = [
    {
      id: "facebook",
      href: "https://www.facebook.com/people/Project-IVY/61565295581796/",
      img: "/images/facebook-qr.png",
      alt: "QR code linking to Project IVY's Facebook page",
      icon: <FacebookIcon />,
      name: "Facebook",
      desc: t("facebookQrLabel"),
    },
    {
      id: "telegram",
      href: "tg://resolve?phone=17403589348",
      img: "/images/telegram-qr-v2.png",
      alt: "QR code linking to Project IVY's Telegram",
      icon: <TelegramIcon />,
      name: "Telegram",
      desc: t("telegramQrLabel"),
    },
    {
      id: "tiktok",
      href: "https://www.tiktok.com/@project_ivy_kh",
      img: "/images/tiktok-qr.png",
      alt: "QR code linking to Project IVY's TikTok",
      icon: <TikTokIcon />,
      name: "TikTok",
      desc: t("tiktokQrLabel"),
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/project_ivy_kh",
      img: "/images/instagram-qr.png",
      alt: "QR code linking to Project IVY's Instagram",
      icon: <InstagramIcon />,
      name: "Instagram",
      desc: t("instagramQrLabel"),
    },
  ];

  return (
    <section className="bg-ivory pt-18 pb-27.5 max-[640px]:pt-14 max-[640px]:pb-16">
      <div className="wrap grid grid-cols-[1fr_1.05fr] gap-14 items-start max-[980px]:grid-cols-1 max-[980px]:gap-9">
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

          <div className="mt-8">
            <p className="m-0 mb-3.5 text-[0.82rem] font-semibold tracking-[0.04em] uppercase text-ink-soft">
              {t("followUs")}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s)}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.88rem] font-semibold text-navy bg-transparent border border-gold/55 transition-[transform,background-color,border-color] duration-200 hover:bg-[rgba(184,150,90,0.12)] hover:border-gold hover:-translate-y-0.5 cursor-pointer"
                >
                  {s.icon}
                  {s.name}
                </button>
              ))}
            </div>
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

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="sm:max-w-sm">
          {active && (
            <>
              <DialogHeader className="items-center text-center mb-5">
                <DialogTitle className="inline-flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-full border border-gold/55 text-navy">
                    {active.icon}
                  </span>
                  {active.name}
                </DialogTitle>
                <DialogDescription>{active.desc}</DialogDescription>
              </DialogHeader>

              <div className="mx-auto w-full max-w-[240px] rounded-2xl border border-line/60 overflow-hidden bg-white shadow-[0_16px_36px_-28px_rgba(14,23,41,0.35)]">
                <Image
                  src={active.img}
                  alt={active.alt}
                  width={240}
                  height={240}
                  className="block w-full h-auto"
                  priority
                />
              </div>

              <a
                href={active.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-[0.92rem] font-semibold text-navy bg-transparent border border-gold/55 transition-[background-color,border-color,transform] duration-200 hover:bg-[rgba(184,150,90,0.12)] hover:border-gold hover:-translate-y-0.5"
              >
                {active.icon}
                {t("openProfile")}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
