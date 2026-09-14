import Link from "next/link";
import { defaultLocale, href } from "../../../content/site";

/**
 * Rendered when a project slug doesn't exist. Co-located with the `[slug]`
 * page so the boundary is in the same segment as the `notFound()` call. It
 * renders inside the locale layout (nav/footer stay localized); the copy is
 * kept bilingual because a not-found sibling can't read the `[lang]` param.
 */
export default function ProjectNotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-32 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="animate-aurora absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
          style={{ background: "radial-gradient(circle,rgba(139,92,246,0.5),transparent 60%)" }}
        />
        <div className="bg-grid mask-fade absolute inset-0 opacity-25" />
      </div>
      <div className="mx-auto max-w-lg">
        <div className="font-display text-7xl font-extrabold tracking-tight text-gradient">
          404
        </div>
        <h1 className="font-display mt-6 text-3xl font-bold tracking-tight">
          Nie ma takiego projektu
          <span className="mt-1 block text-xl text-mist">Project not found</span>
        </h1>
        <p className="mt-4 text-lg text-mist">
          Ten projekt nie istnieje lub został przeniesiony.
          <span className="mt-1 block">
            This project doesn&apos;t exist or has moved.
          </span>
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={href(defaultLocale, "work")} className="btn btn-primary w-full sm:w-auto">
            Realizacje
          </Link>
          <Link href={href("en", "work")} className="btn btn-ghost w-full sm:w-auto">
            Work (EN)
          </Link>
        </div>
      </div>
    </section>
  );
}
