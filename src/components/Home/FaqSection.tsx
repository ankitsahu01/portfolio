"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { FiChevronDown } from "react-icons/fi";

export const FaqSection: React.FC = () => {
  const { faq } = PORTFOLIO_DATA;
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(["faq-1"]));

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16" id="faq">
      <SectionHeading
        eyebrow="QUICK ANSWERS"
        title="About Ankit Sahu"
        subtitle="Everything recruiters, engineering leads, and founders commonly ask about my experience and stack."
      />

      <div className="space-y-3 w-full">
        {faq.map((item) => {
          const isOpen = openIds.has(item.id);
          return (
            <div
              key={item.id}
              className="rounded-xl bg-surface-raised border border-white/10 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(item.id)}
                className="w-full p-5 text-left font-semibold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:text-primary transition-colors focus:outline-none"
              >
                <span>{item.question}</span>
                <FiChevronDown
                  className={`text-xl transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-primary" : "text-text-muted"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-text-secondary border-t border-white/[0.06] leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
