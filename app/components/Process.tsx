import Reveal from "./Reveal";
import type { Dictionary } from "../content/dictionary";

export default function Process({
  dict,
  bordered = true,
}: {
  dict: Dictionary;
  bordered?: boolean;
}) {
  const p = dict.process;
  return (
    <section className={`relative py-28 ${bordered ? "border-y border-line" : ""}`}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="eyebrow">{p.eyebrow}</div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {p.title}
          </h2>
          <p className="mt-4 text-lg text-mist">{p.lead}</p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent md:block" />
          {p.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink-2 font-display text-lg font-bold text-gradient">
                  {s.n}
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
