import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../content/site";
import { getDictionary } from "../dictionaries";
import { pageMetadata } from "../../seo";
import PageHeader from "../../components/PageHeader";
import Reveal from "../../components/Reveal";
import { Icon } from "../../components/Icons";
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
      <PageHeader
        eyebrow={a.eyebrow}
        title={a.title}
        titleAccent={a.titleAccent}
        lead={a.lead}
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          {a.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-lg leading-relaxed text-mist">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {a.valuesTitle}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {a.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="card h-full p-6">
                <span className="icon-tile text-gradient">
                  <Icon name="star" className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {a.teamTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {a.team.map((member, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card flex items-center gap-5 p-6">
                  <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-2xl font-bold text-white"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg,#8b5cf6,#d946ef)"
                          : "linear-gradient(135deg,#0ea5e9,#22d3ee)",
                    }}
                  >
                    {member.name.trim().charAt(0) || "p"}
                  </span>
                  <div>
                    <div className="font-display text-lg font-semibold">
                      {member.name}
                    </div>
                    <div className="text-sm text-gradient">{member.role}</div>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {member.bio}
                    </p>
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
