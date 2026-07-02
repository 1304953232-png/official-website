"use client";

import { useEffect, useRef } from "react";

export function AbstractCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < 42; i += 1) {
        const x = ((i * 127 + time * 0.012) % (width + 220)) - 110;
        const y = height * 0.18 + Math.sin(i * 0.7 + time * 0.0007) * 140 + i * 7;
        const alpha = 0.04 + (i % 5) * 0.006;
        ctx.strokeStyle = i % 3 === 0 ? `rgba(200,169,106,${alpha})` : `rgba(110,139,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x + 80, y - 36, x + 180, y + 54, x + 320, y - 12);
        ctx.stroke();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />;
}
