import type { ReactNode } from "react";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { cn } from "@/lib/utils";
import "./styles.css";

type Props = {
  id?: string;
  /** Placeholder key for the full-bleed cover image behind the grain overlay. */
  image: string;
  /** Set once a real photo has been saved for `image` (resolves to `public/images/{image}.jpg`). */
  available?: boolean;
  /** CSS object-position for the real photo, e.g. "center 70%" to bias the crop upward. */
  imagePosition?: string;
  className?: string;
  children: ReactNode;
};

const HeroStage = ({
  id = "top",
  image,
  available = false,
  imagePosition = "center",
  className,
  children,
}: Props) => (
  <section className={cn("hero-stage hero-stage--image", className)} id={id}>
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      {available ? (
        <Image
          src={`/images/${image}.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="ph-block--cover"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
      ) : (
        <PlaceholderImage name={image} className="ph-block--cover" />
      )}
    </div>
    <div className="grain" aria-hidden="true" />
    <div className="wrap">
      <div className="relative z-3 w-full flex flex-col items-center text-center">{children}</div>
    </div>
  </section>
);

export default HeroStage;
