import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { IoSpeedometer, IoGlobeOutline, IoShieldCheckmark, IoBug } from "react-icons/io5";

export const ImpactMetrics: React.FC = () => {
  const { metrics } = PORTFOLIO_DATA;

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case "speed":
        return <IoSpeedometer className="text-xl text-primary-container" />;
      case "public":
        return <IoGlobeOutline className="text-xl text-primary-container" />;
      case "verified_user":
        return <IoShieldCheckmark className="text-xl text-emerald-400" />;
      case "bug_report":
      default:
        return <IoBug className="text-xl text-primary" />;
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 scroll-mt-20" id="metrics">
      <SectionHeading
        eyebrow="MEASURABLE DELIVERABLES"
        title="Engineered for measurable impact."
        subtitle="Verified numbers from production systems across healthcare, cloud automation, and high-concurrency SaaS."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="p-6 rounded-2xl bg-surface-raised border border-white/10 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-text-muted mb-4">
                <span className="text-xs font-mono uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="group-hover:scale-110 transition-transform">
                  {getMetricIcon(metric.iconName)}
                </span>
              </div>
              <div
                className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  metric.highlightColor || "text-white"
                }`}
              >
                {metric.value}
              </div>
            </div>
            <p className="text-sm text-text-secondary mt-4 leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactMetrics;
