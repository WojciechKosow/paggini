import type { Dictionary } from "../content/dictionary";

export default function Marquee({ dict }: { dict: Dictionary }) {
  const row = [...dict.marquee, ...dict.marquee];
  return (
    <section className="overflow-hidden border-y border-ink bg-ink py-6 text-paper">
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex shrink-0 items-center">
          {row.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="display text-4xl font-semibold sm:text-5xl">{item}</span>
              <span className="mx-6 inline-block text-flame" aria-hidden>
                ✳
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
