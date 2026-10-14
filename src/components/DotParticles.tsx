"use client";
import React, { useEffect, useRef } from "react";
import { themeRgb } from "../config/theme";

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  vy: number;
}

const TOTAL_PARTICLES = 100;

const DotParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = Array.from({ length: TOTAL_PARTICLES }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.6,
      alpha: Math.random() * 0.7 + 0.2,
      alphaSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      vy: Math.random() * 0.2 + 0.05,
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ambient floating/twinkling dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.1 || p.alpha >= 0.8) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        p.y -= p.vy;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${themeRgb.primaryContainer}, ${Math.max(0, Math.min(1, p.alpha * 0.4))})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default DotParticles;
