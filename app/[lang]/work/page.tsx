import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../content/site";
import { getDictionary } from "../dictionaries";
import { pageMetadata } from "../../seo";
import PageHeader from "../../components/PageHeader";
import Portfolio from "../../components/Portfolio";
import Process from "../../components/Process";
import CTA from "../../components/CTA";

export async function generateMetadata(
  props: PageProps<"/[lang]/work">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({
    lang,
    key: "work",
    title: dict.nav.work,
    description: dict.work.lead,
  });
}

export default async function WorkPage(props: PageProps<"/[lang]/work">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.work.eyebrow}
        title={dict.work.title}
        lead={dict.work.lead}
      />
      <Portfolio lang={locale} dict={dict} heading={false} />
      <Process dict={dict} />
      <CTA lang={locale} dict={dict} />
    </>
  );
}
