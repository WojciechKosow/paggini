import Link from "next/link";
import { defaultLocale, href } from "../../../content/site";

/**
 * Rendered when a project slug doesn't exist. Co-located with the `[slug]`
 * page so the boundary sits in the same segment as the `notFound()` call. It
 * renders inside the locale layout (nav/footer stay localized); the copy is
 * kept bilingual because a not-found sibling can't read the `[lang]` param.
 */
export default function ProjectNotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-5 py-32 text-center">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-lg">
        <div className="display text-[7rem] leading-none text-flame sm:text-[9rem]">404</div>
        <h1 className="display mt-4 text-3xl sm:text-4xl">
          Nie ma takiego projektu
          <span className="mono mt-2 block text-sm uppercase tracking-wider text-muted">
            Project not found
          </span>
        </h1>
        <p className="mt-5 text-lg text-ink-soft">
          Ten projekt nie istnieje lub został przeniesiony.
          <span className="mt-1 block">This project doesn&apos;t exist or has moved.</span>
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={href(defaultLocale, "work")} className="btn btn-ink px-7">
            Realizacje
          </Link>
          <Link href={href("en", "work")} className="btn btn-line px-7">
            Work (EN)
          </Link>
        </div>
      </div>
    </section>
  );
}
