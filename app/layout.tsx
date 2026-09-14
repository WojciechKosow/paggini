import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "paggini — studio produktów cyfrowych",
  description:
    "Projektujemy i budujemy dopracowane produkty cyfrowe: strony internetowe, systemy webowe i aplikacje mobilne. Rzemiosło, charakter i mierzalny efekt.",
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
      className={`${geistSans.variable} ${bricolage.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
