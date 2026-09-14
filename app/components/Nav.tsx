"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#uslugi", label: "Usługi", n: "01" },
  { href: "#portfolio", label: "Prace", n: "02" },
  { href: "#cennik", label: "Cennik", n: "03" },
  { href: "#kontakt", label: "Kontakt", n: "04" },
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-paper/90 backdrop-blur-md" : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled ? "1px solid var(--line-2)" : "1px solid transparent" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="group flex items-baseline gap-2" data-cursor>
            <span className="display text-2xl font-extrabold tracking-tight">
              paggini
            </span>
            <span className="h-2 w-2 translate-y-[-2px] bg-flame transition-transform duration-300 group-hover:scale-150" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-1.5 text-sm font-medium text-ink"
              >
                <span className="label text-[0.6rem] text-flame">{l.n}</span>
                <span className="underline-flame pb-0.5">{l.label}</span>
              </a>
            ))}
          </nav>

          <a href="#kontakt" className="btn btn-ink hidden h-11 px-6 text-sm md:inline-flex">
            Zaczynamy
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-ink md:hidden"
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
        className={`overflow-hidden bg-paper transition-all duration-500 md:hidden ${
          open ? "max-h-96 border-b border-ink" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-t border-line py-4 text-lg"
            >
              <span className="label text-flame">{l.n}</span>
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} className="btn btn-ink my-4">
            Zaczynamy
          </a>
        </div>
      </div>
    </header>
  );
}
