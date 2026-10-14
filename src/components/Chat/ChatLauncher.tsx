import React from "react";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatLauncher: React.FC<Props> = ({ isOpen, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary-container hover:bg-primary-hover text-primary-foreground shadow-glow-lg hover:scale-105 active:scale-95 transition-all duration-200"
      aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
    >
      <span className="absolute -inset-1.5 rounded-full bg-primary-container/20 animate-pulse pointer-events-none" />
      {isOpen ? <IoClose size={26} /> : <FaRobot size={24} />}

      {/* Tooltip badge on desktop when closed */}
      {!isOpen && (
        <span className="hidden md:block absolute left-16 px-2.5 py-1 rounded-lg bg-surface-raised/95 border border-primary-container/40 text-[11px] text-amber-200 whitespace-nowrap shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono">
          Ask Ankit's AI ✨
        </span>
      )}
    </button>
  );
};

export default ChatLauncher;
