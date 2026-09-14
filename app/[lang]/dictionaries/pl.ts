import type { Dictionary } from "../../content/dictionary";

const pl: Dictionary = {
  meta: {
    locale: "pl",
    localeName: "Polski",
    siteName: "paggini",
    titleTemplate: "%s — paggini",
    defaultTitle: "paggini — studio stron, sklepów i aplikacji",
    defaultDescription:
      "Kameralne studio dwójki twórców. Projektujemy i budujemy strony internetowe, sklepy i aplikacje — nowocześnie, szybko i bez szablonów. Pracujemy w Polsce i za granicą.",
    keywords: [
      "strony internetowe",
      "sklepy internetowe",
      "aplikacje webowe",
      "projektowanie stron",
      "studio webowe",
      "tworzenie stron Polska",
      "web development",
    ],
    ogAlt: "paggini — studio stron, sklepów i aplikacji",
  },

  nav: {
    home: "Start",
    services: "Usługi",
    work: "Realizacje",
    about: "O nas",
    process: "Proces",
    contact: "Kontakt",
    cta: "Zaczynamy",
    menu: "Menu",
    switchLanguage: "Zmień język na angielski",
  },

  hero: {
    badge: "Wolne terminy — przyjmujemy nowe projekty",
    kicker: "Studio stron, sklepów i aplikacji",
    words: ["Strony.", "Sklepy.", "Aplikacje."],
    titleLead: "Strony, sklepy",
    titleMid: "i aplikacje, które",
    titleAccent: "robią różnicę",
    lead: "Jesteśmy kameralnym studiem dwóch osób. Projektujemy i kodujemy od zera — bez gotowców i szablonów. Ty rozmawiasz bezpośrednio z ludźmi, którzy budują Twój produkt.",
    ctaPrimary: "Zobacz realizacje",
    ctaSecondary: "Porozmawiajmy",
    stats: [
      { value: "2", suffix: "", label: "osoby, które robią wszystko od A do Z" },
      { value: "3", suffix: "", label: "wdrożone projekty klientów" },
      { value: "100", suffix: "%", label: "kodu i designu szytego na miarę" },
      { value: "PL / EN", suffix: "", label: "projekty w kraju i za granicą" },
    ],
  },

  marquee: [
    "Strony internetowe",
    "Sklepy online",
    "Aplikacje webowe",
    "UX / UI Design",
    "Next.js",
    "React",
    "Wydajność",
    "SEO",
    "Motion design",
    "Wsparcie po wdrożeniu",
  ],

  features: {
    eyebrow: "Dlaczego my",
    title: "Konkret zamiast obietnic.",
    titleAccent: "Sześć rzeczy, które dostajesz zawsze.",
    lead: "Niezależnie od tego, czy budujemy landing page, sklep czy aplikację — te fundamenty są w każdym projekcie.",
    items: [
      {
        icon: "sparkles",
        title: "Nowoczesny design",
        desc: "Czysty, premium wygląd dopasowany do Twojej marki — nie do gotowego szablonu.",
      },
      {
        icon: "bolt",
        title: "Szybkie ładowanie",
        desc: "Optymalizacja wydajności i Core Web Vitals. Strona, która otwiera się natychmiast.",
      },
      {
        icon: "devices",
        title: "Responsywność",
        desc: "Idealnie na każdym ekranie — od telefonu w dłoni po monitor 4K.",
      },
      {
        icon: "search",
        title: "Optymalizacja SEO",
        desc: "Solidne fundamenty techniczne pod widoczność w Google od pierwszego dnia.",
      },
      {
        icon: "compass",
        title: "Indywidualne podejście",
        desc: "Każdy projekt traktujemy unikalnie. Bez szablonów, bez kopiuj-wklej.",
      },
      {
        icon: "lifebuoy",
        title: "Wsparcie po wdrożeniu",
        desc: "Nie znikamy po starcie. Jesteśmy z Tobą, gdy strona już żyje i zarabia.",
      },
    ],
  },

  services: {
    eyebrow: "Co robimy",
    title: "Trzy rzeczy.",
    titleAccent: "Robione porządnie.",
    lead: "Od pierwszego szkicu po wdrożenie — projektujemy i budujemy produkty, z których korzysta się z przyjemnością.",
    linkAll: "Wszystkie usługi",
    cta: "Porozmawiajmy o Twoim projekcie",
    items: [
      {
        kind: "web",
        tag: "01 — Strony internetowe",
        title: "Strony, które budują zaufanie",
        desc: "Landing page'e, strony firmowe i portfolio. Szybkie, dopracowane w każdym pikselu i zaprojektowane wokół jednego celu — żeby klient został i kliknął.",
        points: [
          "Design szyty na miarę marki",
          "Animacje i mikrointerakcje",
          "SEO i Core Web Vitals",
        ],
      },
      {
        kind: "shop",
        tag: "02 — Sklepy internetowe",
        title: "Sklepy, które sprzedają",
        desc: "E-commerce od podstaw lub na sprawdzonych silnikach. Wygodny koszik, płatności, integracje i panel, w którym łatwo zarządzasz ofertą.",
        points: [
          "Płatności i integracje",
          "Wygodny proces zakupu",
          "Panel do zarządzania ofertą",
        ],
      },
      {
        kind: "app",
        tag: "03 — Aplikacje",
        title: "Aplikacje pod Twój pomysł",
        desc: "Aplikacje webowe i narzędzia, które porządkują pracę. Logowanie, role, dane w czasie rzeczywistym i architektura, która rośnie razem z Tobą.",
        points: [
          "Logowanie i role użytkowników",
          "Integracje i API",
          "Skalowalna architektura",
        ],
      },
    ],
  },

  work: {
    eyebrow: "Realizacje",
    title: "Wybrane projekty",
    lead: "Trzy wdrożenia, z których jesteśmy dumni. Wkrótce dojdą kolejne.",
    filters: {
      all: "Wszystko",
      web: "Strony",
      shop: "Sklepy",
      app: "Aplikacje",
    },
    kindLabel: { web: "Strona", shop: "Sklep", app: "Aplikacja" },
    viewCase: "Zobacz projekt",
    visitSite: "Odwiedź stronę",
    liveLabel: "Na żywo",
    backToWork: "Wszystkie realizacje",
    nextProject: "Następny projekt",
    detail: {
      overview: "O projekcie",
      scope: "Zakres prac",
      yearLabel: "Rok",
      typeLabel: "Typ",
      clientLabel: "Klient",
      ctaTitle: "Chcesz podobny efekt u siebie?",
      ctaLead: "Opowiedz nam o swoim pomyśle — odezwiemy się w ciągu 24 godzin.",
      ctaButton: "Umów rozmowę",
    },
  },

  projects: {
    tyrbud: {
      category: "Strona firmowa · budownictwo",
      client: "Tyrbud",
      summary:
        "Nowoczesna strona firmowa dla wykonawcy z branży budowlanej — solidna prezentacja realizacji i prosty kontakt z inwestorem.",
      description:
        "Tyrbud to firma budowlana, która potrzebowała wizytówki na miarę swoich realizacji. Zaprojektowaliśmy przejrzystą stronę, która buduje zaufanie od pierwszego ekranu: mocna sekcja główna, czytelna prezentacja usług i realizacji oraz jasne wezwanie do kontaktu. Całość jest szybka, w pełni responsywna i przygotowana pod pozycjonowanie lokalne.",
      scope: [
        "Projekt UX/UI i identyfikacja online",
        "Strona firmowa z prezentacją realizacji",
        "Optymalizacja wydajności i SEO",
        "Wdrożenie i wsparcie po starcie",
      ],
    },
    "fbt-outlet": {
      category: "Sklep internetowy · moda i outlet",
      client: "FBT Outlet",
      summary:
        "Sklep internetowy dla marki outletowej — szybki katalog, wygodne zakupy i panel łatwy w codziennej obsłudze.",
      description:
        "FBT Outlet to sprzedaż w modelu outletowym, gdzie liczy się tempo i wygoda zakupów. Zbudowaliśmy sklep, który błyskawicznie prezentuje ofertę, prowadzi klienta prosto do koszyka i domyka transakcję bez zbędnych kroków. Zadbaliśmy o czytelny katalog, sprawne filtrowanie i panel, w którym zespół samodzielnie zarządza produktami i promocjami.",
      scope: [
        "Projekt sklepu i ścieżki zakupowej",
        "Katalog, filtry i koszyk",
        "Integracja płatności",
        "Panel zarządzania ofertą",
      ],
    },
    antlerwood: {
      category: "Sklep i marka · lifestyle",
      client: "Antlerwood",
      summary:
        "Sklep i strona marki lifestyle z myślą o klientach w Polsce i za granicą — spójna estetyka i sprzedaż w dwóch językach.",
      description:
        "Antlerwood to marka z charakterem, która celuje również w rynek zagraniczny. Stworzyliśmy spójny, elegancki sklep, który oddaje klimat marki i jednocześnie sprawnie sprzedaje. Postawiliśmy na dopracowaną estetykę, wygodne przeglądanie oferty i przygotowanie pod obsługę klientów po polsku i po angielsku.",
      scope: [
        "Branding online i projekt sklepu",
        "Prezentacja produktów i proces zakupu",
        "Przygotowanie pod dwa języki",
        "Wydajność i SEO",
      ],
    },
  },

  process: {
    eyebrow: "Jak pracujemy",
    title: "Proces bez niespodzianek",
    lead: "Cztery etapy, pełna transparentność i bezpośredni kontakt z twórcami na każdym kroku.",
    steps: [
      {
        n: "01",
        title: "Rozmowa",
        desc: "Poznajemy Twój biznes, cele i klientów. Ustalamy zakres i to, co ma się realnie wydarzyć.",
      },
      {
        n: "02",
        title: "Projekt",
        desc: "Projektujemy UX i UI. Widzisz wygląd produktu, zanim powstanie pierwsza linijka kodu.",
      },
      {
        n: "03",
        title: "Budowa",
        desc: "Kodujemy w nowoczesnym stacku (Next.js, React). Iteracyjnie, z regularnym podglądem postępów.",
      },
      {
        n: "04",
        title: "Start i opieka",
        desc: "Publikujemy, mierzymy i optymalizujemy. Zostajemy — rozwijamy stronę razem z Tobą.",
      },
    ],
  },

  pricing: {
    eyebrow: "Cennik",
    title: "Przejrzyste widełki",
    lead: "Ceny startowe — finalna wycena zawsze zależy od zakresu. Bez ukrytych kosztów.",
    fromLabel: "od",
    plans: [
      {
        name: "Strona",
        tagline: "Landing page i strony firmowe",
        price: "3 500 zł",
        note: "Realizacja zwykle 1–2 tygodnie",
        features: [
          "Projekt UI szyty na miarę",
          "Do kilku podstron",
          "Responsywność i animacje",
          "Podstawowe SEO",
          "Formularz kontaktowy",
        ],
        cta: "Wyceń stronę",
      },
      {
        name: "Sklep",
        tagline: "E-commerce, który sprzedaje",
        price: "7 900 zł",
        note: "Najczęściej wybierany",
        featured: true,
        features: [
          "Wszystko ze „Strony”",
          "Katalog i koszyk",
          "Płatności i integracje",
          "Panel zarządzania ofertą",
          "Konfiguracja pod dwa języki",
        ],
        cta: "Umów konsultację",
      },
      {
        name: "Aplikacja",
        tagline: "Produkty i narzędzia na miarę",
        price: "wycena indywidualna",
        note: "Dla bardziej złożonych wdrożeń",
        features: [
          "Logowanie, role i uprawnienia",
          "Panel i integracje",
          "Architektura pod skalę",
          "Warsztaty i strategia",
          "Wsparcie i rozwój",
        ],
        cta: "Porozmawiajmy",
      },
    ],
    help: {
      text: "Nie wiesz, co wybrać?",
      linkText: "Napisz do nas",
      after: "— doradzimy w 24 godziny.",
    },
  },

  about: {
    eyebrow: "O nas",
    title: "Dwie osoby.",
    titleAccent: "Jeden dopracowany produkt.",
    lead: "paggini to kameralne studio, w którym nad Twoim projektem pracują bezpośrednio jego twórcy — bez pośredników, account managerów i przekazywania sobie tematu z rąk do rąk.",
    body: [
      "Wierzymy, że mały zespół to przewaga, a nie ograniczenie. Rozmawiasz z ludźmi, którzy realnie projektują i kodują Twój produkt, więc decyzje zapadają szybciej, a jakość nie rozmywa się po drodze.",
      "Robimy strony, sklepy i aplikacje dla klientów w Polsce, a dzięki obsłudze w dwóch językach — również za granicą. Każdy projekt traktujemy jak własny.",
    ],
    valuesTitle: "W co wierzymy",
    values: [
      {
        title: "Bezpośredni kontakt",
        desc: "Piszesz do twórcy, nie do skrzynki. Bez łańcuszka pośredników.",
      },
      {
        title: "Jakość ponad ilość",
        desc: "Bierzemy tyle projektów, ile możemy zrobić naprawdę dobrze.",
      },
      {
        title: "Uczciwość",
        desc: "Jasne wyceny, realne terminy i szczera opinia, gdy coś nie ma sensu.",
      },
    ],
    teamTitle: "Zespół",
    // Placeholder names — replace with the real founders' names.
    team: [
      {
        name: "Imię Nazwisko",
        role: "Design & Frontend",
        bio: "Projektuje interfejsy i zamienia je w szybki, dopracowany kod.",
      },
      {
        name: "Imię Nazwisko",
        role: "Development & Wdrożenia",
        bio: "Buduje logikę, integracje i infrastrukturę, na której to wszystko stoi.",
      },
    ],
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Masz pomysł? Zróbmy z niego",
    titleAccent: "produkt.",
    lead: "Bezpłatna rozmowa, konkretna wycena i plan działania w 24 godziny. Bez zobowiązań.",
    emailLabel: "Napisz do nas",
    phoneLabel: "Zadzwoń",
    badges: ["Odpowiedź w 24h", "Umowa i faktura VAT", "Kontakt bezpośrednio z twórcami"],
    form: {
      title: "Napisz kilka słów o projekcie",
      name: "Imię",
      namePlaceholder: "Jak masz na imię?",
      email: "E-mail",
      emailPlaceholder: "twoj@email.pl",
      projectType: "Czego potrzebujesz?",
      types: ["Strona internetowa", "Sklep internetowy", "Aplikacja", "Coś innego"],
      message: "Wiadomość",
      messagePlaceholder: "Opowiedz nam o swoim pomyśle…",
      submit: "Wyślij zapytanie",
      note: "Wysłanie otworzy Twój program pocztowy z gotową wiadomością.",
    },
  },

  footer: {
    tagline:
      "Kameralne studio stron, sklepów i aplikacji. Projektujemy i kodujemy produkty, które robią różnicę.",
    columns: {
      services: "Usługi",
      studio: "Studio",
      contact: "Kontakt",
    },
    servicesLinks: [
      { label: "Strony internetowe", key: "services" },
      { label: "Sklepy internetowe", key: "services" },
      { label: "Aplikacje", key: "services" },
    ],
    studioLinks: [
      { label: "O nas", key: "about" },
      { label: "Realizacje", key: "work" },
      { label: "Proces", key: "process" },
      { label: "Kontakt", key: "contact" },
    ],
    rights: "Wszelkie prawa zastrzeżone.",
    legal: [
      { label: "Polityka prywatności", key: "contact" },
      { label: "Kontakt", key: "contact" },
    ],
    madeIn: "Tworzone w Polsce",
  },

  notFound: {
    title: "Nie ma takiej strony",
    lead: "Strona, której szukasz, mogła zmienić adres albo nigdy nie istniała.",
    cta: "Wróć na stronę główną",
  },
};

export default pl;
