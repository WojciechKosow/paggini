import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Discovery", desc: "Poznajemy Twój biznes, cele i użytkowników. Definiujemy zakres i mierzalne efekty." },
  { n: "02", title: "Design", desc: "Projektujemy UX i UI. Klikalny prototyp — produkt widać jeszcze przed kodem." },
  { n: "03", title: "Development", desc: "Budujemy w Next.js i nowoczesnym stacku. Iteracyjnie, z regularnymi demo." },
  { n: "04", title: "Wdrożenie", desc: "Publikujemy, mierzymy i optymalizujemy. Zostajemy na dłużej — rozwijamy produkt." },
];

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="border-b border-line-2 pb-8">
          <div className="label">[ Jak pracujemy ]</div>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-6xl">
            Proces bez niespodzianek
          </h2>
        </Reveal>

        <div className="mt-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line py-8 transition-colors hover:bg-card sm:grid-cols-[120px_1fr_2fr] sm:gap-10 sm:px-4">
                <span className="display text-4xl text-flame sm:text-6xl">{s.n}</span>
                <h3 className="display text-2xl sm:text-4xl">{s.title}</h3>
                <p className="col-span-2 max-w-md text-ink-soft sm:col-span-1">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
