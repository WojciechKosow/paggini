"use client";

import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const WORDS = ["Strony.", "Systemy.", "Aplikacje."];

const STATS = [
  { value: 120, suffix: "+", label: "projektów" },
  { value: 8, suffix: "", label: "lat na rynku" },
  { value: 98, suffix: "%", label: "klientów wraca" },
  { value: 40, suffix: "+", label: "specjalistów" },
];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function Stat({ value, suffix, label, run }: (typeof STATS)[number] & { run: boolean }) {
  const n = useCountUp(value, run);
  return (
    <div className="flex flex-col gap-1">
      <div className="display text-4xl font-extrabold sm:text-5xl">
        {n}
        <span className="flame">{suffix}</span>
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-14 pt-32 sm:px-8 sm:pt-40">
        {/* meta bar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 border-b border-line-2 pb-5 transition-opacity duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="label">Studio produktów cyfrowych</span>
          <span className="label hidden sm:block">Warszawa — PL</span>
          <span className="label flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse bg-flame" />
            Dostępni — Q1 2026
          </span>
        </div>

        {/* headline */}
        <div className={`mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10 ${mounted ? "is-visible" : ""}`}>
          <h1 className="display col-span-12 lg:col-span-8">
            {WORDS.map((w, i) => (
              <span key={w} className="rise-mask">
                <span
                  className="rise block"
                  style={{
                    ["--reveal-delay" as string]: `${i * 120}ms`,
                    fontSize: "clamp(3.2rem, 12.5vw, 11rem)",
                  }}
                >
                  {w.slice(0, -1)}
                  <span className="flame">.</span>
                </span>
              </span>
            ))}
          </h1>

          <div className="col-span-12 flex flex-col justify-end lg:col-span-4">
            <p
              className={`max-w-sm text-lg leading-relaxed text-ink-soft transition-all delay-500 duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              Studio produktowe. Projektujemy i kodujemy dopracowane produkty
              cyfrowe — od pierwszego szkicu po wdrożenie. Bez szablonów, bez
              kompromisów w detalu.
            </p>

            <div
              className={`mt-8 flex flex-col gap-3 transition-all delay-[650ms] duration-700 sm:flex-row ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <Magnetic>
                <a href="#portfolio" className="btn btn-ink px-7">
                  Zobacz prace
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#kontakt" className="btn btn-line px-7">
                  Umów rozmowę
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line-2 pt-10 md:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} run={mounted} />
          ))}
        </div>
      </div>
    </section>
  );
}
