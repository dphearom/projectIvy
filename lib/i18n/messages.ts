import en from "@/translations/en.json";
import km from "@/translations/km.json";
import type { Language } from "./language";

type Messages = typeof en;

/**
 * Recursively fills any key missing from `overrides` with the value from
 * `base` — lets translations/km.json stay incomplete during the page-by-page
 * rollout without next-intl throwing on a missing message.
 */
function deepMerge<T>(base: T, overrides: unknown): T {
  if (Array.isArray(base)) {
    if (!Array.isArray(overrides)) return base;
    return base.map((item, i) => (i in overrides ? deepMerge(item, overrides[i]) : item)) as T;
  }

  if (
    typeof overrides !== "object" ||
    overrides === null ||
    typeof base !== "object" ||
    base === null
  ) {
    return (overrides ?? base) as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(overrides as Record<string, unknown>)) {
    result[key] = deepMerge((base as Record<string, unknown>)[key], value);
  }
  return result as T;
}

export function getMessages(language: Language): Messages {
  return language === "km" ? deepMerge(en, km) : en;
}

/**
 * Mirrors `en.json`'s shape with `true`/`false` leaves — true where
 * `km.json` actually defines that key. Lets consumers tell "real Khmer
 * translation" apart from "fell back to English" for the same resolved
 * string, so only real Khmer text gets tagged into the Khmer font.
 */
function buildPresence(base: unknown, overrides: unknown): unknown {
  if (Array.isArray(base)) {
    return base.map((item, i) =>
      Array.isArray(overrides) && i in overrides ? buildPresence(item, overrides[i]) : false,
    );
  }

  if (typeof base === "object" && base !== null) {
    const overridesObj =
      typeof overrides === "object" && overrides !== null
        ? (overrides as Record<string, unknown>)
        : {};
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(base)) {
      result[key] = buildPresence((base as Record<string, unknown>)[key], overridesObj[key]);
    }
    return result;
  }

  return overrides !== undefined && overrides !== null;
}

export const kmPresence = buildPresence(en, km);
