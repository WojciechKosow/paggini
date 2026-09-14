import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../content/site";
import { getDictionary } from "../dictionaries";
import { pageMetadata } from "../../seo";
import PageHeader from "../../components/PageHeader";
import Reveal from "../../components/Reveal";
import Process from "../../components/Process";
import CTA from "../../components/CTA";

export async function generateMetadata(
  props: PageProps<"/[lang]/about">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({
    lang,
    key: "about",
    title: dict.nav.about,
    description: dict.about.lead,
  });
}

export default async function AboutPage(props: PageProps<"/[lang]/about">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <PageHeader eyebrow={a.eyebrow} title={a.title} titleAccent={a.titleAccent} lead={a.lead} />

      {/* Story */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          {a.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-xl leading-relaxed text-ink-soft">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8">
        <Reveal className="border-b border-line-2 pb-8">
          <h2 className="display text-3xl sm:text-5xl">{a.valuesTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-px border border-line-2 bg-line-2 sm:grid-cols-3">
          {a.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="flex h-full flex-col bg-card p-7">
                <span className="display text-5xl text-flame">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-6 text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal className="border-b border-paper/15 pb-8">
            <h2 className="display text-3xl sm:text-5xl">{a.teamTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-2">
            {a.team.map((member, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex h-full items-center gap-5 bg-ink p-7">
                  <span
                    className={`display flex h-16 w-16 shrink-0 items-center justify-center text-3xl ${
                      i === 0 ? "bg-flame text-paper" : "border border-paper/30 text-paper"
                    }`}
                  >
                    {member.name.trim().charAt(0) || "p"}
                  </span>
                  <div>
                    <div className="display text-xl">{member.name}</div>
                    <div className="mono text-xs uppercase tracking-wider text-flame">{member.role}</div>
                    <p className="mt-2 text-sm leading-relaxed text-paper/60">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process dict={dict} bordered={false} />
      <CTA lang={locale} dict={dict} />
    </>
  );
}
