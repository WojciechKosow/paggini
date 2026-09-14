/* Animated, CSS-driven product mockups. Purely presentational, language-neutral
   (no real copy) so they read well on both the PL and EN site. No client JS. */

function Chrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-red-400/80" />
      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
      <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-md border border-line bg-black/40 px-3">
        <span className="h-2.5 w-2.5 rounded-full border border-mist/50" />
        <span className="text-[11px] text-mist">{label}</span>
      </div>
    </div>
  );
}

/* ---------------- Website ---------------- */
export function BrowserMockup() {
  return (
    <div className="card ring-grad spotlight animate-float overflow-hidden shadow-[0_40px_120px_-40px_rgba(139,92,246,0.5)]">
      <Chrome label="paggini.studio" />
      <div className="relative p-5">
        <div
          className="relative overflow-hidden rounded-xl p-5"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(139,92,246,0.9), rgba(217,70,239,0.7), rgba(34,211,238,0.75))",
            backgroundSize: "200% 200%",
            animation: "shift 6s ease-in-out infinite",
          }}
        >
          <div className="h-2.5 w-24 rounded-full bg-white/85" />
          <div className="mt-2 h-2.5 w-40 rounded-full bg-white/60" />
          <div className="mt-4 flex gap-2">
            <div className="h-6 w-20 rounded-md bg-white/90" />
            <div className="h-6 w-16 rounded-md border border-white/60" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-line bg-white/[0.03] p-3"
              style={{ animation: `pop-in 0.6s ${0.2 + i * 0.15}s both` }}
            >
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/15" />
              <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex h-16 items-end gap-1.5 rounded-lg border border-line bg-white/[0.02] p-3">
          {[0.5, 0.75, 0.4, 0.9, 0.6, 1, 0.7, 0.85].map((h, i) => (
            <span
              key={i}
              className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-violet-500/40 to-cyan-400"
              style={{
                height: `${h * 100}%`,
                animation: `bar-pulse ${2 + i * 0.2}s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>

        <div
          className="pointer-events-none absolute left-8 top-24 z-10"
          style={{ animation: "cursor-move 5s ease-in-out infinite" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 2l6 16 2.5-6.5L19 9 4 2z" fill="#fff" stroke="#000" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Online store ---------------- */
export function ShopMockup() {
  const products = [
    "linear-gradient(150deg,#8b5cf6,#6366f1)",
    "linear-gradient(150deg,#22d3ee,#0ea5e9)",
    "linear-gradient(150deg,#f472b6,#d946ef)",
    "linear-gradient(150deg,#34d399,#10b981)",
  ];
  return (
    <div className="card ring-grad spotlight animate-float overflow-hidden shadow-[0_40px_120px_-40px_rgba(217,70,239,0.45)]">
      <Chrome label="shop" />
      <div className="p-5">
        {/* store header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-violet-500" />
            <div className="h-2 w-16 rounded-full bg-white/25" />
          </div>
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-chalk">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6L5 3H2" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
            </svg>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-[9px] font-bold text-white">
              3
            </span>
          </div>
        </div>

        {/* product grid */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {products.map((g, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-line bg-white/[0.02]"
              style={{ animation: `pop-in 0.6s ${0.15 + i * 0.12}s both` }}
            >
              <div className="h-16 w-full" style={{ background: g }} />
              <div className="flex items-center justify-between p-2.5">
                <div className="space-y-1.5">
                  <div className="h-1.5 w-12 rounded-full bg-white/25" />
                  <div className="h-1.5 w-8 rounded-full bg-white/15" />
                </div>
                <span className="rounded-md bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-ink">
                  ★
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="relative mt-4 flex h-9 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xs font-semibold text-white">
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ animation: "shimmer 2.4s ease-in-out infinite" }}
          />
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1.5">
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6L5 3H2" />
          </svg>
          +
        </button>
      </div>
    </div>
  );
}

/* ---------------- Mobile app ---------------- */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[230px]">
      <div
        className="animate-float relative rounded-[2.6rem] border border-line bg-ink-2 p-2.5 shadow-[0_40px_120px_-30px_rgba(99,102,241,0.5)]"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="ring-grad relative overflow-hidden rounded-[2rem] bg-black">
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(120% 60% at 50% 0%, rgba(139,92,246,0.5), transparent 55%), radial-gradient(100% 60% at 50% 100%, rgba(34,211,238,0.4), transparent 60%)",
            }}
          />

          <div className="relative flex h-[460px] flex-col px-5 pb-7 pt-9">
            <div className="flex items-center justify-between text-[10px] text-white/70">
              <span>9:41</span>
              <span>●●● ᯤ ▮</span>
            </div>

            {/* balance card */}
            <div className="mt-6 rounded-2xl bg-white/[0.08] p-4 backdrop-blur">
              <div className="h-1.5 w-16 rounded-full bg-white/40" />
              <div className="mt-3 h-4 w-28 rounded-full bg-white/80" />
              <div className="mt-4 flex gap-2">
                <span className="h-7 flex-1 rounded-lg bg-white/90" />
                <span className="h-7 flex-1 rounded-lg border border-white/40" />
              </div>
            </div>

            {/* list */}
            <div className="mt-4 space-y-2.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.05] p-2.5 backdrop-blur"
                  style={{ animation: `pop-in 0.5s ${0.2 + i * 0.12}s both` }}
                >
                  <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-1.5 w-20 rounded-full bg-white/40" />
                    <div className="h-1.5 w-12 rounded-full bg-white/20" />
                  </div>
                  <div className="h-1.5 w-8 rounded-full bg-white/30" />
                </div>
              ))}
            </div>

            {/* tab bar */}
            <div className="mt-auto flex items-center justify-around rounded-2xl bg-white/[0.06] p-3 backdrop-blur">
              {[1, 0.4, 0.4, 0.4].map((o, i) => (
                <span
                  key={i}
                  className="h-5 w-5 rounded-lg bg-white"
                  style={{ opacity: o }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function mockupFor(kind: "web" | "shop" | "app") {
  if (kind === "shop") return <ShopMockup />;
  if (kind === "app") return <PhoneMockup />;
  return <BrowserMockup />;
}
