"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealAnimationOptions = {
  duration?: number;
  start?: string;
  staggerSelector?: string;
  y?: number;
};

export function useRevealAnimation<T extends HTMLElement>(
  scope: RefObject<T | null>,
  {
    duration = 0.85,
    start = "top 86%",
    staggerSelector = "[data-reveal-item]",
    y
  }: RevealAnimationOptions = {}
) {
  useGSAP(
    () => {
      const root = scope.current;

      if (!root) {
        return;
      }

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (reduceMotion) {
        gsap.set(root, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      const revealY = y ?? (isMobile ? 26 : 96);
      const revealDuration = isMobile ? Math.min(duration, 0.72) : Math.max(duration, 1.02);
      const staggerItems = isMobile ? [] : gsap.utils.toArray<HTMLElement>(staggerSelector, root);
      const leftItems = gsap.utils.toArray<HTMLElement>("[data-reveal-left]", root);
      const rightItems = gsap.utils.toArray<HTMLElement>("[data-reveal-right]", root);

      gsap.set(root, {
        autoAlpha: 0,
        clipPath: isMobile ? "none" : "inset(12% 0% 0% 0%)",
        rotateX: isMobile ? 0 : 16,
        rotateY: isMobile ? 0 : -7,
        scale: isMobile ? 1 : 0.94,
        filter: isMobile ? "none" : "blur(16px)",
        transformPerspective: 1200,
        y: revealY
      });
      gsap.set(leftItems, { autoAlpha: 0, filter: isMobile ? "none" : "blur(12px)", y: isMobile ? 22 : 84, scale: isMobile ? 1 : 0.96 });
      gsap.set(rightItems, {
        autoAlpha: 0,
        filter: isMobile ? "none" : "blur(12px)",
        rotateY: isMobile ? 0 : -16,
        scale: isMobile ? 1 : 0.94,
        x: isMobile ? 0 : 104,
        y: isMobile ? 22 : 0
      });
      gsap.set(staggerItems, {
        autoAlpha: 0,
        clipPath: isMobile ? "none" : "inset(18% 0% 0% 0%)",
        filter: isMobile ? "none" : "blur(12px)",
        rotateX: isMobile ? 0 : 14,
        rotateY: isMobile ? 0 : -9,
        scale: isMobile ? 1 : 0.92,
        y: isMobile ? 26 : 92,
        transformPerspective: 1000
      });

      const registerReveal = () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start,
            once: true
          }
        });

        timeline.to(root, {
          autoAlpha: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          y: 0,
          duration: revealDuration,
          ease: "expo.out",
          clearProps: "clipPath,filter,transform"
        });

        if (leftItems.length > 0 || rightItems.length > 0) {
          timeline.to(
            leftItems,
            {
              autoAlpha: 1,
              filter: "blur(0px)",
              scale: 1,
              y: 0,
              duration: 1,
              ease: "expo.out",
              stagger: 0.1,
              clearProps: "filter,transform"
            },
            "-=0.56"
          );
          timeline.to(
            rightItems,
            {
              autoAlpha: 1,
              filter: "blur(0px)",
              rotateY: 0,
              scale: 1,
              x: 0,
              y: 0,
              duration: 1.08,
              ease: "expo.out",
              stagger: 0.08,
              clearProps: "filter,transform"
            },
            "-=0.76"
          );
        }

        if (staggerItems.length > 0) {
          timeline.to(
            staggerItems,
            {
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              filter: "blur(0px)",
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              y: 0,
              duration: 0.96,
              ease: "expo.out",
              stagger: {
                amount: Math.min(staggerItems.length * 0.085, 0.72),
                from: "start"
              },
              clearProps: "clipPath,filter,transform"
            },
            "-=0.52"
          );
        }
      };

      const delay = root.getBoundingClientRect().top < window.innerHeight ? 0.1 : 0.95;
      const delayedCall = gsap.delayedCall(delay, registerReveal);

      return () => delayedCall.kill();
    },
    { scope }
  );
}
