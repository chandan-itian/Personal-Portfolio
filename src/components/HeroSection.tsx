import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { HeroBackdrop } from "./fx/HeroBackdrop";

export function HeroSection() {
  const { heroGreeting, heroHeadline } = PORTFOLIO_DATA.personal;

  // Floating 3D treatment for the name inside the greeting.
  // The greeting text itself is rendered verbatim — only the word
  // "Chandan" is wrapped, letter by letter, for the animation.
  const renderGreeting = () => {
    const name = "Chandan";
    const idx = heroGreeting.indexOf(name);
    if (idx === -1) return heroGreeting;
    return (
      <>
        {heroGreeting.slice(0, idx)}
        <span className="name-3d" aria-label={name}>
          {name.split("").map((ch, i) => (
            <span
              key={i}
              className="name-3d-letter"
              style={{ animationDelay: `${i * 0.12}s` }}
              aria-hidden="true"
            >
              {ch}
            </span>
          ))}
        </span>
        {heroGreeting.slice(idx + name.length)}
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative pt-12 sm:pt-16 pb-12 sm:pb-20 max-w-4xl mx-auto px-4 sm:px-6 text-center select-text"
      aria-labelledby="hero-greeting"
    >
      {/* Animated watercolor backdrop (decorative) */}
      <HeroBackdrop />

      {/* Two-Line Introduction in Matching Handwritten Typography */}
      <div className="hero-enter space-y-2 sm:space-y-3 mb-10 sm:mb-16">
        <h2
          id="hero-greeting"
          className="name-3d-stage font-handwriting text-[34px] sm:text-[42px] md:text-[46px] font-bold text-[#1F1D1D] tracking-wide leading-tight"
        >
          {renderGreeting()}
        </h2>
        <p className="font-handwriting text-[26px] sm:text-[32px] md:text-[36px] text-[#242120] font-semibold tracking-wide leading-snug">
          {heroHeadline}
        </p>
      </div>

      {/* Handwritten Artistic Description with Marker Highlights */}
      <div className="hero-enter hero-enter-delay max-w-2xl mx-auto relative px-2 sm:px-4">
        {/* Subtle decorative doodle star in background */}
        <span
          className="absolute -top-6 -left-3 sm:-left-6 text-[#F8A7BD] select-none text-2xl animate-pulse opacity-70"
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="animate-floaty absolute -bottom-6 -right-2 sm:-right-4 text-[#C3EEDF] select-none text-2xl opacity-75"
          aria-hidden="true"
        >
          ✧
        </span>

        <p className="font-handwriting text-[24px] sm:text-[27px] md:text-[29px] text-[#242120] leading-[1.7] sm:leading-[1.75] tracking-wide">
          By day, I’m a{" "}
          <span className="marker-highlight marker-mint font-semibold text-[#151313]">
            FULL-STACK DEVELOPER
          </span>{" "}
          /{" "}
          <span className="marker-highlight marker-lavender font-semibold text-[#151313]">
            SOFTWARE DEVELOPER
          </span>
          .{" "}
          <span className="block mt-2">
            I love turning little ideas into useful digital experiences. Every project teaches me something new!
          </span>
        </p>
      </div>
    </section>
  );
}
