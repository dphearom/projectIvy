"use client";

import { useState } from "react";
import SmartImage from "@/components/SmartImage";
import VideoModal from "@/components/VideoModal";
import { useTranslation } from "@/components/useTranslation";
import type { LocalizedVideo } from "@/lib/videos";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  alt: string;
  available: boolean;
  videos: LocalizedVideo;
  aspect?: string;
  className?: string;
  sizes?: string;
};

const VideoThumbnail = ({
  name,
  alt,
  available,
  videos,
  aspect = "4 / 3",
  className,
  sizes = "100vw",
}: Props) => {
  const [open, setOpen] = useState(false);
  const { t, tPlain } = useTranslation("shared.buttons");

  return (
    <>
      <button
        type="button"
        className={cn(
          "group relative flex flex-col w-full overflow-hidden text-left appearance-none border-0 p-0 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-deep",
          className,
        )}
        aria-label={`${tPlain("watchVideo")}: ${alt}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        {/* flex-1 lets the thumbnail stretch to fill the button's full height when it's taller
            than the aspect-ratio would naturally produce (e.g. a grid row sized by sibling
            text content) — object-cover on the underlying <img> crops rather than distorts. */}
        <SmartImage
          name={name}
          alt={alt}
          available={available}
          aspect={aspect}
          className="flex-1 rounded-none transition-transform duration-300 group-hover:scale-[1.03] group-active:scale-[1.01]"
          sizes={sizes}
        />
        {/* Bottom-anchored scrim — grounds the label pill without flattening the whole image */}
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(14,23,41,0.62)] via-[rgba(14,23,41,0.05)] to-transparent transition-opacity duration-300 group-hover:from-[rgba(14,23,41,0.72)]"
          aria-hidden="true"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="flex size-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/40 shadow-[0_8px_28px_-8px_rgba(0,0,0,0.55)] transition-[transform,background-color,border-color] duration-300 group-hover:scale-110 group-hover:bg-white/25 group-hover:border-gold-soft group-active:scale-105">
            <svg viewBox="0 0 24 24" className="ml-1 size-10 fill-gold drop-shadow-[0_0_0_rgba(0,0,0,0.55)]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
        <span className="pointer-events-none absolute bottom-2.5 left-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-white">
          {t("watchVideo")}
        </span>
      </button>

      {open && <VideoModal videos={videos} title={alt} onClose={() => setOpen(false)} />}
    </>
  );
};

export default VideoThumbnail;
