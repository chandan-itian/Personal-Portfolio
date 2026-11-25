import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { getAssetPath } from "@/lib/utils";
import { Reveal } from "./fx/Reveal";
import { Tilt } from "./fx/Tilt";

// Key phrases in the About narrative that receive the same
// marker-highlight treatment as the hero bio ("FULL-STACK
// DEVELOPER" / "SOFTWARE DEVELOPER"). Phrases are matched
// against the paragraph strings from the data file, so the
// wording is never altered — matching phrases are only wrapped
// in a styled span, exactly like the hero does.
const ABOUT_HIGHLIGHTS: { phrase: string; marker: string }[] = [
  { phrase: "full-stack developer", marker: "marker-mint" },
  { phrase: "software developer", marker: "marker-lavender" },
  { phrase: "simple, fast, and human", marker: "marker-blue" },
  { phrase: "clean frontends", marker: "marker-mint" },
  { phrase: "dependable backend APIs", marker: "marker-lavender" },
  { phrase: "making them work better", marker: "marker-pink" },
  { phrase: "curiosity, care, and craftsmanship", marker: "marker-peach" },
];

function renderAboutParagraph(text: string) {
  const matches: { start: number; end: number; marker: string }[] = [];
  for (const { phrase, marker } of ABOUT_HIGHLIGHTS) {
    let from = 0;
    for (;;) {
      const idx = text.indexOf(phrase, from);
      if (idx === -1) break;
      const end = idx + phrase.length;
      if (!matches.some((m) => idx < m.end && end > m.start)) {
        matches.push({ start: idx, end, marker });
      }
      from = end;
    }
  }
  if (matches.length === 0) return text;
  matches.sort((a, b) => a.start - b.start);

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    if (m.start > cursor) parts.push(text.slice(cursor, m.start));
    parts.push(
      <span
        key={i}
        className={`marker-highlight ${m.marker} font-semibold text-[#151313]`}
      >
        {text.slice(m.start, m.end)}
      </span>
    );
    cursor = m.end;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

export function AboutSection() {
  const { heading, paragraphs, funFacts } = PORTFOLIO_DATA.about;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20 border-t border-stone-200/50"
      aria-labelledby="about-heading"
    >
      <Reveal>
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-sans-clean text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
          ABOUT ME
        </span>
        <h2
          id="about-heading"
          className="font-handwriting text-[36px] sm:text-[46px] md:text-[50px] font-bold text-stone-900 leading-tight"
        >
          {heading}
        </h2>
        {/* Hand-drawn decorative wave squiggle */}
        <div className="flex justify-center mt-2" aria-hidden="true">
          <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
            <path
              d="M2 6 C20 1, 40 11, 60 6 C80 1, 100 11, 118 6"
              stroke="#F8A7BD"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Authentic Photo in a Handcrafted Polaroid Frame */}
        <Reveal variant="zoom" className="md:col-span-5 flex justify-center">
          <Tilt max={7}>
          <div className="relative group photo-float">
            {/* Washi tape sticker */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#FDE0CE]/85 border border-[#F5C2A5] rounded-xs shadow-xs transform -rotate-2 z-10 opacity-90"
              aria-hidden="true"
            />

            {/* Polaroid frame — 3D depth via .photo-frame-3d.
                The frame window matches the portrait ratio of the
                photo's real content, so the cover-fill photo fills
                it edge to edge with no black bars. */}
            <div className="photo-frame-3d bg-white p-4 pb-6 rounded-xl border border-stone-300 transform rotate-1 group-hover:rotate-0 transition-transform duration-300 w-[270px] max-w-full">
              <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                <Image
                  src={getAssetPath(PORTFOLIO_DATA.personal.avatar)}
                  alt="Chandan Raj enjoying a calm sunset view"
                  fill
                  sizes="270px"
                  className="object-cover object-top"
                  priority
                />
                {/* Recessed inner edge — makes the photo sit
                    inside the frame's thickness */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-lg shadow-[inset_0_2px_8px_rgba(64,52,44,0.30),inset_0_-1px_3px_rgba(255,255,255,0.35)] ring-1 ring-stone-900/10"
                  aria-hidden="true"
                />
              </div>
              <div className="text-center mt-3">
                <p className="caption-float font-handwriting text-xl text-stone-800 font-bold">
                  Chandan Raj
                </p>
                <p className="font-handwriting-alt text-xs text-stone-500 font-medium">
                  IT Sector
                </p>
              </div>
            </div>
          </div>
          </Tilt>
        </Reveal>

        {/* Narrative Editorial Copy */}
        <div className="md:col-span-7 space-y-6">
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="font-handwriting text-[23px] sm:text-[26px] md:text-[27px] text-[#242120] leading-[1.7] tracking-wide"
            >
              {renderAboutParagraph(p)}
            </p>
          ))}

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {funFacts.map((fact, idx) => (
              <Reveal key={idx} delay={idx * 70} className="h-full">
              <div
                className="h-full p-3.5 rounded-xl bg-white/70 border border-stone-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.14)]"
              >
                <span className="block font-sans-clean text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                  {fact.label}
                </span>
                <span className="block font-sans-clean text-[14px] text-stone-800 font-medium mt-0.5">
                  {fact.value}
                </span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
