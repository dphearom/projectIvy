import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  center?: boolean;
  /** Lighter gold tone for dark/navy backgrounds. */
  onNavy?: boolean;
} & Omit<ComponentPropsWithoutRef<"span">, "className"> & { className?: string };

const Eyebrow = ({ center = false, onNavy = false, className, children, ...rest }: Props) => (
  <span
    className={cn(
      "inline-flex items-center gap-3.5 font-body font-semibold text-xs tracking-[0.28em] uppercase",
      "before:content-[''] before:h-px before:w-9.5 before:bg-gold before:opacity-70",
      onNavy ? "text-gold-soft" : "text-gold-deep",
      center && "justify-center after:content-[''] after:h-px after:w-9.5 after:bg-gold after:opacity-70",
      className,
    )}
    {...rest}
  >
    {children}
  </span>
);

export default Eyebrow;
