"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ExternalLink, BookOpen, X, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

interface PortfolioSectionProps {
  initialCategory?: "all" | "web" | "app";
}

export function PortfolioSection({ initialCategory = "all" }: PortfolioSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "web" | "app">(initialCategory);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-20 border-t border-stone-200/50"
      aria-labelledby="portfolio-heading"
    >
      <div className="text-center mb-10 sm:mb-14">
        <span className="font-sans-clean text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
          EXPLORATIONS &amp; WORK
        </span>
        <h2
          id="portfolio-heading"
          className="font-handwriting text-[36px] sm:text-[46px] md:text-[50px] font-bold text-stone-900 leading-tight"
        >
          Selected projects &amp; builds.
        </h2>
        <p className="font-sans-clean text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
          A collection of functional web applications, APIs, and developer tools. Real and showcase demonstration builds clearly designated.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6" role="tablist" aria-label="Project Categories">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "Web Projects" },
            { id: "app", label: "App Projects" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selectedFilter === tab.id}
              onClick={() => setSelectedFilter(tab.id as "all" | "web" | "app")}
              className={`px-5 py-2 rounded-full font-sans-clean text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === tab.id
                  ? "bg-[#1E1E1E] text-[#FDFBF7] shadow-sm"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-300"
              }`}
            >
              {tab.label} ({tab.id === "all" ? projects.length : projects.filter((p) => p.category === tab.id).length})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white/60 rounded-2xl border border-dashed border-stone-300">
          <p className="font-sans-clean text-stone-500">No projects found in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-stone-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:border-pink-300 transition-all duration-300"
            >
              <div>
                {/* Preview Image / Placeholder Banner */}
                <div className="relative w-full h-48 bg-stone-100 border-b border-stone-200 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FDFBF7] to-[#F5F1EB] text-stone-400">
                      <Sparkles className="w-8 h-8 text-pink-400/80 mb-2" />
                      <span className="font-handwriting text-xl text-stone-600 font-bold">
                        {project.title}
                      </span>
                      <span className="font-sans-clean text-xs text-stone-400 mt-1">
                        Architecture &amp; Code Showcase
                      </span>
                    </div>
                  )}

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-sans-clean font-semibold tracking-wide border shadow-xs ${
                        project.status === "Completed"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans-clean text-xs font-semibold uppercase tracking-wider text-pink-600">
                      {project.category === "web" ? "Web Application" : "App / Tooling"}
                    </span>
                  </div>

                  <h3 className="font-sans-clean text-xl font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans-clean text-xs text-stone-500 font-medium mb-3">
                    {project.tagline}
                  </p>

                  <p className="font-sans-clean text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-sans-clean font-medium bg-[#F5F2EB] text-stone-700 border border-stone-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-2">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-sans-clean font-semibold text-stone-800 hover:text-pink-600 transition-colors py-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Case Details</span>
                </button>

                <div className="flex items-center space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-stone-100 text-stone-700 hover:text-stone-900 transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-sans-clean font-semibold bg-stone-900 text-[#FDFBF7] hover:bg-pink-600 transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProjectModal(null);
          }}
        >
          <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#FDFBF7] rounded-3xl border-2 border-stone-800 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between border-b border-stone-200 pb-4 mb-4">
              <div>
                <span className="font-handwriting text-lg text-pink-600 font-bold block">
                  PROJECT OVERVIEW
                </span>
                <h3
                  id="case-study-title"
                  className="font-sans-clean text-2xl font-bold text-stone-900"
                >
                  {activeProjectModal.title}
                </h3>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-sans-clean bg-stone-200 text-stone-800">
                  {activeProjectModal.status}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200/50"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-stone-700 font-sans-clean text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Description</h4>
                <p>{activeProjectModal.description}</p>
              </div>

              {activeProjectModal.fullCaseStudy && (
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Architecture &amp; Implementation</h4>
                  <p className="bg-white p-3 rounded-xl border border-stone-200">
                    {activeProjectModal.fullCaseStudy}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-bold text-stone-900 mb-1">Key Highlights</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {activeProjectModal.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-stone-800 border border-stone-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-sans-clean font-semibold text-stone-700 hover:bg-stone-100"
              >
                Close
              </button>
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-sans-clean font-semibold bg-stone-900 text-white hover:bg-pink-600 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
