/** Filename slugs for site images — save assets as `public/images/{slug}.jpg` (or .webp). */

export const PLACEHOLDERS = {
  // Page heroes
  HOME_HERO_BG: "home-hero-bg",
  ABOUT_HERO_BG: "about-hero-bg",
  ADVISING_HERO_BG: "advising-hero-bg",

  // Advising programs
  PROGRAM_READINESS: "program-university-readiness",
  PROGRAM_APPLICATION: "program-university-application",
  PROGRAM_GRADUATE_SCHOOL: "program-graduate-school",
  PROGRAM_SERVICE_CAMPS: "program-service-camps",

  // Homepage sections
  HOME_PARTNER_MAP: "home-partner-universities-map",
  HOME_NEWS_FEATURED: "home-news-service-camps",

  // Partner schools
  PARTNER_NEWTON: "partner-newton-grammar",
  PARTNER_CANADIAN: "partner-canadian-international",
  PARTNER_SEDBERGH: "partner-sedbergh-vietnam",
  PARTNER_EINSTEIN: "partner-einstein-school",

  // Events gallery
  EVENT_GALLERY_BOOTCAMP: "event-gallery-bootcamp-2026",
  EVENT_GALLERY_BOARDING: "event-gallery-boarding-workshop",
  EVENT_GALLERY_COMMON_APP: "event-gallery-common-app-session",
  EVENT_GALLERY_MENTORS: "event-gallery-mentor-meetup",
  EVENT_GALLERY_FIN_AID: "event-gallery-financial-aid",
  EVENT_GALLERY_PROFILE: "event-gallery-profile-workshop",

  // Misc (legacy / unused sections)
  EVENTS_CALENDAR: "events-calendar",
  SUCCESS_STORY_PORTRAIT: "success-story-portrait",
} as const;

export type PlaceholderSlug = (typeof PLACEHOLDERS)[keyof typeof PLACEHOLDERS];

export const TEAM_PHOTOS: Record<string, string> = {
  "Somphors Tann": "team-somphors-tann",
  "Ayden Hayes": "team-ayden-hayes",
  "Virithkarvan (Vaughn) Van Chum": "team-vaughn-van-chum",
  "Peipei Soeung": "team-peipei-soeung",
  "Kaitlyn Mady": "team-kaitlyn-mady",
  "Sonisa Leng": "team-sonisa-leng",
  "Sophuth Phon": "team-sophuth-phon",
  "Rathanakmealea (Mealea) Mang": "team-mealea-mang",
  "Vanndet Va": "team-vanndet-va",
  "Rasy Hai": "team-rasy-hai",
  "Sokniza Noeun": "team-sokniza-noeun",
  "Pichanbormey (Violette) Pisith": "team-violette-pisith",
  "Sreynich Vann": "team-sreynich-vann",
  "Phearom Duong": "team-phearom-duong",
  "Makara Teu": "team-makara-teu",
  "Sophat Tann": "team-sophat-tann",
  "Phalla": "team-phalla",
};

export function newsArticlePhoto(slug: string): string {
  return `news-${slug}`;
}

/** Full manifest for manual asset replacement. */
export const PLACEHOLDER_MANIFEST = [
  { slug: PLACEHOLDERS.HOME_HERO_BG, location: "Home — hero background", aspect: "cover" },
  { slug: PLACEHOLDERS.ABOUT_HERO_BG, location: "About — hero background", aspect: "cover" },
  { slug: PLACEHOLDERS.ADVISING_HERO_BG, location: "Advising Program — hero background", aspect: "cover" },
  { slug: PLACEHOLDERS.HOME_PARTNER_MAP, location: "Home — development journey map", aspect: "4 / 3.2" },
  { slug: PLACEHOLDERS.PROGRAM_READINESS, location: "Home + Advising — University Readiness Program", aspect: "16/10 · 4/3" },
  { slug: PLACEHOLDERS.PROGRAM_APPLICATION, location: "Home + Advising — University Application Program", aspect: "16/10 · 4/3" },
  { slug: PLACEHOLDERS.PROGRAM_SERVICE_CAMPS, location: "Events — Service & Camps Program", aspect: "4 / 3" },
  { slug: PLACEHOLDERS.HOME_NEWS_FEATURED, location: "Home — featured news spotlight", aspect: "16 / 9" },
  { slug: PLACEHOLDERS.PARTNER_NEWTON, location: "Partner schools — Newton Grammar School", aspect: "16 / 10" },
  { slug: PLACEHOLDERS.PARTNER_CANADIAN, location: "Partner schools — Canadian International School", aspect: "16 / 10" },
  { slug: PLACEHOLDERS.PARTNER_SEDBERGH, location: "Partner schools — Sedbergh Vietnam SSV", aspect: "16 / 10" },
  { slug: PLACEHOLDERS.PARTNER_EINSTEIN, location: "Partner schools — Einstein School", aspect: "16 / 10" },
  { slug: PLACEHOLDERS.EVENT_GALLERY_BOOTCAMP, location: "Events gallery — bootcamp", aspect: "cover" },
  { slug: PLACEHOLDERS.EVENT_GALLERY_BOARDING, location: "Events gallery — boarding workshop", aspect: "cover" },
  { slug: PLACEHOLDERS.EVENT_GALLERY_COMMON_APP, location: "Events gallery — Common App session", aspect: "cover" },
  { slug: PLACEHOLDERS.EVENT_GALLERY_MENTORS, location: "Events gallery — mentor meetup", aspect: "cover" },
  { slug: PLACEHOLDERS.EVENT_GALLERY_FIN_AID, location: "Events gallery — financial aid", aspect: "cover" },
  { slug: PLACEHOLDERS.EVENT_GALLERY_PROFILE, location: "Events gallery — profile workshop", aspect: "cover" },
  { slug: PLACEHOLDERS.EVENTS_CALENDAR, location: "Events calendar (unused section)", aspect: "21 / 9" },
  { slug: PLACEHOLDERS.SUCCESS_STORY_PORTRAIT, location: "Success stories — student portrait", aspect: "3 / 4" },
  ...Object.entries(TEAM_PHOTOS).map(([name, slug]) => ({
    slug,
    location: `About — team photo (${name})`,
    aspect: "4 / 5",
  })),
  { slug: "news-2025-2026-university-deadlines", location: "News — 2025–2026 University Deadlines", aspect: "16 / 10" },
  { slug: "news-october-to-dos-early-admission", location: "News — October To-Dos: Early Admission", aspect: "16 / 10" },
  { slug: "news-scholarship-hunting-basics", location: "News — Scholarship Hunting Basics", aspect: "16 / 10" },
  { slug: "news-us-admissions-landscape-2026", location: "News — U.S. Admissions for 2026", aspect: "16 / 10" },
  { slug: "news-project-ivy-partner-school-tour", location: "News — Partner School Tour", aspect: "16 / 10" },
  { slug: "news-building-your-college-list", location: "News — Building a College List", aspect: "16 / 10" },
] as const;
