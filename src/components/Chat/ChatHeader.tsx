import React from "react";
import { BsChatDotsFill, BsTrash } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

interface Props {
  onClear: () => void;
  onClose: () => void;
}

const ChatHeader: React.FC<Props> = ({ onClear, onClose }) => {
  return (
    <div className="px-4 py-3 bg-neutral-800/80 border-b border-pink-500/20 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-rose-400 flex items-center justify-center text-white shadow-md">
          <BsChatDotsFill size={18} />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-neutral-900 rounded-full" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wide flex items-center gap-1.5">
            Ankit's AI Assistant
          </h3>
          <p className="text-[11px] text-pink-300/80">Online • Ask anything</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onClear}
          title="Clear conversation"
          className="p-1.5 text-neutral-400 hover:text-pink-300 hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Clear chat"
        >
          <BsTrash size={15} />
        </button>
        <button
          type="button"
          onClick={onClose}
          title="Close chat"
          className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Close chat"
        >
          <IoClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
