import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades an image in once it finishes loading, instead of letting it pop in abruptly.
 *
 * Deliberately does NOT return a ref: the React Compiler's ref-safety lint treats
 * an entire object as ref-tainted once any property on it is used as a `ref`, and
 * then flags every other property read off that same object (onLoad, className) as
 * an invalid ref access — even though none of them touch `.current`. Keep the
 * `<img>`'s ref declared locally in the component (`useRef` + a mount `useEffect`
 * calling `markLoaded()`) instead of threading it through this hook.
 *
 * That local mount-check matters: if the browser already has the image cached —
 * very common when the same src is rendered many times at once (e.g. a marquee of
 * duplicated logos) — `complete` can already be `true` by the time React attaches
 * the `onLoad` handler, and the `load` event never fires again. Without checking
 * `imgRef.current?.complete` on mount, that leaves the image stuck at opacity-0
 * forever (looks like an intermittently "empty" logo slot).
 */
export function useFadeInImage(className?: string) {
  const [loaded, setLoaded] = useState(false);
  // Stable identities (useCallback, not fresh arrows every render) so a caller's
  // `useEffect(() => ..., [fade.markLoaded])` mount-check actually runs once.
  const markLoaded = useCallback(() => setLoaded(true), []);
  const onLoad = useCallback(() => setLoaded(true), []);

  return {
    loaded,
    markLoaded,
    onLoad,
    className: cn("transition-opacity duration-500 ease-out", loaded ? "opacity-100" : "opacity-0", className),
  };
}
