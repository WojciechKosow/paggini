import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Sora } from "next/font/google";
import "./globals.css";

// This file bypasses the app layout, so it imports its own global styles/fonts
// and returns a complete HTML document.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
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
      className={`${geistSans.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 text-center">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="animate-aurora absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
              style={{
                background:
                  "radial-gradient(circle,rgba(139,92,246,0.5),transparent 60%)",
              }}
            />
            <div className="bg-grid mask-fade absolute inset-0 opacity-25" />
          </div>

          <div className="mx-auto max-w-lg">
            <Link href="/pl" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-display text-base font-extrabold text-white">
                p
              </span>
              <span className="font-display text-lg font-bold">paggini</span>
            </Link>

            <div className="font-display mt-10 text-7xl font-extrabold tracking-tight text-gradient">
              404
            </div>
            <h1 className="font-display mt-6 text-3xl font-bold tracking-tight">
              Nie ma takiej strony
              <span className="mt-1 block text-xl text-mist">Page not found</span>
            </h1>
            <p className="mt-4 text-lg text-mist">
              Strona mogła zmienić adres albo nigdy nie istniała.
              <span className="mt-1 block">
                The page may have moved, or it never existed.
              </span>
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/pl" className="btn btn-primary w-full sm:w-auto">
                Strona główna
              </Link>
              <Link href="/en" className="btn btn-ghost w-full sm:w-auto">
                Home (EN)
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
