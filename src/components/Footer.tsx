"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 border-t border-stone-200/60 bg-white/40 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-handwriting text-2xl font-bold text-stone-900">
            Chandan Raj
          </p>
          <p className="font-handwriting-alt text-sm text-stone-500 mt-0.5">
            Full-Stack Developer &amp; Software Developer · IT Sector
          </p>
          <p className="font-sans-clean text-xs text-stone-600 mt-2 flex items-center justify-center sm:justify-start gap-1">
            <span>made with</span>
            <span className="animate-heartbeat inline-flex items-center text-rose-500" aria-label="love">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            </span>
            <span>by Chandan Raj</span>
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-[#F8CAD5]/50 text-stone-700 text-xs font-sans-clean font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
          aria-label="Back to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
