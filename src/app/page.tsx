"use client";

import React, { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { InteractiveCircles } from "@/components/InteractiveCircles";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/fx/Reveal";

export default function Home() {
  const [projectCategory, setProjectCategory] = useState<"all" | "web" | "app">("all");

  const handleSelectProjectCategory = (category: "all" | "web" | "app") => {
    setProjectCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#FDFBF7] text-[#1E1E1E] selection:bg-[#F8C3D1] selection:text-[#1E1E1E]">
      {/* Top Anchor */}
      <div id="top" tabIndex={-1} aria-hidden="true" />

      {/* Brand Header: Centered artistic pink watercolor-style logo */}
      <header className="pt-10 sm:pt-14 pb-4 flex justify-center items-center">
        <BrandLogo />
      </header>

      {/* Small uppercase navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full" id="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Four Interactive Illustrated Circles */}
        <Reveal>
          <InteractiveCircles onSelectProjectCategory={handleSelectProjectCategory} />
        </Reveal>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Portfolio / Projects Showcase */}
        <PortfolioSection initialCategory={projectCategory} />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
