import React from "react";
import { SUGGESTED_QUESTIONS } from "./constants";

interface Props {
  onSelect: (question: string) => void;
}

const ChatSuggestions: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="pt-1 flex flex-col gap-1.5 text-left animate-in fade-in duration-200">
      <span className="text-[11px] text-amber-300 font-mono font-medium px-1">
        Suggested questions:
      </span>
      {SUGGESTED_QUESTIONS.map((q, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onSelect(q)}
          className="w-full text-left text-xs px-3.5 py-2.5 rounded-xl bg-surface-raised hover:bg-surface-high text-text-secondary hover:text-white border border-white/10 hover:border-primary-container/40 transition-all duration-150 flex items-center justify-between group shadow-sm active:scale-[0.99] font-mono"
        >
          <span>{q}</span>
          <span className="text-text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-transform text-xs">
            →
          </span>
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
