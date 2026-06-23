export type MapCategory = "advisor" | "destination";

export type MapLocation = {
  name: string;
  region: string;
  lat: number;
  lng: number;
  category: MapCategory;
};

export const MAP_LOCATIONS: MapLocation[] = [
  // Where our advisors are from
  { name: "Harvard", region: "USA", lat: 42.377, lng: -71.1167, category: "advisor" },
  { name: "Kenyon College", region: "USA", lat: 40.3765, lng: -82.3963, category: "advisor" },
  { name: "Aiglon College", region: "Switzerland", lat: 46.305, lng: 7.045, category: "advisor" },

  // Where our students go
  { name: "Stanford", region: "USA", lat: 37.4275, lng: -122.1697, category: "destination" },
  { name: "Princeton", region: "USA", lat: 40.3431, lng: -74.6551, category: "destination" },
  { name: "Cornell", region: "USA", lat: 42.4534, lng: -76.4735, category: "destination" },
  { name: "Northwestern", region: "USA", lat: 42.0565, lng: -87.6753, category: "destination" },
  { name: "Emory", region: "USA", lat: 33.7925, lng: -84.3237, category: "destination" },
  { name: "Michigan", region: "USA", lat: 42.278, lng: -83.7382, category: "destination" },
  { name: "U of Toronto", region: "Canada", lat: 43.6629, lng: -79.3957, category: "destination" },
  { name: "UBC", region: "Canada", lat: 49.2606, lng: -123.246, category: "destination" },
  { name: "McGill", region: "Canada", lat: 45.5048, lng: -73.5772, category: "destination" },
  { name: "U of Sydney", region: "Australia", lat: -33.8886, lng: 151.1873, category: "destination" },
  { name: "Melbourne", region: "Australia", lat: -37.7963, lng: 144.9614, category: "destination" },
  { name: "ANU", region: "Australia", lat: -35.2775, lng: 149.119, category: "destination" },
];

export const MAP_LEGEND = [
  {
    category: "advisor" as const,
    label: "Where our advisors are from",
    color: "#b8965a",
  },
  {
    category: "destination" as const,
    label: "Where our students go",
    color: "#5b8fd9",
  },
];
