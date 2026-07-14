"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

type ParallaxTarget = {
  selector: string;
  strength?: number;
  rotate?: number;
};

export function useParallaxMouse<T extends HTMLElement>(
  scope: RefObject<T | null>,
  targets: ParallaxTarget[],
  enabled = true
) {
  useGSAP(
    () => {
      const root = scope.current;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isFinePointer = window.matchMedia("(pointer: fine)").matches;

      if (!root || !enabled || reduceMotion || !isFinePointer) {
        return;
      }

      const entries = targets.flatMap((target) =>
        gsap.utils.toArray<HTMLElement>(target.selector, root).map((element) => ({
          element,
          xTo: gsap.quickTo(element, "x", { duration: 0.75, ease: "power3.out" }),
          yTo: gsap.quickTo(element, "y", { duration: 0.75, ease: "power3.out" }),
          rotateTo: gsap.quickTo(element, "rotate", { duration: 0.75, ease: "power3.out" }),
          strength: target.strength ?? 18,
          rotate: target.rotate ?? 0
        }))
      );

      const onMove = (event: MouseEvent) => {
        const rect = root.getBoundingClientRect();
        const relX = (event.clientX - rect.left) / rect.width - 0.5;
        const relY = (event.clientY - rect.top) / rect.height - 0.5;

        entries.forEach((entry) => {
          entry.xTo(relX * entry.strength);
          entry.yTo(relY * entry.strength);
          entry.rotateTo(relX * entry.rotate);
        });
      };

      const onLeave = () => {
        entries.forEach((entry) => {
          entry.xTo(0);
          entry.yTo(0);
          entry.rotateTo(0);
        });
      };

      root.addEventListener("mousemove", onMove);
      root.addEventListener("mouseleave", onLeave);

      return () => {
        root.removeEventListener("mousemove", onMove);
        root.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope }
  );
}
