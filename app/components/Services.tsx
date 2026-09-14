import Link from "next/link";
import Reveal from "./Reveal";
import { mockupFor } from "./Mockups";
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
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {heading && (
          <Reveal className="flex flex-col justify-between gap-6 border-b border-line-2 pb-8 sm:flex-row sm:items-end">
            <div>
              <div className="label">[ {s.eyebrow} ]</div>
              <h2 className="display mt-4 max-w-xl text-4xl sm:text-6xl">
                {s.title}
                <br />
                {s.titleAccent}
              </h2>
            </div>
            <p className="max-w-xs text-ink-soft">{s.lead}</p>
          </Reveal>
        )}

        <div className="mt-8">
          {s.items.map((item, i) => {
            const reverse = i % 2 === 1;
            const kicker = item.tag.replace(/^\s*\d+\s*[—–-]\s*/, "");
            return (
              <div
                key={item.title}
                className="grid items-center gap-10 border-b border-line py-16 lg:grid-cols-2 lg:gap-20 lg:py-20"
              >
                <Reveal className={reverse ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="display text-5xl text-flame">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mono text-xs text-muted">/ {kicker}</span>
                  </div>
                  <h3 className="display mt-6 text-3xl sm:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                  <ul className="mt-8 divide-y divide-line border-y border-line">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 py-3">
                        <span className="h-1.5 w-1.5 bg-flame" />
                        <span className="text-ink">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href(lang, "contact")}
                    data-cursor
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    <span className="underline-flame pb-0.5">{s.cta}</span>
                    <span className="text-flame transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </Reveal>

                <Reveal className={reverse ? "lg:order-1" : ""} delay={120}>
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
