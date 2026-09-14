/* Cinematic, CSS-driven product mockups. One shared 12s loop per scene.
   Purely presentational — no client JS. Palette stays on-brand:
   paper, ink, vermilion. */

const EASE = "cubic-bezier(0.65,0,0.35,1)";
const loop = (name: string, dur = 12, ease = EASE) =>
  `${name} ${dur}s ${ease} infinite`;

function Chrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-ink/15 bg-paper-2 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-flame" />
      <span className="h-2.5 w-2.5 rounded-full border border-ink/40" />
      <span className="h-2.5 w-2.5 rounded-full border border-ink/40" />
      <div className="mono ml-3 flex h-6 flex-1 items-center gap-2 rounded-sm border border-ink/15 bg-paper px-3 text-[10px] text-muted">
        <span
          className="inline-block"
          style={{ animation: loop("reload-tick", 12, "ease-out") }}
        >
          ↻
        </span>
        {url}
      </div>
      <span className="mono flex items-center gap-1 text-[9px] text-flame">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-flame" />
        LIVE
      </span>
    </div>
  );
}

/* ---------------- Website: a live site that scrolls itself ---------------- */
export function BrowserMockup() {
  return (
    <div className="panel relative overflow-hidden shadow-[10px_10px_0_0_var(--ink)]">
      <Chrome url="paggini.studio" />
      <div className="relative h-[300px] overflow-hidden bg-paper">
        <div
          className="w-full"
          style={{ height: "900px", animation: loop("site-scroll") }}
        >
          {/* section 1 — hero */}
          <div className="flex h-[300px] flex-col justify-center gap-3 border-b border-ink/10 px-7">
            <div className="mono text-[10px] text-muted">PAGGINI — STUDIO</div>
            <div className="display text-4xl leading-[0.95]">
              Robimy
              <br />
              <span className="flame">wrażenie.</span>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="h-7 w-24 bg-ink" />
              <span className="h-7 w-16 border border-ink" />
            </div>
          </div>
          {/* section 2 — work grid */}
          <div className="grid h-[300px] grid-cols-2 grid-rows-2 gap-2 border-b border-ink/10 p-5">
            {[
              { bg: "bg-ink", t: "text-paper", l: "Nordwind" },
              { bg: "bg-flame", t: "text-paper", l: "Lumen" },
              { bg: "bg-paper-2 border border-ink/20", t: "text-ink", l: "Atelier" },
              { bg: "bg-ink", t: "text-paper", l: "Volta" },
            ].map((c) => (
              <div
                key={c.l}
                className={`flex items-end p-3 ${c.bg} ${c.t}`}
              >
                <span className="mono text-[10px]">{c.l}</span>
              </div>
            ))}
          </div>
          {/* section 3 — cta */}
          <div className="flex h-[300px] flex-col items-center justify-center gap-4 px-7 text-center">
            <div className="display text-3xl">Zbudujmy to razem.</div>
            <span className="flex h-9 items-center bg-flame px-5 text-sm font-semibold text-paper">
              Napisz do nas →
            </span>
          </div>
        </div>

        {/* floating cursor */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10"
          style={{ animation: loop("browser-cursor") }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 2l6 16 2.5-6.5L19 9 4 2z" fill="#17150f" stroke="#efe9dd" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------------- System: log in → dashboard, on a loop ---------------- */
export function SystemMockup() {
  return (
    <div className="panel relative overflow-hidden shadow-[10px_10px_0_0_var(--ink)]">
      <Chrome url="app.twojafirma.pl" />
      <div className="relative h-[300px] overflow-hidden bg-paper">
        {/* login */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-8"
          style={{ animation: loop("sys-login") }}
        >
          <div className="mono text-[10px] text-muted">BEZPIECZNE LOGOWANIE</div>
          <div className="display mt-2 text-2xl">Zaloguj się</div>

          <div className="mt-5 space-y-3">
            <div>
              <div className="mono mb-1 text-[9px] text-muted">E-MAIL</div>
              <div className="flex h-9 items-center border border-ink/25 bg-card px-3 text-sm">
                <span
                  className="overflow-hidden whitespace-nowrap"
                  style={{ animation: loop("type-email") }}
                >
                  anna@firma
                </span>
                <span
                  className="ml-px inline-block h-4 w-px bg-flame"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </div>
            </div>
            <div>
              <div className="mono mb-1 text-[9px] text-muted">HASŁO</div>
              <div className="flex h-9 items-center gap-1.5 border border-ink/25 bg-card px-3">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-ink"
                    style={{ animation: loop("fill-dot") }}
                  />
                ))}
              </div>
            </div>
            <div
              className="flex h-9 items-center justify-center gap-2 bg-ink text-sm font-semibold text-paper"
              style={{ animation: loop("btn-press") }}
            >
              <span
                className="inline-block h-3 w-3 rounded-full border-2 border-paper/40 border-t-paper"
                style={{ animation: "spin 0.7s linear infinite" }}
              />
              Zaloguj się
            </div>
          </div>
        </div>

        {/* dashboard */}
        <div
          className="absolute inset-0 grid grid-cols-[64px_1fr]"
          style={{ animation: loop("sys-dash") }}
        >
          <div className="flex flex-col items-center gap-4 border-r border-ink/15 bg-ink py-4">
            <span className="h-4 w-4 bg-flame" />
            <span className="h-2 w-2 rounded-full bg-paper/60" />
            <span className="h-2 w-2 rounded-full bg-paper/30" />
            <span className="h-2 w-2 rounded-full bg-paper/30" />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="mono text-[10px] text-muted">PULPIT / DZIŚ</div>
              <span className="mono flex items-center gap-1 text-[9px] text-flame">
                ● ONLINE
              </span>
            </div>
            {/* KPIs */}
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                { v: "12.4k", l: "wizyt" },
                { v: "3.9%", l: "konwersja" },
                { v: "84", l: "zamówień" },
              ].map((k) => (
                <div key={k.l} className="border border-ink/15 bg-card p-2.5">
                  <div className="display text-lg">{k.v}</div>
                  <div className="mono text-[8px] text-muted">{k.l}</div>
                </div>
              ))}
            </div>
            {/* chart */}
            <div className="relative mt-3 h-[112px] border border-ink/15 bg-card p-3">
              <div className="flex h-full items-end gap-1.5">
                {[0.4, 0.7, 0.5, 0.9, 0.65, 1, 0.55, 0.8, 0.45].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 origin-bottom bg-ink/80"
                    style={
                      {
                        height: "100%",
                        transform: `scaleY(${h})`,
                        "--h": h,
                        animation: loop("grow-bar"),
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>
              <svg
                className="pointer-events-none absolute inset-3"
                viewBox="0 0 200 90"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 70 L25 55 L50 62 L75 30 L100 42 L125 18 L150 34 L175 12 L200 24"
                  fill="none"
                  stroke="#ff3b1d"
                  strokeWidth="2.5"
                  strokeDasharray="200"
                  style={{ animation: loop("draw-line") }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mobile app: unlock → biometrics → home ---------------- */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[240px]">
      <div className="relative rounded-[2.4rem] border-2 border-ink bg-ink p-2.5 shadow-[10px_10px_0_0_var(--ink)]">
        <div className="relative overflow-hidden rounded-[1.8rem] bg-paper">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
          {/* status bar */}
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2.5 text-[9px] text-ink">
            <span className="mono">9:41</span>
            <span className="mono">5G ▮▮▮</span>
          </div>

          {/* screen strip */}
          <div
            className="flex h-[440px] w-[300%]"
            style={{ animation: loop("phone-strip") }}
          >
            {/* screen 1 — login */}
            <div className="flex w-1/3 flex-col justify-center px-6">
              <div className="flex h-12 w-12 items-center justify-center bg-ink">
                <span className="h-3 w-3 bg-flame" />
              </div>
              <div className="display mt-5 text-2xl leading-tight">
                Witaj
                <br />
                ponownie.
              </div>
              <div className="mono mt-1 text-[9px] text-muted">ZALOGUJ SIĘ</div>
              <div className="mt-5 space-y-2.5">
                <div className="flex h-9 items-center border border-ink/25 px-3 text-xs text-ink/70">
                  anna@firma.pl
                </div>
                <div className="flex h-9 items-center gap-1.5 border border-ink/25 px-3">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink" />
                  ))}
                </div>
                <div className="flex h-9 items-center justify-center bg-flame text-xs font-semibold text-paper">
                  Dalej →
                </div>
              </div>
            </div>

            {/* screen 2 — biometrics */}
            <div className="flex w-1/3 flex-col items-center justify-center gap-6 bg-ink text-paper">
              <div className="mono text-[9px] text-paper/60">SKANOWANIE…</div>
              <div className="relative flex h-24 w-24 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-full border border-flame"
                  style={{ animation: loop("ring-pulse") }}
                />
                <div className="relative h-20 w-20 overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#efe9dd" strokeWidth="1.1" strokeLinecap="round" className="h-full w-full">
                    <path d="M12 2a10 10 0 00-8 4" opacity="0.5" />
                    <path d="M4 10a8 8 0 0116 0v3" />
                    <path d="M7.5 11a4.5 4.5 0 019 0v2a9 9 0 001 4" />
                    <path d="M12 11v5a11 11 0 001 5" />
                    <path d="M9.5 17a13 13 0 001 5" opacity="0.6" />
                  </svg>
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 bg-flame shadow-[0_0_8px_2px_rgba(255,59,29,0.6)]"
                    style={{ animation: loop("scan-sweep") }}
                  />
                </div>
              </div>
              <div className="mono text-[9px] text-paper/40">FACE ID · TOUCH ID</div>
            </div>

            {/* screen 3 — home */}
            <div className="relative flex w-1/3 flex-col px-5 pt-10">
              {/* notification */}
              <div
                className="absolute inset-x-4 top-9 z-10 flex items-center gap-2 border border-ink/15 bg-card px-3 py-2 shadow-[3px_3px_0_0_var(--ink)]"
                style={{ animation: loop("notif-pop") }}
              >
                <span className="h-6 w-6 bg-flame" />
                <div>
                  <div className="text-[10px] font-semibold leading-tight">Nowe zamówienie</div>
                  <div className="mono text-[8px] text-muted">przed chwilą</div>
                </div>
              </div>

              <div className="display mt-2 text-xl">Cześć, Anna</div>
              <div className="mono text-[9px] text-muted">TWÓJ PULPIT</div>

              <div className="mt-3 flex items-end justify-between bg-ink p-3 text-paper">
                <div>
                  <div className="mono text-[8px] text-paper/50">SALDO</div>
                  <div className="display text-2xl">42 890 zł</div>
                </div>
                <span className="mono text-[9px] text-flame">+12%</span>
              </div>

              <div className="mt-3 space-y-2">
                {["Projekt Nordwind", "Faktura #204", "Zespół — 6 osób"].map((t) => (
                  <div
                    key={t}
                    className="flex items-center justify-between border border-ink/15 bg-card px-3 py-2"
                    style={{ animation: loop("card-in") }}
                  >
                    <span className="text-[11px]">{t}</span>
                    <span className="mono text-[9px] text-muted">→</span>
                  </div>
                ))}
              </div>

              {/* tab bar */}
              <div className="mt-auto -mx-5 flex items-center justify-around border-t border-ink/15 bg-paper-2 py-3">
                <span className="h-3 w-3 bg-flame" />
                <span className="h-3 w-3 border border-ink/40" />
                <span className="h-3 w-3 border border-ink/40" />
                <span className="h-3 w-3 border border-ink/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
