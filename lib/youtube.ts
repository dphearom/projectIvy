/** Extract a YouTube video ID from common share / watch URL formats. */
export function youtubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.slice(1).split("/")[0];
      return id || null;
    }

    if (parsed.hostname.endsWith("youtube.com")) {
      const fromQuery = parsed.searchParams.get("v");
      if (fromQuery) return fromQuery;

      const embedMatch = parsed.pathname.match(/^\/embed\/([^/?]+)/);
      if (embedMatch) return embedMatch[1];
    }
  } catch {
    return null;
  }

  return null;
}

export function youtubeEmbedUrl(url: string, autoplay = true): string | null {
  const id = youtubeVideoId(url);
  if (!id) return null;

  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    rel: "0",
    modestbranding: "1",
  });

  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}
