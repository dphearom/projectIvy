import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Events | Breksa – AdvisED Global",
  description:
    "Scholarship bootcamps, application workshops, and mentor meetups — reserve your spot and turn your ambition into admission.",
};

const EventsPage = () => {
  return (
    <>
      <RevealObserver />
      <PageHeader
        label="Upcoming Events"
        title="Workshops & Bootcamps to Get You There"
        subtitle="Scholarship bootcamps, application workshops, and mentor meetups — all in one place. Reserve your spot today."
      />
      <UpcomingEvents hideHeader />
      <FinalCTA />
    </>
  );
};

export default EventsPage;
