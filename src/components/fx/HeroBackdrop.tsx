"use client";

import React, { useEffect, useRef } from "react";

/**
 * Soft watercolor-style animated backdrop for the hero: three blurred
 * pastel blobs (matching the site's pink / mint / lavender palette)
 * that slowly drift, with a very subtle scroll parallax.
 * Purely decorative and hidden from assistive technology.
 */
export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translateY(${Math.min(
            window.scrollY * 0.1,
            60
          )}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-visible"
    >
      <div className="hero-blob hero-blob-a bg-[#F8CAD5]" />
      <div className="hero-blob hero-blob-b bg-[#C3EEDF]" />
      <div className="hero-blob hero-blob-c bg-[#E2D7F7]" />
    </div>
  );
}
