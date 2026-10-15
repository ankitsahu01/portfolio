"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      let attempts = 0;
      const maxAttempts = 15;

      const attemptScroll = () => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(attemptScroll, 60);
        }
      };

      // Delay slightly to let Next.js route transition and DOM render complete
      const timer = setTimeout(attemptScroll, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled =
            window.scrollY || document.documentElement.scrollTop;
          setVisible(scrolled > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-surface-raised border border-white/10 hover:border-primary-container text-text-secondary hover:text-primary-container shadow-2xl flex items-center justify-center transition-all duration-200 active:scale-95"
    >
      <FiArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
