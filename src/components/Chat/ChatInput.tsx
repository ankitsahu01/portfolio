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
      className="p-3 bg-neutral-800/90 border-t border-neutral-800 flex items-center gap-2"
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask about experience, GCP, Aviato..."
        disabled={isLoading}
        className="flex-1 bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-xs md:text-sm text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="p-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:bg-neutral-800 disabled:text-neutral-500 text-white transition-all shadow-md active:scale-95 flex items-center justify-center"
        aria-label="Send message"
      >
        <IoSend size={15} />
      </button>
    </form>
  );
};

export default ChatInput;
