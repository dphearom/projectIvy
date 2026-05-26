export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event-full.png",
    title: "Project IVY 2026",
    slug: "project-ivy-2026",
    location: "IBS",
    date: "July 15-21 2026",
    time: "09:00 AM - 5:00 PM",
  },
  {
    image: "/images/event1.png",
    title: "All About Boarding School",
    slug: "boarding-school",
    location: "IBS",
    date: "15 July 2026",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Common App Guide",
    slug: "common-app-guide",
    location: "IBS",
    date: "15 July 2026",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "Building Your Profile",
    slug: "building-your-profile",
    location: "IBS",
    date: "16 July 2026",
    time: "09:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "Financial Aid Guidance",
    slug: "fianancial-aid-guidance",
    location: "IBS",
    date: "16 July 2026",
    time: "1:30 PM",
  },
  {
    image: "/images/event5.png",
    title: "Project IVY, Meet Mentors",
    slug: "meet-mentors-1",
    location: "IBS",
    date: "July 17 2026",
    time: "09:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "Project IVY, Meet Mentors ",
    slug: "meet-mentors-2",
    location: "IBS",
    date: "July 18 2026",
    time: "9:00 AM",
  },

];

export default events;