"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  projects,
  workHref,
  type Locale,
  type ServiceKind,
} from "../content/site";
import type { Dictionary } from "../content/dictionary";

type FilterKey = "all" | ServiceKind;

function Card({
  lang,
  dict,
  slug,
  name,
  kind,
  year,
  gradient,
  live,
  big,
}: {
  lang: Locale;
  dict: Dictionary;
  slug: string;
  name: string;
  kind: ServiceKind;
  year: string;
  gradient: string;
  live: boolean;
  big?: boolean;
}) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const project = dict.projects[slug];

  return (
    <Link
      href={workHref(lang, slug)}
      onMouseMove={onMove}
      className="card spotlight group relative block overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
    >
      <div
        className={`relative overflow-hidden ${big ? "h-64" : "h-52"}`}
        style={{ background: gradient }}
      >
        <div
          className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 40%)",
          }}
        />
        <div className="absolute inset-x-6 bottom-6">
          <div className="font-display text-2xl font-bold text-white drop-shadow">
            {name}
          </div>
          <div className="mt-1 text-sm text-white/80">
            {dict.work.kindLabel[kind]}
          </div>
        </div>
        <div className="absolute right-5 top-5 flex items-center gap-2">
          {live && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {dict.work.liveLabel}
            </span>
          )}
          <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
            {year}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-sm font-semibold text-chalk">{dict.work.viewCase}</h3>
          <p className="text-sm text-mist">{project?.category}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-500/10 group-hover:text-chalk">
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function Portfolio({
  lang,
  dict,
  heading = true,
}: {
  lang: Locale;
  dict: Dictionary;
  heading?: boolean;
}) {
  const [active, setActive] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: dict.work.filters.all },
    { key: "web", label: dict.work.filters.web },
    { key: "shop", label: dict.work.filters.shop },
    { key: "app", label: dict.work.filters.app },
  ];

  const visible = projects.filter((p) => active === "all" || p.kind === active);

  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow">{dict.work.eyebrow}</div>
            {heading ? (
              <h2 className="font-display mt-4 max-w-lg text-3xl font-bold tracking-tight sm:text-5xl">
                {dict.work.title}
              </h2>
            ) : (
              <p className="mt-4 max-w-lg text-lg text-mist">{dict.work.lead}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  active === f.key
                    ? "border-transparent bg-chalk text-ink"
                    : "border-line text-mist hover:border-line-strong hover:text-chalk"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 80}
              className={p.featured && i === 0 ? "sm:col-span-2" : ""}
            >
              <Card
                lang={lang}
                dict={dict}
                slug={p.slug}
                name={p.name}
                kind={p.kind}
                year={p.year}
                gradient={p.gradient}
                live={Boolean(p.url)}
                big={p.featured && i === 0}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
