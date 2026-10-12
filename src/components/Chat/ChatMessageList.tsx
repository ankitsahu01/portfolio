import React, { RefObject } from "react";
import { Message } from "./types";
import ChatFormattedText from "./ChatFormattedText";
import ChatSuggestions from "./ChatSuggestions";

interface Props {
  messages: Message[];
  isLoading: boolean;
  onSelectSuggestion: (question: string) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}

const ChatMessageList: React.FC<Props> = ({
  messages,
  isLoading,
  onSelectSuggestion,
  containerRef,
}) => {
  return (
    <div
      ref={containerRef}
      className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3.5 text-sm text-left overscroll-contain"
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-md leading-relaxed text-left ${
              msg.role === "user"
                ? "bg-pink-600 text-white rounded-tr-none"
                : "bg-neutral-800/90 text-neutral-200 border border-neutral-700/60 rounded-tl-none"
            }`}
          >
            <ChatFormattedText text={msg.content} />
          </div>
        </div>
      ))}

      {/* Suggested Quick Questions (Vertical List) */}
      {messages.length <= 1 && !isLoading && (
        <ChatSuggestions onSelect={onSelectSuggestion} />
      )}

      {/* Typing Indicator */}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-neutral-800/90 border border-neutral-700/60 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessageList;
