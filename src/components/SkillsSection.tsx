"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Layout, Server, GitBranch, CheckCircle2, Bot } from "lucide-react";

export function SkillsSection() {
  const skillCategories = PORTFOLIO_DATA.skills;
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => {
          if (activeTab === "ai") {
            return (
              cat.title.toLowerCase().includes("ai") ||
              cat.title.toLowerCase().includes("machine learning")
            );
          }
          return cat.title.toLowerCase().includes(activeTab.toLowerCase());
        });

  const getIcon = (title: string) => {
    if (title.includes("Frontend")) return <Layout className="w-5 h-5 text-emerald-700" />;
    if (title.includes("Backend")) return <Server className="w-5 h-5 text-purple-700" />;
    if (title.includes("Machine Learning") || title.includes("AI")) {
      return <Bot className="w-5 h-5 text-amber-700" />;
    }
    return <GitBranch className="w-5 h-5 text-blue-700" />;
  };

  const getBgHeaderColor = (marker: string) => {
    switch (marker) {
      case "mint":
        return "bg-[#C3EEDF]/60 border-[#9FE0CA]";
      case "lavender":
        return "bg-[#E2D7F7]/60 border-[#C9B7F0]";
      case "peach":
        return "bg-[#FEDDCC]/60 border-[#FDB898]";
      case "blue":
        return "bg-[#CCE7F9]/60 border-[#A5D2F5]";
      default:
        return "bg-[#F8CAD5]/60 border-[#F5A1B8]";
    }
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-20 border-t border-stone-200/50"
      aria-labelledby="skills-heading"
    >
      <div className="text-center mb-10 sm:mb-14">
        <span className="font-sans-clean text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
          CORE CAPABILITIES
        </span>
        <h2
          id="skills-heading"
          className="font-handwriting text-[36px] sm:text-[46px] md:text-[50px] font-bold text-stone-900 leading-tight"
        >
          Things I enjoy working with.
        </h2>
        <p className="font-sans-clean text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
          Full-stack engineering, intelligent AI workflows, and disciplined systems architecture.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {[
          { id: "all", label: "All Capabilities" },
          { id: "frontend", label: "Frontend Development" },
          { id: "backend", label: "Backend Development" },
          { id: "ai", label: "AI & Automation" },
          { id: "workflow", label: "Development Workflow" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full font-sans-clean text-xs sm:text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-stone-900 text-[#FDFBF7] shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-stone-100 border border-stone-200"
            }`}
            aria-pressed={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Four Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col bg-white rounded-2xl border border-stone-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Soft Pastel Header */}
            <div
              className={`p-5 border-b ${getBgHeaderColor(
                category.markerColor
              )} flex items-center space-x-3`}
            >
              <div className="p-2 rounded-lg bg-white/80 shadow-xs">
                {getIcon(category.title)}
              </div>
              <div>
                <h3 className="font-sans-clean font-bold text-stone-900 text-base leading-tight">
                  {category.title}
                </h3>
                <p className="font-sans-clean text-xs text-stone-600 mt-0.5 line-clamp-1">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Skills List */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <ul className="space-y-3" role="list">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start space-x-2 text-sm text-stone-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans-clean font-semibold text-stone-900 block text-[13px] leading-snug">
                        {skill.name}
                      </span>
                      <span className="font-sans-clean text-stone-500 text-[11px] block leading-tight mt-0.5">
                        {skill.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-stone-100 text-right">
                <span className="font-handwriting text-xs text-stone-400">
                  editable in portfolioData.ts
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
