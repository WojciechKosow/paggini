import type { MetadataRoute } from "next";
import {
  locales,
  defaultLocale,
  routes,
  projects,
  siteUrl,
  href,
  workHref,
  type RouteKey,
} from "./content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const routeKeys = Object.keys(routes) as RouteKey[];

  for (const key of routeKeys) {
    for (const lang of locales) {
      entries.push({
        url: `${siteUrl}${href(lang, key)}`,
        lastModified: now,
        changeFrequency: key === "home" ? "monthly" : "yearly",
        priority: key === "home" ? 1 : 0.7,
        alternates: {
          languages: {
            pl: `${siteUrl}${href("pl", key)}`,
            en: `${siteUrl}${href("en", key)}`,
            "x-default": `${siteUrl}${href(defaultLocale, key)}`,
          },
        },
      });
    }
  }

  for (const project of projects) {
    for (const lang of locales) {
      entries.push({
        url: `${siteUrl}${workHref(lang, project.slug)}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: {
          languages: {
            pl: `${siteUrl}${workHref("pl", project.slug)}`,
            en: `${siteUrl}${workHref("en", project.slug)}`,
            "x-default": `${siteUrl}${workHref(defaultLocale, project.slug)}`,
          },
        },
      });
    }
  }

  return entries;
}
