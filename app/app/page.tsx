import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import AppSection from "@/components/sections/AppSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our App | Breksa – AdvisED Global",
  description:
    "The Breksa mobile app — AI advising, mentor booking, scholarship tracking, and events, in Khmer and English.",
};

const AppPage = () => {
  return (
    <>
      <RevealObserver />
      <PageHeader
        label="Our Mobile App"
        title="Your Advisor in Your Pocket"
        subtitle="Everything Breksa offers — AI guidance, mentors, scholarships, and events — available anywhere, in Khmer and English."
      />
      <AppSection />
      <FinalCTA />
    </>
  );
};

export default AppPage;
