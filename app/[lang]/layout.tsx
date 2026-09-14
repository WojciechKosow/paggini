import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque, Space_Mono } from "next/font/google";
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
import Cursor from "../components/Cursor";

// `latin-ext` is required for Polish diacritics (ą ć ę ł ń ó ś ź ż).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Space Mono ships only `latin` (no `latin-ext`); mono text is kept ASCII-only.
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${geistSans.variable} ${bricolage.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#main" className="skip-link">
          {locale === "pl" ? "Przejdź do treści" : "Skip to content"}
        </a>
        <Cursor />
        <Nav lang={locale} dict={dict} />
        <main id="main">{props.children}</main>
        <Footer lang={locale} dict={dict} />
      </body>
    </html>
  );
}
