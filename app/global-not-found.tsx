import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";

// This file bypasses the app layout, so it imports its own global styles/fonts
// and returns a complete HTML document.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — paggini",
  description: "Nie ma takiej strony / Page not found.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${bricolage.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />

          <div className="relative mx-auto max-w-lg">
            <Link href="/pl" className="inline-flex items-baseline gap-2">
              <span className="display text-2xl font-extrabold">paggini</span>
              <span className="h-2 w-2 bg-flame" />
            </Link>

            <div className="display mt-10 text-[7rem] leading-none text-flame sm:text-[9rem]">404</div>
            <h1 className="display mt-4 text-3xl sm:text-4xl">
              Nie ma takiej strony
              <span className="mono mt-2 block text-sm uppercase tracking-wider text-muted">
                Page not found
              </span>
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              Strona mogła zmienić adres albo nigdy nie istniała.
              <span className="mt-1 block">The page may have moved, or it never existed.</span>
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/pl" className="btn btn-ink px-7">
                Strona główna
              </Link>
              <Link href="/en" className="btn btn-line px-7">
                Home (EN)
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
