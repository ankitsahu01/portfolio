import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { themeRgb } from "../../config/theme";
import SectionHeading from "../common/SectionHeading";
import { FiArrowUpRight, FiLock } from "react-icons/fi";

export const FeaturedProjects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16" id="projects">
      <SectionHeading
        eyebrow="SELECTED PROJECTS"
        title="Featured Engineering Deliverables"
      />

      {/* NDA Notice Banner */}
      <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-surface-raised border border-white/10 flex items-center gap-3 text-xs sm:text-sm font-mono text-text-secondary">
        <span className="p-1.5 rounded-lg bg-primary-container/15 text-primary text-sm flex-shrink-0">
          <FiLock />
        </span>
        <p>
          <strong className="text-white font-semibold">Note:</strong> According to the NDA in place, live URLs for internal portals cannot be publicly shared.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => {
          const glowPositions = [
            "-top-16 -right-16",
            "-top-16 -left-16",
            "-bottom-16 -right-16",
            "-bottom-16 -left-16",
          ];
          const glowPos = glowPositions[idx % glowPositions.length];

          return (
            <div
              key={proj.id}
              className="rounded-2xl bg-surface-raised border border-white/10 p-7 transition-all flex flex-col justify-between group relative overflow-hidden transform-gpu [transform:translateZ(0)]"
              style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              {/* Ambient mild theme glow on hover: smooth radial-gradient to avoid mobile GPU square artifacts */}
              <div
                className={`absolute ${glowPos} w-64 h-64 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  background: `radial-gradient(circle, rgba(${themeRgb.primaryContainer}, 0.16) 0%, rgba(${themeRgb.primaryContainer}, 0.05) 45%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container/10 text-primary border border-primary-container/20 font-semibold">
                    {proj.category}
                  </span>
                  <span className="text-text-muted">{proj.affiliation}</span>
                </div>

                <div className="flex items-start justify-between gap-3 group">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  {proj.isNdaProtected ? (
                    <span
                      title="Internal portal URL protected under NDA"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-text-muted flex-shrink-0"
                    >
                      <FiLock className="text-xs text-primary" />
                      <span>NDA Protected</span>
                    </span>
                  ) : proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${proj.title}`}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-container/15 hover:bg-primary-container/25 text-primary border border-primary-container/30 text-xs font-mono font-bold transition-all flex-shrink-0"
                    >
                      <span>Visit Site</span>
                      <FiArrowUpRight className="text-sm" />
                    </a>
                  ) : null}
                </div>

                {proj.bulletPoints && proj.bulletPoints.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm text-text-secondary leading-relaxed">
                    {proj.bulletPoints.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-xs select-none">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    {proj.description}
                  </p>
                )}
              </div>

              <div className="relative z-10 mt-6 pt-5 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-surface-overlay text-xs font-mono text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
