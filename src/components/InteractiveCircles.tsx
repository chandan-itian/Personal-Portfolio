"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, CircleFeature } from "@/data/portfolioData";
import {
  CodingIllustration,
  DesigningIllustration,
  ResearchingIllustration,
  BuildingIllustration,
} from "./CircleIllustrations";
import { CircleModal } from "./CircleModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InteractiveCirclesProps {
  onSelectProjectCategory?: (category: "all" | "web" | "app") => void;
}

export function InteractiveCircles({ onSelectProjectCategory }: InteractiveCirclesProps) {
  const circles = PORTFOLIO_DATA.circles;
  const [selectedFeature, setSelectedFeature] = useState<CircleFeature | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const handleOpenCircle = (feature: CircleFeature, index: number) => {
    setSelectedFeature(feature);
    setFocusedIndex(index);
  };

  const handlePrev = () => {
    const nextIdx = (focusedIndex - 1 + circles.length) % circles.length;
    setFocusedIndex(nextIdx);
    if (selectedFeature) {
      setSelectedFeature(circles[nextIdx]);
    }
  };

  const handleNext = () => {
    const nextIdx = (focusedIndex + 1) % circles.length;
    setFocusedIndex(nextIdx);
    if (selectedFeature) {
      setSelectedFeature(circles[nextIdx]);
    }
  };

  // Organic blob classes matching reference
  const blobClasses = [
    "organic-blob-1",
    "organic-blob-2",
    "organic-blob-3",
    "organic-blob-4",
  ];

  return (
    <section
      id="interactive-circles"
      className="py-8 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6"
      aria-label="Interactive Specialty Topics"
    >
      <div className="text-center mb-6">
        <p className="font-handwriting text-xl sm:text-2xl text-stone-500 font-semibold">
          ✦ Click any circle to explore details ✦
        </p>
      </div>

      {/* Main Row with Flanking Arrow Buttons */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute -left-2 sm:left-0 md:-left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-200/50 hover:bg-stone-300/70 text-stone-700 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
          aria-label="Previous circle: cycle to previous topic"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Four Interactive Circles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 md:gap-8 max-w-4xl mx-auto w-full px-8 sm:px-12">
          {circles.map((circle, index) => {
            const isSelected = focusedIndex === index;
            const blobClass = blobClasses[index % blobClasses.length];

            return (
              <div
                key={circle.id}
                className="flex flex-col items-center group text-center"
              >
                {/* Clickable Circle Container */}
                <button
                  type="button"
                  onClick={() => handleOpenCircle(circle, index)}
                  onFocus={() => setFocusedIndex(index)}
                  className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 ${blobClass} flex items-center justify-center p-3 transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:shadow-md cursor-pointer border-2 border-stone-800/80 ${
                    isSelected
                      ? "ring-4 ring-pink-300/70 scale-105"
                      : "opacity-95 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: circle.bgColor }}
                  aria-haspopup="dialog"
                  aria-label={`${circle.label}: Click to view details about ${circle.title}`}
                >
                  {/* Subtle inner organic ring */}
                  <div className="absolute inset-1.5 rounded-full border border-black/5 pointer-events-none" />

                  {/* Custom Illustration */}
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {circle.id === "coding" && (
                      <CodingIllustration className="w-20 h-20 sm:w-24 sm:h-24" />
                    )}
                    {circle.id === "designing" && (
                      <DesigningIllustration className="w-20 h-20 sm:w-24 sm:h-24" />
                    )}
                    {circle.id === "researching" && (
                      <ResearchingIllustration className="w-20 h-20 sm:w-24 sm:h-24" />
                    )}
                    {circle.id === "building" && (
                      <BuildingIllustration className="w-20 h-20 sm:w-24 sm:h-24" />
                    )}
                  </div>
                </button>

                {/* Handwritten Label Underneath */}
                <span className="font-handwriting text-xl sm:text-2xl md:text-[26px] font-bold text-stone-900 tracking-wider mt-3 select-none transition-colors group-hover:text-pink-600">
                  {circle.label}
                </span>

                {/* Subtle description preview */}
                <span className="font-sans-clean text-[11px] sm:text-[12px] text-stone-500 max-w-[130px] line-clamp-1 mt-0.5">
                  {circle.shortSummary}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute -right-2 sm:right-0 md:-right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-200/50 hover:bg-stone-300/70 text-stone-700 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
          aria-label="Next circle: cycle to next topic"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Accessible Interactive Modal */}
      <CircleModal
        feature={selectedFeature}
        features={circles}
        onClose={() => setSelectedFeature(null)}
        onSelectFeature={(feat) => {
          setSelectedFeature(feat);
          const idx = circles.findIndex((c) => c.id === feat.id);
          if (idx !== -1) setFocusedIndex(idx);
        }}
        onSelectProjectCategory={onSelectProjectCategory}
      />
    </section>
  );
}
