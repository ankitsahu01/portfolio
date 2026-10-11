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

  const toggleVisible = () => {
    const scrolled =
      document.documentElement.scrollTop ||
      window.scrollY ||
      document.body.scrollTop;
    if (scrolled > 300) setVisible(true);
    else setVisible(false);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <BsArrowUpSquareFill
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      size="2rem"
      className="text-white/70 hover:cursor-pointer fixed bottom-5 right-5 hover:text-white z-50"
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default ScrollToTop;
