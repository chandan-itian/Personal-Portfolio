"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            setActiveSection(item.href);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jump
      window.history.pushState(null, "", href);
      setActiveSection(href);
    }
  };

  return (
    <nav
      className="w-full sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md transition-all py-3 border-b border-stone-200/40"
      aria-label="Main Navigation"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between sm:justify-center relative">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-6 md:space-x-10 text-[11px] md:text-[12px] font-sans-clean font-medium tracking-[0.25em] text-[#55504E]">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.href;
            return (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`group relative py-1 transition-colors hover:text-[#1A1817] ${
                    isActive ? "text-[#1A1817] font-semibold" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.name}</span>
                  {/* Subtle hand-drawn marker underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-[#F8A7BD] rounded-full transition-all duration-300 ${
                      isActive ? "w-full opacity-90" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
                    }`}
                  />
                </a>
                {idx < NAV_ITEMS.length - 1 && (
                  <span className="text-stone-300 font-light select-none" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Brand Label */}
        <div className="sm:hidden font-handwriting text-xl font-bold text-stone-800">
          Chandan Raj
        </div>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-5 bg-[#FDFBF7] border-b border-stone-200 shadow-sm animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 font-sans-clean text-[12px] tracking-[0.2em] text-stone-700">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`py-2 px-3 rounded-md transition-colors ${
                  activeSection === item.href
                    ? "bg-[#F8CAD5]/40 text-stone-900 font-semibold"
                    : "hover:bg-stone-100"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
