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

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

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
    <aside
      aria-label="Ankit Sahu AI Assistant"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end text-left"
    >
      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Ankit's AI Assistant"
          className="w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[82vh] mb-4 bg-neutral-900/95 backdrop-blur-xl border border-pink-500/50 rounded-2xl shadow-2xl shadow-pink-950/40 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 text-left"
        >
          <ChatHeader onClear={handleClearChat} onClose={() => setIsOpen(false)} />

          <ChatMessageList
            messages={messages}
            isLoading={isLoading}
            onSelectSuggestion={handleSendMessage}
            messagesEndRef={messagesEndRef}
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

      {/* Floating Action Button */}
      <ChatLauncher isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
    </aside>
  );
};

export default ChatBot;
