import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ExperienceSection() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20 border-t border-stone-200/50"
      aria-labelledby="experience-heading"
    >
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-sans-clean text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
          CONTRIBUTIONS &amp; ROLES
        </span>
        <h2
          id="experience-heading"
          className="font-handwriting text-[36px] sm:text-[46px] md:text-[50px] font-bold text-stone-900 leading-tight"
        >
          Where I’ve contributed.
        </h2>
        <p className="font-sans-clean text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
          Engineering open source software, full-stack applications, and developer utilities.
        </p>
      </div>

      {/* Lightweight Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-stone-300 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Hand-Drawn Node Dot */}
            <div
              className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#F8CAD5] border-2 border-stone-800 flex items-center justify-center shadow-xs group-hover:scale-125 transition-transform"
              aria-hidden="true"
            >
              <div className="w-2 h-2 rounded-full bg-stone-900" />
            </div>

            {/* Experience Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-pink-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4 mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-sans-clean text-xl sm:text-2xl font-bold text-stone-900">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans-clean uppercase tracking-wider font-bold bg-[#C3EEDF] text-emerald-900 border border-emerald-300">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-sans-clean text-stone-600 mt-1">
                    <span className="font-semibold text-stone-800 flex items-center space-x-1">
                      <Briefcase className="w-3.5 h-3.5 text-pink-500" />
                      <span>{exp.company}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-xs font-sans-clean text-stone-500 bg-[#F5F2EB] px-3 py-1 rounded-full self-start sm:self-auto border border-stone-200">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="font-sans-clean text-sm sm:text-[15px] text-stone-700 leading-relaxed mb-4">
                {exp.summary}
              </p>

              {/* Core Responsibilities */}
              <div className="mb-4">
                <h4 className="font-sans-clean text-xs uppercase tracking-wider font-bold text-stone-500 mb-2">
                  Key Focus &amp; Contributions
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start space-x-2 text-sm text-stone-600"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags & GitHub Link */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-sans-clean text-xs text-stone-400 mr-1 font-medium">
                    Stack:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-sans-clean bg-stone-100 text-stone-700 border border-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.githubUrl && (
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans-clean font-semibold bg-stone-900 text-white hover:bg-pink-600 transition-colors self-start sm:self-auto shrink-0"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub Profile</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
