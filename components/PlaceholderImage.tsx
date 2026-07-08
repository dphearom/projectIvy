import { ImageIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface Props {
  /** Filename slug — save the real asset as `public/images/{name}.jpg` */
  name: string;
  aspect?: string;
  className?: string;
}

const PlaceholderImage = ({ name, aspect = "16 / 10", className }: Props) => (
  <div
    className={cn(
      "w-full rounded-(--radius) overflow-hidden flex flex-col items-center justify-center gap-3 p-4 bg-cream",
      "bg-[repeating-linear-gradient(135deg,rgba(19,35,63,0.05)_0_12px,rgba(19,35,63,0.09)_12px_24px)]",
      className,
    )}
    style={{ aspectRatio: aspect }}
    aria-hidden="true"
    data-placeholder={name}
  >
    <ImageIcon className="text-ink-soft opacity-30 shrink-0" />
    <span className="font-mono text-[0.68rem] text-ink-soft bg-paper py-1.5 px-3 rounded-md border border-line text-center max-w-full truncate">
      {name}
    </span>
  </div>
);

export default PlaceholderImage;
