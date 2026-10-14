import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  target,
  rel,
  download,
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  let sizeClasses = "px-4 py-2 text-sm";
  if (size === "sm") sizeClasses = "px-3 py-1.5 text-xs";
  if (size === "lg") sizeClasses = "px-5 py-3 text-sm sm:text-base font-semibold";
  if (variant === "icon") sizeClasses = "p-2.5 rounded-lg";

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-primary-container hover:bg-primary-hover text-primary-foreground font-bold shadow-glow-md";
      break;
    case "secondary":
      variantClasses =
        "bg-surface-raised hover:bg-surface-high border border-white/10 hover:border-primary-container/40 text-white";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent hover:bg-white/[0.04] text-text-secondary hover:text-white";
      break;
    case "icon":
      variantClasses =
        "bg-surface-raised border border-white/10 hover:border-primary-container hover:text-white text-text-muted";
      break;
  }

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    const finalRel = rel || (isExternal ? "noreferrer" : undefined);
    const finalTarget = target || (isExternal ? "_blank" : undefined);

    if (download) {
      return (
        <a
          href={href}
          download={download}
          className={combinedClasses}
          target={finalTarget}
          rel={finalRel}
        >
          {children}
        </a>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a href={href} className={combinedClasses}>
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClasses}
        target={finalTarget}
        rel={finalRel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
