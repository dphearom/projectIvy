export function getPathFromHref(href: string): string {
  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  return path || "/";
}

export function getHashFromHref(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex);
}

export function scrollToHash(
  hash: string,
  behavior: ScrollBehavior = "smooth"
): boolean {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const element = document.getElementById(id);
  if (!element) return false;

  element.scrollIntoView({ behavior, block: "start" });
  return true;
}

/** Retry scrolling while target sections mount after client navigation. */
export function scrollToHashWhenReady(
  hash: string,
  attempts = 8,
  delayMs = 80
): void {
  let tries = 0;

  const tryScroll = () => {
    const behavior: ScrollBehavior = tries === 0 ? "auto" : "smooth";
    if (scrollToHash(hash, behavior) || tries >= attempts) return;
    tries += 1;
    window.setTimeout(tryScroll, delayMs);
  };

  tryScroll();
}
