import Reveal from "./Reveal";
import { Icon } from "./Icons";
import type { Dictionary } from "../content/dictionary";

export default function Features({ dict }: { dict: Dictionary }) {
  const f = dict.features;
  return (
    <section className="relative bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 border-b border-paper/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="label !text-paper/50">[ {f.eyebrow} ]</div>
            <h2 className="display mt-4 max-w-xl text-4xl sm:text-6xl">
              {f.title}
              <br />
              <span className="flame">{f.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-xs text-paper/60">{f.lead}</p>
        </Reveal>

        <div className="mt-8 grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {f.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="group flex h-full flex-col bg-ink p-7 transition-colors hover:bg-[#100e0a]">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-paper/25 text-flame transition-transform duration-500 group-hover:scale-110">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="mono text-xs text-paper/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display mt-6 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
