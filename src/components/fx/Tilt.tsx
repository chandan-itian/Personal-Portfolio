"use client";

import React, { useEffect, useRef } from "react";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees. Keep small for a tasteful 3D feel. */
  max?: number;
}

/**
 * Professional 3D pointer tilt with eased motion: the rotation
 * lerps toward the pointer target every frame and springs back
 * to rest on leave, instead of snapping. Also publishes --mx/--my
 * (pointer position in %) for the card glare highlight. Mouse-only
 * (touch pointers are ignored, so scrolling is never disturbed),
 * disabled for reduced-motion users, and purely decorative — the
 * wrapper adds no layout of its own beyond its className.
 */
export function Tilt({ children, className = "", max = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const enabledRef = useRef(false);
  const hoveringRef = useRef(false);
  const targetRef = useRef({ rx: 0, ry: 0 });
  const currentRef = useRef({ rx: 0, ry: 0 });

  useEffect(() => {
    enabledRef.current =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const tick = () => {
    const el = ref.current;
    if (!el) return;
    const t = targetRef.current;
    const c = currentRef.current;
    c.rx += (t.rx - c.rx) * 0.14;
    c.ry += (t.ry - c.ry) * 0.14;
    if (Math.abs(t.rx - c.rx) < 0.02 && Math.abs(t.ry - c.ry) < 0.02) {
      c.rx = t.rx;
      c.ry = t.ry;
    }
    el.style.setProperty("--rx", `${c.rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${c.ry.toFixed(2)}deg`);
    if (hoveringRef.current || c.rx !== t.rx || c.ry !== t.ry) {
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  const kick = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabledRef.current || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    hoveringRef.current = true;
    targetRef.current = { rx: -py * max, ry: px * max };
    el.style.setProperty("--mx", `${((px + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${((py + 0.5) * 100).toFixed(1)}%`);
    kick();
  };

  const handleLeave = () => {
    hoveringRef.current = false;
    targetRef.current = { rx: 0, ry: 0 };
    if (enabledRef.current) kick();
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`tilt ${className}`}
    >
      {children}
    </div>
  );
}
