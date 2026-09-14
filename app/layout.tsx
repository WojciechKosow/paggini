import type { Metadata } from "next";
import { Geist, Sora, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "paggini — studio produktów cyfrowych",
  description:
    "Projektujemy i budujemy dopracowane produkty cyfrowe: strony internetowe, systemy webowe i aplikacje mobilne. Nowoczesny design, dbałość o detal, mierzalny efekt.",
  keywords: [
    "strony internetowe",
    "systemy webowe",
    "aplikacje mobilne",
    "software house",
    "studio digital",
    "UX/UI",
  ],
  openGraph: {
    title: "paggini — studio produktów cyfrowych",
    description:
      "Strony, systemy i aplikacje, które robią wrażenie. Od pomysłu po wdrożenie.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${sora.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
