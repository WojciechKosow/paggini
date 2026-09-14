/**
 * Locale-independent site configuration and structured data.
 *
 * Text that needs translation lives in the dictionaries
 * (`app/[lang]/dictionaries/*`). Everything here — slugs, gradients, contact
 * handles, the route map — is shared across every language so the two
 * dictionaries never drift on structural data.
 */

export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Public base URL — override in production via NEXT_PUBLIC_SITE_URL. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://paggini.studio"
).replace(/\/$/, "");

/**
 * Real contact details. The phone number is a placeholder — swap it for the
 * studio's real line (or delete the field) before going live.
 */
export const contact = {
  email: "hello@paggini.studio",
  phone: "+48 000 000 000",
  phoneHref: "tel:+48000000000",
  location: { pl: "Polska · pracujemy zdalnie", en: "Poland · working remotely" },
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Behance", href: "https://behance.net/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

/**
 * The three internal route "sections" that appear in the nav. Slugs are shared
 * across locales (e.g. /pl/services and /en/services) — the visible label is
 * translated, the URL is not. This keeps routing simple and predictable.
 */
export const routes = {
  home: "",
  services: "services",
  work: "work",
  about: "about",
  process: "process",
  contact: "contact",
} as const;

export type RouteKey = keyof typeof routes;

/** Build a locale-prefixed href, e.g. href("en", "services") -> "/en/services". */
export function href(lang: Locale, key: RouteKey = "home"): string {
  const slug = routes[key];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export function workHref(lang: Locale, slug: string): string {
  return `/${lang}/${routes.work}/${slug}`;
}

/** Which service each pillar maps to — used by the Services mockups. */
export type ServiceKind = "web" | "shop" | "app";

/**
 * Portfolio projects. Descriptive copy is localized in the dictionaries and
 * keyed by `slug`; the visual identity (gradient, accent) lives here so both
 * languages render an identical grid. Real client work — details to be filled
 * in by the studio.
 */
export type ProjectMeta = {
  slug: string;
  /** Locale-independent display name (a brand name). */
  name: string;
  kind: ServiceKind;
  year: string;
  /** External live URL, if the project is public. Optional. */
  url?: string;
  gradient: string;
  /** Feature the project on the home page. */
  featured?: boolean;
};

export const projects: ProjectMeta[] = [
  {
    slug: "tyrbud",
    name: "Tyrbud",
    kind: "web",
    year: "2025",
    gradient: "linear-gradient(135deg,#f59e0b 0%,#ef4444 55%,#b91c1c 100%)",
    featured: true,
  },
  {
    slug: "fbt-outlet",
    name: "FBT Outlet",
    kind: "shop",
    year: "2025",
    gradient: "linear-gradient(135deg,#6366f1 0%,#8b5cf6 50%,#d946ef 100%)",
    featured: true,
  },
  {
    slug: "antlerwood",
    name: "Antlerwood",
    kind: "shop",
    year: "2024",
    gradient: "linear-gradient(135deg,#0f766e 0%,#10b981 55%,#84cc16 100%)",
    featured: true,
  },
];

export function getProject(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}

type Alternates = {
  canonical: string;
  languages: Record<string, string>;
};

/** hreflang alternates for a standard route, canonical set to the given locale. */
export function routeAlternates(lang: Locale, key: RouteKey): Alternates {
  return {
    canonical: `${siteUrl}${href(lang, key)}`,
    languages: {
      pl: `${siteUrl}${href("pl", key)}`,
      en: `${siteUrl}${href("en", key)}`,
      "x-default": `${siteUrl}${href(defaultLocale, key)}`,
    },
  };
}

/** hreflang alternates for a project detail page. */
export function workAlternates(lang: Locale, slug: string): Alternates {
  return {
    canonical: `${siteUrl}${workHref(lang, slug)}`,
    languages: {
      pl: `${siteUrl}${workHref("pl", slug)}`,
      en: `${siteUrl}${workHref("en", slug)}`,
      "x-default": `${siteUrl}${workHref(defaultLocale, slug)}`,
    },
  };
}
