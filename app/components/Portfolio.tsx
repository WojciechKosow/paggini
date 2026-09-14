"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Tone = "ink" | "flame" | "paper";
type Project = {
  name: string;
  category: string;
  type: "Strony" | "Systemy" | "Aplikacje";
  year: string;
  tone: Tone;
  big?: boolean;
};

const PROJECTS: Project[] = [
  { name: "Nordwind", category: "System rezerwacji", type: "Systemy", year: "2025", tone: "ink", big: true },
  { name: "Lumen Bank", category: "Aplikacja mobilna", type: "Aplikacje", year: "2025", tone: "flame" },
  { name: "Atelier 9", category: "Sklep e-commerce", type: "Strony", year: "2024", tone: "paper" },
  { name: "Volta CRM", category: "Panel B2B", type: "Systemy", year: "2024", tone: "paper" },
  { name: "Pulse Fit", category: "Aplikacja treningowa", type: "Aplikacje", year: "2025", tone: "ink" },
  { name: "Kōra Studio", category: "Strona portfolio", type: "Strony", year: "2025", tone: "flame", big: true },
];

const FILTERS = ["Wszystko", "Strony", "Systemy", "Aplikacje"];

const TONES: Record<Tone, { wrap: string; sub: string; faint: string; arrow: string }> = {
  ink: { wrap: "bg-ink text-paper", sub: "text-paper/60", faint: "text-paper/10", arrow: "text-flame" },
  flame: { wrap: "bg-flame text-paper", sub: "text-paper/70", faint: "text-paper/20", arrow: "text-ink" },
  paper: { wrap: "bg-card text-ink border border-line-2", sub: "text-muted", faint: "text-ink/[0.06]", arrow: "text-flame" },
};

function Card({ p, i }: { p: Project; i: number }) {
  const t = TONES[p.tone];
  return (
    <article
      data-cursor
      className={`group relative flex h-full min-h-[280px] cursor-pointer flex-col justify-between overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-2 ${t.wrap} ${
        p.big ? "sm:min-h-[340px]" : ""
      }`}
    >
      {/* faint index watermark */}
      <span className={`display pointer-events-none absolute -bottom-8 -right-2 text-[10rem] leading-none ${t.faint}`}>
        {String(i + 1).padStart(2, "0")}
      </span>

      <div className="relative flex items-start justify-between">
        <span className="mono text-[11px]">{p.category}</span>
        <span className={`mono text-[11px] ${t.sub}`}>{p.year}</span>
      </div>

      <div className="relative">
        <h3 className={`display ${p.big ? "text-5xl sm:text-7xl" : "text-4xl sm:text-5xl"}`}>
          {p.name}
        </h3>
        <div className="mt-4 flex items-center gap-2 overflow-hidden">
          <span className="h-px flex-1 origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
          <span className={`inline-block transition-transform duration-500 group-hover:translate-x-1 ${t.arrow}`}>
            Zobacz ↗
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Wszystko");
  const shown = PROJECTS.filter((p) => active === "Wszystko" || p.type === active);

  return (
    <section id="portfolio" className="relative bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 border-b border-line-2 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="label">[ Wybrane prace ]</div>
            <h2 className="display mt-4 text-4xl sm:text-6xl">Portfolio</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                data-cursor
                className={`mono border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  active === f
                    ? "border-ink bg-ink text-paper"
                    : "border-line-2 text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className={p.big ? "sm:col-span-2" : ""}>
              <Card p={p} i={PROJECTS.indexOf(p)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
