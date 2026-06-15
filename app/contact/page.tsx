import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Project IVY – AdvisED Global",
  description: "Contact Project Ivy for a free consultation with an academic advisor.",
};

const ContactPage = () => (
  <>
    <RevealObserver />
    <PageHeader
      title="Contact us"
      subtitle="Please fill out the information form below — Project Ivy will contact you for consultation as soon as possible!"
    />
    <ContactSection />
  </>
);

export default ContactPage;
