"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { cn } from "@/lib/utils";
import { useFadeInImage } from "@/lib/useFadeInImage";

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
  const fade = useFadeInImage("object-cover");
  const { markLoaded } = fade;
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) markLoaded();
  }, [markLoaded]);

  if (!available) {
    return <PlaceholderImage name={name} aspect={aspect} className={className} />;
  }

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-(--radius)", className)}
      style={{ aspectRatio: aspect }}
    >
      <Image
        ref={imgRef}
        src={`/images/${name}.jpg`}
        alt={alt}
        fill
        sizes={sizes}
        className={fade.className}
        onLoad={fade.onLoad}
      />
    </div>
  );
};

export default SmartImage;
