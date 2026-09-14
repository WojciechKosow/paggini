# paggini

The marketing site for **paggini** — a boutique studio building websites, online
stores and apps. Built with Next.js (App Router), React and Tailwind CSS.
Fully bilingual (**Polish** + **English**).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /pl or /en
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## How it's organised

```
app/
  [lang]/                     # every page lives under a locale (pl | en)
    layout.tsx                # root layout: <html>, fonts, Nav, Footer
    page.tsx                  # home
    services/ work/ about/    # the sub-pages
    process/ contact/
    work/[slug]/              # one page per project (case study)
    dictionaries/pl.ts        # ← ALL Polish copy
    dictionaries/en.ts        # ← ALL English copy
  content/
    site.ts                   # projects list, contact details, routes, SEO helpers
    dictionary.ts             # the shape both dictionaries must match (typed)
  components/                 # Nav, Hero, Services, Portfolio, Pricing, …
  global-not-found.tsx        # bilingual 404
  sitemap.ts / robots.ts      # SEO
proxy.ts                      # sends "/" to the best language
```

## Editing content

- **Change any text** → edit `app/[lang]/dictionaries/pl.ts` and `en.ts`.
  Both files share one TypeScript shape, so if you add something to one and
  forget the other, `npm run build` tells you.
- **Add a project / realizację** →
  1. Add an entry to `projects` in `app/content/site.ts` (slug, name, kind,
     year, gradient, optional live `url`).
  2. Add the matching `slug` block under `projects` in **both** dictionaries
     (category, client, summary, description, scope).
  A page at `/pl/work/<slug>` and `/en/work/<slug>` is generated automatically.
- **Contact details / social links** → `contact` in `app/content/site.ts`
  (the phone number and team names are placeholders — replace them).
- **Team names** → the `about.team` arrays in each dictionary.

## Deployment

Set the public URL so canonical/hreflang tags and the sitemap are correct:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The site is fully static (all pages pre-rendered) apart from the tiny language
redirect in `proxy.ts`, so it deploys to any Next.js host.
