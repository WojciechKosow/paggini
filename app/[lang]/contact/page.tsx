import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, contact, type Locale } from "../../content/site";
import { getDictionary } from "../dictionaries";
import { pageMetadata } from "../../seo";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";
import { Icon } from "../../components/Icons";

export async function generateMetadata(
  props: PageProps<"/[lang]/contact">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({
    lang,
    key: "contact",
    title: dict.nav.contact,
    description: dict.contact.lead,
  });
}

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const c = dict.contact;

  return (
    <>
      <PageHeader
        eyebrow={c.eyebrow}
        title={c.title}
        titleAccent={c.titleAccent}
        lead={c.lead}
      />

      <section className="mx-auto max-w-6xl px-5 pb-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Details */}
          <Reveal className="flex flex-col gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="card group flex items-center gap-4 p-5 transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="icon-tile text-gradient">
                <Icon name="sparkles" className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-mist">
                  {c.emailLabel}
                </div>
                <div className="font-display text-lg font-semibold">
                  {contact.email}
                </div>
              </div>
            </a>

            <div className="card flex items-center gap-4 p-5">
              <span className="icon-tile text-gradient">
                <Icon name="compass" className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-mist">
                  {locale === "pl" ? "Gdzie jesteśmy" : "Where we are"}
                </div>
                <div className="font-display text-lg font-semibold">
                  {contact.location[locale]}
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {c.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm text-mist"
                >
                  ✦ {b}
                </span>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-4 py-2 text-sm text-mist transition-colors hover:border-line-strong hover:text-chalk"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <ContactForm dict={dict} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
