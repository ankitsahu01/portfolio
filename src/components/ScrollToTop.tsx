"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BsArrowUpSquareFill } from "react-icons/bs";

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

  return (
    <button
      type="button"
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center text-white/70 hover:text-white hover:cursor-pointer transition-all duration-200 active:scale-95"
      style={{ display: visible ? "flex" : "none" }}
    >
      <BsArrowUpSquareFill size="2.25rem" />
    </button>
  );
};

export default ScrollToTop;
