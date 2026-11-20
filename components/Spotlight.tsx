"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = matchMedia("(pointer: fine)").matches;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    const move = (e: PointerEvent) => {
      ref.current?.style.setProperty("--x", `${e.clientX}px`);
      ref.current?.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(520px circle at var(--x, 50%) var(--y, 25%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
      }}
    />
  );
}
