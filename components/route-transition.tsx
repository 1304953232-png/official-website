"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ROUTE_SLICES = Array.from({ length: 6 }, (_, index) => index);

export function RouteTransition() {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const previousPathRef = useRef<string | null>(null);
  const [active, setActive] = useState(false);
  const [transitionId, setTransitionId] = useState(0);

  useEffect(() => {
    const previousPath = previousPathRef.current;
    previousPathRef.current = pathname;

    if (!previousPath || previousPath === pathname) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    window.dispatchEvent(new CustomEvent("yan:route-transition"));
    setActive(true);
    setTransitionId((value) => value + 1);
  }, [pathname]);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || !active) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const slices = gsap.utils.toArray<HTMLElement>("[data-route-slice]", root);

    gsap.killTweensOf([root, ...slices]);
    gsap.set(root, { autoAlpha: 1, pointerEvents: "auto" });
    gsap.set(slices, {
      autoAlpha: 1,
      rotate: isMobile ? 0 : -2.25,
      xPercent: (index) => (index % 2 === 0 ? -118 : 118),
      yPercent: 0
    });

    const timeline = gsap.timeline({
      defaults: { ease: "expo.inOut" },
      onComplete: () => setActive(false)
    });

    timeline
      .to(slices, {
        xPercent: 0,
        duration: isMobile ? 0.34 : 0.42,
        stagger: {
          each: isMobile ? 0.025 : 0.035,
          from: "edges"
        }
      })
      .to(
        slices,
        {
          xPercent: (index) => (index % 2 === 0 ? 116 : -116),
          yPercent: (index) => (isMobile ? 0 : index % 2 === 0 ? -7 : 7),
          opacity: 0.98,
          duration: isMobile ? 0.62 : 0.78,
          stagger: {
            each: isMobile ? 0.035 : 0.045,
            from: "center"
          }
        },
        isMobile ? 0.28 : 0.34
      )
      .to(root, { autoAlpha: 0, pointerEvents: "none", duration: 0.18 }, isMobile ? 0.86 : 1.04);

    return () => {
      timeline.kill();
    };
  }, [active, transitionId]);

  if (!active) {
    return null;
  }

  return (
    <div ref={rootRef} className="route-transition" aria-hidden>
      <div className="route-transition__grain" />
      {ROUTE_SLICES.map((index) => (
        <div
          key={`${transitionId}-${index}`}
          data-route-slice
          className="route-transition__slice"
          style={{ top: `${index * (100 / ROUTE_SLICES.length)}%`, height: `${100 / ROUTE_SLICES.length}%` }}
        />
      ))}
    </div>
  );
}
