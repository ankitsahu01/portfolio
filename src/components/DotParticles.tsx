"use client";
import { useState, useEffect } from "react";

const TOTAL_PARTICLES = 200;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const generateSingleDot = (e) => {
  const xAxis = e.clientX,
    yAxis = e.clientY,
    node = document.createElement("span");

  node.className = "h-0.5 w-0.5 bg-pink-300 rounded animate-pulse fixed pointer-events-none";
  node.style = `top:${yAxis}px; left:${xAxis}px`;
  document.getElementById("app").appendChild(node);

  setTimeout(() => {
    document.getElementById("app").removeChild(node);
  }, 2000);
};

const generateNthDots = (quantity) => {
  let dotsAxis = [];
  for (let i = 0; i < quantity; i++) {
    dotsAxis.push({
      top: getRandomInt(window.screen.availHeight) + "px",
      left: getRandomInt(window.screen.availWidth) + "px",
    });
  }
  return dotsAxis;
};

const DotBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const handleResize = () => setDots(generateNthDots(TOTAL_PARTICLES));
    setDots(generateNthDots(TOTAL_PARTICLES));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const app = document.getElementById("app");
    if (!app) return;
    app.addEventListener("click", generateSingleDot);
    return () => app.removeEventListener("click", generateSingleDot);
  }, []);

  return (
    <>
      {dots &&
        dots.map((dot, index) => (
          <span
            key={index}
            className="h-0.5 w-0.5 bg-pink-300/40 rounded animate-pulse fixed pointer-events-none"
            style={{ top: dot.top, left: dot.left }}
          ></span>
        ))}
    </>
  );
};

export default DotBackground;
