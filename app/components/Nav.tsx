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

  const links: { key: RouteKey; label: string }[] = [
    { key: "services", label: dict.nav.services },
    { key: "work", label: dict.nav.work },
    { key: "about", label: dict.nav.about },
    { key: "process", label: dict.nav.process },
    { key: "contact", label: dict.nav.contact },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <nav
          aria-label={dict.meta.siteName}
          className={`flex items-center justify-between rounded-2xl px-4 transition-all duration-500 ${
            scrolled
              ? "glass border border-line py-2.5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
              : "border border-transparent py-2"
          }`}
        >
          <Link href={href(lang, "home")} className="group flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
              <span className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.7),transparent)] opacity-70" />
              <span className="relative font-display text-sm font-extrabold text-white">
                p
              </span>
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              paggini
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.key}
                href={href(lang, l.key)}
                aria-current={isActive(l.key) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive(l.key)
                    ? "text-chalk"
                    : "text-mist hover:text-chalk"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={switchHref}
              hrefLang={otherLang}
              aria-label={dict.nav.switchLanguage}
              className="rounded-full border border-line px-3 py-2 text-xs font-semibold uppercase tracking-wider text-mist transition-colors hover:border-line-strong hover:text-chalk"
            >
              {otherLang}
            </Link>
            <Link href={href(lang, "contact")} className="btn btn-primary h-10 px-5 text-sm">
              {dict.nav.cta} →
            </Link>
          </div>

          <button
            aria-label={dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-chalk lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl transition-all duration-500 lg:hidden ${
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass flex flex-col gap-1 border border-line p-3">
            {links.map((l) => (
              <Link
                key={l.key}
                href={href(lang, l.key)}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.key) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-sm transition-colors hover:bg-white/5 ${
                  isActive(l.key) ? "bg-white/5 text-chalk" : "text-mist hover:text-chalk"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-1 flex items-center gap-2">
              <Link
                href={switchHref}
                hrefLang={otherLang}
                onClick={() => setOpen(false)}
                aria-label={dict.nav.switchLanguage}
                className="btn btn-ghost flex-1"
              >
                {otherLang.toUpperCase()}
              </Link>
              <Link
                href={href(lang, "contact")}
                onClick={() => setOpen(false)}
                className="btn btn-primary flex-1"
              >
                {dict.nav.cta} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
