import type { Locale, ServiceKind } from "./site";

/**
 * The shape every locale dictionary must satisfy. Because both `pl` and `en`
 * are typed as `Dictionary`, TypeScript fails the build if the two ever drift
 * out of sync — no missing keys, no shape mismatches.
 *
 * This is a plain type module (no `server-only`) so Client Components can
 * import it as a type and receive a dictionary via props.
 */
export type Dictionary = {
  meta: {
    locale: Locale;
    localeName: string;
    siteName: string;
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    ogAlt: string;
  };
  nav: {
    home: string;
    services: string;
    work: string;
    about: string;
    process: string;
    contact: string;
    cta: string;
    menu: string;
    switchLanguage: string;
  };
  hero: {
    badge: string;
    kicker: string;
    words: string[];
    titleLead: string;
    titleMid: string;
    titleAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; suffix: string; label: string }[];
  };
  marquee: string[];
  features: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    items: { icon: string; title: string; desc: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    linkAll: string;
    cta: string;
    items: {
      kind: ServiceKind;
      tag: string;
      title: string;
      desc: string;
      points: string[];
    }[];
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    filters: { all: string; web: string; shop: string; app: string };
    kindLabel: Record<ServiceKind, string>;
    viewCase: string;
    visitSite: string;
    liveLabel: string;
    backToWork: string;
    nextProject: string;
    detail: {
      overview: string;
      scope: string;
      yearLabel: string;
      typeLabel: string;
      clientLabel: string;
      ctaTitle: string;
      ctaLead: string;
      ctaButton: string;
    };
  };
  projects: Record<
    string,
    {
      category: string;
      client: string;
      summary: string;
      description: string;
      scope: string[];
    }
  >;
  process: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { n: string; title: string; desc: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    fromLabel: string;
    plans: {
      name: string;
      tagline: string;
      price: string;
      note: string;
      featured?: boolean;
      features: string[];
      cta: string;
    }[];
    help: { text: string; linkText: string; after: string };
  };
  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    body: string[];
    valuesTitle: string;
    values: { title: string; desc: string }[];
    teamTitle: string;
    team: { name: string; role: string; bio: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    badges: string[];
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      projectType: string;
      types: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
    };
  };
  footer: {
    tagline: string;
    columns: { services: string; studio: string; contact: string };
    servicesLinks: { label: string; key: string }[];
    studioLinks: { label: string; key: string }[];
    rights: string;
    legal: { label: string; key: string }[];
    madeIn: string;
  };
  notFound: {
    title: string;
    lead: string;
    cta: string;
  };
};
