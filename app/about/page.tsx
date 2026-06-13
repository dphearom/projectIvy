import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import Problem from "@/components/sections/Problem";
import Mission from "@/components/sections/Mission";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Founder from "@/components/sections/Founder";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About | Breksa – AdvisED Global",
  description:
    "Why Breksa exists, who we serve, and the story behind Cambodia's academic advising platform.",
};

const AboutPage = () => {
  return (
    <>
      <RevealObserver />
      <PageHeader
        label="About Breksa"
        title="Building Cambodia's Academic Advising Infrastructure"
        subtitle="Making world-class academic guidance a right, not a privilege — starting in Cambodia, scaling across Southeast Asia."
      />
      <Problem />
      <Mission />
      <WhoWeServe />
      <Founder />
      <FinalCTA />
    </>
  );
};

export default AboutPage;
