export type ProgramSummary = {
  id: string;
  title: string;
  desc: string;
  href: string;
};

export const ADVISING_PROGRAM_SUMMARIES: ProgramSummary[] = [
  {
    id: "university-readiness",
    title: "University Readiness Program",
    desc: "Build the foundation for long-term academic and admissions success.",
    href: "/programmes#university-readiness",
  },
  {
    id: "university-application",
    title: "University Application Program",
    desc: "Craft compelling applications that open doors to top universities.",
    href: "/programmes#university-application",
  },
  {
    id: "graduate-school",
    title: "Graduate School Advising Program",
    desc: "Turn your experience into admission to world-class graduate schools.",
    href: "/programmes#graduate-school",
  },
];

/** @deprecated Use ADVISING_PROGRAM_SUMMARIES */
export const PROGRAM_SUMMARIES = ADVISING_PROGRAM_SUMMARIES;

export const SERVICE_CAMPS_SUMMARY: ProgramSummary = {
  id: "service-camps",
  title: "Service & Camps Programs",
  desc: "Develop leadership through meaningful service and real-world impact.",
  href: "/events#service-camps",
};

export type ProgramTier = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  deliverables?: string[];
};

export type ProgramDetail = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tiers: ProgramTier[];
};

export const PROGRAM_DETAILS: ProgramDetail[] = [
  {
    id: "university-readiness",
    title: "University Readiness Program",
    tagline: "Personalized advising roadmap from Grade 9 to university application",
    description:
      "Build the foundation for long-term academic and admissions success with grade-by-grade guidance that helps students discover interests, develop depth, and shape a standout profile.",
    tiers: [
      {
        name: "Grade 9 — The Foundation Year",
        price: "$399",
        tagline: "Build the profile that opens every door",
        features: [
          "Initial profile assessment",
          "Goal & interest discovery",
          "Academic planning (Grades 9–12 roadmap)",
          "Course selection guidance",
          "Extracurricular exploration strategy",
          "Leadership & community service guidance",
          "Parent consultation (1 per year)",
          "3 one-on-one advising sessions",
        ],
        deliverables: [
          "Personalized 4-year roadmap",
          "Activity portfolio tracker",
          "Summer program recommendations",
        ],
      },
      {
        name: "Grade 10 — The Building Year",
        price: "$599",
        tagline: "Turn your interests into a compelling track record",
        features: [
          "Everything from Grade 9",
          "Leadership development planning",
          "Competition recommendations",
          "Scholarship and enrichment opportunities",
          "Summer program guidance",
          "Resume development",
          "LinkedIn profile setup (optional)",
          "4 one-on-one advising sessions",
        ],
        deliverables: [
          "Leadership project roadmap",
          "Activity portfolio",
          "Updated student profile",
        ],
      },
      {
        name: "Grade 11 — The Positioning Year",
        price: "$899",
        tagline: "Shape your track record into a standout admissions story",
        features: [
          "University fit assessment",
          "College list development",
          "SAT/ACT strategy (if applicable)",
          "Major exploration",
          "Summer program planning",
          "Personal brand and narrative development",
          "Activities list optimization",
          "Essay brainstorming",
          "6 one-on-one advising sessions",
        ],
        deliverables: [
          "Preliminary university list",
          "Personal narrative framework",
          "Application strategy document",
        ],
      },
    ],
  },
  {
    id: "university-application",
    title: "University Application Program",
    tagline: "Turn your ambition into admission",
    description:
      "Craft compelling applications that open doors to top universities with hands-on coaching across every stage of the application process.",
    tiers: [
      {
        name: "Standard Package",
        price: "$399",
        tagline: "Up to 3 universities (acceptance rate above 20%)",
        features: [
          "Common App guidance",
          "University selection",
          "Activities list review",
          "Personal statement review",
          "Application review and submission support",
        ],
      },
      {
        name: "Premium Package",
        price: "$699",
        tagline: "Up to 3 universities (Top 50–100)",
        features: [
          "Everything in Standard",
          "Additional essay rounds",
          "Supplemental essay coaching",
          "Scholarship guidance",
          "Strategic positioning for competitive admissions",
        ],
      },
      {
        name: "Elite Package",
        price: "$1,199",
        tagline:
          "Up to 3 universities (Ivy League, Stanford, MIT, Caltech, Duke, Cambridge, Oxford, and similar)",
        features: [
          "Everything in Premium",
          "Extensive essay development",
          "Interview preparation",
          "Application narrative strategy",
          "Parent consultation",
          "Priority support",
        ],
      },
    ],
  },
  {
    id: "graduate-school",
    title: "Graduate School Advising Program",
    tagline: "Turn your experience into admission to world-class graduate schools",
    description:
      "Build the profile that opens doors to top graduate schools with expert guidance across every stage of the graduate admissions process.",
    tiers: [
      {
        name: "Readiness Package",
        price: "$999",
        tagline:
          "Build the profile that opens doors to top graduate schools. Pricing varies based on the duration of the program and the services selected.",
        features: [
          "Career and graduate study advising",
          "University and program selection",
          "Scholarship application support",
          "CV refinement",
          "Statement of Purpose coaching",
          "Research proposal guidance (if applicable)",
          "Recommendation letter strategy",
          "Interview preparation",
          "Application review",
        ],
      },
      {
        name: "Standard Package",
        price: "$399",
        tagline: "Up to 3 universities (Acceptance rate above 20%)",
        features: [
          "Application guidance",
          "University selection",
          "Activities list review",
          "3 SOPs reviews",
          "Application review and submission support",
        ],
      },
      {
        name: "Premium Package",
        price: "$699",
        tagline: "Up to 3 universities (Top 50-100)",
        features: [
          "Everything in Standard",
          "5 SOPs reviews",
          "Scholarship guidance",
          "Strategic positioning for competitive admissions",
        ],
      },
      {
        name: "Elite Package",
        price: "$1,199",
        tagline:
          "Up to 3 universities (Ivy League, Stanford, MIT, Caltech, Duke, Cambridge, Oxford, and similar institutions)",
        features: [
          "Everything in Premium",
          "10 SOPs reviews",
          "Interview preparation",
          "Application narrative strategy",
          "Priority support",
        ],
      },
    ],
  },
  {
    id: "service-camps",
    title: "Service & Camps Programs",
    tagline: "Develop leadership through meaningful service and real-world impact",
    description:
      "Immersive week-long programs that build leadership, empathy, and evidence of meaningful community engagement — customizable for schools.",
    tiers: [
      {
        name: "Impact Week",
        price: "Custom pricing",
        tagline: "Lead with purpose. Serve with impact.",
        features: [
          "Community service projects with local organizations",
          "Team-based social impact challenges",
          "Leadership workshops",
          "Reflection and impact journaling",
          "Project planning and execution",
          "Mentorship from community leaders",
          "Service portfolio documentation",
        ],
      },
      {
        name: "Blue Horizon Week",
        price: "Custom pricing",
        tagline: "Explore. Challenge yourself. Grow beyond the classroom.",
        features: [
          "Beach clean-up initiatives",
          "Environmental sustainability workshops",
          "Team-building activities",
          "Outdoor leadership challenges",
          "Marine ecosystem learning",
          "Reflection sessions",
        ],
      },
      {
        name: "Roots & Horizons Week",
        price: "Custom pricing",
        tagline: "Discover your heritage. Expand your perspective.",
        features: [
          "Visits to cultural and historical sites",
          "Heritage preservation activities",
          "Storytelling and cultural exchange sessions",
          "Meetings with artists, historians, and community leaders",
          "Cambodian identity and global citizenship workshops",
          "Reflection and presentation projects",
        ],
      },
      {
        name: "Mindfulness Week",
        price: "Custom pricing",
        tagline: "Build balance. Strengthen resilience. Unlock your potential.",
        features: [
          "Mindfulness and meditation sessions",
          "Stress management workshops",
          "Physical wellness activities",
          "Goal-setting and self-reflection exercises",
          "Mental resilience training",
          "Digital wellbeing discussions",
          "Personal growth coaching",
        ],
      },
      {
        name: "Urban Discovery Week",
        price: "Custom pricing",
        tagline: "Experience the city. Explore future possibilities.",
        features: [
          "Companies & startup visits",
          "Career exploration workshops",
          "Networking with professionals",
          "Innovation and entrepreneurship sessions",
          "Public speaking and professional etiquette training",
          "City challenge and problem-solving activities",
        ],
      },
    ],
  },
];

export const ADVISING_PROGRAM_DETAILS = PROGRAM_DETAILS.filter(
  (p) => p.id !== "service-camps"
);

export const SERVICE_CAMPS_DETAIL = PROGRAM_DETAILS.find(
  (p) => p.id === "service-camps"
)!;
