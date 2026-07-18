"use client";

import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { kmPresence } from "@/lib/i18n/messages";
import { cn } from "@/lib/utils";

function getAtPath(tree: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (node, segment) => (node && typeof node === "object" ? (node as Record<string, unknown>)[segment] : undefined),
      tree,
    );
}

/** Which font-family variable this text would normally resolve through — matches its surrounding heading/body context. */
type FontKind = "display" | "body";

/**
 * Wraps next-intl's useTranslations so real Khmer text renders in the Khmer
 * font pairing, while any key still missing from translations/km.json keeps
 * the site's default Latin typography instead of inheriting a mismatched
 * Khmer font. See app/globals.css's `khmer-script` utility.
 *
 * `khmer-script` only redefines the --font-display/--font-body variables —
 * it doesn't itself set `font-family`, since a span inherits its ancestor's
 * already-resolved value rather than re-reading the variable. Pass `kind` to
 * match whichever of the two the surrounding element would normally use
 * (defaults to "body", the common case) so the span re-declares the right one.
 */
export function useTranslation(namespace: string) {
  const translate = useTranslations(namespace);
  const locale = useLocale();

  const wrap = (path: string, content: ReactNode, kind: FontKind): ReactNode =>
    locale === "km" && getAtPath(kmPresence, `${namespace}.${path}`) === true ? (
      <span lang="km" className={cn("khmer-script", kind === "display" ? "font-display" : "font-body")}>
        {content}
      </span>
    ) : (
      content
    );

  const t = (key: string, kind: FontKind = "body"): ReactNode => wrap(key, translate(key), kind);

  /** For a translated array (e.g. a list of paragraphs) — use each returned node as a single child, not spread as siblings. */
  const tArray = (key: string, kind: FontKind = "body"): ReactNode[] =>
    (translate.raw(key) as string[]).map((text, i) => wrap(`${key}.${i}`, text, kind));

  /**
   * For a string containing an inline tag (e.g. "Building <em>Academic Advising</em>
   * Infrastructure") — reconstructs the embedded element via next-intl's rich-text
   * API. If a language's translation doesn't include the tag, it's simply omitted
   * and the text renders flat, so a Khmer string that skips the marker still works.
   */
  const tRich = (
    key: string,
    components: Record<string, (chunks: ReactNode) => ReactNode>,
    kind: FontKind = "body",
  ): ReactNode => wrap(key, translate.rich(key, components), kind);

  /** Whether `key` has an entry in translations/en.json at all — for content (e.g. a long list of records) not yet fully migrated into the dictionary, so untranslated items can keep rendering straight from their original data source. */
  const has = (key: string): boolean => translate.has(key);

  /** Plain localized string, without the khmer-script font wrapper — for contexts that require a real string (e.g. `aria-label`), not a ReactNode. */
  const tPlain = (key: string): string => translate(key);

  return { t, tArray, tRich, has, tPlain };
}
