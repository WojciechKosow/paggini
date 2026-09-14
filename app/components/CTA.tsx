import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function CTA() {
  return (
    <section id="kontakt" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="label !text-paper/50">[ Kontakt ]</div>
          <h2 className="display mt-6 text-5xl leading-[0.95] sm:text-8xl">
            Masz pomysł?
            <br />
            Zróbmy z niego <span className="serif-i flame">produkt</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-paper/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal delay={100}>
            <p className="max-w-md text-lg text-paper/70">
              Bezpłatna konsultacja, konkretna wycena i plan działania w 24
              godziny. Bez zobowiązań.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Magnetic strength={0.2}>
                <a
                  href="mailto:hello@paggini.studio"
                  data-cursor
                  className="display underline-flame text-3xl sm:text-5xl"
                >
                  hello@paggini.studio
                </a>
              </Magnetic>
              <a href="tel:+48500600700" className="mono text-lg text-paper/70" data-cursor>
                +48 500 600 700
              </a>
            </div>
          </Reveal>

          <Reveal delay={180} className="flex flex-col gap-3">
            <span className="mono flex items-center gap-3 text-xs text-paper/60">
              <span className="h-1.5 w-1.5 bg-flame" /> Odpowiedź w 24h
            </span>
            <span className="mono flex items-center gap-3 text-xs text-paper/60">
              <span className="h-1.5 w-1.5 bg-flame" /> Umowa i faktura VAT
            </span>
            <span className="mono flex items-center gap-3 text-xs text-paper/60">
              <span className="h-1.5 w-1.5 bg-flame" /> Zespół w Polsce
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
