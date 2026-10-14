"use client";

import React, { useState, useRef, useEffect } from "react";
import { Message } from "./types";
import { INITIAL_MESSAGES } from "./constants";
import ChatHeader from "./ChatHeader";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import ChatLauncher from "./ChatLauncher";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const listContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollTop = listContainerRef.current.scrollHeight;
    }
  };

  // Only auto-focus on desktop (width >= 640px). Never auto-focus on mobile to prevent keyboard pop
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined" && window.innerWidth >= 640) {
        inputRef.current?.focus();
      }
    }
  }, [isOpen]);

  // Keep scroll at bottom on new messages (internal container only, never window)
  useEffect(() => {
    if (isOpen && messages.length > 1) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  // Prevent background scrolling on mobile when full screen is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: Message = { role: "user", content: query };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.message && data.message.content) {
        setMessages((prev) => [...prev, data.message]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'm temporarily unable to answer. Please explore Ankit's [Resume](/resume) or reach out via the [Contact](/contact) page!",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sorry, I couldn't process your request. Please try again.",
          },
        ]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network error occurred. Please check your connection and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Solid background mask for mobile to ensure zero underlying page bleed */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-surface-base sm:hidden"
          aria-hidden="true"
        />
      )}

      {/* Chat Window: Full-screen on mobile (<sm), floating card on desktop (sm+) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Ankit's AI Assistant"
          className="fixed inset-0 z-50 flex flex-col w-full h-full bg-surface-base sm:inset-auto sm:bottom-24 sm:left-6 sm:w-[380px] sm:h-[520px] sm:max-h-[82vh] sm:bg-surface-base/95 sm:backdrop-blur-xl sm:border sm:border-white/10 sm:rounded-2xl shadow-2xl shadow-black/80 overflow-hidden text-left"
        >
          <ChatHeader onClear={handleClearChat} onClose={() => setIsOpen(false)} />

          <ChatMessageList
            messages={messages}
            isLoading={isLoading}
            onSelectSuggestion={handleSendMessage}
            containerRef={listContainerRef}
          />

          <ChatInput
            input={input}
            isLoading={isLoading}
            inputRef={inputRef}
            onChange={setInput}
            onSubmit={handleSendMessage}
          />
        </div>
      )}

      {/* Floating Action Button (hidden on mobile when full screen is open) */}
      <div
        className={`fixed bottom-6 left-6 z-40 ${
          isOpen ? "hidden sm:block" : "block"
        }`}
      >
        <ChatLauncher isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      </div>
    </>
  );
};

export default ChatBot;
