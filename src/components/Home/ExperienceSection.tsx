import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { FiClock, FiExternalLink } from "react-icons/fi";

export const ExperienceSection: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16" id="experience">
      <SectionHeading
        eyebrow="WORK HISTORY"
        title="Experience & Career Milestones"
        subtitle="Track record of engineering high-performance web systems and automated cloud pipelines."
      />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="p-7 rounded-2xl bg-surface-raised border border-white/10 transition-all relative overflow-hidden"
          >
            {/* Ambient mild theme glow (different placement per card, matching Hero card intensity) */}
            <div
              className={`absolute ${
                index % 2 === 0 ? '-top-10 -right-10' : '-bottom-10 -left-10'
              } w-44 h-44 bg-primary-container/10 rounded-full blur-2xl pointer-events-none`}
            />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  {exp.isCurrent && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-primary-container/15 text-primary border border-primary-container/30">
                      CURRENT ROLE
                    </span>
                  )}
                </div>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline font-medium mt-0.5 inline-flex items-center gap-1"
                >
                  <span>{exp.company}</span>
                  <FiExternalLink className="text-xs" />
                </a>
              </div>

              <div className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                <FiClock className="text-sm" />
                <span>{exp.period} · {exp.type}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 text-sm text-text-secondary leading-relaxed">
              {exp.bulletPoints.map((point, index) => (
                <p key={index} className="flex items-start gap-2">
                  <span className="text-primary-container select-none">•</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-surface-overlay text-xs font-mono text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
