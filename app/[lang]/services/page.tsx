import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../content/site";
import { getDictionary } from "../dictionaries";
import { pageMetadata } from "../../seo";
import PageHeader from "../../components/PageHeader";
import Features from "../../components/Features";
import Services from "../../components/Services";
import Process from "../../components/Process";
import Pricing from "../../components/Pricing";
import CTA from "../../components/CTA";

export async function generateMetadata(
  props: PageProps<"/[lang]/services">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({
    lang,
    key: "services",
    title: dict.nav.services,
    description: dict.services.lead,
  });
}

export default async function ServicesPage(props: PageProps<"/[lang]/services">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.services.eyebrow}
        title={dict.services.title}
        titleAccent={dict.services.titleAccent}
        lead={dict.services.lead}
      />
      <Services lang={locale} dict={dict} heading={false} />
      <Features dict={dict} />
      <Process dict={dict} />
      <Pricing lang={locale} dict={dict} />
      <CTA lang={locale} dict={dict} />
    </>
  );
}
