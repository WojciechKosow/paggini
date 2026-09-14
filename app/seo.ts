import type { Metadata } from "next";
import {
  siteUrl,
  href,
  workHref,
  routeAlternates,
  workAlternates,
  type Locale,
  type RouteKey,
} from "./content/site";

function ogLocale(lang: Locale) {
  return lang === "pl" ? "pl_PL" : "en_US";
}

/** Metadata for a standard route page (title is merged with the layout template). */
export function pageMetadata({
  lang,
  key,
  title,
  description,
}: {
  lang: Locale;
  key: RouteKey;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: routeAlternates(lang, key),
    openGraph: {
      type: "website",
      title: `${title} — paggini`,
      description,
      url: `${siteUrl}${href(lang, key)}`,
      locale: ogLocale(lang),
      siteName: "paggini",
    },
    twitter: { card: "summary_large_image", title: `${title} — paggini`, description },
  };
}

/** Metadata for a project detail page. */
export function workMetadata({
  lang,
  slug,
  title,
  description,
}: {
  lang: Locale;
  slug: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: workAlternates(lang, slug),
    openGraph: {
      type: "article",
      title: `${title} — paggini`,
      description,
      url: `${siteUrl}${workHref(lang, slug)}`,
      locale: ogLocale(lang),
      siteName: "paggini",
    },
    twitter: { card: "summary_large_image", title: `${title} — paggini`, description },
  };
}
