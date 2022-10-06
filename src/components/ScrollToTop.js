import { useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    else setVisible(false);
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <BsArrowUpSquareFill
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      size="2rem"
      className="text-white/70 hover:cursor-pointer fixed bottom-5 right-5 hover:text-white"
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default ScrollToTop;
