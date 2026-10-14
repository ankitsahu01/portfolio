import React, { RefObject } from "react";
import { IoSend } from "react-icons/io5";

interface Props {
  input: string;
  isLoading: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  onChange: (val: string) => void;
  onSubmit: () => void;
}

const ChatInput: React.FC<Props> = ({
  input,
  isLoading,
  inputRef,
  onChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="relative p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-3 bg-surface-raised border-t border-white/[0.08] flex items-center gap-2 shrink-0"
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask about experience, GCP, Aviato..."
        disabled={isLoading}
        className="flex-1 !bg-surface-overlay !text-text-primary border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-2 text-base sm:text-sm placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all disabled:opacity-50 font-mono"
      />
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="p-3 sm:p-2.5 rounded-xl bg-primary-container hover:bg-primary-hover disabled:bg-surface-high disabled:text-text-muted text-primary-foreground font-bold transition-all shadow-md active:scale-95 flex items-center justify-center shrink-0"
        aria-label="Send message"
      >
        <IoSend size={16} />
      </button>

      {/* Solid bottom buffer to prevent background bleeding during iOS keyboard animations */}
      <div className="absolute -bottom-96 left-0 right-0 h-96 bg-surface-raised sm:hidden pointer-events-none" />
    </form>
  );
};

export default ChatInput;
