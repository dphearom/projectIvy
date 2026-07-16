export type Scholarship = {
  id: string;
  title: string;
  /** Filename slug — resolves to `public/images/{photo}.jpg` when set. */
  photo?: string;
  /** YouTube video URL for the package thumbnail preview. */
  videoUrl?: string;
  overview: string;
  learnMore: string;
  eligibility: string[];
  selectionCriteria: string[];
  footnote?: string;
};

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "university-application",
    title: "University Application Scholarship",
    photo: "scholarships/university-application-scholarship",
    videoUrl: "https://youtu.be/JG71m85v0xE",
    overview:
      "Application guidance for students with ambition and financial need.",
    learnMore:
      "Need-based support for selected students from the Project IVY team throughout the university application process. Selected students may receive advising support for essays, school lists, scholarships, interviews, and application strategy.",
    eligibility: [
      "Are preparing for university applications",
      "Need professional advising to strengthen their applications",
      "Show academic motivation and personal commitment",
      "Are willing to actively participate in advising sessions",
      "Can complete required tasks and meet program deadlines",
    ],
    selectionCriteria: [
      "Academic background",
      "Motivation and personal goals",
      "Commitment to the program",
      "Readiness to complete application",
      "Availability of scholarship funding",
    ],
    footnote:
      "Scholarships are limited and may be offered as partial support depending on each student's situation and available funding.",
  },
  {
    id: "university-application-fee",
    title: "University Application Fee Scholarship",
    photo: "scholarships/university-application-fee-scholarship",
    videoUrl: "https://youtu.be/fXmSIm8n0hY",
    overview:
      "Provides financial assistance to help students offset application-related costs.",
    learnMore:
      "Need-based support to help students offset application-related costs. This scholarship may help cover or reduce costs such as university application fees, standardized test score report fees, document submission costs, or other approved application-related expenses.",
    eligibility: [
      "Read to apply but demonstrate financial needs in submitting their applications",
      "Show academic motivation and personal commitment",
      "Are willing to actively participate in advising sessions",
      "Can complete required tasks and meet program deadlines",
    ],
    selectionCriteria: [
      "Financial need",
      "Academic background",
      "Motivation and personal goals",
      "Commitment to the program",
      "Readiness to complete application",
      "Availability of scholarship funding",
    ],
    footnote:
      "Scholarships are limited and may be offered as partial support depending on each student's situation and available funding.",
  },
  {
    id: "ielts-fee",
    title: "IELTS Fee Scholarship",
    photo: "scholarships/ielts-fee-scholarship",
    videoUrl: "https://youtu.be/sFfvw7rhdT8",
    overview:
      "Provides financial assistance to help students offset IELTS testing fee.",
    learnMore:
      "Support for students preparing for IELTS as part of their university or scholarship journey. Selected students may receive partial scholarships to offset the IELTS fee.",
    eligibility: [
      "Are preparing for IELTS test",
      "Demonstrate financial need",
      "Show academic motivation and personal commitment",
      "Can complete required tasks and meet deadlines",
    ],
    selectionCriteria: [
      "Financial need",
      "Academic background",
      "Motivation and personal goals",
      "Readiness to take IELTS",
      "Availability of scholarship funding",
    ],
  },
];
