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
      className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white shadow-xl shadow-pink-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
      aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
    >
      <span className="absolute -inset-1 rounded-full bg-pink-500/30 animate-pulse pointer-events-none" />
      {isOpen ? <IoClose size={26} /> : <FaRobot size={24} />}

      {/* Tooltip badge on desktop when closed */}
      {!isOpen && (
        <span className="hidden md:block absolute right-16 px-2.5 py-1 rounded-lg bg-neutral-900/95 border border-pink-500/30 text-[11px] text-pink-200 whitespace-nowrap shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Ask Ankit's AI ✨
        </span>
      )}
    </button>
  );
};

export default ChatLauncher;
