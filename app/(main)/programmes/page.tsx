import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import ProgrammeProducts from "@/components/ProgrammeProducts";
import ProgrammesHero from "@/components/sections/ProgrammesHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Consulting Program | Project IVY – AdvisED Global",
  description:
    "University Readiness, Application, and Service & Camps programs — personalized advising from Grade 9 to admission.",
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
