"use client";

import React, { useEffect, useRef } from "react";
import { CircleFeature } from "@/data/portfolioData";
import {
  CodingIllustration,
  DesigningIllustration,
  ResearchingIllustration,
  BuildingIllustration,
} from "./CircleIllustrations";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface CircleModalProps {
  feature: CircleFeature | null;
  features: CircleFeature[];
  onClose: () => void;
  onSelectFeature: (feature: CircleFeature) => void;
  onSelectProjectCategory?: (category: "all" | "web" | "app") => void;
}

export function CircleModal({
  feature,
  features,
  onClose,
  onSelectFeature,
  onSelectProjectCategory,
}: CircleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation & trap
  useEffect(() => {
    if (!feature) return;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const currentIndex = features.findIndex((f) => f.id === feature.id);
        const prevIndex = (currentIndex - 1 + features.length) % features.length;
        onSelectFeature(features[prevIndex]);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const currentIndex = features.findIndex((f) => f.id === feature.id);
        const nextIndex = (currentIndex + 1) % features.length;
        onSelectFeature(features[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [feature, features, onClose, onSelectFeature]);

  if (!feature) return null;

  const currentIndex = features.findIndex((f) => f.id === feature.id);
  const prevFeature = features[(currentIndex - 1 + features.length) % features.length];
  const nextFeature = features[(currentIndex + 1) % features.length];

  const handleExploreProjects = () => {
    onClose();
    if (onSelectProjectCategory) {
      onSelectProjectCategory(feature.relatedCategory);
    }
    const portfolioElement = document.querySelector("#portfolio");
    if (portfolioElement) {
      const navOffset = 80;
      const elementPosition = portfolioElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FDFBF7] rounded-3xl border-2 border-stone-800 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
      >
        {/* Header with Title and Close Button */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-4 mb-6">
          <div className="flex items-center space-x-4">
            {/* Mini illustration badge */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center p-1 border-2 border-stone-800 shadow-sm shrink-0"
              style={{ backgroundColor: feature.bgColor }}
            >
              {feature.id === "coding" && <CodingIllustration className="w-12 h-12" />}
              {feature.id === "designing" && <DesigningIllustration className="w-12 h-12" />}
              {feature.id === "researching" && <ResearchingIllustration className="w-12 h-12" />}
              {feature.id === "building" && <BuildingIllustration className="w-12 h-12" />}
            </div>
            <div>
              <span className="font-handwriting text-lg text-stone-500 font-bold tracking-wider">
                EXPLORING · {feature.label}
              </span>
              <h3
                id="modal-title"
                className="font-sans-clean text-2xl sm:text-3xl font-bold text-stone-900 leading-tight"
              >
                {feature.title}
              </h3>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 text-stone-600 hover:text-stone-900 rounded-full hover:bg-stone-200/60 transition-colors focus:ring-2 focus:ring-pink-400"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Short Summary & Overview */}
        <div className="space-y-4 mb-6">
          <p
            id="modal-desc"
            className="font-handwriting text-2xl text-stone-800 leading-relaxed bg-[#F5F2EB] p-4 rounded-2xl border border-stone-200/80"
          >
            &ldquo;{feature.shortSummary}&rdquo;
          </p>
          <p className="font-sans-clean text-[15px] sm:text-[16px] text-stone-700 leading-relaxed">
            {feature.overview}
          </p>
        </div>

        {/* Detailed Breakdown Sections */}
        <div className="space-y-4 mb-6">
          <h4 className="font-sans-clean text-sm uppercase tracking-widest font-bold text-stone-500">
            Key Focus Areas
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {feature.sections.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <h5 className="font-sans-clean font-bold text-stone-900 text-base mb-1">
                  {sec.heading}
                </h5>
                <p className="font-sans-clean text-stone-600 text-sm leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Editable Technology Tags */}
        <div className="mb-8">
          <h4 className="font-sans-clean text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">
            Associated Skills &amp; Technologies (Editable)
          </h4>
          <div className="flex flex-wrap gap-2">
            {feature.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-sans-clean font-medium border border-stone-300 bg-stone-100 text-stone-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button: Link to relevant portfolio projects */}
        <div className="mb-8 flex justify-center">
          <button
            type="button"
            onClick={handleExploreProjects}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-sans-clean text-sm font-semibold text-stone-900 bg-[#F8CAD5] hover:bg-[#F99EB6] active:scale-95 transition-all shadow-sm border border-stone-800"
          >
            <span>Explore Related Projects</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Carousel Navigation Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-200 text-sm font-sans-clean text-stone-600">
          <button
            type="button"
            onClick={() => onSelectFeature(prevFeature)}
            className="flex items-center space-x-1 hover:text-stone-900 transition-colors py-1 px-2 rounded-lg hover:bg-stone-100"
            aria-label={`Previous topic: ${prevFeature.label}`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev:</span>
            <span className="font-handwriting text-lg font-bold">{prevFeature.label}</span>
          </button>

          <span className="text-xs text-stone-400">
            {currentIndex + 1} of {features.length}
          </span>

          <button
            type="button"
            onClick={() => onSelectFeature(nextFeature)}
            className="flex items-center space-x-1 hover:text-stone-900 transition-colors py-1 px-2 rounded-lg hover:bg-stone-100"
            aria-label={`Next topic: ${nextFeature.label}`}
          >
            <span className="hidden sm:inline">Next:</span>
            <span className="font-handwriting text-lg font-bold">{nextFeature.label}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
