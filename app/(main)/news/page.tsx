import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import PageHeader from "@/components/PageHeader";
import NewsTrends from "@/components/NewsTrends";

export const metadata: Metadata = {
  title: "Study Abroad Trends | Project IVY – AdvisED Global",
  description: "Study abroad trends, education news, and knowledge guides from Project Ivy.",
};

const NewsPage = () => (
  <>
    <RevealObserver />
    <PageHeader title="Study abroad trends" />
    <NewsTrends />
  </>
);

export default NewsPage;
