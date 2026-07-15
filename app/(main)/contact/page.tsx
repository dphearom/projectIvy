import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import ContactHero from "@/components/sections/ContactHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Project IVY",
  description: "Contact Project Ivy for a free consultation with an academic advisor.",
};

type Props = {
  searchParams: Promise<{ inquiries?: string }>;
};

const ContactPage = async ({ searchParams }: Props) => {
  const { inquiries } = await searchParams;
  const selected = inquiries ? inquiries.split(",").filter(Boolean) : [];

  return (
    <>
      <RevealObserver />
      <ContactHero />
      <ContactSection inquiries={selected} />
    </>
  );
};

export default ContactPage;
