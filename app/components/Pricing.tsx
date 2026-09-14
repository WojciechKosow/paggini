"use client";

import { useState, type MouseEvent } from "react";
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
    features: [
      "Projekt UI szyty na miarę",
      "Do 5 podstron",
      "Animacje i responsywność",
      "Podstawowe SEO",
      "Formularz kontaktowy",
    ],
    cta: "Wyceń stronę",
  },
  {
    name: "Studio",
    tagline: "Systemy webowe i aplikacje",
    project: "od 24 900 zł",
    retainer: "od 2 400 zł/mc",
    note: "Najczęściej wybierany",
    features: [
      "Wszystko z pakietu Start",
      "Logowanie, role i uprawnienia",
      "Panel administracyjny",
      "Integracje i API",
      "Aplikacja mobilna (opcja)",
      "Wsparcie i rozwój",
    ],
    featured: true,
    cta: "Umów konsultację",
  },
  {
    name: "Enterprise",
    tagline: "Złożone produkty na miarę",
    project: "wycena indywidualna",
    retainer: "SLA i dedykowany zespół",
    note: "Dla wymagających wdrożeń",
    features: [
      "Dedykowany zespół produktowy",
      "Architektura pod skalę",
      "Bezpieczeństwo i audyty",
      "Umowa SLA i priorytet",
      "Warsztaty i strategia",
    ],
    cta: "Porozmawiajmy",
  },
];

function PlanCard({ plan, retainer }: { plan: Plan; retainer: boolean }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      onMouseMove={onMove}
      className={`spotlight relative flex flex-col rounded-3xl border p-7 transition-transform duration-500 hover:-translate-y-1.5 ${
        plan.featured
          ? "ring-grad border-transparent bg-white/[0.05]"
          : "card"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          Popularny
        </span>
      )}

      <div className="font-display text-xl font-bold">{plan.name}</div>
      <div className="mt-1 text-sm text-mist">{plan.tagline}</div>

      <div className="mt-6 flex items-end gap-1">
        <span className="font-display text-3xl font-extrabold tracking-tight text-gradient-soft">
          {retainer ? plan.retainer : plan.project}
        </span>
      </div>
      <div className="mt-1.5 text-xs text-mist">{plan.note}</div>

      <a
        href="#kontakt"
        className={`mt-6 ${plan.featured ? "btn btn-primary" : "btn btn-ghost"}`}
      >
        {plan.cta}
      </a>

      <ul className="mt-7 space-y-3 border-t border-line pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-chalk">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-[11px] text-cyan-300">
              ✓
            </span>
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
    <section id="cennik" className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(circle,rgba(139,92,246,0.5),transparent 60%)" }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">Cennik</div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Przejrzyste pakiety
          </h2>
          <p className="mt-4 text-lg text-mist">
            Widełki na start — finalna wycena zawsze zależy od zakresu. Bez
            ukrytych kosztów.
          </p>

          {/* toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-line bg-white/[0.03] p-1 text-sm">
            <button
              onClick={() => setRetainer(false)}
              className={`rounded-full px-4 py-2 transition-colors ${
                !retainer ? "bg-chalk text-ink" : "text-mist hover:text-chalk"
              }`}
            >
              Projekt
            </button>
            <button
              onClick={() => setRetainer(true)}
              className={`rounded-full px-4 py-2 transition-colors ${
                retainer ? "bg-chalk text-ink" : "text-mist hover:text-chalk"
              }`}
            >
              Współpraca ciągła
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <PlanCard plan={p} retainer={retainer} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-sm text-mist" delay={200}>
          Nie wiesz, co wybrać?{" "}
          <a href="#kontakt" className="font-semibold text-chalk underline decoration-violet-400 underline-offset-4">
            Napisz do nas
          </a>{" "}
          — doradzimy w 24h.
        </Reveal>
      </div>
    </section>
  );
}
