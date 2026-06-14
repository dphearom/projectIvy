import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllEvents, type EventDTO } from "@/lib/events";

export const revalidate = 60;

const Page = async () => {
  let events: EventDTO[] = [];
  try {
    events = await getAllEvents();
  } catch (err) {
    console.error("Failed to load events:", err);
  }

  return (
    <>
      <RevealObserver />
      <Hero />
      <Features />
      <UpcomingEvents events={events} preview limit={3} />
      <FinalCTA />
    </>
  );
};

export default Page;
