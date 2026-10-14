"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

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
