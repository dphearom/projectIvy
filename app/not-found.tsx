import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <PageHeader
      label="404"
      title="Page not found"
      subtitle="The page you're looking for doesn't exist or has been moved."
      compact
      reveal={false}
    >
      <div className="mt-2">
        <Link className="btn btn-gold" href="/">
          Back to home <span className="arrow">→</span>
        </Link>
      </div>
    </PageHeader>
  );
}
