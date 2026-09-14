"use client";

import { useState } from "react";
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
type Tone = "ink" | "flame" | "paper";

const TONES: Record<Tone, { wrap: string; sub: string; faint: string; arrow: string }> = {
  ink: { wrap: "bg-ink text-paper", sub: "text-paper/60", faint: "text-paper/10", arrow: "text-flame" },
  flame: { wrap: "bg-flame text-paper", sub: "text-paper/70", faint: "text-paper/20", arrow: "text-ink" },
  paper: { wrap: "bg-card text-ink border border-line-2", sub: "text-muted", faint: "text-ink/[0.06]", arrow: "text-flame" },
};

const TONE_ORDER: Tone[] = ["ink", "flame", "paper"];

function Card({
  lang,
  dict,
  slug,
  name,
  kind,
  year,
  tone,
  index,
  big,
}: {
  lang: Locale;
  dict: Dictionary;
  slug: string;
  name: string;
  kind: ServiceKind;
  year: string;
  tone: Tone;
  index: number;
  big?: boolean;
}) {
  const t = TONES[tone];
  const project = dict.projects[slug];
  return (
    <Link
      href={workHref(lang, slug)}
      data-cursor
      className={`group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-2 ${t.wrap} ${
        big ? "sm:min-h-[340px]" : ""
      }`}
    >
      <span className={`display pointer-events-none absolute -bottom-8 -right-2 text-[10rem] leading-none ${t.faint}`}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex items-start justify-between">
        <span className="mono text-[11px]">{project?.category}</span>
        <span className={`mono text-[11px] ${t.sub}`}>{year}</span>
      </div>

      <div className="relative">
        <h3 className={`display ${big ? "text-5xl sm:text-7xl" : "text-4xl sm:text-5xl"}`}>{name}</h3>
        <div className="mt-4 flex items-center gap-2 overflow-hidden">
          <span className="mono text-[11px]">{dict.work.kindLabel[kind]}</span>
          <span className="h-px flex-1 origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
          <span className={`inline-block transition-transform duration-500 group-hover:translate-x-1 ${t.arrow}`}>
            {dict.work.viewCase} ↗
          </span>
        </div>
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

  const visible = projects
    .map((p, i) => ({ p, tone: TONE_ORDER[i % TONE_ORDER.length], index: i }))
    .filter(({ p }) => active === "all" || p.kind === active);

  return (
    <section className="relative bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 border-b border-line-2 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="label">[ {dict.work.eyebrow} ]</div>
            {heading ? (
              <h2 className="display mt-4 text-4xl sm:text-6xl">{dict.work.title}</h2>
            ) : (
              <p className="mt-4 max-w-md text-ink-soft">{dict.work.lead}</p>
            )}
          </div>
          <div className="mono inline-flex flex-wrap border border-ink text-xs">
            {filters.map((f, i) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                data-cursor
                className={`px-4 py-2.5 uppercase tracking-wider transition-colors ${
                  i > 0 ? "border-l border-ink" : ""
                } ${active === f.key ? "bg-ink text-paper" : "text-ink hover:bg-card"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {visible.map(({ p, tone, index }) => (
            <Reveal
              key={p.slug}
              delay={index * 80}
              className={p.featured && index === 0 ? "sm:col-span-2" : ""}
            >
              <Card
                lang={lang}
                dict={dict}
                slug={p.slug}
                name={p.name}
                kind={p.kind}
                year={p.year}
                tone={tone}
                index={index}
                big={p.featured && index === 0}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
