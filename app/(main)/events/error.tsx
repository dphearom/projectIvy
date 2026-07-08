"use client";

import PageHeader from "@/components/PageHeader";

export default function EventsError({ reset }: { reset: () => void }) {
  return (
    <PageHeader
      label="Oops"
      title="Something went wrong"
      subtitle="We couldn't load the events right now. Please try again."
      compact
      reveal={false}
    >
      <div className="mt-2">
        <button type="button" className="btn btn-gold" onClick={reset}>
          Try again <span className="arrow">→</span>
        </button>
      </div>
    </PageHeader>
  );
}
