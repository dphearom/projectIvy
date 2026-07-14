import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import AboutNav from "@/components/AboutNav";
import AboutHero from "@/components/sections/AboutHero";
import Mission from "@/components/sections/Mission";
import VisionQuote from "@/components/sections/VisionQuote";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OurTeam from "@/components/sections/OurTeam";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About | Project IVY",
  description:
    "Project IVY mission, vision, team, and why Cambodian students choose us — an educational advisory organization built by Khmer scholars.",
};

const AboutPage = () => (
  <>
    <RevealObserver />
    <AboutHero />
    <AboutNav />
    <Mission />
    <VisionQuote />
    <WhoWeAre />
    <WhyChooseUs />
    <OurTeam />
    <FinalCTA />
  </>
);

export default AboutPage;
