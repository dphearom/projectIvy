"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Props = {
  en: ReactNode;
  km: ReactNode;
};

/**
 * Inline bilingual text swap — drop into any Server Component's JSX to make
 * one string translatable without converting the whole section to a Client
 * Component. Renders `en` until a stored "km" preference is applied client-side.
 */
const T = ({ en, km }: Props) => {
  const { language } = useLanguage();
  return <>{language === "km" ? km : en}</>;
};

export default T;
