import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  /** Fills the viewport and centers content — used by not-found/error states that don't have much content below. */
  compact?: boolean;
  /** Set false on routes without <RevealObserver/> (error/loading states) so content isn't stuck invisible. */
  reveal?: boolean;
  /** Optional CTA slot rendered below the subtitle. */
  children?: ReactNode;
}

const PageHeader = ({ label, title, subtitle, compact = false, reveal = true, children }: Props) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-(--ink-2) text-cream pt-40 pb-25",
        compact && "min-h-screen flex flex-col items-center justify-center",
      )}
    >
      <div className="hero-bg bg-[radial-gradient(120%_120%_at_50%_0%,var(--g2),var(--g1)_70%)]">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="grain" />
      <div className="relative z-3 max-w-300 mx-auto px-8 text-center">
        {label && <span className="eyebrow gold center text-gold mb-4.5">{label}</span>}
        <h1
          className="text-[clamp(44px,5.4vw,76px)] tracking-[-0.01em] mb-5"
          data-reveal={reveal || undefined}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-[1.18rem] text-cream-soft max-w-[54ch] mx-auto"
            data-reveal={reveal || undefined}
            data-reveal-d={reveal ? "1" : undefined}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
