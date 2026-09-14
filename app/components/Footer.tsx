const COLS = [
  { title: "Usługi", links: ["Strony internetowe", "Systemy webowe", "Aplikacje mobilne", "E-commerce"] },
  { title: "Studio", links: ["O nas", "Portfolio", "Proces", "Kariera"] },
  { title: "Kontakt", links: ["hello@paggini.studio", "+48 500 600 700", "Warszawa, PL"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="display text-2xl">paggini</span>
              <span className="h-2 w-2 bg-flame" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Studio produktów cyfrowych. Projektujemy i budujemy strony,
              systemy i aplikacje z charakterem.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <div className="mono text-[10px] uppercase tracking-wider text-paper/40">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" data-cursor className="underline-flame text-sm text-paper/80">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* giant wordmark */}
        <div className="mt-16 overflow-hidden border-t border-paper/15 pt-8">
          <div className="display select-none text-[22vw] leading-[0.8] tracking-tighter text-paper/[0.07]">
            paggini
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <span className="mono">© {new Date().getFullYear()} PAGGINI — WSZELKIE PRAWA ZASTRZEŻONE</span>
          <div className="mono flex gap-6">
            <a href="#" data-cursor className="hover:text-paper">Prywatność</a>
            <a href="#" data-cursor className="hover:text-paper">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
