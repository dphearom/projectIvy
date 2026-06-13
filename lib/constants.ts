export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  venue: string;
  mode: string;
  audience: string;
  organizer: string;
  overview: string;
  description: string;
  agenda: string[];
  tags: string[];
};

export const events: EventItem[] = [
  {
    image: "/images/event-full.png",
    title: "Project IVY 2026",
    slug: "project-ivy-2026",
    location: "IBS",
    date: "July 15-21 2026",
    time: "09:00 AM - 5:00 PM",
    venue: "International Business School (IBS), Phnom Penh",
    mode: "In-person",
    audience: "High schoolers & undergraduate applicants",
    organizer: "Breksa – AdvisED Global",
    overview:
      "A week-long flagship bootcamp covering everything from profile building to application strategy, with mentors who've made it to top global universities.",
    description:
      "Project IVY 2026 is Breksa's signature week-long bootcamp designed to take ambitious Cambodian students from uncertainty to a complete, competitive application. Across seven days you'll work alongside mentors from Harvard, Kenyon, and beyond — building your profile, drafting essays, exploring scholarships, and meeting the people who can guide your journey.",
    agenda: [
      "Day 1 — Orientation & goal-setting workshop",
      "Day 2 — Boarding school & university landscape",
      "Day 3 — Building a standout profile",
      "Day 4 — Essays & personal statements",
      "Day 5 — Financial aid & scholarships",
      "Day 6 — 1-on-1 mentor matching",
      "Day 7 — Mock interviews & next steps",
    ],
    tags: ["Bootcamp", "Flagship", "Scholarships", "Mentorship"],
  },
  {
    image: "/images/event1.png",
    title: "All About Boarding School",
    slug: "boarding-school",
    location: "IBS",
    date: "15 July 2026",
    time: "09:00 AM",
    venue: "International Business School (IBS), Phnom Penh",
    mode: "In-person",
    audience: "Students & parents (Grades 8–11)",
    organizer: "Breksa – AdvisED Global",
    overview:
      "Everything you need to know about applying to international boarding schools — from choosing the right fit to nailing the application.",
    description:
      "An introductory session for students and families considering international boarding schools. We'll demystify the application timeline, financial aid options, and what admissions teams really look for — drawing on mentors who attended schools like Aiglon College.",
    agenda: [
      "Why consider boarding school?",
      "Choosing the right school for you",
      "Application timeline & requirements",
      "Financial aid & scholarships",
      "Q&A with boarding school alumni",
    ],
    tags: ["Workshop", "Boarding School", "Parents"],
  },
  {
    image: "/images/event2.png",
    title: "Common App Guide",
    slug: "common-app-guide",
    location: "IBS",
    date: "15 July 2026",
    time: "10:00 AM",
    venue: "International Business School (IBS), Phnom Penh",
    mode: "In-person",
    audience: "University applicants",
    organizer: "Breksa – AdvisED Global",
    overview:
      "A hands-on walkthrough of the Common Application — section by section — so you can submit with confidence.",
    description:
      "The Common App can feel overwhelming. In this guided session we'll walk through each part of the application together, from the activities list to the additional information section, with practical tips for international students applying to U.S. universities.",
    agenda: [
      "Creating & navigating your Common App account",
      "The activities & honors sections",
      "Requesting recommendations",
      "Common mistakes to avoid",
      "Live walkthrough & Q&A",
    ],
    tags: ["Workshop", "Applications", "Common App"],
  },
  {
    image: "/images/event3.png",
    title: "Building Your Profile",
    slug: "building-your-profile",
    location: "IBS",
    date: "16 July 2026",
    time: "09:00 AM",
    venue: "International Business School (IBS), Phnom Penh",
    mode: "In-person",
    audience: "High schoolers (Grades 9–12)",
    organizer: "Breksa – AdvisED Global",
    overview:
      "Learn how to build a compelling, authentic profile through extracurriculars, leadership, and impact — starting today.",
    description:
      "Strong applications start years before the deadline. This workshop helps students identify their strengths and build a focused, authentic profile — through extracurriculars, projects, and leadership that admissions teams value.",
    agenda: [
      "What makes a profile stand out",
      "Choosing extracurriculars with intention",
      "Leadership & community impact",
      "Documenting your journey",
      "Building your 4-year plan",
    ],
    tags: ["Workshop", "Profile", "Extracurriculars"],
  },
  {
    image: "/images/event4.png",
    title: "Financial Aid Guidance",
    slug: "fianancial-aid-guidance",
    location: "IBS",
    date: "16 July 2026",
    time: "1:30 PM",
    venue: "International Business School (IBS), Phnom Penh",
    mode: "In-person",
    audience: "Students & parents",
    organizer: "Breksa – AdvisED Global",
    overview:
      "Demystifying need-based aid, merit scholarships, and how to fund a global education as a Cambodian student.",
    description:
      "Cost should never be the reason a student misses out on a global education. This session covers need-based aid, merit scholarships, and the financial documents you'll need — with real examples of how Cambodian students have funded their studies abroad.",
    agenda: [
      "Need-based vs. merit aid explained",
      "Finding fully-funded scholarships",
      "Preparing financial documents",
      "Writing scholarship essays",
      "Q&A with scholarship recipients",
    ],
    tags: ["Workshop", "Financial Aid", "Scholarships", "Parents"],
  },
  {
    image: "/images/event5.png",
    title: "Project IVY, Meet Mentors",
    slug: "meet-mentors-1",
    location: "IBS",
    date: "July 17 2026",
    time: "09:00 AM",
    venue: "International Business School (IBS), Phnom Penh",
    mode: "In-person",
    audience: "All Project IVY participants",
    organizer: "Breksa – AdvisED Global",
    overview:
      "Meet and connect with Breksa mentors who've navigated the path from Cambodia to top global universities.",
    description:
      "A dedicated networking session to match students with mentors who fit their goals. Hear journeys firsthand, ask the questions that matter, and build the relationships that will support you through your application.",
    agenda: [
      "Mentor introductions & journeys",
      "Small-group mentor circles",
      "Speed mentoring rounds",
      "Booking your 1-on-1 sessions",
    ],
    tags: ["Networking", "Mentorship"],
  },
  {
    image: "/images/event6.png",
    title: "Project IVY, Meet Mentors",
    slug: "meet-mentors-2",
    location: "IBS",
    date: "July 18 2026",
    time: "9:00 AM",
    venue: "International Business School (IBS), Phnom Penh",
    mode: "In-person",
    audience: "All Project IVY participants",
    organizer: "Breksa – AdvisED Global",
    overview:
      "A second mentor-matching session — more mentors, more fields, more chances to find your guide.",
    description:
      "The second of our mentor-matching sessions, featuring additional mentors across new fields of study. Whether you're into the sciences, humanities, or business, you'll find someone who's walked your path.",
    agenda: [
      "Mentor introductions & journeys",
      "Field-specific mentor circles",
      "Speed mentoring rounds",
      "Booking your 1-on-1 sessions",
    ],
    tags: ["Networking", "Mentorship"],
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((event) => event.slug === slug);
}

export default events;
