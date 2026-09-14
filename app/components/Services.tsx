import Link from "next/link";
import Reveal from "./Reveal";
import { mockupFor } from "./Mockups";
import { Icon } from "./Icons";
import { href, type Locale } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function Services({
  lang,
  dict,
  heading = true,
}: {
  lang: Locale;
  dict: Dictionary;
  heading?: boolean;
}) {
  const s = dict.services;
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        {heading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">{s.eyebrow}</div>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              {s.title} <span className="text-gradient">{s.titleAccent}</span>
            </h2>
            <p className="mt-4 text-lg text-mist">{s.lead}</p>
          </Reveal>
        )}

        <div className="mt-24 space-y-28">
          {s.items.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal className={reverse ? "lg:order-2" : ""} delay={80}>
                  <div className="eyebrow text-gradient">{item.tag}</div>
                  <h3 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-mist">
                    {item.desc}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-chalk">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gradient">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href(lang, "contact")}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-chalk"
                  >
                    <span className="border-b border-transparent transition-colors group-hover:border-violet-400">
                      {s.cta}
                    </span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Reveal>

                <Reveal className={reverse ? "lg:order-1" : ""} delay={reverse ? 0 : 160}>
                  {mockupFor(item.kind)}
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
