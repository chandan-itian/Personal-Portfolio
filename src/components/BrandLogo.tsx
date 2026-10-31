import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link
      href="#top"
      className={`group inline-block focus:outline-none transition-transform hover:scale-[1.02] active:scale-[0.99] ${className}`}
      aria-label="Chandan Raj — Return to top of portfolio"
    >
      <div className="relative flex items-center justify-center p-3 sm:p-5">
        {/* Organic watercolor background badge using SVG with irregular paper/paint edges */}
        <div className="relative w-[280px] sm:w-[360px] h-[105px] sm:h-[125px] flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full drop-shadow-sm filter contrast-105"
            viewBox="0 0 360 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Watercolor organic texture gradient */}
              <linearGradient id="watercolorWash" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBB5C7" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#F99EB6" stopOpacity="0.92" />
                <stop offset="70%" stopColor="#F8A7BD" stopOpacity="0.94" />
                <stop offset="100%" stopColor="#F593AE" stopOpacity="0.91" />
              </linearGradient>

              {/* Secondary watercolor bleed layer */}
              <linearGradient id="watercolorWashDeep" x1="10%" y1="10%" x2="90%" y2="80%">
                <stop offset="0%" stopColor="#F78EA9" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#EF7092" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#F483A1" stopOpacity="0.3" />
              </linearGradient>

              {/* Watercolor diffuse blur */}
              <filter id="softBleed" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Diffuse outer watercolor wash ring */}
            <path
              d="M18 24 C55 12, 120 18, 190 14 C260 10, 310 18, 342 32 C355 48, 350 82, 338 102 C312 118, 240 114, 175 120 C110 126, 45 116, 20 100 C8 82, 10 44, 18 24 Z"
              fill="url(#watercolorWashDeep)"
              filter="url(#softBleed)"
            />

            {/* Main watercolor badge with deckled/rippled hand-painted borders */}
            <path
              d="M24 28 C60 20, 115 22, 185 19 C255 16, 305 24, 334 36 C346 50, 344 78, 332 96 C308 110, 238 108, 175 112 C112 116, 52 110, 26 94 C16 78, 17 46, 24 28 Z"
              fill="url(#watercolorWash)"
            />

            {/* Organic paint bleed splatters/accents */}
            <circle cx="28" cy="24" r="5" fill="#F8A7BD" opacity="0.6" />
            <circle cx="338" cy="100" r="4.5" fill="#F8A7BD" opacity="0.6" />
            <circle cx="344" cy="38" r="3.5" fill="#F99EB6" opacity="0.5" />
            <circle cx="16" cy="78" r="3" fill="#F99EB6" opacity="0.5" />
            <circle cx="180" cy="116" r="3" fill="#F99EB6" opacity="0.4" />
          </svg>

          {/* Handwritten lettering inside badge */}
          <div className="relative z-10 text-center select-none transform -rotate-[1deg] px-6">
            <h1 className="font-handwriting text-[38px] sm:text-[46px] md:text-[50px] font-bold text-[#141212] tracking-wide leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
              Chandan Raj
            </h1>
            <p className="font-handwriting-alt text-[14px] sm:text-[17px] text-[#2A2325] tracking-widest mt-1 font-medium opacity-90">
              code · design · build · explore.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
