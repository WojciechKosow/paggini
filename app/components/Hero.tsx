"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 120, suffix: "+", label: "wdrożonych projektów" },
  { value: 8, suffix: " lat", label: "na rynku" },
  { value: 98, suffix: "%", label: "klientów wraca" },
  { value: 40, suffix: "+", label: "specjalistów w zespole" },
];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function Stat({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const n = useCountUp(value, run);
  return (
    <div>
      <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {n}
        <span className="text-gradient">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-mist">{label}</div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [statsRun, setStatsRun] = useState(false);

  // Subtle parallax on the aurora orbs
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--px", `${x * 22}px`);
        el.style.setProperty("--py", `${y * 22}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setStatsRun(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-40 pb-24">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="animate-aurora absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.55), transparent 60%)",
            transform: "translate(calc(-50% + var(--px,0px)), var(--py,0px))",
          }}
        />
        <div
          className="animate-aurora-2 absolute -right-24 top-24 h-[32rem] w-[32rem] rounded-full opacity-50 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.45), transparent 60%)",
          }}
        />
        <div
          className="animate-aurora absolute -left-24 top-40 h-[30rem] w-[30rem] rounded-full opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(217,70,239,0.45), transparent 60%)",
          }}
        />
        <div className="bg-grid mask-fade absolute inset-0 opacity-[0.35]" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs text-mist"
            style={{ animation: "pop-in 0.8s both" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Przyjmujemy projekty na Q1 2026
          </div>

          <h1
            className="font-display mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            style={{ animation: "pop-in 0.9s 0.05s both" }}
          >
            <span className="text-gradient-soft">Strony, systemy</span>
            <br />i aplikacje, które{" "}
            <span className="accent-serif text-gradient">robią wrażenie</span>.
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist"
            style={{ animation: "pop-in 1s 0.15s both" }}
          >
            Jesteśmy studiem produktowym. Projektujemy i budujemy dopracowane
            produkty cyfrowe — od landing page&apos;y, przez systemy webowe, po
            aplikacje mobilne. Nowocześnie, z dbałością o każdy detal.
          </p>

          <div
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
            style={{ animation: "pop-in 1.1s 0.25s both" }}
          >
            <a href="#portfolio" className="btn btn-primary w-full sm:w-auto">
              Zobacz portfolio
            </a>
            <a href="#kontakt" className="btn btn-ghost w-full sm:w-auto">
              Umów bezpłatną rozmowę
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} run={statsRun} />
          ))}
        </div>
      </div>
    </section>
  );
}
