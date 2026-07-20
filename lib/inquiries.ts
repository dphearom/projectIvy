/** Human-readable labels for the ids stored in `consultation_requests.inquiries`. */
export const INQUIRY_LABELS: Record<string, string> = {
  "middle-school": "Exploration Program",
  "university-readiness": "University Readiness Program",
  "university-application": "University Application Program",
  "graduate-school": "Graduate School Advising Program",
  "service-camps": "Service & Camps Programs",
};

export const inquiryLabel = (id: string) => INQUIRY_LABELS[id] ?? id;

export const INQUIRY_STATUSES = ["pending", "contacted", "handled", "archived"] as const;
export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];
