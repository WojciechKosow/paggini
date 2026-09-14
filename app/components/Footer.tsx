import Link from "next/link";
import { href, contact, type Locale, type RouteKey } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link href={href(lang, "home")} className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-display text-sm font-extrabold text-white">
                p
              </span>
              <span className="font-display text-lg font-bold">paggini</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              {dict.footer.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-mist transition-colors hover:border-line-strong hover:text-chalk"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">{dict.footer.columns.services}</div>
            <ul className="mt-4 space-y-2.5">
              {dict.footer.servicesLinks.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link
                    href={href(lang, l.key as RouteKey)}
                    className="text-sm text-mist transition-colors hover:text-chalk"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">{dict.footer.columns.studio}</div>
            <ul className="mt-4 space-y-2.5">
              {dict.footer.studioLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={href(lang, l.key as RouteKey)}
                    className="text-sm text-mist transition-colors hover:text-chalk"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">{dict.footer.columns.contact}</div>
            <ul className="mt-4 space-y-2.5 text-sm text-mist">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-chalk"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.location[lang]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-mist sm:flex-row">
          <span>
            © {year} paggini. {dict.footer.rights}
          </span>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">🇵🇱 {dict.footer.madeIn}</span>
            {dict.footer.legal.map((l) => (
              <Link
                key={l.label}
                href={href(lang, l.key as RouteKey)}
                className="transition-colors hover:text-chalk"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
