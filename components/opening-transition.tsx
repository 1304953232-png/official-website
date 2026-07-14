"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const slices = Array.from({ length: 5 }, (_, index) => index);

export function OpeningTransition() {
  const scope = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const root = scope.current;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (!root || reduceMotion || sessionStorage.getItem("yan-opening-played") === "true") {
        setDone(true);
        return;
      }

      sessionStorage.setItem("yan-opening-played", "true");

      const sliceItems = gsap.utils.toArray<HTMLElement>("[data-opening-slice]", root);

      gsap.set(root, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.set(sliceItems, {
        rotate: isMobile ? 0 : -2.5,
        xPercent: 0,
        transformOrigin: "center"
      });

      const timeline = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        onComplete: () => setDone(true)
      });

      timeline
        .to(
          sliceItems,
          {
            xPercent: (index) => (index % 2 === 0 ? 112 : -112),
            yPercent: (index) => (isMobile ? 0 : index % 2 === 0 ? -8 : 8),
            opacity: 0.96,
            duration: isMobile ? 0.9 : 1.18,
            stagger: {
              each: isMobile ? 0.045 : 0.065,
              from: "center"
            }
          },
          0.2
        )
        .to(
          root,
          {
            autoAlpha: 0,
            duration: 0.32,
            pointerEvents: "none"
          },
          isMobile ? 0.98 : 1.28
        );
    },
    { scope }
  );

  if (done) {
    return null;
  }

  return (
    <div ref={scope} className="opening-transition" aria-hidden>
      {slices.map((index) => (
        <div
          key={index}
          data-opening-slice
          className="opening-transition__slice"
          style={{ top: `${index * 20}%`, height: "20%" }}
        />
      ))}
    </div>
  );
}
