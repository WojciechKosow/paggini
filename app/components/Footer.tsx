const COLS = [
  {
    title: "Usługi",
    links: ["Strony internetowe", "Systemy webowe", "Aplikacje mobilne", "E-commerce"],
  },
  {
    title: "Studio",
    links: ["O nas", "Portfolio", "Proces", "Kariera"],
  },
  {
    title: "Kontakt",
    links: ["hello@paggini.studio", "+48 500 600 700", "Warszawa, PL"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-display text-sm font-extrabold text-white">
                p
              </span>
              <span className="font-display text-lg font-bold">paggini</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              Studio produktów cyfrowych. Projektujemy i budujemy strony,
              systemy i aplikacje, które robią wrażenie.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-mist transition-colors hover:text-chalk"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-mist sm:flex-row">
          <span>© {new Date().getFullYear()} paggini. Wszelkie prawa zastrzeżone.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-chalk">
              Polityka prywatności
            </a>
            <a href="#" className="transition-colors hover:text-chalk">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
