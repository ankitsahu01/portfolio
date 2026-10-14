import React from "react";

export type BadgeVariant = "amber" | "emerald" | "surface" | "overlay" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "surface",
  size = "sm",
  className = "",
  onClick,
  active = false,
}) => {
  const sizeClasses =
    size === "sm"
      ? "px-2.5 py-0.5 text-[11px]"
      : "px-3.5 py-1.5 text-xs";

  let variantClasses = "";
  if (active) {
    variantClasses = "bg-surface-overlay text-amber-300 border-primary-container/40 font-semibold shadow-sm";
  } else {
    switch (variant) {
      case "amber":
        variantClasses =
          "bg-amber-500/10 text-amber-300 border-amber-500/20 font-semibold";
        break;
      case "emerald":
        variantClasses =
          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-semibold";
        break;
      case "overlay":
        variantClasses =
          "bg-surface-overlay text-text-secondary border-white/5 hover:border-white/10 hover:text-white";
        break;
      case "outline":
        variantClasses =
          "bg-transparent text-text-secondary border-white/10 hover:border-white/20 hover:text-white";
        break;
      case "surface":
      default:
        variantClasses =
          "bg-surface-raised text-text-secondary border-white/10 hover:border-white/20 hover:text-white";
        break;
    }
  }

  const cursorClass = onClick ? "cursor-pointer" : "cursor-default";

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-md font-mono border transition-all ${sizeClasses} ${variantClasses} ${cursorClass} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
