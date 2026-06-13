import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FinalCTA from "@/components/sections/FinalCTA";

const Page = () => {
  return (
    <>
      <RevealObserver />
      <Hero />
      <Features />
      <UpcomingEvents preview limit={3} />
      <FinalCTA />
    </>
  );
};

export default Page;
