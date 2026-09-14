import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../content/site";
import { getDictionary } from "../dictionaries";
import { pageMetadata } from "../../seo";
import PageHeader from "../../components/PageHeader";
import Process from "../../components/Process";
import Features from "../../components/Features";
import CTA from "../../components/CTA";

export async function generateMetadata(
  props: PageProps<"/[lang]/process">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({
    lang,
    key: "process",
    title: dict.nav.process,
    description: dict.process.lead,
  });
}

export default async function ProcessPage(props: PageProps<"/[lang]/process">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.process.eyebrow}
        title={dict.process.title}
        lead={dict.process.lead}
      />
      <Process dict={dict} bordered={false} />
      <Features dict={dict} />
      <CTA lang={locale} dict={dict} />
    </>
  );
}
