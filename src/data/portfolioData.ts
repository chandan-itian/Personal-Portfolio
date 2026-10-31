export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullCaseStudy?: string;
  category: "web" | "app";
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  status: "Completed" | "In Development" | "Showcase Sample";
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  markerColor: "mint" | "lavender" | "blue" | "pink" | "peach";
  skills: {
    name: string;
    description: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  industry: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  achievements?: string[];
  isCurrent: boolean;
  githubUrl?: string;
}

export interface CircleFeature {
  id: "coding" | "designing" | "researching" | "building";
  title: string;
  label: string;
  colorName: "lavender" | "mint" | "blue" | "peach";
  bgColor: string;
  borderColor: string;
  accentColor: string;
  shortSummary: string;
  overview: string;
  sections: {
    heading: string;
    content: string;
  }[];
  techTags: string[];
  relatedCategory: "web" | "app" | "all";
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Chandan Raj",
    roles: [
      "FULL-STACK DEVELOPER",
      "SOFTWARE DEVELOPER",
    ],
    industry: "Information Technology",
    tagline: "code · design · build · explore.",
    heroGreeting: "Hi, I’m Chandan!",
    heroHeadline: "I like making things and solving real problems.",
    heroBio:
      "By day, I’m a FULL-STACK DEVELOPER / SOFTWARE DEVELOPER. I love turning little ideas into useful digital experiences. Every project teaches me something new!",
    location: "Bengaluru, Karnataka",
    email: "chandantint@duck.com",
    github: "https://github.com/chandan-itian",
    linkedin: "https://linkedin.com/in/chandan-raj",
    avatar: "/images/chandan.png",
  },

  circles: [
    {
      id: "coding",
      title: "Coding & Architecture",
      label: "CODING",
      colorName: "lavender",
      bgColor: "#E5DAF6",
      borderColor: "#D2C0EE",
      accentColor: "#7C3AED",
      shortSummary: "Frontend craft, dependable backend APIs, and clean engineering.",
      overview:
        "Code is my primary medium for turning ideas into reliable tools. I focus on writing expressive, maintainable TypeScript, structured APIs, and robust application architecture.",
      sections: [
        {
          heading: "Frontend Engineering",
          content:
            "Crafting fast, accessible, responsive user interfaces with Next.js, React, and modern CSS. I value semantic HTML, sensible component boundaries, and snappy performance.",
        },
        {
          heading: "Backend & Systems",
          content:
            "Designing RESTful APIs, server-side business logic, robust input validation, and reliable data integrations that scale with user needs.",
        },
        {
          heading: "Code Quality & Discipline",
          content:
            "Applying clear separation of concerns, comprehensive automated testing, and thoughtful refactoring so code remains joyful to touch months later.",
        },
      ],
      techTags: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "REST APIs",
        "Tailwind CSS",
        "Zod",
        "PostgreSQL / SQL",
      ],
      relatedCategory: "web",
    },
    {
      id: "designing",
      title: "UI / UX & Creative Design",
      label: "DESIGNING",
      colorName: "mint",
      bgColor: "#CCEAE0",
      borderColor: "#B1DFCFC",
      accentColor: "#059669",
      shortSummary: "Human-centric interfaces, organic visuals, and responsive layouts.",
      overview:
        "Good design makes technology feel intuitive, inviting, and human. I balance creative aesthetic flair with accessible interaction patterns.",
      sections: [
        {
          heading: "Human-Centric Interaction",
          content:
            "Designing interfaces that don't overwhelm users. Prioritizing clear visual hierarchy, generous whitespace, legible typography, and calming color palettes.",
        },
        {
          heading: "Accessibility by Default",
          content:
            "Building with WCAG AA principles from day one: high contrast, keyboard navigable menus, meaningful ARIA attributes, and reduced-motion consideration.",
        },
        {
          heading: "Design Systems & Micro-Interactions",
          content:
            "Creating cohesive tokenized styles, reusable component libraries, and delightful, understated animations that guide without distracting.",
        },
      ],
      techTags: [
        "UI/UX Design",
        "Responsive Layouts",
        "Accessibility (a11y)",
        "Design Tokens",
        "SVG Illustration",
        "Micro-Interactions",
        "Figma (Concepts)",
      ],
      relatedCategory: "web",
    },
    {
      id: "researching",
      title: "Technical Research & Discovery",
      label: "RESEARCHING",
      colorName: "blue",
      bgColor: "#CCE7FA",
      borderColor: "#B3DCF6",
      accentColor: "#0284C7",
      shortSummary: "Root cause analysis, system discovery, and continuous learning.",
      overview:
        "Every complex problem has a root cause waiting to be uncovered. I enjoy digging into documentation, profiling performance bottlenecks, and exploring emerging tooling.",
      sections: [
        {
          heading: "Problem Investigation",
          content:
            "Dissecting complex bugs, race conditions, and integration mismatches with systematic debugging and empirical verification.",
        },
        {
          heading: "Architecture & Tool Evaluation",
          content:
            "Assessing trade-offs between libraries, frameworks, and deployment strategies to choose the simplest solution that reliably solves the problem.",
        },
        {
          heading: "Continuous Exploration",
          content:
            "Experimenting with modern web standards, serverless patterns, and developer workflows to bring fresh perspective into production systems.",
        },
      ],
      techTags: [
        "Root Cause Analysis",
        "Performance Profiling",
        "Architecture Trade-offs",
        "Technical Documentation",
        "Security Best Practices",
        "API Specs",
      ],
      relatedCategory: "all",
    },
    {
      id: "building",
      title: "End-to-End Product Building",
      label: "BUILDING",
      colorName: "peach",
      bgColor: "#FEDDCC",
      borderColor: "#FCC8B0",
      accentColor: "#EA580C",
      shortSummary: "Taking ideas from whiteboard scribbles to production deployment.",
      overview:
        "Building isn't just about shipping code—it's about understanding real requirements, setting up solid CI/CD pipelines, and delivering solutions that people actually rely on.",
      sections: [
        {
          heading: "From Idea to Prototype",
          content:
            "Iterating rapidly from initial sketches and architecture notes to functional proofs of concept with real user feedback loops.",
        },
        {
          heading: "Deployment & Operations",
          content:
            "Configuring zero-downtime deployments, environment variable hygiene, containerization, and automated verification before release.",
        },
        {
          heading: "Resilient & Maintainable Delivery",
          content:
            "Implementing monitoring, error boundaries, rate limiting, and defensive coding practices to ensure production stability.",
        },
      ],
      techTags: [
        "Full-Lifecycle Delivery",
        "CI/CD Pipelines",
        "Automated Testing",
        "Production Hardening",
        "Git Workflows",
        "Docker Basics",
        "Cloud Deployment",
      ],
      relatedCategory: "app",
    },
  ] as CircleFeature[],

  about: {
    heading: "Curious mind. Builder’s heart.",
    paragraphs: [
      "Hey there! I’m Chandan Raj, a full-stack developer and software developer in the IT sector. I enjoy creating thoughtful websites and applications that feel simple, fast, and human.",
      "From clean frontends to dependable backend APIs, I love figuring out how things work—and making them work better.",
      "Whether I'm debugging an intricate data flow, polishing a responsive interaction, or sketching out an architecture diagram, I bring curiosity, care, and craftsmanship to every piece of code.",
    ],
    funFacts: [
      { label: "Current Focus", value: "Modern full-stack web applications & clean APIs" },
      { label: "Industry", value: "Information Technology (IT Sector)" },
      { label: "Location", value: "Bengaluru, Karnataka" },
      { label: "Core Principles", value: "Clean code, verified tests & human touch" },
    ],
  },

  skills: [
    {
      title: "Frontend Development",
      description: "Crafting intuitive, accessible, and responsive user experiences.",
      markerColor: "mint",
      skills: [
        { name: "Responsive Interfaces", description: "Fluid layouts across 320px mobile to 4K desktop", level: "Core" },
        { name: "Accessible UI (WCAG AA)", description: "Semantic markup, keyboard navigation, screen reader support", level: "Core" },
        { name: "Modern JavaScript / TypeScript", description: "Strict typing, modular ES6+, async patterns", level: "Core" },
        { name: "React & Next.js Ecosystem", description: "App router, server/client components, hooks, state management", level: "Core" },
        { name: "Tailwind CSS & Design Systems", description: "Utility-first design tokens, custom components, responsive grids", level: "Core" },
        { name: "SVG & Visual Micro-Interactions", description: "Handmade illustrations, subtle transitions, reduced-motion", level: "Proficient" },
      ],
    },
    {
      title: "Backend Development",
      description: "Building dependable server-side logic, data APIs, and business systems.",
      markerColor: "lavender",
      skills: [
        { name: "API Development & Architecture", description: "RESTful endpoints, structured payloads, HTTP status codes", level: "Core" },
        { name: "Server-Side Business Logic", description: "Data transformation, domain rules, state machine handling", level: "Core" },
        { name: "Data Management & Modeling", description: "Relational queries, schema design, data validation", level: "Core" },
        { name: "Input Validation (Zod / Schemas)", description: "Server-side sanitization, strict boundary validation", level: "Core" },
        { name: "Node.js & Serverless Handlers", description: "Asynchronous I/O, middleware pipelines, error trapping", level: "Core" },
        { name: "Security & Rate Limiting", description: "Bot mitigation, header hardening, credential isolation", level: "Core" },
      ],
    },
    {
      title: "Machine Learning & AI Automation",
      description: "Developing intelligent agent pipelines, LLM tooling, and automated workflows.",
      markerColor: "peach",
      skills: [
        { name: "LLM Integration & Prompt Engineering", description: "Structured function calling, agent chains, tool use", level: "Core" },
        { name: "AI Agent Workflows & Automation", description: "Multi-agent orchestration, autonomous scripts, cron tasks", level: "Core" },
        { name: "Retrieval-Augmented Generation (RAG)", description: "Vector search, context hydration, embeddings", level: "Core" },
        { name: "Model Evaluation & Benchmarking", description: "Systematic eval suites, edge-case testing, scoring", level: "Core" },
        { name: "AI Developer Tooling & MCP", description: "Model Context Protocol servers, CLI integrations, API bridges", level: "Core" },
        { name: "Data Extraction & Processing", description: "Structured parsing, sanitization, automated pipelines", level: "Core" },
      ],
    },
    {
      title: "Development Workflow",
      description: "Disciplined engineering practices ensuring reliability and speed.",
      markerColor: "blue",
      skills: [
        { name: "Version Control (Git)", description: "Branching strategies, semantic commits, PR reviews", level: "Core" },
        { name: "Automated Testing & QA", description: "End-to-end browser testing (Playwright), integration tests", level: "Core" },
        { name: "Debugging & Root Cause Analysis", description: "Systematic fault isolation, console profiling, network inspection", level: "Core" },
        { name: "Web Performance & Optimization", description: "Asset lazy loading, bundle pruning, Lighthouse optimization", level: "Core" },
        { name: "Build & Deployment Automation", description: "CI/CD pipelines, container basics, zero-downtime releases", level: "Core" },
        { name: "Technical Documentation", description: "Readable architecture notes, API specs, onboarding runbooks", level: "Core" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "radioverse-india",
      title: "RadioVerse India (रेडियोवर्स इंडिया)",
      tagline: "Live internet radio discovery & streaming progressive web application + Android app",
      description:
        "A production-ready live internet radio discovery and streaming platform streaming All India Radio (Vividh Bharati, FM Gold), private FM, and regional broadcasts. Built with Next.js App Router, TypeScript, Tailwind CSS, Zustand, and Prisma.",
      fullCaseStudy:
        "Engineered with a singleton streaming audio engine with conditional HLS support (hls.js), sleep timer with localStorage persistence and smooth 10s audio fade-out, zero-registration client storage, SSRF-protected stream health checker, bilingual UI (English / Hindi), and installable PWA + Capacitor Android APK build.",
      category: "web",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Hls.js", "Prisma", "Capacitor / Android", "PWA"],
      image: "/images/radioverse.png",
      demoUrl: "https://chandan-itian.github.io/Radio-Verse-India/",
      githubUrl: "https://github.com/chandan-itian/Radio-Verse-India",
      status: "Completed",
      highlights: [
        "Singleton audio engine with Media Session API & HLS live feeds",
        "Sleep timer with localStorage persistence & smooth audio fade-out",
        "100% bilingual interface (English & Hindi) with zero hydration mismatches",
        "SSRF-protected stream health monitor & installable PWA + Android APK",
      ],
    },
    {
      id: "doctoolz",
      title: "DocToolz v1.0.2",
      tagline: "All-in-one 100% private client-side image, passport photo & PDF productivity suite",
      description:
        "Comprehensive document and media utility offering 20+ superfast browser tools: image compression, passport photo generator with Indian exam presets (UPSC, SSC, JEE), PDF converters, and watermarking with zero server uploads.",
      fullCaseStudy:
        "Architected for zero data leakage with 100% client-side WebAssembly, Canvas, and PDF.js APIs. Completely offline-ready, bilingual (English/Hindi), and packaged as both a responsive web app and an offline Android APK (<1MB).",
      category: "app",
      tags: ["React", "TypeScript", "Vite", "Canvas API", "PDF.js", "PWA", "Android APK"],
      image: "/images/doctoolz.png",
      demoUrl: "https://chandan-itian.github.io/doctoolz/",
      githubUrl: "https://github.com/chandan-itian/doctoolz",
      status: "Completed",
      highlights: [
        "20+ client-side media and PDF tools with 100% privacy guarantee",
        "Preset dimensions & file-size limits for competitive exam portals",
        "Bilingual (English & Hindi) with instant theme switching",
        "Compact offline Android APK (<1MB) with high performance",
      ],
    },
    {
      id: "my-edge-extension",
      title: "Edge & Chromium Productivity Extension",
      tagline: "Lightweight browser utility for Microsoft Edge & Chromium browsers",
      description:
        "A custom browser extension engineered to enhance daily workflows, automate repetitive navigation, and provide seamless access to developer utilities directly within the browser toolbar.",
      fullCaseStudy:
        "Built with Manifest V3, background service workers, content script messaging, and modern TypeScript. Designed for a lightweight footprint, instant shortcut triggers, and minimal memory consumption.",
      category: "app",
      tags: ["JavaScript", "TypeScript", "Manifest V3", "Edge Extension", "Chromium API"],
      image: "",
      demoUrl: "https://github.com/chandan-itian/my-edge-extension",
      githubUrl: "https://github.com/chandan-itian/my-edge-extension",
      status: "Completed",
      highlights: [
        "Modern Manifest V3 architecture with asynchronous event workers",
        "Seamless Microsoft Edge and Chromium browser compatibility",
        "Instant shortcut triggers and focused UI popup",
      ],
    },
    {
      id: "project-canvas-sketch",
      title: "Handmade Creative Portfolio Platform",
      tagline: "Artistic, responsive web portfolio with custom SVG watercolor system",
      description:
        "A bespoke personal portfolio crafted with Next.js, TypeScript, and custom SVG organic illustrations. Emphasizes warm editorial typography, interactive topic circles, and WCAG AA accessibility.",
      fullCaseStudy:
        "Engineered with a focus on artisanal web aesthetics without sacrificing production engineering standards. Features in-memory rate limiting for contact submissions, zero external font flakiness via Google Next Font, and automated Playwright test verification.",
      category: "web",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "SVG Art", "Zod", "Playwright"],
      image: "/images/rendered-desktop.png",
      demoUrl: "https://github.com/chandan-itian",
      githubUrl: "https://github.com/chandan-itian",
      status: "Completed",
      highlights: [
        "100% responsive from 320px mobile to wide monitors",
        "Custom watercolor logo badge with organic SVG edges",
        "Keyboard accessible 4-topic interactive carousel modal",
        "Server-side Zod validation with spam prevention",
      ],
    },
  ] as Project[],

  experience: [
    {
      company: "GitHub / Open Source Engineering",
      role: "Full-Stack Developer & Software Developer",
      period: "Active Projects & Contributions",
      location: "Bengaluru, Karnataka",
      industry: "Information Technology",
      summary:
        "Active full-stack and open-source software developer building production-grade web applications, offline-first mobile APKs, developer extensions, and digital streaming platforms on GitHub (github.com/chandan-itian).",
      responsibilities: [
        "Designing, architecting, and deploying full-stack web applications and offline-ready Android utilities (RadioVerse India, DocToolz).",
        "Engineering performant, accessible user interfaces with Next.js, React, TypeScript, and Tailwind CSS.",
        "Creating privacy-first client-side architectures, browser extensions, and developer tooling with zero server data leakage.",
        "Writing comprehensive unit, integration, and end-to-end automated tests with strict type safety and high test coverage.",
      ],
      techStack: [
        "Full-Stack Web Development",
        "Next.js & React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Android / Capacitor",
        "PWA & Offline Apps",
        "Git & GitHub Actions",
      ],
      achievements: [
        "Shipped RadioVerse India with live audio streaming, HLS feeds, bilingual UI, and sleep timer.",
        "Built DocToolz v1.0.2 with 20+ client-side media/PDF tools and packaged Android APK.",
        "Developed custom Edge/Chromium productivity browser extensions.",
      ],
      isCurrent: true,
      githubUrl: "https://github.com/chandan-itian",
    },
  ] as ExperienceItem[],

  contact: {
    heading: "Have an idea? Let’s talk!",
    subheading:
      "Whether you have a question about full-stack development, a project collaboration in mind, or just want to say hi—my inbox is always open.",
    email: "chandantint@duck.com",
    location: "Bengaluru, Karnataka",
    socials: [
      { name: "Email", href: "mailto:chandantint@duck.com", label: "Send an email" },
      { name: "GitHub", href: "https://github.com/chandan-itian", label: "Visit GitHub profile" },
      { name: "LinkedIn", href: "https://linkedin.com/in/chandan-raj", label: "Connect on LinkedIn" },
    ],
  },
};
