import Reveal from "./Reveal";
import { BrowserMockup, SystemMockup, PhoneMockup } from "./Mockups";

const SERVICES = [
  {
    tag: "01 — Strony internetowe",
    title: "Strony, które sprzedają",
    desc: "Landing page'e, strony firmowe i sklepy. Szybkie, dopracowane w każdym pikselu i zaprojektowane wokół jednego celu — konwersji.",
    points: ["Design szyty na miarę", "Animacje i motion", "SEO i Core Web Vitals"],
    mockup: <BrowserMockup />,
  },
  {
    tag: "02 — Systemy webowe",
    title: "Systemy, które porządkują pracę",
    desc: "Panele, dashboardy i platformy SaaS. Bezpieczne logowanie, role, integracje i architektura, która rośnie razem z Twoim biznesem.",
    points: ["Uwierzytelnianie i role", "Integracje i API", "Skalowalna architektura"],
    mockup: <SystemMockup />,
    reverse: true,
  },
  {
    tag: "03 — Aplikacje mobilne",
    title: "Aplikacje w kieszeni klienta",
    desc: "Natywne wrażenia na iOS i Androida. Płynne animacje, logowanie biometryczne i powiadomienia push — wszystko z jednego, spójnego kodu.",
    points: ["iOS i Android", "Logowanie biometryczne", "Push i tryb offline"],
    mockup: <PhoneMockup />,
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">Co robimy</div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Trzy filary. <span className="text-gradient">Jeden standard.</span>
          </h2>
          <p className="mt-4 text-lg text-mist">
            Od pierwszego szkicu po wdrożenie — projektujemy i budujemy produkty,
            z których naprawdę korzysta się z przyjemnością.
          </p>
        </Reveal>

        <div className="mt-24 space-y-28">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal
                className={s.reverse ? "lg:order-2" : ""}
                delay={80}
              >
                <div className="eyebrow text-gradient">{s.tag}</div>
                <h3 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-mist">
                  {s.desc}
                </p>
                <ul className="mt-7 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-chalk">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-white/[0.03] text-xs text-gradient">
                        ✦
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-chalk"
                >
                  <span className="border-b border-transparent transition-colors group-hover:border-violet-400">
                    Porozmawiajmy o Twoim projekcie
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>

              <Reveal
                className={s.reverse ? "lg:order-1" : ""}
                delay={i === 2 ? 0 : 160}
              >
                {s.mockup}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
