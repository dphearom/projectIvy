import { cn } from "@/lib/utils";
import "./styles.css";

type Props = {
  /** Tailwind bg-[radial-gradient(...)] utility for the backdrop layer — varies per usage. */
  gradientClassName: string;
};

/** The animated blob + grain backdrop shared by PageHeader, VisionQuote, and FinalCTA's dark bands. */
const GrainyBackdrop = ({ gradientClassName }: Props) => (
  <>
    <div className={cn("hero-bg", gradientClassName)} aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
    </div>
    <div className="grain" aria-hidden="true" />
  </>
);

export default GrainyBackdrop;
