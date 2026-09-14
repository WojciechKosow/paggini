import Link from "next/link";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { href, contact, type Locale } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function CTA({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const c = dict.contact;
  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="label !text-paper/50">[ {c.eyebrow} ]</div>
          <h2 className="display mt-6 text-5xl leading-[0.95] sm:text-8xl">
            {c.title} <span className="serif-i flame">{c.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-paper/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal delay={100}>
            <p className="max-w-md text-lg text-paper/70">{c.lead}</p>
            <div className="mt-8 flex flex-col gap-4">
              <Magnetic strength={0.2}>
                <a
                  href={`mailto:${contact.email}`}
                  data-cursor
                  className="display underline-flame text-3xl sm:text-5xl"
                >
                  {contact.email}
                </a>
              </Magnetic>
              <Link href={href(lang, "contact")} data-cursor className="mono text-lg text-paper/70">
                → {dict.nav.contact}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={180} className="flex flex-col gap-3">
            {c.badges.map((b) => (
              <span key={b} className="mono flex items-center gap-3 text-xs text-paper/60">
                <span className="h-1.5 w-1.5 bg-flame" /> {b}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
