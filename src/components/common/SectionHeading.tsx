import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center";
  rightAction?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  rightAction,
  className = "",
}) => {
  return (
    <div
      className={`mb-10 ${
        rightAction ? "flex flex-col sm:flex-row sm:items-end justify-between gap-4" : ""
      } ${className}`}
    >
      <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}>
        {eyebrow && (
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary-container mb-2">
            <span>// {eyebrow}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-secondary text-sm sm:text-base mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {rightAction && <div className="flex-shrink-0">{rightAction}</div>}
    </div>
  );
};

export default SectionHeading;
