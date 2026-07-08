"use client";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";

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
        <Button onClick={reset} arrow>
          Try again
        </Button>
      </div>
    </PageHeader>
  );
}
