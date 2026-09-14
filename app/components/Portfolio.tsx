"use client";

import { useState, type MouseEvent } from "react";
import Reveal from "./Reveal";

type Project = {
  name: string;
  category: string;
  type: "Strony" | "Systemy" | "Aplikacje";
  year: string;
  gradient: string;
  big?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Nordwind",
    category: "System rezerwacji",
    type: "Systemy",
    year: "2025",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6 45%,#d946ef)",
    big: true,
  },
  {
    name: "Lumen Bank",
    category: "Aplikacja mobilna",
    type: "Aplikacje",
    year: "2025",
    gradient: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
  },
  {
    name: "Atelier 9",
    category: "Sklep e-commerce",
    type: "Strony",
    year: "2024",
    gradient: "linear-gradient(135deg,#f43f5e,#f59e0b)",
  },
  {
    name: "Volta CRM",
    category: "Panel B2B",
    type: "Systemy",
    year: "2024",
    gradient: "linear-gradient(135deg,#10b981,#22d3ee)",
  },
  {
    name: "Pulse Fit",
    category: "Aplikacja treningowa",
    type: "Aplikacje",
    year: "2025",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
  },
  {
    name: "Kōra Studio",
    category: "Strona portfolio",
    type: "Strony",
    year: "2025",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    big: true,
  },
];

const FILTERS = ["Wszystko", "Strony", "Systemy", "Aplikacje"];

function Card({ p }: { p: Project }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      onMouseMove={onMove}
      className="card spotlight group relative block cursor-pointer overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
    >
      {/* thumbnail */}
      <div
        className={`relative overflow-hidden ${p.big ? "h-64" : "h-52"}`}
        style={{ background: p.gradient }}
      >
        <div
          className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 40%)",
          }}
        />
        {/* faux UI lines */}
        <div className="absolute inset-x-6 bottom-6 space-y-2">
          <div className="h-2 w-1/3 rounded-full bg-white/70" />
          <div className="h-2 w-1/2 rounded-full bg-white/40" />
        </div>
        <div className="absolute right-5 top-5 rounded-full bg-black/30 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
          {p.year}
        </div>
      </div>

      {/* meta */}
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="font-display text-lg font-semibold">{p.name}</h3>
          <p className="text-sm text-mist">{p.category}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-500/10 group-hover:text-chalk">
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </span>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Wszystko");

  return (
    <section id="portfolio" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow">Portfolio</div>
            <h2 className="font-display mt-4 max-w-lg text-3xl font-bold tracking-tight sm:text-5xl">
              Wybrane realizacje
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  active === f
                    ? "border-transparent bg-chalk text-ink"
                    : "border-line text-mist hover:border-line-strong hover:text-chalk"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROJECTS.filter(
            (p) => active === "Wszystko" || p.type === active
          ).map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={p.big ? "sm:col-span-2" : ""}
            >
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
