"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#uslugi", label: "Co robimy" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 transition-all duration-500 ${
            scrolled
              ? "glass border border-line py-2.5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
              : "border border-transparent py-2"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
              <span className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.7),transparent)] opacity-70" />
              <span className="relative font-display text-sm font-extrabold text-white">
                p
              </span>
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              paggini
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#kontakt" className="btn btn-primary h-10 px-5 text-sm">
              Zaczynamy →
            </a>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-chalk md:hidden"
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
          className={`mt-2 overflow-hidden rounded-2xl transition-all duration-500 md:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass flex flex-col gap-1 border border-line p-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-mist transition-colors hover:bg-white/5 hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-1"
            >
              Zaczynamy →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
