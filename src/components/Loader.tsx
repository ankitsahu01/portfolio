import React from "react";

interface LoaderProps {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8 border-2",
  md: "w-12 h-12 border-4",
  lg: "w-16 h-16 border-4",
};

const Loader: React.FC<LoaderProps> = ({
  message = "Loading...",
  className = "min-h-[60vh]",
  size = "md",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <div
        className={`${sizeClasses[size]} border-primary-container/30 border-t-primary-container rounded-full animate-spin`}
      />
      {message && (
        <p className="text-amber-300 font-mono font-medium tracking-wide text-sm">{message}</p>
      )}
    </div>
  );
};

export default Loader;
