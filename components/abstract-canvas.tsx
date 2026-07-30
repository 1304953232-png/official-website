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
    let active = true;
    let lastDraw = 0;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);
    const lineCount = isMobile ? 16 : 24;
    const frameInterval = 1000 / (isMobile ? 20 : 30);

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
      if (!active || document.hidden) {
        frame = 0;
        return;
      }

      if (time - lastDraw < frameInterval) {
        frame = requestAnimationFrame(draw);
        return;
      }

      lastDraw = time;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < lineCount; i += 1) {
        const x = ((i * 127 + time * 0.012) % (width + 220)) - 110;
        const y = height * 0.18 + Math.sin(i * 0.7 + time * 0.0007) * 140 + i * 11;
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

    const start = () => {
      if (!frame && active && !document.hidden) {
        lastDraw = 0;
        frame = requestAnimationFrame(draw);
      }
    };

    const stop = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) start();
        else stop();
      },
      { rootMargin: "120px 0px" }
    );

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />;
}
