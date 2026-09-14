import Link from "next/link";
import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { href, type Locale } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function Pricing({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const p = dict.pricing;

  return (
    <section className="relative py-28 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(circle,rgba(139,92,246,0.5),transparent 60%)" }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">{p.eyebrow}</div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {p.title}
          </h2>
          <p className="mt-4 text-lg text-mist">{p.lead}</p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {p.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-7 transition-transform duration-500 hover:-translate-y-1.5 ${
                  plan.featured
                    ? "ring-grad border-transparent bg-white/[0.05]"
                    : "card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    ★
                  </span>
                )}

                <div className="font-display text-xl font-bold">{plan.name}</div>
                <div className="mt-1 text-sm text-mist">{plan.tagline}</div>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="text-sm text-mist">{p.fromLabel}</span>
                  <span className="font-display text-3xl font-extrabold tracking-tight text-gradient-soft">
                    {plan.price}
                  </span>
                </div>
                <div className="mt-1.5 text-xs text-mist">{plan.note}</div>

                <Link
                  href={href(lang, "contact")}
                  className={`mt-6 ${plan.featured ? "btn btn-primary" : "btn btn-ghost"}`}
                >
                  {plan.cta}
                </Link>

                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-chalk">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-cyan-300">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-sm text-mist" delay={200}>
          {p.help.text}{" "}
          <Link
            href={href(lang, "contact")}
            className="font-semibold text-chalk underline decoration-violet-400 underline-offset-4"
          >
            {p.help.linkText}
          </Link>{" "}
          {p.help.after}
        </Reveal>
      </div>
    </section>
  );
}
