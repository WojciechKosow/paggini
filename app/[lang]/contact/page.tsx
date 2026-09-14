import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, contact, type Locale } from "../../content/site";
import { getDictionary } from "../dictionaries";
import { pageMetadata } from "../../seo";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";

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
      <PageHeader eyebrow={c.eyebrow} title={c.title} titleAccent={c.titleAccent} lead={c.lead} />

      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Details */}
          <Reveal className="flex flex-col gap-6">
            <a href={`mailto:${contact.email}`} data-cursor className="group block border-b border-line-2 pb-6">
              <div className="mono text-[10px] uppercase tracking-wider text-muted">{c.emailLabel}</div>
              <div className="display mt-2 text-2xl underline-flame sm:text-3xl">{contact.email}</div>
            </a>

            <div className="border-b border-line-2 pb-6">
              <div className="mono text-[10px] uppercase tracking-wider text-muted">
                {locale === "pl" ? "Gdzie jesteśmy" : "Where we are"}
              </div>
              <div className="display mt-2 text-2xl">{contact.location[locale]}</div>
            </div>

            <div className="flex flex-col gap-3">
              {c.badges.map((b) => (
                <span key={b} className="mono flex items-center gap-3 text-xs text-ink-soft">
                  <span className="h-1.5 w-1.5 bg-flame" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-4">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="mono text-xs uppercase tracking-wider text-ink underline-flame"
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
