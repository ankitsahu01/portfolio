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
      className="relative p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-3 bg-neutral-900 border-t border-neutral-800 flex items-center gap-2 shrink-0"
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask about experience, GCP, Aviato..."
        disabled={isLoading}
        className="flex-1 !bg-neutral-900 !text-neutral-100 border border-neutral-700 rounded-xl px-3.5 py-2.5 sm:py-2 text-base sm:text-sm placeholder-neutral-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="p-3 sm:p-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:bg-neutral-800 disabled:text-neutral-500 text-white transition-all shadow-md active:scale-95 flex items-center justify-center shrink-0"
        aria-label="Send message"
      >
        <IoSend size={16} />
      </button>

      {/* Solid bottom buffer to guarantee no underlying website background peeks through during iOS keyboard animations */}
      <div className="absolute -bottom-96 left-0 right-0 h-96 bg-neutral-900 sm:hidden pointer-events-none" />
    </form>
  );
};

export default ChatInput;
