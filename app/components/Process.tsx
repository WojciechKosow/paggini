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
    <section className={`relative py-24 sm:py-32 ${bordered ? "bg-paper-2" : ""}`}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="border-b border-line-2 pb-8">
          <div className="label">[ {p.eyebrow} ]</div>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-6xl">{p.title}</h2>
          <p className="mt-4 max-w-md text-ink-soft">{p.lead}</p>
        </Reveal>

        <div className="mt-4">
          {p.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line py-8 transition-colors hover:bg-card sm:grid-cols-[120px_1fr_2fr] sm:gap-10 sm:px-4">
                <span className="display text-4xl text-flame sm:text-6xl">{s.n}</span>
                <h3 className="display text-2xl sm:text-4xl">{s.title}</h3>
                <p className="col-span-2 max-w-md text-ink-soft sm:col-span-1">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
