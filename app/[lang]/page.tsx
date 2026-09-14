import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../content/site";
import { getDictionary } from "./dictionaries";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Features from "../components/Features";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero lang={locale} dict={dict} />
      <Marquee dict={dict} />
      <Services lang={locale} dict={dict} />
      <Features dict={dict} />
      <Portfolio lang={locale} dict={dict} />
      <Process dict={dict} />
      <Pricing lang={locale} dict={dict} />
      <CTA lang={locale} dict={dict} />
    </>
  );
}
