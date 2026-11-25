"use client";

import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms, applied to the reveal transition. */
  delay?: number;
  /** AOS-style animation variant. */
  variant?: "up" | "fade" | "zoom";
}

/**
 * Scroll-reveal wrapper (no-JS-safe): content is fully visible by default.
 * Only after mount does JS arm the hidden state and reveal the element
 * when it scrolls into view — so content can never stay invisible
 * if JavaScript fails or is disabled.
 */
export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("reveal-armed");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-var-${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
