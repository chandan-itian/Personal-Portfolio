"use client";

import React, { useEffect, useRef } from "react";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees. Keep small for a tasteful 3D feel. */
  max?: number;
}

/**
 * Gentle 3D pointer tilt. Mouse-only (touch pointers are ignored),
 * disabled for reduced-motion users, and purely decorative —
 * the wrapper adds no layout of its own beyond its className.
 */
export function Tilt({ children, className = "", max = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const enabledRef = useRef(false);

  useEffect(() => {
    enabledRef.current =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabledRef.current || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
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
