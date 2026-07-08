import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";

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
        <Button href="/" arrow>
          Back to home
        </Button>
      </div>
    </PageHeader>
  );
}
