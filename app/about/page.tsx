import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import AboutNav from "@/components/AboutNav";
import AboutHero from "@/components/sections/AboutHero";
import Mission from "@/components/sections/Mission";
import VisionQuote from "@/components/sections/VisionQuote";
import WhoWeAre from "@/components/sections/WhoWeAre";
import OurTeam from "@/components/sections/OurTeam";
import SuccessStories from "@/components/sections/SuccessStories";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About | Project IVY – AdvisED Global",
  description:
    "Project Ivy mission, vision, team, and student success stories — Cambodia's academic advising platform built by students who lived the journey.",
};

const AboutPage = () => (
  <>
    <RevealObserver />
    <AboutHero />
    <AboutNav />
    <Mission />
    <VisionQuote />
    <WhoWeAre />
    <OurTeam />
    <SuccessStories
      id="stories"
      eyebrow="Student outcomes"
      title="Success stories"
      altBackground
    />
    <FinalCTA />
  </>
);

export default AboutPage;
