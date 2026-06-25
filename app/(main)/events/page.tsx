import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import ServiceCampsProgram from "@/components/sections/ServiceCampsProgram";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Project IVY – AdvisED Global",
  description:
    "Workshops, bootcamps, and Service & Camps programs — all in one place at Project IVY.",
};

export const revalidate = 60;

const EventsPage = async () => {
  const events = await getAllEvents();

  return (
    <>
      <RevealObserver />
      <PageHeader
        label="Events"
        title="Workshops & Programs"
        subtitle="Immersive service programs and upcoming workshops — everything happening at Project IVY."
      />
      <ServiceCampsProgram />
      <UpcomingEvents events={events} hideHeader />
      <FinalCTA />
    </>
  );
};

export default EventsPage;
