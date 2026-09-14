import Link from "next/link";
import { href, contact, type Locale, type RouteKey } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const f = dict.footer;

  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link href={href(lang, "home")} className="flex items-baseline gap-2">
              <span className="display text-2xl">paggini</span>
              <span className="h-2 w-2 bg-flame" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{f.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="mono text-xs uppercase tracking-wider text-paper/70 hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mono text-[10px] uppercase tracking-wider text-paper/40">
              {f.columns.services}
            </div>
            <ul className="mt-4 space-y-2.5">
              {f.servicesLinks.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link href={href(lang, l.key as RouteKey)} data-cursor className="underline-flame text-sm text-paper/80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono text-[10px] uppercase tracking-wider text-paper/40">
              {f.columns.studio}
            </div>
            <ul className="mt-4 space-y-2.5">
              {f.studioLinks.map((l) => (
                <li key={l.label}>
                  <Link href={href(lang, l.key as RouteKey)} data-cursor className="underline-flame text-sm text-paper/80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono text-[10px] uppercase tracking-wider text-paper/40">
              {f.columns.contact}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li>
                <a href={`mailto:${contact.email}`} data-cursor className="underline-flame">
                  {contact.email}
                </a>
              </li>
              <li className="text-paper/60">{contact.location[lang]}</li>
            </ul>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="mt-16 overflow-hidden border-t border-paper/15 pt-8">
          <div className="display select-none text-[22vw] leading-[0.8] tracking-tighter text-paper/[0.07]">
            paggini
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <span className="mono">
            © {year} PAGGINI — {f.rights.toUpperCase()}
          </span>
          <div className="mono flex items-center gap-6">
            <span className="hidden sm:inline">🇵🇱 {f.madeIn}</span>
            {f.legal.map((l) => (
              <Link key={l.label} href={href(lang, l.key as RouteKey)} data-cursor className="hover:text-paper">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
