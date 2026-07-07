export type MapCategory = "advisor" | "destination";

export type MapLocation = {
  name: string;
  region: string;
  lat: number;
  lng: number;
  category: MapCategory;
};

export const MAP_LOCATIONS: MapLocation[] = [
  // Where are our advisors from
  { name: "Dartmouth College", region: "USA", lat: 43.70454, lng: -72.288986, category: "advisor" },
  { name: "Harvard University", region: "USA", lat: 42.374443, lng: -71.116943, category: "advisor" },
  { name: "Babson College", region: "USA", lat: 42.297, lng: -71.2643, category: "advisor" },
  { name: "Bucknell University", region: "USA", lat: 40.9545, lng: -76.8836, category: "advisor" },
  { name: "Denison University", region: "USA", lat: 40.0726, lng: -82.5229, category: "advisor" },
  { name: "Kenyon College", region: "USA", lat: 40.3756, lng: -82.3971, category: "advisor" },
  { name: "Lafayette College", region: "USA", lat: 40.7007, lng: -75.208, category: "advisor" },
  { name: "Northwestern University", region: "USA", lat: 42.0565, lng: -87.6753, category: "advisor" },
  { name: "Reed College", region: "USA", lat: 45.4809, lng: -122.6307, category: "advisor" },
  { name: "Syracuse University", region: "USA", lat: 43.0392, lng: -76.1351, category: "advisor" },
  { name: "Tufts University", region: "USA", lat: 42.4075, lng: -71.119, category: "advisor" },
  { name: "Aiglon College", region: "Switzerland", lat: 46.2989, lng: 7.0556, category: "advisor" },
  { name: "Taft School", region: "USA", lat: 41.6068, lng: -73.1168, category: "advisor" },
  { name: "Lehigh University", region: "USA", lat: 40.606803, lng: -75.378249, category: "advisor" },
  { name: "Georgia State University", region: "USA", lat: 33.757085, lng: -84.382321, category: "advisor" },

  // Where would our students go
  { name: "Brown University", region: "USA", lat: 41.82682, lng: -71.402931, category: "destination" },
  { name: "Columbia University", region: "USA", lat: 40.807384, lng: -73.963036, category: "destination" },
  { name: "Cornell University", region: "USA", lat: 42.454323, lng: -76.475266, category: "destination" },
  { name: "Princeton University", region: "USA", lat: 40.343899, lng: -74.660049, category: "destination" },
  { name: "University of Pennsylvania", region: "USA", lat: 39.952305, lng: -75.193703, category: "destination" },
  { name: "Yale University", region: "USA", lat: 41.316307, lng: -72.922585, category: "destination" },
  { name: "Amherst College", region: "USA", lat: 42.3709, lng: -72.517, category: "destination" },
  { name: "Bowdoin College", region: "USA", lat: 43.9076, lng: -69.963, category: "destination" },
  { name: "Davidson College", region: "USA", lat: 35.4993, lng: -80.8487, category: "destination" },
  { name: "Duke University", region: "USA", lat: 36.0014, lng: -78.9382, category: "destination" },
  { name: "Emory University", region: "USA", lat: 33.7971, lng: -84.3222, category: "destination" },
  { name: "Grinnell College", region: "USA", lat: 41.749, lng: -92.7201, category: "destination" },
  { name: "MIT", region: "USA", lat: 42.3601, lng: -71.0942, category: "destination" },
  { name: "New York University", region: "USA", lat: 40.7295, lng: -73.9965, category: "destination" },
  { name: "Pomona College", region: "USA", lat: 34.0975, lng: -117.7136, category: "destination" },
  { name: "Stanford University", region: "USA", lat: 37.4275, lng: -122.1697, category: "destination" },
  { name: "Tulane University", region: "USA", lat: 29.9407, lng: -90.1204, category: "destination" },
  { name: "Vanderbilt University", region: "USA", lat: 36.1447, lng: -86.8027, category: "destination" },
  { name: "Washington University in St. Louis", region: "USA", lat: 38.6488, lng: -90.3108, category: "destination" },
  { name: "University of Cambridge", region: "UK", lat: 52.204311, lng: 0.113818, category: "destination" },
  { name: "University of Oxford", region: "UK", lat: 51.754845, lng: -1.254449, category: "destination" },
  { name: "Albert College", region: "Canada", lat: 44.1627, lng: -77.3842, category: "destination" },
  { name: "Ashbury College", region: "Canada", lat: 45.444, lng: -75.667, category: "destination" },
  { name: "Bodwell High School", region: "Canada", lat: 49.3145, lng: -123.0926, category: "destination" },
  { name: "Eton College", region: "UK", lat: 51.492, lng: -0.6094, category: "destination" },
  { name: "Harrow School", region: "UK", lat: 51.5738, lng: -0.3355, category: "destination" },
  { name: "Institut Le Rosey", region: "Switzerland", lat: 46.4588, lng: 6.3376, category: "destination" },
  { name: "Doon School", region: "India", lat: 30.335, lng: 78.037, category: "destination" },
  { name: "Upper Canada College", region: "Canada", lat: 43.6961, lng: -79.407, category: "destination" },
  { name: "Pearson College UWC", region: "Canada", lat: 48.3547, lng: -123.562, category: "destination" },
  { name: "UWC Changshu China", region: "China", lat: 31.653, lng: 120.76, category: "destination" },
  { name: "UWC ISAK Japan", region: "Japan", lat: 36.3455, lng: 138.6165, category: "destination" },
  { name: "UWC Maastricht", region: "Netherlands", lat: 50.8593, lng: 5.73, category: "destination" },
  { name: "UWC Mahindra College", region: "India", lat: 18.538, lng: 73.491, category: "destination" },
  { name: "UWC Red Cross Nordic", region: "Norway", lat: 61.321, lng: 5.347, category: "destination" },
  { name: "UWC Southeast Asia", region: "Singapore", lat: 1.3036, lng: 103.7822, category: "destination" },
  { name: "Blair Academy", region: "USA", lat: 40.9831, lng: -74.9602, category: "destination" },
  { name: "Deerfield Academy", region: "USA", lat: 42.5475, lng: -72.6043, category: "destination" },
  { name: "Emma Willard School", region: "USA", lat: 42.713, lng: -73.6734, category: "destination" },
  { name: "Episcopal High School", region: "USA", lat: 38.824, lng: -77.087, category: "destination" },
  { name: "Phillips Academy Andover", region: "USA", lat: 42.6489, lng: -71.1329, category: "destination" },
];

export const MAP_LEGEND = [
  {
    category: "advisor" as const,
    label: "Where are our advisors from",
    color: "#b8965a",
  },
  {
    category: "destination" as const,
    label: "Where our students would go",
    color: "#5b8fd9",
  },
];
