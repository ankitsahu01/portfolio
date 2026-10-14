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
      className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3.5 text-sm text-left overscroll-contain bg-surface-base"
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-md leading-relaxed text-left text-sm ${
              msg.role === "user"
                ? "bg-primary-container text-primary-foreground font-medium rounded-tr-none shadow-glow-sm"
                : "bg-surface-raised text-text-primary border border-white/10 rounded-tl-none font-sans"
            }`}
          >
            <ChatFormattedText text={msg.content} />
          </div>
        </div>
      ))}

      {/* Suggested Quick Questions */}
      {messages.length <= 1 && !isLoading && (
        <ChatSuggestions onSelect={onSelectSuggestion} />
      )}

      {/* Typing Indicator */}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-surface-raised border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 bg-primary-container rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-primary-container rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-primary-container rounded-full animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessageList;
