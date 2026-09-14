const ITEMS = [
  "Strategia",
  "UX / UI Design",
  "Next.js",
  "React",
  "Aplikacje mobilne",
  "Systemy webowe",
  "E-commerce",
  "Motion design",
  "Integracje API",
  "Wsparcie 24/7",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="relative border-y border-line py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-display text-xl font-medium text-mist/70">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
