"use client";

import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { RiRobotLine } from "react-icons/ri";

export const AiCopilotTeaser: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleAsk = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;

    setIsSearching(true);
    setResponse(null);

    setTimeout(() => {
      setIsSearching(false);
      if (q.includes("next") || q.includes("react") || q.includes("frontend")) {
        setResponse(
          "Profile Verified: Ankit has 4+ years of React and Next.js experience, architecting SSR apps with Next.js, TypeScript, and cutting page load latency by 35% at FitPeo Tech."
        );
      } else if (q.includes("gcp") || q.includes("cloud") || q.includes("terraform")) {
        setResponse(
          "Profile Verified: Certified Google Cloud Associate Cloud Engineer (#7882cc4f). Daily driver of Terraform, Cloud Run, Cloud SQL, Firebase, and GCS at Aviato Consulting."
        );
      } else if (q.includes("ai") || q.includes("n8n") || q.includes("genai")) {
        setResponse(
          "Profile Verified: Designs production GenAI pipelines integrating LLM APIs with deterministic n8n workflows for automated document intake and batch triggers."
        );
      } else if (q.includes("available") || q.includes("hire") || q.includes("job") || q.includes("role")) {
        setResponse(
          "Available: Currently open for Senior / Lead Frontend & Full Stack Engineering roles (Remote & Global). Fast transition timeline."
        );
      } else {
        setResponse(
          "Ankit Sahu: Full Stack & Cloud Specialist with 4+ years of experience, certified in GCP, expert in Next.js, React, TypeScript, and GenAI automation."
        );
      }
    }, 250);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-8 scroll-mt-20" id="copilot">
      <div className="p-6 rounded-2xl bg-surface-raised border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary flex-shrink-0">
            <BsStars className="text-2xl text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base sm:text-lg">
                Ask Ankit's AI Assistant
              </h4>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-primary-container/20 text-primary">
                COPILOT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Quickly query my stack compatibility, credentials, notice period, or architecture preferences.
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto flex items-center gap-2 bg-surface-overlay p-1.5 rounded-xl border border-white/10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. Can you lead Next.js + Cloud?"
            className="bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder:text-text-muted focus:outline-none w-full md:w-72 font-mono"
          />
          <button
            type="button"
            onClick={handleAsk}
            className="px-4 py-2 rounded-lg bg-primary-container hover:bg-primary-hover text-primary-foreground font-mono text-xs font-bold transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Ask</span>
            <FiSend className="text-xs" />
          </button>
        </div>
      </div>

      {(isSearching || response) && (
        <div className="mt-3 p-4 rounded-xl bg-surface-overlay border border-primary-container/30 text-xs sm:text-sm text-white font-mono transition-all animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <RiRobotLine className="text-primary text-lg mt-0.5 flex-shrink-0" />
            <div className="text-text-secondary leading-relaxed">
              {isSearching ? (
                <span className="text-text-muted">Querying profile corpus...</span>
              ) : (
                <span className="text-text-primary">{response}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AiCopilotTeaser;
