import type { Language } from "@/lib/i18n/language";

export type LocalizedVideo = Record<Language, string>;

export function localizedVideo(en: string, km: string): LocalizedVideo {
  return { en, km };
}

export function videoForLanguage(videos: LocalizedVideo, language: Language): string {
  return videos[language];
}
