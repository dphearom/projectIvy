export type Language = "en" | "km";

/** localStorage key used to persist the visitor's chosen language across navigation and refreshes. */
export const LANGUAGE_STORAGE_KEY = "piv_lang";

export const DEFAULT_LANGUAGE: Language = "en";

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "km";
}
