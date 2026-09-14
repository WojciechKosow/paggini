/* Animated, CSS-driven product mockups. Purely presentational — no client JS. */

/* ---------------- Website (browser window) ---------------- */
export function BrowserMockup() {
  return (
    <div className="card ring-grad spotlight animate-float overflow-hidden shadow-[0_40px_120px_-40px_rgba(139,92,246,0.5)]">
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-md border border-line bg-black/40 px-3">
          <span className="h-2.5 w-2.5 rounded-full border border-mist/50" />
          <span className="text-[11px] text-mist">paggini.studio</span>
        </div>
      </div>

      {/* viewport */}
      <div className="relative p-5">
        {/* hero band */}
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

        {/* feature cards */}
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

        {/* mini analytics bars */}
        <div className="mt-4 flex h-16 items-end gap-1.5 rounded-lg border border-line bg-white/[0.02] p-3">
          {[0.5, 0.75, 0.4, 0.9, 0.6, 1, 0.7, 0.85].map((h, i) => (
            <span
              key={i}
              className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-violet-500/40 to-cyan-400"
              style={{
                height: `${h * 100}%`,
                animation: `bar-pulse ${2 + i * 0.2}s ease-in-out ${
                  i * 0.1
                }s infinite`,
              }}
            />
          ))}
        </div>

        {/* floating cursor */}
        <div
          className="pointer-events-none absolute left-8 top-24 z-10"
          style={{ animation: "cursor-move 5s ease-in-out infinite" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 2l6 16 2.5-6.5L19 9 4 2z"
              fill="#fff"
              stroke="#000"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------------- System (web login) ---------------- */
export function SystemMockup() {
  return (
    <div className="card ring-grad spotlight animate-float overflow-hidden shadow-[0_40px_120px_-40px_rgba(34,211,238,0.4)]">
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-md border border-line bg-black/40 px-3">
          <span className="text-[11px] text-mist">app.twojafirma.pl / login</span>
        </div>
      </div>

      <div className="grid grid-cols-5">
        {/* brand panel */}
        <div
          className="relative col-span-2 hidden overflow-hidden p-5 sm:block"
          style={{
            backgroundImage:
              "linear-gradient(160deg, rgba(99,102,241,0.9), rgba(139,92,246,0.5), rgba(6,6,9,0.2))",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/90 font-display text-sm font-bold text-indigo-600">
              p
            </span>
          </div>
          <div className="mt-10 space-y-2">
            <div className="h-2 w-24 rounded-full bg-white/80" />
            <div className="h-2 w-16 rounded-full bg-white/50" />
          </div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        </div>

        {/* form */}
        <div className="col-span-5 p-6 sm:col-span-3">
          <div className="text-sm font-semibold">Zaloguj się</div>
          <div className="mt-1 text-[11px] text-mist">
            Witaj z powrotem. Kontynuuj do panelu.
          </div>

          <div className="mt-5 space-y-3">
            <div>
              <div className="mb-1.5 text-[10px] uppercase tracking-wider text-mist">
                E-mail
              </div>
              <div className="flex h-9 items-center rounded-lg border border-line bg-black/40 px-3 text-xs text-chalk">
                anna@twojafirma.pl
                <span
                  className="ml-0.5 inline-block h-3.5 w-px bg-violet-400"
                  style={{ animation: "caret 1s step-end infinite" }}
                />
              </div>
            </div>
            <div>
              <div className="mb-1.5 text-[10px] uppercase tracking-wider text-mist">
                Hasło
              </div>
              <div className="flex h-9 items-center gap-1.5 rounded-lg border border-line bg-black/40 px-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-mist"
                    style={{ animation: `pop-in 0.3s ${i * 0.08}s both` }}
                  />
                ))}
              </div>
            </div>

            <button className="relative mt-1 flex h-9 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-xs font-semibold text-white">
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ animation: "shimmer 2.4s ease-in-out infinite" }}
              />
              Zaloguj się
            </button>

            <div className="flex items-center gap-2 pt-1 text-[10px] text-emerald-400">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/15">
                ✓
              </span>
              Uwierzytelnianie dwuskładnikowe aktywne
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mobile app (phone login) ---------------- */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[230px]">
      <div
        className="animate-float relative rounded-[2.6rem] border border-line bg-ink-2 p-2.5 shadow-[0_40px_120px_-30px_rgba(217,70,239,0.45)]"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="ring-grad relative overflow-hidden rounded-[2rem] bg-black">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          {/* screen bg glow */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(120% 60% at 50% 0%, rgba(217,70,239,0.5), transparent 55%), radial-gradient(100% 60% at 50% 100%, rgba(99,102,241,0.4), transparent 60%)",
            }}
          />

          <div className="relative flex h-[460px] flex-col px-5 pb-7 pt-9">
            {/* status bar */}
            <div className="flex items-center justify-between text-[10px] text-white/70">
              <span>9:41</span>
              <span>●●● ᯤ ▮</span>
            </div>

            {/* logo */}
            <div className="mt-14 flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-display text-2xl font-extrabold text-white shadow-lg">
                p
              </div>
              <div className="mt-4 font-display text-lg font-bold text-white">
                Witaj ponownie
              </div>
              <div className="mt-1 text-[11px] text-white/50">
                Zaloguj się do aplikacji
              </div>
            </div>

            {/* inputs */}
            <div className="mt-7 space-y-3">
              <div className="flex h-10 items-center rounded-xl border border-white/10 bg-white/[0.06] px-3 text-xs text-white/80 backdrop-blur">
                anna@twojafirma.pl
              </div>
              <div className="flex h-10 items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] px-3 backdrop-blur">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-white/70"
                  />
                ))}
              </div>
              <button className="relative mt-1 flex h-10 w-full items-center justify-center overflow-hidden rounded-xl bg-white text-xs font-semibold text-black">
                Zaloguj się
              </button>
            </div>

            {/* biometric */}
            <div className="mt-auto flex flex-col items-center">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-full border border-fuchsia-400/60"
                  style={{ animation: "ring-out 2.2s ease-out infinite" }}
                />
                <span
                  className="absolute inset-0 rounded-full border border-fuchsia-400/60"
                  style={{ animation: "ring-out 2.2s ease-out 1.1s infinite" }}
                />
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
                  <path d="M12 2a10 10 0 00-8 4" opacity="0.6" />
                  <path d="M5 10a7 7 0 0114 0v3" />
                  <path d="M8.5 11a3.5 3.5 0 017 0v2a8 8 0 001 4" />
                  <path d="M12 12v4a10 10 0 001 4" />
                  <path d="M9 18a12 12 0 001 4" opacity="0.7" />
                </svg>
              </div>
              <span className="mt-2 text-[10px] text-white/50">
                Dotknij, aby zalogować
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
