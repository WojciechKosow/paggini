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
import { Icon } from "../../../components/Icons";

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

export default async function ProjectPage(props: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const meta = getProject(slug);
  const dict = await getDictionary(locale);
  const project = meta ? dict.projects[slug] : undefined;
  if (!meta || !project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const d = dict.work.detail;

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden page-top pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
            style={{ background: meta.gradient }}
          />
          <div className="bg-grid mask-fade absolute inset-0 opacity-20" />
        </div>

        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Link
              href={href(locale, "work")}
              className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-chalk"
            >
              <span>←</span> {dict.work.backToWork}
            </Link>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="eyebrow text-gradient">{project.category}</div>
                <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  {meta.name}
                </h1>
              </div>
              {meta.url && (
                <a
                  href={meta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost self-start sm:self-auto"
                >
                  {dict.work.visitSite} ↗
                </a>
              )}
            </div>
          </Reveal>

          {/* Cover */}
          <Reveal delay={100}>
            <div
              className="ring-grad relative mt-10 h-56 overflow-hidden rounded-3xl sm:h-80"
              style={{ background: meta.gradient }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.5), transparent 45%)",
                }}
              />
              <span className="absolute bottom-6 left-6 font-display text-3xl font-bold text-white/90 drop-shadow sm:text-5xl">
                {meta.name}
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              {d.overview}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              {project.description}
            </p>

            <h3 className="font-display mt-10 text-xl font-semibold">{d.scope}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white/[0.02] p-4 text-sm text-chalk"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-cyan-300">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Meta card */}
          <Reveal delay={120}>
            <div className="card sticky top-28 p-6">
              <dl className="space-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-mist">
                    {d.clientLabel}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold">
                    {project.client}
                  </dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="text-xs uppercase tracking-wider text-mist">
                    {d.typeLabel}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold">
                    {dict.work.kindLabel[meta.kind]}
                  </dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="text-xs uppercase tracking-wider text-mist">
                    {d.yearLabel}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold">
                    {meta.year}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next + CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="ring-grad relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="animate-aurora absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full opacity-50 blur-[110px]"
                style={{ background: "radial-gradient(circle,rgba(139,92,246,0.55),transparent 60%)" }}
              />
            </div>
            <h2 className="font-display mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              {d.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-mist">{d.ctaLead}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={href(locale, "contact")} className="btn btn-primary w-full sm:w-auto">
                {d.ctaButton}
              </Link>
              <a href={`mailto:${contact.email}`} className="btn btn-ghost w-full sm:w-auto">
                {contact.email}
              </a>
            </div>
          </div>
        </Reveal>

        {next.slug !== slug && (
          <Reveal delay={100} className="mt-10">
            <Link
              href={workHref(locale, next.slug)}
              className="card group flex items-center justify-between p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-mist">
                  {dict.work.nextProject}
                </div>
                <div className="font-display mt-1 text-xl font-semibold">
                  {next.name}
                </div>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mist transition-all group-hover:border-violet-400 group-hover:text-chalk">
                →
              </span>
            </Link>
          </Reveal>
        )}
      </section>
    </article>
  );
}
