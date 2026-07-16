import SmartImage from "@/components/SmartImage";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  alt: string;
  available: boolean;
  videoUrl: string;
  aspect?: string;
  className?: string;
  sizes?: string;
};

const VideoThumbnail = ({
  name,
  alt,
  available,
  videoUrl,
  aspect = "4 / 3",
  className,
  sizes = "100vw",
}: Props) => (
  <a
    href={videoUrl}
    className={cn(
      "group relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep",
      className,
    )}
    aria-label={`Watch video: ${alt}`}
    onClick={(e) => e.stopPropagation()}
  >
    <SmartImage
      name={name}
      alt={alt}
      available={available}
      aspect={aspect}
      className="rounded-none transition-transform duration-300 group-hover:scale-[1.03] group-active:scale-[1.01]"
      sizes={sizes}
    />
    <span
      className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[rgba(14,23,41,0.28)] transition-[background-color] duration-300 group-hover:bg-[rgba(14,23,41,0.42)] group-active:bg-[rgba(14,23,41,0.48)]"
      aria-hidden="true"
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-[rgba(230,33,23,0.92)] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] transition-[transform,background-color] duration-300 group-hover:scale-110 group-hover:bg-[rgb(230,33,23)] group-active:scale-105">
        <svg viewBox="0 0 24 24" className="ml-0.5 size-6 fill-white" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
    <span className="pointer-events-none absolute bottom-2.5 left-2.5 rounded-full bg-[rgba(14,23,41,0.72)] px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-white">
      Watch video
    </span>
  </a>
);

export default VideoThumbnail;
