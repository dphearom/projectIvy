import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import ScholarshipsHero from "@/components/sections/ScholarshipsHero";
import ScholarshipsSection from "@/components/sections/ScholarshipsSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Scholarships | Project IVY",
  description:
    "Need-based scholarships for university applications and IELTS — financial support for motivated students at Project IVY.",
};

const ScholarshipsPage = () => (
  <>
    <RevealObserver />
    <ScholarshipsHero />
    <ScholarshipsSection showPageHeader={false} />
    <FinalCTA />
  </>
);

export default ScholarshipsPage;
