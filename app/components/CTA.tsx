import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="kontakt" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="ring-grad relative overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-16">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="animate-aurora absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full opacity-50 blur-[110px]"
                style={{
                  background:
                    "radial-gradient(circle,rgba(139,92,246,0.6),transparent 60%)",
                }}
              />
              <div
                className="animate-aurora-2 absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-40 blur-[110px]"
                style={{
                  background:
                    "radial-gradient(circle,rgba(34,211,238,0.5),transparent 60%)",
                }}
              />
              <div className="bg-grid mask-fade absolute inset-0 opacity-20" />
            </div>

            <h2 className="font-display mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Masz pomysł? Zróbmy z niego{" "}
              <span className="accent-serif text-gradient">produkt</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-mist">
              Bezpłatna konsultacja, konkretna wycena i plan działania w 24
              godziny. Bez zobowiązań.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@paggini.studio" className="btn btn-primary w-full sm:w-auto">
                hello@paggini.studio
              </a>
              <a href="tel:+48500600700" className="btn btn-ghost w-full sm:w-auto">
                +48 500 600 700
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mist">
              <span>⏱ Odpowiedź w 24h</span>
              <span>✦ Umowa i faktura VAT</span>
              <span>🇵🇱 Zespół w Polsce</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
