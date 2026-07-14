import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
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
    <PageHeader
      label="Financial Support"
      title="Scholarships at Project IVY"
      subtitle="Need-based scholarships available for university applications and IELTS."
    />
    <ScholarshipsSection showPageHeader={false} />
    <FinalCTA />
  </>
);

export default ScholarshipsPage;
