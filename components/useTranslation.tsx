"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
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

  const wrap = (path: string, text: string, kind: FontKind): ReactNode =>
    getAtPath(kmPresence, `${namespace}.${path}`) === true ? (
      <span lang="km" className={cn("khmer-script", kind === "display" ? "font-display" : "font-body")}>
        {text}
      </span>
    ) : (
      text
    );

  const t = (key: string, kind: FontKind = "body"): ReactNode => wrap(key, translate(key), kind);

  /** For a translated array (e.g. a list of paragraphs) — use each returned node as a single child, not spread as siblings. */
  const tArray = (key: string, kind: FontKind = "body"): ReactNode[] =>
    (translate.raw(key) as string[]).map((text, i) => wrap(`${key}.${i}`, text, kind));

  return { t, tArray };
}
