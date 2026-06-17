import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import StatsBand from "@/components/sections/StatsBand";
import WorldMap from "@/components/sections/WorldMap";
import Beneficiaries from "@/components/sections/Beneficiaries";
import ConsultingPrograms from "@/components/sections/ConsultingPrograms";
import AffiliationsPartners from "@/components/sections/AffiliationsPartners";
import EventsGallery from "@/components/sections/EventsGallery";
import FeaturedNews from "@/components/sections/FeaturedNews";

const Page = () => (
  <>
    <RevealObserver />
    <Hero />
    <OurStory />
    <StatsBand />
    <WorldMap />
    <Beneficiaries />
    <ConsultingPrograms />
    <AffiliationsPartners />
    <EventsGallery />
    <FeaturedNews />
  </>
);

export default Page;
