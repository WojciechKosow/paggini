"use client";

import { useEffect, useRef } from "react";

/**
 * Editorial cursor: a hard dot that tracks instantly and a ring that
 * trails with easing and swells over interactive elements. Additive
 * (native cursor stays), difference-blended so it reads on any tone.
 * Renders nothing meaningful on touch devices (hidden via CSS).
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;

    const move = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const interactive = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor]"
      );
      ring.current?.classList.toggle("is-active", !!interactive);
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
