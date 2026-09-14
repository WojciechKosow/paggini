import Link from "next/link";
import Magnetic from "./Magnetic";
import { href, contact, type Locale } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-14 pt-32 sm:px-8 sm:pt-40">
        {/* meta bar */}
        <div className="anim-fade-up flex flex-wrap items-center justify-between gap-3 border-b border-line-2 pb-5">
          <span className="label">{h.kicker}</span>
          <span className="label hidden sm:block">{contact.location[lang]}</span>
          <span className="label flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse bg-flame" />
            {h.badge}
          </span>
        </div>

        {/* headline */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h1 className="display col-span-12 lg:col-span-8">
            {h.words.map((w, i) => (
              <span key={w} className="rise-mask">
                <span
                  className="anim-rise block"
                  style={{
                    animationDelay: `${i * 110}ms`,
                    fontSize: "clamp(2.9rem, 11vw, 10.5rem)",
                  }}
                >
                  {w.replace(/\.$/, "")}
                  <span className="flame">.</span>
                </span>
              </span>
            ))}
          </h1>

          <div className="col-span-12 flex flex-col justify-end lg:col-span-4">
            <p
              className="anim-fade-up max-w-sm text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "400ms" }}
            >
              {h.lead}
            </p>

            <div
              className="anim-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "540ms" }}
            >
              <Magnetic>
                <Link href={href(lang, "work")} className="btn btn-ink px-7">
                  {h.ctaPrimary}
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href={href(lang, "contact")} className="btn btn-line px-7">
                  {h.ctaSecondary}
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* stats */}
        <div
          className="anim-fade-up mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line-2 pt-10 md:grid-cols-4"
          style={{ animationDelay: "640ms" }}
        >
          {h.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <div className="display text-4xl font-extrabold sm:text-5xl">
                {s.value}
                {s.suffix && <span className="flame">{s.suffix}</span>}
              </div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
