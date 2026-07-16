export type NewsCategory =
  | "education-news"
  | "international-news"
  | "knowledge-guide"
  | "study-abroad-trends";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  day: string;
  month: string;
};

export const NEWS_CATEGORIES: { id: NewsCategory; label: string }[] = [
  { id: "education-news", label: "Education news" },
  { id: "international-news", label: "International study abroad news" },
  { id: "knowledge-guide", label: "Knowledge guide" },
  { id: "study-abroad-trends", label: "Study abroad trends" },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "2025-2026-university-deadlines",
    title: "2025–2026 University Deadlines: Monthly Checklist & Tips",
    excerpt:
      "The Project IVY counseling team is here to guide you every step of the way. Staying on top of deadlines is key — missing one could mean waiting another year. This guide highlights the must-know dates for the 2025–2026 admissions cycle.",
    category: "study-abroad-trends",
    day: "12",
    month: "Sep",
  },
  {
    slug: "october-to-dos-early-admission",
    title: "October To-Dos: Get Ready for Early Admission",
    excerpt:
      "October is a critical month for students preparing university applications. Deadlines are approaching, and the choices you make now can shape your opportunities later. Here are key areas to focus on this month.",
    category: "study-abroad-trends",
    day: "03",
    month: "Oct",
  },
  {
    slug: "scholarship-hunting-basics",
    title: "Scholarship Hunting Basics for Cambodian Students",
    excerpt:
      "From merit awards to need-based aid, this knowledge guide breaks down how to find scholarships you qualify for and build a timeline that keeps every application on track.",
    category: "knowledge-guide",
    day: "18",
    month: "Aug",
  },
  {
    slug: "us-admissions-landscape-2026",
    title: "What Changed in U.S. Admissions for 2026",
    excerpt:
      "Policy updates, testing trends, and financial aid shifts — a concise overview of what international applicants should know before building their school list.",
    category: "international-news",
    day: "25",
    month: "Jul",
  },
  {
    slug: "project-ivy-partner-school-tour",
    title: "Project IVY School Tour: Career Guidance in Phnom Penh",
    excerpt:
      "Our latest education news from partner schools — workshops on communication, marketing pathways, and building language skills for global study.",
    category: "education-news",
    day: "14",
    month: "May",
  },
  {
    slug: "building-your-college-list",
    title: "Building a Balanced College List in Grade 11",
    excerpt:
      "Reach, match, and safety schools — how to research programs, compare aid policies, and align your list with your profile before senior year begins.",
    category: "knowledge-guide",
    day: "09",
    month: "Jun",
  },
];

export const ARTICLES_PER_PAGE = 4;
