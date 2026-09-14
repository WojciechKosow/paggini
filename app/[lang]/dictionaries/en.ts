import type { Dictionary } from "../../content/dictionary";

const en: Dictionary = {
  meta: {
    locale: "en",
    localeName: "English",
    siteName: "paggini",
    titleTemplate: "%s — paggini",
    defaultTitle: "paggini — websites, online stores & apps studio",
    defaultDescription:
      "A two-person boutique studio. We design and build websites, online stores and apps — modern, fast and never from a template. Working in Poland and abroad.",
    keywords: [
      "web design",
      "website development",
      "online store development",
      "ecommerce",
      "web apps",
      "boutique web studio",
      "Next.js developers",
    ],
    ogAlt: "paggini — websites, online stores & apps studio",
  },

  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    process: "Process",
    contact: "Contact",
    cta: "Get started",
    menu: "Menu",
    switchLanguage: "Switch language to Polish",
  },

  hero: {
    badge: "Available — taking on new projects",
    titleLead: "Websites, stores",
    titleMid: "and apps that",
    titleAccent: "make a difference",
    lead: "We're a boutique studio of two. We design and code everything from scratch — no builders, no templates. You talk directly to the people who actually build your product.",
    ctaPrimary: "See our work",
    ctaSecondary: "Let's talk",
    stats: [
      { value: "2", suffix: "", label: "people doing everything, end to end" },
      { value: "3", suffix: "", label: "client projects shipped" },
      { value: "100", suffix: "%", label: "custom design and code" },
      { value: "PL / EN", suffix: "", label: "projects at home and abroad" },
    ],
  },

  marquee: [
    "Websites",
    "Online stores",
    "Web apps",
    "UX / UI Design",
    "Next.js",
    "React",
    "Performance",
    "SEO",
    "Motion design",
    "Post-launch support",
  ],

  features: {
    eyebrow: "Why us",
    title: "Substance over promises.",
    titleAccent: "Six things you always get.",
    lead: "Whether we're building a landing page, a store or an app — these foundations ship with every project.",
    items: [
      {
        icon: "sparkles",
        title: "Modern design",
        desc: "A clean, premium look tailored to your brand — not to an off-the-shelf template.",
      },
      {
        icon: "bolt",
        title: "Fast loading",
        desc: "Performance and Core Web Vitals optimization. A site that opens instantly.",
      },
      {
        icon: "devices",
        title: "Fully responsive",
        desc: "Flawless on every screen — from the phone in your hand to a 4K monitor.",
      },
      {
        icon: "search",
        title: "SEO optimization",
        desc: "Solid technical foundations for visibility in Google from day one.",
      },
      {
        icon: "compass",
        title: "Individual approach",
        desc: "Every project is treated uniquely. No templates, no copy-paste.",
      },
      {
        icon: "lifebuoy",
        title: "Post-launch support",
        desc: "We don't disappear at launch. We stay with you once the site is live and earning.",
      },
    ],
  },

  services: {
    eyebrow: "What we do",
    title: "Three things.",
    titleAccent: "Done properly.",
    lead: "From the first sketch to launch — we design and build products that are a genuine pleasure to use.",
    linkAll: "All services",
    cta: "Let's talk about your project",
    items: [
      {
        kind: "web",
        tag: "01 — Websites",
        title: "Sites that build trust",
        desc: "Landing pages, company sites and portfolios. Fast, pixel-perfect and designed around one goal — keeping the visitor and earning the click.",
        points: [
          "Design tailored to your brand",
          "Animation and micro-interactions",
          "SEO and Core Web Vitals",
        ],
      },
      {
        kind: "shop",
        tag: "02 — Online stores",
        title: "Stores that sell",
        desc: "E-commerce from scratch or on proven engines. A smooth cart, payments, integrations and an admin panel that makes managing your catalogue easy.",
        points: [
          "Payments and integrations",
          "A frictionless checkout",
          "An easy catalogue admin",
        ],
      },
      {
        kind: "app",
        tag: "03 — Applications",
        title: "Apps built around your idea",
        desc: "Web apps and tools that bring order to your work. Auth, roles, real-time data and an architecture that grows with you.",
        points: [
          "Auth and user roles",
          "Integrations and APIs",
          "Scalable architecture",
        ],
      },
    ],
  },

  work: {
    eyebrow: "Work",
    title: "Selected projects",
    lead: "Three projects we're proud of. More are on the way.",
    filters: {
      all: "All",
      web: "Websites",
      shop: "Stores",
      app: "Apps",
    },
    kindLabel: { web: "Website", shop: "Store", app: "App" },
    viewCase: "View project",
    visitSite: "Visit site",
    liveLabel: "Live",
    backToWork: "All work",
    nextProject: "Next project",
    detail: {
      overview: "Overview",
      scope: "Scope of work",
      yearLabel: "Year",
      typeLabel: "Type",
      clientLabel: "Client",
      ctaTitle: "Want a result like this?",
      ctaLead: "Tell us about your idea — we'll get back to you within 24 hours.",
      ctaButton: "Book a call",
    },
  },

  projects: {
    tyrbud: {
      category: "Company website · construction",
      client: "Tyrbud",
      summary:
        "A modern company website for a construction contractor — a solid showcase of completed work and a simple way for clients to get in touch.",
      description:
        "Tyrbud is a construction company that needed an online presence worthy of its work. We designed a clear website that builds trust from the very first screen: a strong hero, a legible presentation of services and projects, and an unambiguous call to get in touch. It's fast, fully responsive and ready for local search.",
      scope: [
        "UX/UI design and online identity",
        "Company website with a project showcase",
        "Performance and SEO optimization",
        "Launch and post-launch support",
      ],
    },
    "fbt-outlet": {
      category: "Online store · fashion outlet",
      client: "FBT Outlet",
      summary:
        "An online store for an outlet brand — a fast catalogue, a smooth buying experience and an admin panel that's easy to run day to day.",
      description:
        "FBT Outlet sells in an outlet model, where speed and convenience are everything. We built a store that shows the offer instantly, guides the customer straight to the cart and closes the sale without needless steps. We focused on a clear catalogue, snappy filtering and a panel where the team manages products and promotions on their own.",
      scope: [
        "Store design and checkout flow",
        "Catalogue, filters and cart",
        "Payment integration",
        "Catalogue management panel",
      ],
    },
    antlerwood: {
      category: "Store & brand · lifestyle",
      client: "Antlerwood",
      summary:
        "A store and brand site for a lifestyle label aimed at customers in Poland and abroad — a consistent look and sales in two languages.",
      description:
        "Antlerwood is a brand with character that also targets markets abroad. We created a consistent, elegant store that captures the brand's mood while selling effectively. We leaned into refined aesthetics, easy browsing and readiness to serve customers in both Polish and English.",
      scope: [
        "Online branding and store design",
        "Product presentation and buying flow",
        "Two-language readiness",
        "Performance and SEO",
      ],
    },
  },

  process: {
    eyebrow: "How we work",
    title: "A process with no surprises",
    lead: "Four stages, full transparency and direct contact with the makers at every step.",
    steps: [
      {
        n: "01",
        title: "Conversation",
        desc: "We get to know your business, goals and customers. We agree on the scope and what should actually happen.",
      },
      {
        n: "02",
        title: "Design",
        desc: "We design the UX and UI. You see the product's look before a single line of code exists.",
      },
      {
        n: "03",
        title: "Build",
        desc: "We code on a modern stack (Next.js, React). Iteratively, with regular previews of progress.",
      },
      {
        n: "04",
        title: "Launch & care",
        desc: "We publish, measure and optimize. And we stay — growing the site together with you.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Transparent ranges",
    lead: "Starting prices — the final quote always depends on scope. No hidden costs.",
    fromLabel: "from",
    plans: [
      {
        name: "Website",
        tagline: "Landing pages & company sites",
        price: "€800",
        note: "Usually 1–2 weeks",
        features: [
          "Custom-tailored UI design",
          "Up to a few subpages",
          "Responsive layout & animation",
          "Basic SEO",
          "Contact form",
        ],
        cta: "Get a quote",
      },
      {
        name: "Store",
        tagline: "E-commerce that sells",
        price: "€1,800",
        note: "Most popular",
        featured: true,
        features: [
          "Everything in “Website”",
          "Catalogue and cart",
          "Payments and integrations",
          "Catalogue management panel",
          "Two-language setup",
        ],
        cta: "Book a consultation",
      },
      {
        name: "App",
        tagline: "Custom products & tools",
        price: "custom quote",
        note: "For more complex builds",
        features: [
          "Auth, roles and permissions",
          "Admin panel and integrations",
          "Architecture built to scale",
          "Workshops and strategy",
          "Support and growth",
        ],
        cta: "Let's talk",
      },
    ],
    help: {
      text: "Not sure which one fits?",
      linkText: "Drop us a line",
      after: "— we'll advise within 24 hours.",
    },
  },

  about: {
    eyebrow: "About",
    title: "Two people.",
    titleAccent: "One polished product.",
    lead: "paggini is a boutique studio where the people building your project are the ones you actually talk to — no middlemen, no account managers, no handing the work from desk to desk.",
    body: [
      "We believe a small team is an advantage, not a limitation. You talk to the people who genuinely design and code your product, so decisions happen faster and quality doesn't get diluted on the way.",
      "We build websites, stores and apps for clients in Poland and — thanks to working in two languages — abroad as well. We treat every project as our own.",
    ],
    valuesTitle: "What we believe",
    values: [
      {
        title: "Direct contact",
        desc: "You message a maker, not an inbox. No chain of middlemen.",
      },
      {
        title: "Quality over quantity",
        desc: "We take on as many projects as we can genuinely do well.",
      },
      {
        title: "Honesty",
        desc: "Clear quotes, realistic timelines and a straight opinion when something doesn't add up.",
      },
    ],
    teamTitle: "The team",
    // Placeholder names — replace with the real founders' names.
    team: [
      {
        name: "Name Surname",
        role: "Design & Frontend",
        bio: "Designs interfaces and turns them into fast, polished code.",
      },
      {
        name: "Name Surname",
        role: "Development & Delivery",
        bio: "Builds the logic, integrations and infrastructure it all stands on.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Got an idea? Let's turn it into a",
    titleAccent: "product.",
    lead: "A free call, a concrete quote and an action plan within 24 hours. No strings attached.",
    emailLabel: "Email us",
    phoneLabel: "Call us",
    badges: ["Reply within 24h", "Contract and invoice", "Talk straight to the makers"],
    form: {
      title: "Tell us a bit about the project",
      name: "Name",
      namePlaceholder: "What's your name?",
      email: "Email",
      emailPlaceholder: "you@email.com",
      projectType: "What do you need?",
      types: ["Website", "Online store", "Application", "Something else"],
      message: "Message",
      messagePlaceholder: "Tell us about your idea…",
      submit: "Send enquiry",
      note: "Sending opens your email client with a ready-made message.",
    },
  },

  footer: {
    tagline:
      "A boutique studio for websites, stores and apps. We design and code products that make a difference.",
    columns: {
      services: "Services",
      studio: "Studio",
      contact: "Contact",
    },
    servicesLinks: [
      { label: "Websites", key: "services" },
      { label: "Online stores", key: "services" },
      { label: "Applications", key: "services" },
    ],
    studioLinks: [
      { label: "About", key: "about" },
      { label: "Work", key: "work" },
      { label: "Process", key: "process" },
      { label: "Contact", key: "contact" },
    ],
    rights: "All rights reserved.",
    legal: [
      { label: "Privacy policy", key: "contact" },
      { label: "Contact", key: "contact" },
    ],
    madeIn: "Made in Poland",
  },

  notFound: {
    title: "Page not found",
    lead: "The page you're looking for may have moved, or it never existed.",
    cta: "Back to home",
  },
};

export default en;
