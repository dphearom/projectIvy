import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import ProgrammeProducts from "@/components/ProgrammeProducts";
import ProgrammesHero from "@/components/sections/ProgrammesHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Consulting Program | Project IVY – AdvisED Global",
  description: "Grade 9–12 consulting programs to guide students on their study abroad journey.",
};

const ProgrammesPage = () => (
  <>
    <RevealObserver />
    <ProgrammesHero />
    <ProgrammeProducts />
    <FinalCTA />
  </>
);

export default ProgrammesPage;
