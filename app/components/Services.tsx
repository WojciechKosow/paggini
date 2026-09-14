import Reveal from "./Reveal";
import { BrowserMockup, SystemMockup, PhoneMockup } from "./Mockups";

const SERVICES = [
  {
    n: "01",
    kicker: "Strony internetowe",
    title: "Strony, które sprzedają",
    desc: "Landing page'e, strony firmowe i sklepy. Szybkie, dopracowane w każdym pikselu i zaprojektowane wokół jednego celu — konwersji.",
    points: ["Design szyty na miarę", "Animacje i motion", "SEO i Core Web Vitals"],
    mockup: <BrowserMockup />,
  },
  {
    n: "02",
    kicker: "Systemy webowe",
    title: "Systemy, które porządkują pracę",
    desc: "Panele, dashboardy i platformy SaaS. Bezpieczne logowanie, role, integracje i architektura, która rośnie razem z Twoim biznesem.",
    points: ["Uwierzytelnianie i role", "Integracje i API", "Skalowalna architektura"],
    mockup: <SystemMockup />,
    reverse: true,
  },
  {
    n: "03",
    kicker: "Aplikacje mobilne",
    title: "Aplikacje w kieszeni klienta",
    desc: "Natywne wrażenia na iOS i Androida. Płynne przejścia, logowanie biometryczne i powiadomienia push — z jednego, spójnego kodu.",
    points: ["iOS i Android", "Logowanie biometryczne", "Push i tryb offline"],
    mockup: <PhoneMockup />,
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 border-b border-line-2 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="label">[ Co robimy ]</div>
            <h2 className="display mt-4 max-w-xl text-4xl sm:text-6xl">
              Trzy filary,
              <br />
              jeden standard.
            </h2>
          </div>
          <p className="max-w-xs text-ink-soft">
            Od pierwszego szkicu po wdrożenie — produkty, z których korzysta się
            z przyjemnością.
          </p>
        </Reveal>

        <div className="mt-8">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="grid items-center gap-10 border-b border-line py-16 lg:grid-cols-2 lg:gap-20 lg:py-20"
            >
              <Reveal className={s.reverse ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4">
                  <span className="display text-5xl text-flame">{s.n}</span>
                  <span className="mono text-xs text-muted">/ {s.kicker}</span>
                </div>
                <h3 className="display mt-6 text-3xl sm:text-5xl">{s.title}</h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 py-3">
                      <span className="h-1.5 w-1.5 bg-flame" />
                      <span className="text-ink">{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  data-cursor
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  <span className="underline-flame pb-0.5">
                    Porozmawiajmy o Twoim projekcie
                  </span>
                  <span className="text-flame transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>

              <Reveal className={s.reverse ? "lg:order-1" : ""} delay={120}>
                {s.mockup}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
