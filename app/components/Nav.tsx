"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { href, type Locale, type RouteKey } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function Nav({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { key: RouteKey; label: string; n: string }[] = [
    { key: "services", label: dict.nav.services, n: "01" },
    { key: "work", label: dict.nav.work, n: "02" },
    { key: "about", label: dict.nav.about, n: "03" },
    { key: "process", label: dict.nav.process, n: "04" },
    { key: "contact", label: dict.nav.contact, n: "05" },
  ];

  const isActive = (key: RouteKey) => {
    const target = href(lang, key);
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  const otherLang: Locale = lang === "pl" ? "en" : "pl";
  const segments = (pathname || `/${lang}`).split("/").filter(Boolean);
  segments[0] = otherLang;
  const switchHref = "/" + segments.join("/");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-paper/90 backdrop-blur-md" : "bg-transparent"
        }`}
        style={{
          borderBottom: scrolled ? "1px solid var(--line-2)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <Link href={href(lang, "home")} className="group flex items-baseline gap-2" data-cursor>
            <span className="display text-2xl font-extrabold tracking-tight">paggini</span>
            <span className="h-2 w-2 translate-y-[-2px] bg-flame transition-transform duration-300 group-hover:scale-150" />
          </Link>

          <nav aria-label={dict.meta.siteName} className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link
                key={l.key}
                href={href(lang, l.key)}
                aria-current={isActive(l.key) ? "page" : undefined}
                className="group flex items-center gap-1.5 text-sm font-medium text-ink"
              >
                <span className="label text-[0.6rem] text-flame">{l.n}</span>
                <span
                  className={`underline-flame pb-0.5 ${
                    isActive(l.key) ? "bg-[length:100%_2px]" : ""
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={switchHref}
              hrefLang={otherLang}
              aria-label={dict.nav.switchLanguage}
              data-cursor
              className="mono border border-ink px-2.5 py-1.5 text-xs uppercase transition-colors hover:bg-ink hover:text-paper"
            >
              {otherLang}
            </Link>
            <Link href={href(lang, "contact")} className="btn btn-ink h-11 px-6 text-sm">
              {dict.nav.cta}
            </Link>
          </div>

          <button
            aria-label={dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-ink lg:hidden"
            data-cursor
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-paper transition-all duration-500 lg:hidden ${
          open ? "max-h-[36rem] border-b border-ink" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5">
          {links.map((l) => (
            <Link
              key={l.key}
              href={href(lang, l.key)}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.key) ? "page" : undefined}
              className="flex items-center gap-3 border-t border-line py-4 text-lg"
            >
              <span className="label text-flame">{l.n}</span>
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 py-4">
            <Link
              href={switchHref}
              hrefLang={otherLang}
              onClick={() => setOpen(false)}
              aria-label={dict.nav.switchLanguage}
              className="btn btn-line flex-1"
            >
              {otherLang.toUpperCase()}
            </Link>
            <Link
              href={href(lang, "contact")}
              onClick={() => setOpen(false)}
              className="btn btn-ink flex-1"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
