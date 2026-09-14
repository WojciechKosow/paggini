import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    desc: "Poznajemy Twój biznes, cele i użytkowników. Definiujemy zakres i mierzalne efekty.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Projektujemy UX i UI. Klikalny prototyp, w którym widać produkt jeszcze przed kodem.",
  },
  {
    n: "03",
    title: "Development",
    desc: "Budujemy w Next.js i nowoczesnym stacku. Iteracyjnie, z regularnymi demo.",
  },
  {
    n: "04",
    title: "Wdrożenie",
    desc: "Publikujemy, mierzymy i optymalizujemy. Zostajemy na dłużej — rozwijamy produkt.",
  },
];

export default function Process() {
  return (
    <section className="relative border-y border-line py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="eyebrow">Jak pracujemy</div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Proces bez niespodzianek
          </h2>
          <p className="mt-4 text-lg text-mist">
            Cztery etapy, pełna transparentność i stały kontakt na każdym kroku.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink-2 font-display text-lg font-bold text-gradient">
                  {s.n}
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
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
