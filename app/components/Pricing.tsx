import Link from "next/link";
import Reveal from "./Reveal";
import { href, type Locale } from "../content/site";
import type { Dictionary } from "../content/dictionary";

function PlanCard({
  lang,
  plan,
  fromLabel,
}: {
  lang: Locale;
  plan: Dictionary["pricing"]["plans"][number];
  fromLabel: string;
}) {
  const dark = plan.featured;
  return (
    <article
      className={`relative flex h-full flex-col p-7 transition-transform duration-500 hover:-translate-y-2 ${
        dark ? "bg-ink text-paper shadow-[10px_10px_0_0_var(--flame)]" : "panel"
      }`}
    >
      {dark && <span className="mono absolute right-6 top-7 text-[10px] text-flame">★</span>}

      <div className="display text-2xl">{plan.name}</div>
      <div className={`mt-1 text-sm ${dark ? "text-paper/60" : "text-muted"}`}>{plan.tagline}</div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className={`mono text-xs ${dark ? "text-paper/50" : "text-muted"}`}>{fromLabel}</span>
        <span className="display text-4xl">{plan.price}</span>
      </div>
      <div className={`mono mt-2 text-[10px] uppercase ${dark ? "text-paper/50" : "text-muted"}`}>
        {plan.note}
      </div>

      <Link href={href(lang, "contact")} data-cursor className={`mt-7 ${dark ? "btn btn-paper" : "btn btn-ink"}`}>
        {plan.cta}
      </Link>

      <ul className={`mt-7 border-t ${dark ? "divide-paper/15 border-paper/15" : "divide-line border-line"} divide-y`}>
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

export default function Pricing({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const p = dict.pricing;
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="border-b border-line-2 pb-8">
          <div className="label">[ {p.eyebrow} ]</div>
          <h2 className="display mt-4 text-4xl sm:text-6xl">{p.title}</h2>
          <p className="mt-4 max-w-md text-ink-soft">{p.lead}</p>
        </Reveal>

        <div className="mt-10 grid items-start gap-4 lg:grid-cols-3">
          {p.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <PlanCard lang={lang} plan={plan} fromLabel={p.fromLabel} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-sm text-muted" delay={180}>
          {p.help.text}{" "}
          <Link href={href(lang, "contact")} data-cursor className="underline-flame font-semibold text-ink">
            {p.help.linkText}
          </Link>{" "}
          {p.help.after}
        </Reveal>
      </div>
    </section>
  );
}
