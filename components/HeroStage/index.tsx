import type { ReactNode } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { cn } from "@/lib/utils";
import "./styles.css";

type Props = {
  id?: string;
  /** Placeholder key for the full-bleed cover image behind the grain overlay. */
  image: string;
  className?: string;
  children: ReactNode;
};

const HeroStage = ({ id = "top", image, className, children }: Props) => (
  <section className={cn("hero-stage hero-stage--image", className)} id={id}>
    <div className="hero-bg hero-bg--image" aria-hidden="true">
      <PlaceholderImage name={image} className="ph-block--cover" />
    </div>
    <div className="grain" aria-hidden="true" />
    <div className="wrap">
      <div className="relative z-3 w-full flex flex-col items-center text-center">{children}</div>
    </div>
  </section>
);

export default HeroStage;
