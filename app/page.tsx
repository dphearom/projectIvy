import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import WorldMap from "@/components/sections/WorldMap";
import ConsultingPrograms from "@/components/sections/ConsultingPrograms";
import AffiliationsPartners from "@/components/sections/AffiliationsPartners";
import FeaturedNews from "@/components/sections/FeaturedNews";

export const metadata: Metadata = {
  title: "Project IVY – AdvisED Global | Turn Your Ambition Into Admission",
  description:
    "Cambodia's academic advising service built for every student. Combining AI-powered tools with human mentorship to unlock global opportunities.",
};

const Page = () => (
  <>
    <RevealObserver />
    <Hero />
    <OurStory />
    <WorldMap />
    <ConsultingPrograms />
    <AffiliationsPartners />
    <FeaturedNews />
  </>
);

export default Page;
