import { localizedVideo, type LocalizedVideo } from "@/lib/videos";

export type Scholarship = {
  id: string;
  title: string;
  /** Filename slug — resolves to `public/images/{photo}.jpg` when set. */
  photo?: string;
  /** YouTube video URLs for the scholarship thumbnail preview. */
  videos?: LocalizedVideo;
  overview: string;
  learnMore: string;
  eligibility: string[];
  selectionCriteria: string[];
  footnote?: string;
  /** External application form URL (e.g. Google Form). */
  applyUrl?: string;
};

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "university-application",
    title: "University Application Scholarship",
    photo: "scholarships/university-application-scholarship",
    videos: localizedVideo(
      "https://youtu.be/JG71m85v0xE",
      "https://youtu.be/U_s0GUajhaE",
    ),
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
    videos: localizedVideo(
      "https://youtu.be/fXmSIm8n0hY",
      "https://youtu.be/nYQoAAjdlO0",
    ),
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
    id: "ivy-english-proficiency",
    title: "IVY English Proficiency Scholarship",
    photo: "scholarships/ielts-fee-scholarship",
    videos: localizedVideo(
      "https://youtu.be/sFfvw7rhdT8",
      "https://youtu.be/7sCn3e8ypIE",
    ),
    overview:
      "Need-based support for IELTS, TOEFL, and Duolingo English Test fees — in collaboration with Aiglon College.",
    learnMore:
      "In collaboration with the Student Philanthropy Committee at Aiglon College, Project IVY offers English Proficiency Testing Scholarships for IELTS, TOEFL, and the Duolingo English Test. Ten scholarships are available: 2 full (100%), 4 half (50%), and 4 partial (25%). English proficiency tests are often required for international study, and their cost can be a significant barrier for talented students from low-income backgrounds — financial circumstances should not prevent students from demonstrating their potential.",
    eligibility: [
      "Are preparing to take IELTS, TOEFL, or the Duolingo English Test",
      "Face financial barriers to covering the exam fee",
      "Show strong motivation to improve and demonstrate English proficiency",
      "Can clearly explain why this scholarship would make a meaningful impact",
    ],
    selectionCriteria: [
      "Financial need",
      "High motivation",
      "Clear impact — ability to articulate suitability for this scholarship",
      "Availability of scholarship funding",
    ],
    footnote:
      "Shortlisted candidates will be contacted for further interviews.",
    applyUrl: "https://forms.gle/FJArtGuufGG6Jy418",
  },
];
