import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Consulting Program | Project IVY – AdvisED Global",
  description: "Grade 9–12 consulting programs to guide students on their study abroad journey.",
};

const ProgrammesPage = () => (
  <>
    <RevealObserver />
    <PageHeader
      label="Consulting programs"
      title="Programs at Project IVY"
      subtitle="Discover your goals, explore academic fields, identify target schools, and develop an outstanding personal profile."
    />
    <FinalCTA />
  </>
);

export default ProgrammesPage;
