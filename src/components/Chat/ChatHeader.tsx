import React from "react";
import { BsChatDotsFill, BsTrash } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

interface Props {
  onClear: () => void;
  onClose: () => void;
}

const ChatHeader: React.FC<Props> = ({ onClear, onClose }) => {
  return (
    <div className="px-4 py-3 bg-surface-raised border-b border-white/[0.08] flex items-center justify-between shrink-0">
      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary-foreground shadow-md font-bold">
          <BsChatDotsFill size={16} />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-surface-raised rounded-full" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wide flex items-center gap-1.5 font-mono">
            Ankit's AI Assistant
          </h3>
          <p className="text-[11px] text-amber-300/80 font-mono">Online • Ask anything</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onClear}
          title="Clear conversation"
          className="p-2 sm:p-1.5 text-text-muted hover:text-amber-300 hover:bg-surface-overlay rounded-lg transition-colors"
          aria-label="Clear chat"
        >
          <BsTrash size={16} />
        </button>
        <button
          type="button"
          onClick={onClose}
          title="Close chat"
          className="p-2 sm:p-1.5 text-text-muted hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
          aria-label="Close chat"
        >
          <IoClose size={22} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
