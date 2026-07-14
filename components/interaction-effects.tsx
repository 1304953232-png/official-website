"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function InteractionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduceMotion || !isFinePointer) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>(".spotlight-card");
      const button = target?.closest<HTMLElement>(".magnetic-button");

      if (card) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 13;
        const rotateX = ((y / rect.height) - 0.5) * -11;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.setProperty("--spotlight-opacity", "1");
        gsap.to(card, { rotateX, rotateY, y: -14, scale: 1.018, duration: 0.34, ease: "power3.out" });
      }

      if (button) {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.setProperty("--shine-x", `${event.clientX - rect.left}px`);
        gsap.to(button, { x: x * 0.24, y: y * 0.26, scale: 1.035, duration: 0.36, ease: "power3.out" });
        const icon = button.querySelector("svg");
        if (icon) {
          gsap.to(icon, { x: 7, y: -4, rotate: 10, duration: 0.28, ease: "power3.out" });
        }
      }
    };

    const onOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>(".spotlight-card");
      const button = target?.closest<HTMLElement>(".magnetic-button");

      if (card && !card.contains(event.relatedTarget as Node | null)) {
        card.style.setProperty("--spotlight-opacity", "0");
        gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, scale: 1, duration: 0.62, ease: "elastic.out(1, 0.55)" });
      }

      if (button && !button.contains(event.relatedTarget as Node | null)) {
        gsap.to(button, { x: 0, y: 0, scale: 1, duration: 0.58, ease: "elastic.out(1, 0.5)" });
        const icon = button.querySelector("svg");
        if (icon) {
          gsap.to(icon, { x: 0, y: 0, rotate: 0, duration: 0.42, ease: "power3.out" });
        }
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return null;
}
