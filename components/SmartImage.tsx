import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { cn } from "@/lib/utils";

interface Props {
  /** Filename slug — resolves to `public/images/{name}.jpg` when available. */
  name: string;
  alt: string;
  /** Whether a real photo has been saved for this slug; falls back to PlaceholderImage otherwise. */
  available: boolean;
  aspect?: string;
  className?: string;
  sizes?: string;
}

const SmartImage = ({ name, alt, available, aspect = "16 / 10", className, sizes = "100vw" }: Props) => {
  if (!available) {
    return <PlaceholderImage name={name} aspect={aspect} className={className} />;
  }

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-(--radius)", className)}
      style={{ aspectRatio: aspect }}
    >
      <Image src={`/images/${name}.jpg`} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
};

export default SmartImage;
