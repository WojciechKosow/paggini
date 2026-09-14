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
    <header className="relative overflow-hidden page-top pb-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="animate-aurora absolute -top-32 left-1/3 h-[34rem] w-[34rem] rounded-full opacity-40 blur-[130px]"
          style={{ background: "radial-gradient(circle,rgba(139,92,246,0.5),transparent 60%)" }}
        />
        <div className="bg-grid mask-fade absolute inset-0 opacity-25" />
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-gradient">{titleAccent}</span>
              </>
            )}
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{lead}</p>}
        </Reveal>
      </div>
    </header>
  );
}
