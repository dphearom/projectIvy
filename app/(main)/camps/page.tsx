import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import CampsProgram from "@/components/sections/ServiceCampsProgram";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Camps | Project IVY – AdvisED Global",
  description:
    "Service & Cultural Immersion Programs — immersive week-long programs that build leadership, empathy, and global perspective.",
};

const CampsPage = () => (
  <>
    <RevealObserver />
    <PageHeader
      label="Programs"
      title="Service & Cultural Immersion"
      subtitle="Develop leadership through meaningful service and real-world impact. Immersive week-long programs designed for schools and students."
    />
    <CampsProgram />
    <FinalCTA />
  </>
);

export default CampsPage;
