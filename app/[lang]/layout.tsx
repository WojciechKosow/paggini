import type { Metadata } from "next";
import { Geist, Sora, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary } from "./dictionaries";
import {
  isLocale,
  locales,
  siteUrl,
  routeAlternates,
  type Locale,
} from "../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// `latin-ext` is required for Polish diacritics (ą ć ę ł ń ó ś ź ż).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.defaultTitle,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.defaultDescription,
    keywords: dict.meta.keywords,
    applicationName: dict.meta.siteName,
    alternates: routeAlternates(lang, "home"),
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      locale: lang === "pl" ? "pl_PL" : "en_US",
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      url: `${siteUrl}/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${sora.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#main" className="skip-link">
          {locale === "pl" ? "Przejdź do treści" : "Skip to content"}
        </a>
        <Nav lang={locale} dict={dict} />
        <main id="main">{props.children}</main>
        <Footer lang={locale} dict={dict} />
      </body>
    </html>
  );
}
