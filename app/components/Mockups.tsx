/* Cinematic, CSS-driven product mockups in the editorial (paper/ink/flame)
   style. Purely presentational and language-neutral — mostly shapes and a few
   universal glyphs — so they read on both the PL and EN site. No client JS. */

import type { ServiceKind } from "../content/site";

const EASE = "cubic-bezier(0.65,0,0.35,1)";
const loop = (name: string, dur = 12, ease = EASE) => `${name} ${dur}s ${ease} infinite`;

function Chrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-ink/15 bg-paper-2 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-flame" />
      <span className="h-2.5 w-2.5 rounded-full border border-ink/40" />
      <span className="h-2.5 w-2.5 rounded-full border border-ink/40" />
      <div className="mono ml-3 flex h-6 flex-1 items-center gap-2 rounded-sm border border-ink/15 bg-paper px-3 text-[10px] text-muted">
        <span className="inline-block" style={{ animation: loop("reload-tick", 12, "ease-out") }}>
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
        <div className="w-full" style={{ height: "900px", animation: loop("site-scroll") }}>
          {/* section 1 — hero */}
          <div className="flex h-[300px] flex-col justify-center gap-3 border-b border-ink/10 px-7">
            <div className="mono text-[10px] text-muted">PAGGINI — STUDIO</div>
            <div className="flex flex-col gap-2">
              <span className="h-5 w-40 bg-ink" />
              <span className="h-5 w-28 bg-flame" />
            </div>
            <div className="mt-2 flex gap-2">
              <span className="h-7 w-24 bg-ink" />
              <span className="h-7 w-16 border border-ink" />
            </div>
          </div>
          {/* section 2 — work grid */}
          <div className="grid h-[300px] grid-cols-2 grid-rows-2 gap-2 border-b border-ink/10 p-5">
            {[
              { bg: "bg-ink", t: "text-paper", l: "Tyrbud" },
              { bg: "bg-flame", t: "text-paper", l: "FBT Outlet" },
              { bg: "bg-paper-2 border border-ink/20", t: "text-ink", l: "Antlerwood" },
              { bg: "bg-ink", t: "text-paper", l: "paggini" },
            ].map((c) => (
              <div key={c.l} className={`flex items-end p-3 ${c.bg} ${c.t}`}>
                <span className="mono text-[10px]">{c.l}</span>
              </div>
            ))}
          </div>
          {/* section 3 — cta */}
          <div className="flex h-[300px] flex-col items-center justify-center gap-4 px-7 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="h-4 w-44 bg-ink" />
              <span className="h-4 w-24 bg-flame" />
            </div>
            <span className="flex h-9 items-center bg-flame px-5 text-sm font-semibold text-paper">
              →
            </span>
          </div>
        </div>

        {/* floating cursor */}
        <div className="pointer-events-none absolute left-0 top-0 z-10" style={{ animation: loop("browser-cursor") }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 2l6 16 2.5-6.5L19 9 4 2z" fill="#17150f" stroke="#efe9dd" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Online store: storefront that scrolls to checkout -------- */
export function ShopMockup() {
  return (
    <div className="panel relative overflow-hidden shadow-[10px_10px_0_0_var(--ink)]">
      <Chrome url="shop" />
      {/* sticky store header over the scrolling body */}
      <div className="absolute inset-x-0 top-[45px] z-20 flex items-center justify-between border-b border-ink/15 bg-paper-2/95 px-5 py-2.5 backdrop-blur">
        <span className="display text-sm">store</span>
        <span className="relative flex h-6 w-6 items-center justify-center border border-ink">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6L5 3H2" />
          </svg>
          <span className="mono absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center bg-flame text-[8px] font-bold text-paper">
            3
          </span>
        </span>
      </div>

      <div className="relative h-[300px] overflow-hidden bg-paper pt-[42px]">
        <div className="w-full" style={{ height: "774px", animation: loop("site-scroll") }}>
          {/* section 1 — product grid */}
          <div className="grid h-[258px] grid-cols-2 gap-2 p-4">
            {[
              { bg: "bg-ink", p: "€49" },
              { bg: "bg-flame", p: "€79" },
              { bg: "bg-paper-2 border border-ink/20", p: "€39" },
              { bg: "bg-ink", p: "€120" },
            ].map((c, i) => (
              <div key={i} className="flex flex-col border border-ink/15 bg-card">
                <div className={`h-[70px] ${c.bg}`} />
                <div className="flex items-center justify-between px-2.5 py-2">
                  <span className="mono text-[10px]">{c.p}</span>
                  <span className="mono text-[9px] text-flame">★★★★</span>
                </div>
              </div>
            ))}
          </div>
          {/* section 2 — product detail + add to cart */}
          <div className="flex h-[258px] gap-4 border-t border-ink/10 p-5">
            <div className="h-full w-1/2 bg-ink" />
            <div className="flex w-1/2 flex-col justify-center gap-3">
              <span className="h-3 w-20 bg-ink" />
              <span className="h-2 w-14 bg-ink/40" />
              <span className="display text-2xl">€79</span>
              <div
                className="flex h-9 items-center justify-center gap-2 bg-flame text-xs font-semibold text-paper"
                style={{ animation: loop("btn-press") }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6h15l-1.5 9h-12z" />
                  <path d="M6 6L5 3H2" />
                </svg>
                +
              </div>
            </div>
          </div>
          {/* section 3 — checkout */}
          <div className="flex h-[258px] flex-col justify-center gap-3 border-t border-ink/10 px-6">
            <div className="mono text-[10px] text-muted">CHECKOUT</div>
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center justify-between border border-ink/15 bg-card px-3 py-2">
                <span className="h-2 w-16 bg-ink/50" />
                <span className="mono text-[10px]">{i === 0 ? "€79" : "€8"}</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-3">
              <span className="mono text-[10px] text-muted">TOTAL</span>
              <span className="display text-xl">€87</span>
            </div>
            <div className="flex h-9 items-center justify-center bg-ink text-xs font-semibold text-paper">
              →
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
          <div className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2.5 text-[9px] text-ink">
            <span className="mono">9:41</span>
            <span className="mono">5G ▮▮▮</span>
          </div>

          <div className="flex h-[440px] w-[300%]" style={{ animation: loop("phone-strip") }}>
            {/* screen 1 — login */}
            <div className="flex w-1/3 flex-col justify-center px-6">
              <div className="flex h-12 w-12 items-center justify-center bg-ink">
                <span className="h-3 w-3 bg-flame" />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <span className="h-4 w-24 bg-ink" />
                <span className="h-4 w-16 bg-ink" />
              </div>
              <div className="mt-5 space-y-2.5">
                <div className="flex h-9 items-center border border-ink/25 px-3">
                  <span className="h-2 w-20 bg-ink/40" />
                </div>
                <div className="flex h-9 items-center gap-1.5 border border-ink/25 px-3">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink" />
                  ))}
                </div>
                <div className="flex h-9 items-center justify-center bg-flame text-xs font-semibold text-paper">
                  →
                </div>
              </div>
            </div>

            {/* screen 2 — biometrics */}
            <div className="flex w-1/3 flex-col items-center justify-center gap-6 bg-ink text-paper">
              <div className="mono text-[9px] text-paper/60">SCAN…</div>
              <div className="relative flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-flame" style={{ animation: loop("ring-pulse") }} />
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
              <div className="mono text-[9px] text-paper/40">FACE · TOUCH</div>
            </div>

            {/* screen 3 — home */}
            <div className="relative flex w-1/3 flex-col px-5 pt-10">
              <div
                className="absolute inset-x-4 top-9 z-10 flex items-center gap-2 border border-ink/15 bg-card px-3 py-2 shadow-[3px_3px_0_0_var(--ink)]"
                style={{ animation: loop("notif-pop") }}
              >
                <span className="h-6 w-6 bg-flame" />
                <div className="flex flex-col gap-1">
                  <span className="h-1.5 w-16 bg-ink/60" />
                  <span className="h-1.5 w-10 bg-ink/30" />
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-ink" />
                <span className="h-2 w-16 bg-ink/40" />
              </div>

              <div className="mt-3 flex items-end justify-between bg-ink p-3 text-paper">
                <div className="flex flex-col gap-1.5">
                  <span className="mono text-[8px] text-paper/50">BALANCE</span>
                  <div className="display text-2xl">€4 289</div>
                </div>
                <span className="mono text-[9px] text-flame">+12%</span>
              </div>

              <div className="mt-3 space-y-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border border-ink/15 bg-card px-3 py-2"
                    style={{ animation: loop("card-in") }}
                  >
                    <span className="h-2 w-20 bg-ink/40" />
                    <span className="mono text-[9px] text-muted">→</span>
                  </div>
                ))}
              </div>

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

export function mockupFor(kind: ServiceKind) {
  if (kind === "shop") return <ShopMockup />;
  if (kind === "app") return <PhoneMockup />;
  return <BrowserMockup />;
}
