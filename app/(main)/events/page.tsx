import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Breksa – AdvisED Global",
  description:
    "Scholarship bootcamps, application workshops, and mentor meetups — reserve your spot and turn your ambition into admission.",
};

export const revalidate = 60;

const EventsPage = async () => {
  const events = await getAllEvents();

  return (
    <>
      <RevealObserver />
      <PageHeader
        label="Upcoming Events"
        title="Workshops & Bootcamps to Get You There"
        subtitle="Scholarship bootcamps, application workshops, and mentor meetups — all in one place. Reserve your spot today."
      />
      <UpcomingEvents events={events} hideHeader />
      <FinalCTA />
    </>
  );
};

export default EventsPage;
