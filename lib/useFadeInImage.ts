import { useState } from "react";
import { cn } from "@/lib/utils";

/** Fades an image in once it finishes loading, instead of letting it pop in abruptly. */
export function useFadeInImage(className?: string) {
  const [loaded, setLoaded] = useState(false);

  return {
    loaded,
    onLoad: () => setLoaded(true),
    className: cn("transition-opacity duration-500 ease-out", loaded ? "opacity-100" : "opacity-0", className),
  };
}
