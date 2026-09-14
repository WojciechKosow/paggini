const ITEMS = [
  "Strategia",
  "Design",
  "Rozwój",
  "Motion",
  "E-commerce",
  "Aplikacje",
  "Systemy",
  "Wsparcie",
];

function Star() {
  return (
    <span className="mx-6 inline-block text-flame" aria-hidden>
      ✳
    </span>
  );
}

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="overflow-hidden border-y border-ink bg-ink py-6 text-paper">
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex shrink-0 items-center">
          {row.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="display text-4xl font-semibold sm:text-5xl">
                {item}
              </span>
              <Star />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
