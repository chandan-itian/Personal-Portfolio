import React from "react";

export function CodingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hand-drawn open notebook / laptop base */}
      <defs>
        <filter id="sketchCoding" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
      </defs>

      {/* Notebook spine & pages */}
      <path
        d="M26 36 C55 33, 76 39, 80 43 C84 39, 105 33, 134 36 C136 62, 137 92, 133 114 C104 110, 85 116, 80 120 C75 116, 56 110, 27 114 C23 90, 24 60, 26 36 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center spine shadow */}
      <path
        d="M80 43 L80 120"
        stroke="#1E1E1E"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Left page code lines */}
      <path
        d="M36 52 C46 51, 60 51, 68 53"
        stroke="#7C3AED"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Code bracket symbol: < / > */}
      <path
        d="M40 66 L34 72 L40 78"
        stroke="#1E1E1E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 79 L51 65"
        stroke="#E11D48"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M56 66 L62 72 L56 78"
        stroke="#1E1E1E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M36 92 C48 91, 58 91, 66 93"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M36 102 C44 101, 52 101, 60 103"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Right page code lines & brackets */}
      <path
        d="M92 52 C104 51, 116 51, 124 53"
        stroke="#059669"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Curly braces: { ... } */}
      <path
        d="M94 65 C91 67, 90 70, 93 72 C90 74, 91 77, 94 79"
        stroke="#D97706"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="103" cy="72" r="2" fill="#1E1E1E" />
      <circle cx="109" cy="72" r="2" fill="#1E1E1E" />
      <circle cx="115" cy="72" r="2" fill="#1E1E1E" />
      <path
        d="M124 65 C127 67, 128 70, 125 72 C128 74, 127 77, 124 79"
        stroke="#D97706"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M92 90 C102 89, 114 90, 122 92"
        stroke="#7C3AED"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M92 102 C100 101, 110 102, 118 103"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Red bookmark / pencil on side */}
      <path
        d="M126 95 L144 124 L138 127 L122 98 Z"
        fill="#EF4444"
        stroke="#1E1E1E"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M144 124 L148 130 L140 128 Z"
        fill="#FDE047"
        stroke="#1E1E1E"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function DesigningIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Watercolor paint wash pools */}
      <path
        d="M38 48 C28 66, 32 94, 52 104 C72 114, 98 116, 112 100 C126 84, 122 56, 104 42 C86 28, 48 30, 38 48 Z"
        fill="#A7F3D0"
        opacity="0.6"
      />
      <path
        d="M62 38 C48 50, 52 74, 68 84 C84 94, 108 88, 118 72 C128 56, 116 38, 98 32 C80 26, 76 26, 62 38 Z"
        fill="#6EE7B7"
        opacity="0.5"
      />

      {/* Paint palette / board outline */}
      <path
        d="M34 65 C26 90, 48 118, 86 116 C116 114, 134 94, 130 68 C126 44, 98 36, 76 38 C54 40, 42 42, 34 65 Z"
        stroke="#1E1E1E"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Palette thumb hole */}
      <ellipse
        cx="108"
        cy="86"
        rx="9"
        ry="7"
        stroke="#1E1E1E"
        strokeWidth="2.6"
        fill="#FDFBF7"
      />

      {/* Paint blobs on palette */}
      <circle cx="50" cy="62" r="7" fill="#F43F5E" />
      <circle cx="70" cy="52" r="6.5" fill="#3B82F6" />
      <circle cx="94" cy="54" r="6" fill="#F59E0B" />
      <circle cx="58" cy="84" r="6.5" fill="#10B981" />

      {/* Wooden Paintbrush angled across */}
      <g transform="rotate(-35 80 70)">
        {/* Brush handle */}
        <path
          d="M80 18 L86 18 L84 88 L82 88 Z"
          fill="#D97706"
          stroke="#1E1E1E"
          strokeWidth="2.2"
        />
        {/* Metal ferrule */}
        <rect
          x="81"
          y="88"
          width="4"
          height="12"
          fill="#9CA3AF"
          stroke="#1E1E1E"
          strokeWidth="2"
        />
        {/* Bristles */}
        <path
          d="M81 100 C79 108, 82 118, 83 122 C84 118, 87 108, 85 100 Z"
          fill="#10B981"
          stroke="#1E1E1E"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export function ResearchingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Friendly inquisitive face with quirky spectacles */}
      <path
        d="M48 64 C48 44, 62 34, 80 34 C98 34, 112 44, 112 64 C112 88, 98 106, 80 106 C62 106, 48 88, 48 64 Z"
        fill="#FCE7F3"
        stroke="#1E1E1E"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Hair scribbles */}
      <path
        d="M48 52 C52 32, 70 24, 80 24 C90 24, 108 32, 112 52"
        stroke="#4B5563"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M60 22 C64 16, 72 16, 76 22"
        stroke="#4B5563"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M84 22 C88 16, 96 16, 100 22"
        stroke="#4B5563"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Left eye & eyebrow */}
      <circle cx="68" cy="62" r="5" fill="#1E1E1E" />
      <path d="M62 52 C66 49, 72 49, 76 52" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" />

      {/* Smiling mouth */}
      <path
        d="M72 82 C76 88, 84 88, 88 82"
        stroke="#1E1E1E"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Rosy blush */}
      <circle cx="58" cy="74" r="5" fill="#F472B6" opacity="0.5" />
      <circle cx="102" cy="74" r="5" fill="#F472B6" opacity="0.5" />

      {/* Magnifying Glass over right eye! */}
      <g>
        {/* Glass lens reflection */}
        <circle
          cx="94"
          cy="62"
          r="19"
          fill="#BAE6FD"
          opacity="0.75"
        />
        {/* Big curious eye magnified through glass */}
        <circle cx="94" cy="62" r="7.5" fill="#1E1E1E" />
        <circle cx="92" cy="59" r="2.5" fill="#FFFFFF" />

        {/* Magnifying glass rim */}
        <circle
          cx="94"
          cy="62"
          r="19"
          stroke="#4F46E5"
          strokeWidth="3.5"
        />

        {/* Magnifying glass handle pointing down */}
        <path
          d="M108 76 L128 102"
          stroke="#4F46E5"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M128 102 L132 108"
          stroke="#1E1E1E"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* Little sparkle of discovery */}
      <path
        d="M34 38 L40 44 M40 38 L34 44"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BuildingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Speech bubble / thought cloud behind */}
      <path
        d="M32 46 C32 30, 48 20, 78 20 C108 20, 126 30, 126 48 C126 62, 114 74, 92 76 C88 84, 82 92, 74 96 C77 90, 78 84, 78 78 C48 78, 32 66, 32 46 Z"
        fill="#FFE4E6"
        stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Hand-drawn glowing Lightbulb */}
      <g transform="translate(10, 8)">
        {/* Glow halo */}
        <circle cx="68" cy="52" r="24" fill="#FEF08A" opacity="0.6" />

        {/* Bulb glass */}
        <path
          d="M52 46 C52 37, 59 30, 68 30 C77 30, 84 37, 84 46 C84 53, 80 57, 78 61 L78 68 L58 68 L58 61 C56 57, 52 53, 52 46 Z"
          fill="#FDE047"
          stroke="#1E1E1E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Filament */}
        <path
          d="M63 48 L65 42 L71 42 L73 48"
          stroke="#EA580C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bulb base screw thread */}
        <path d="M59 72 L77 72" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M60 76 L76 76" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M63 80 L73 80" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" />

        {/* Radiating light rays */}
        <path d="M68 18 L68 24" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M42 28 L47 32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M94 28 L89 32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M36 50 L42 50" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M94 50 L100 50" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Friendly little wrench / builder tool on side */}
      <g transform="translate(100, 72) rotate(25)">
        <path
          d="M0 6 C-4 2, -4 -4, 0 -6 C4 -8, 8 -6, 10 -2 L28 14 C32 18, 30 22, 26 24 L22 26 C18 28, 14 26, 12 22 L-2 4 Z"
          fill="#94A3B8"
          stroke="#1E1E1E"
          strokeWidth="2.2"
        />
        <circle cx="2" cy="0" r="3" fill="#FDFBF7" stroke="#1E1E1E" strokeWidth="1.8" />
      </g>
    </svg>
  );
}
