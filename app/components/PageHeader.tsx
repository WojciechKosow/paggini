import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  titleAccent,
  lead,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead?: string;
}) {
  return (
    <header className="relative overflow-hidden page-top pb-14">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="border-b border-line-2 pb-10">
          <div className="label">[ {eyebrow} ]</div>
          <h1 className="display mt-5 max-w-4xl text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="serif-i flame">{titleAccent}</span>
              </>
            )}
          </h1>
          {lead && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">{lead}</p>}
        </Reveal>
      </div>
    </header>
  );
}
