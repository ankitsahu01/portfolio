import React from "react";
import { SUGGESTED_QUESTIONS } from "./constants";

interface Props {
  onSelect: (question: string) => void;
}

const ChatSuggestions: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="pt-1 flex flex-col gap-1.5 text-left animate-in fade-in duration-200">
      <span className="text-[11px] text-pink-300/80 font-medium px-1">
        Suggested questions:
      </span>
      {SUGGESTED_QUESTIONS.map((q, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onSelect(q)}
          className="w-full text-left text-xs px-3.5 py-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-pink-300 border border-neutral-700/60 hover:border-pink-500/50 transition-all duration-150 flex items-center justify-between group shadow-sm active:scale-[0.99]"
        >
          <span>{q}</span>
          <span className="text-neutral-500 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-transform text-xs">
            →
          </span>
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
