import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        title="Contact us"
        subtitle="Please fill out the information form below — Project Ivy will contact you for consultation as soon as possible!"
      />
      <ContactSection inquiries={selected} />
    </>
  );
};

export default ContactPage;
