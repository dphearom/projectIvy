import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import AboutNav from "@/components/AboutNav";
import AboutHero from "@/components/sections/AboutHero";
import Problem from "@/components/sections/Problem";
import VisionQuote from "@/components/sections/VisionQuote";
import VisionMission from "@/components/sections/VisionMission";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Founder from "@/components/sections/Founder";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About | Project IVY – AdvisED Global",
  description:
    "Why Project IVY exists, who we serve, and the story behind Cambodia's academic advising platform — built by students who lived the journey.",
};

const AboutPage = () => (
  <>
    <RevealObserver />
    <AboutHero />
    <AboutNav />
    <Problem />
    <VisionQuote />
    <VisionMission />
    <WhoWeServe />
    <Founder />
    <FinalCTA />
  </>
);

export default AboutPage;
