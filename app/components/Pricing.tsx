"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Plan = {
  name: string;
  tagline: string;
  project: string;
  retainer: string;
  note: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Start",
    tagline: "Landing page i strony firmowe",
    project: "od 6 900 zł",
    retainer: "od 690 zł/mc",
    note: "Realizacja 2–3 tygodnie",
    features: ["Projekt UI szyty na miarę", "Do 5 podstron", "Animacje i responsywność", "Podstawowe SEO", "Formularz kontaktowy"],
    cta: "Wyceń stronę",
  },
  {
    name: "Studio",
    tagline: "Systemy webowe i aplikacje",
    project: "od 24 900 zł",
    retainer: "od 2 400 zł/mc",
    note: "Najczęściej wybierany",
    features: ["Wszystko z pakietu Start", "Logowanie, role i uprawnienia", "Panel administracyjny", "Integracje i API", "Aplikacja mobilna (opcja)", "Wsparcie i rozwój"],
    featured: true,
    cta: "Umów konsultację",
  },
  {
    name: "Enterprise",
    tagline: "Złożone produkty na miarę",
    project: "wycena indyw.",
    retainer: "SLA + zespół",
    note: "Dla wymagających wdrożeń",
    features: ["Dedykowany zespół produktowy", "Architektura pod skalę", "Bezpieczeństwo i audyty", "Umowa SLA i priorytet", "Warsztaty i strategia"],
    cta: "Porozmawiajmy",
  },
];

function PlanCard({ plan, retainer }: { plan: Plan; retainer: boolean }) {
  const dark = plan.featured;
  return (
    <article
      className={`relative flex flex-col p-7 transition-transform duration-500 hover:-translate-y-2 ${
        dark ? "bg-ink text-paper shadow-[10px_10px_0_0_var(--flame)]" : "panel"
      }`}
    >
      {dark && (
        <span className="mono absolute right-6 top-7 text-[10px] text-flame">★ POPULARNY</span>
      )}

      <div className="display text-2xl">{plan.name}</div>
      <div className={`mt-1 text-sm ${dark ? "text-paper/60" : "text-muted"}`}>{plan.tagline}</div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="display text-4xl">{retainer ? plan.retainer : plan.project}</span>
      </div>
      <div className={`mono mt-2 text-[10px] uppercase ${dark ? "text-paper/50" : "text-muted"}`}>
        {plan.note}
      </div>

      <a
        href="#kontakt"
        data-cursor
        className={`mt-7 ${dark ? "btn btn-paper" : "btn btn-ink"}`}
      >
        {plan.cta}
      </a>

      <ul className={`mt-7 divide-y ${dark ? "divide-paper/15" : "divide-line"} border-t ${dark ? "border-paper/15" : "border-line"}`}>
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 py-3 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-flame" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Pricing() {
  const [retainer, setRetainer] = useState(false);

  return (
    <section id="cennik" className="relative bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 border-b border-line-2 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="label">[ Cennik ]</div>
            <h2 className="display mt-4 text-4xl sm:text-6xl">Przejrzyste pakiety</h2>
            <p className="mt-4 max-w-md text-ink-soft">
              Widełki na start — finalna wycena zależy od zakresu. Bez ukrytych kosztów.
            </p>
          </div>

          <div className="mono inline-flex items-center border border-ink text-xs">
            <button
              onClick={() => setRetainer(false)}
              data-cursor
              className={`px-4 py-2.5 uppercase tracking-wider transition-colors ${!retainer ? "bg-ink text-paper" : "text-ink"}`}
            >
              Projekt
            </button>
            <button
              onClick={() => setRetainer(true)}
              data-cursor
              className={`border-l border-ink px-4 py-2.5 uppercase tracking-wider transition-colors ${retainer ? "bg-ink text-paper" : "text-ink"}`}
            >
              Współpraca
            </button>
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-4 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <PlanCard plan={p} retainer={retainer} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-sm text-muted" delay={180}>
          Nie wiesz, co wybrać?{" "}
          <a href="#kontakt" className="underline-flame font-semibold text-ink" data-cursor>
            Napisz do nas
          </a>{" "}
          — doradzimy w 24h.
        </Reveal>
      </div>
    </section>
  );
}
