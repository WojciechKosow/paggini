import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  isLocale,
  projects,
  getProject,
  workHref,
  href,
  contact,
  type Locale,
} from "../../../content/site";
import { getDictionary } from "../../dictionaries";
import { workMetadata } from "../../../seo";
import Reveal from "../../../components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/work/[slug]">
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) return {};
  const meta = getProject(slug);
  const dict = await getDictionary(lang);
  const project = dict.projects[slug];
  if (!meta || !project) return {};
  return workMetadata({
    lang,
    slug,
    title: `${meta.name} — ${project.category}`,
    description: project.summary,
  });
}

const COVER = ["bg-ink text-paper", "bg-flame text-paper", "bg-card text-ink border border-line-2"];

export default async function ProjectPage(props: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const meta = getProject(slug);
  const dict = await getDictionary(locale);
  const project = meta ? dict.projects[slug] : undefined;
  if (!meta || !project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const cover = COVER[index % COVER.length];
  const next = projects[(index + 1) % projects.length];
  const d = dict.work.detail;

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden page-top pb-14">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <Link
              href={href(locale, "work")}
              data-cursor
              className="mono inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink"
            >
              <span>←</span> {dict.work.backToWork}
            </Link>

            <div className="mt-8 flex flex-col gap-6 border-b border-line-2 pb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="label text-flame">{project.category}</div>
                <h1 className="display mt-4 text-6xl tracking-tight sm:text-8xl">{meta.name}</h1>
              </div>
              {meta.url && (
                <a href={meta.url} target="_blank" rel="noopener noreferrer" className="btn btn-line self-start sm:self-auto">
                  {dict.work.visitSite} ↗
                </a>
              )}
            </div>
          </Reveal>

          {/* Cover */}
          <Reveal delay={100}>
            <div className={`relative mt-10 flex h-64 items-end overflow-hidden p-8 shadow-[10px_10px_0_0_var(--ink)] sm:h-96 ${cover}`}>
              <span className="display pointer-events-none absolute -right-4 -top-10 text-[16rem] leading-none opacity-10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="display relative text-4xl sm:text-6xl">{meta.name}</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-[1400px] px-5 pb-8 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <Reveal>
            <div className="label">[ {d.overview} ]</div>
            <p className="mt-5 text-xl leading-relaxed text-ink-soft">{project.description}</p>

            <div className="label mt-12">[ {d.scope} ]</div>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {project.scope.map((item) => (
                <li key={item} className="flex items-center gap-4 py-4">
                  <span className="h-1.5 w-1.5 shrink-0 bg-flame" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Meta card */}
          <Reveal delay={120}>
            <div className="panel sticky top-28 p-6">
              <dl className="divide-y divide-line">
                <div className="flex items-baseline justify-between pb-4">
                  <dt className="mono text-[10px] uppercase tracking-wider text-muted">{d.clientLabel}</dt>
                  <dd className="display text-lg">{project.client}</dd>
                </div>
                <div className="flex items-baseline justify-between py-4">
                  <dt className="mono text-[10px] uppercase tracking-wider text-muted">{d.typeLabel}</dt>
                  <dd className="display text-lg">{dict.work.kindLabel[meta.kind]}</dd>
                </div>
                <div className="flex items-baseline justify-between pt-4">
                  <dt className="mono text-[10px] uppercase tracking-wider text-muted">{d.yearLabel}</dt>
                  <dd className="display text-lg">{meta.year}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-8 bg-ink py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <h2 className="display max-w-2xl text-4xl leading-[0.95] sm:text-6xl">{d.ctaTitle}</h2>
            <p className="mt-5 max-w-lg text-lg text-paper/70">{d.ctaLead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={href(locale, "contact")} className="btn btn-paper px-7">
                {d.ctaButton}
              </Link>
              <a href={`mailto:${contact.email}`} className="mono flex items-center text-paper/70 underline-flame" data-cursor>
                {contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      {next.slug !== slug && (
        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
          <Reveal>
            <Link
              href={workHref(locale, next.slug)}
              data-cursor
              className="group flex items-center justify-between border-t border-line-2 pt-8 transition-colors hover:text-flame"
            >
              <div>
                <div className="mono text-[10px] uppercase tracking-wider text-muted">{dict.work.nextProject}</div>
                <div className="display mt-2 text-3xl sm:text-5xl">{next.name}</div>
              </div>
              <span className="text-3xl transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </Reveal>
        </section>
      )}
    </article>
  );
}
