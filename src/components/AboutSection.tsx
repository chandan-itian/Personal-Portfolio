import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { getAssetPath } from "@/lib/utils";

export function AboutSection() {
  const { heading, paragraphs, funFacts } = PORTFOLIO_DATA.about;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20 border-t border-stone-200/50"
      aria-labelledby="about-heading"
    >
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Authentic Photo in a Handcrafted Polaroid Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Washi tape sticker */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#FDE0CE]/85 border border-[#F5C2A5] rounded-xs shadow-xs transform -rotate-2 z-10 opacity-90"
              aria-hidden="true"
            />

            {/* Polaroid frame */}
            <div className="bg-white p-4 pb-6 rounded-xl border border-stone-300 shadow-[0_6px_20px_rgba(0,0,0,0.06)] transform rotate-1 group-hover:rotate-0 transition-transform duration-300 max-w-[280px]">
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                <Image
                  src={getAssetPath(PORTFOLIO_DATA.personal.avatar)}
                  alt="Chandan Raj enjoying a calm sunset view"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="text-center mt-3">
                <p className="font-handwriting text-xl text-stone-800 font-bold">
                  Chandan Raj
                </p>
                <p className="font-handwriting-alt text-xs text-stone-500 font-medium">
                  IT Sector
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Editorial Copy */}
        <div className="md:col-span-7 space-y-5">
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="font-sans-clean text-[16px] sm:text-[17px] text-stone-700 leading-relaxed"
            >
              {p}
            </p>
          ))}

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {funFacts.map((fact, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/70 border border-stone-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.02)]"
              >
                <span className="block font-sans-clean text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                  {fact.label}
                </span>
                <span className="block font-sans-clean text-[14px] text-stone-800 font-medium mt-0.5">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
