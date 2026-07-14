import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Project IVY",
  description:
    "Workshops, bootcamps, and upcoming events — all in one place at Project IVY.",
};

export const revalidate = 60;

const EventsPage = async () => {
  const events = await getAllEvents();

  return (
    <>
      <RevealObserver />
      <PageHeader
        label="Events"
        title="Upcoming Events"
        subtitle="Workshops, bootcamps, and sessions happening at Project IVY — all in one place."
      />
      <UpcomingEvents events={events} hideHeader />
      <FinalCTA />
    </>
  );
};

export default EventsPage;
