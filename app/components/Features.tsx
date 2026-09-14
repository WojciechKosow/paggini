import Reveal from "./Reveal";
import { Icon } from "./Icons";
import type { Dictionary } from "../content/dictionary";

export default function Features({ dict }: { dict: Dictionary }) {
  const f = dict.features;
  return (
    <section className="relative border-t border-line py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">{f.eyebrow}</div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {f.title} <span className="text-gradient">{f.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-mist">{f.lead}</p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {f.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="card group h-full p-7 transition-transform duration-500 hover:-translate-y-1.5">
                <span className="icon-tile text-gradient transition-transform duration-500 group-hover:scale-110">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
