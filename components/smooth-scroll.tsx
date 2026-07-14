"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SNAP_THRESHOLD = 0.4;

const TABLET_SNAP_THRESHOLD = 0.45;
const FAST_SCROLL_RELAXED_THRESHOLD = 0.24;
const FAST_SCROLL_VELOCITY = 1.05;
const TABLET_FAST_SCROLL_VELOCITY = 1.45;
const SNAP_DURATION = 1;
const SNAP_NAV_PAUSE_MS = 1400;
const HEADER_OFFSET = 92;
const MAX_SNAP_SECTION_RATIO = 1.7;

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (reduceMotion) return;

    const snapEnabled = !isMobile;
    const snapThreshold = isTablet ? TABLET_SNAP_THRESHOLD : SNAP_THRESHOLD;
    const fastVelocityThreshold = isTablet ? TABLET_FAST_SCROLL_VELOCITY : FAST_SCROLL_VELOCITY;

    const lenis = new Lenis({
      duration: isTouch ? 0.9 : 1.22,
      smoothWheel: true,
      easing: easeOutExpo,
      wheelMultiplier: 0.82,
      touchMultiplier: 1.15
    });

    let rafId = 0;
    let pauseSnapUntil = 0;
    let isSnapping = false;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let lastDirection = 1;
    let maxGestureVelocity = 0;
    let gestureStartIndex = 0;

    const getSectionTop = (section: HTMLElement) => {
      const rawTop = section.getBoundingClientRect().top + window.scrollY;
      return Math.max(0, rawTop - (rawTop > 8 ? HEADER_OFFSET : 0));
    };

    const getSnapSections = () => {
      const viewportHeight = window.innerHeight;

      return Array.from(document.querySelectorAll<HTMLElement>("main > section")).filter((section) => {
        if (section.dataset.snapSkip === "true") return false;
        if (section.offsetHeight < 220) return false;
        if (section.offsetHeight > viewportHeight * MAX_SNAP_SECTION_RATIO) return false;
        return section.getBoundingClientRect().width > 0;
      });
    };

    const getCurrentIndex = (sections: HTMLElement[], scrollY: number) => {
      let index = 0;

      for (let i = 0; i < sections.length; i += 1) {
        if (getSectionTop(sections[i]) <= scrollY + 4) {
          index = i;
        } else {
          break;
        }
      }

      return index;
    };

    const scrollToSection = (section: HTMLElement) => {
      const targetTop = getSectionTop(section);
      isSnapping = true;
      pauseSnapUntil = performance.now() + SNAP_DURATION * 1000 + 220;

      lenis.scrollTo(targetTop, {
        duration: SNAP_DURATION,
        easing: easeOutExpo,
        lock: true,
        onComplete: () => {
          isSnapping = false;
        }
      });
    };

    const evaluateImmediateSnap = (scrollY: number) => {
      if (!snapEnabled || isSnapping || performance.now() < pauseSnapUntil) {
        maxGestureVelocity = 0;
        return;
      }

      const sections = getSnapSections();
      if (sections.length < 2) return;

      const viewportHeight = window.innerHeight;
      const currentIndex = getCurrentIndex(sections, scrollY);
      const relaxedThreshold = Math.min(snapThreshold, FAST_SCROLL_RELAXED_THRESHOLD);
      const fastGesture = maxGestureVelocity >= fastVelocityThreshold;
      let targetIndex: number | null = null;

      if (lastDirection >= 0) {
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        const nextVisibleRatio =
          nextIndex === currentIndex ? 0 : (scrollY + viewportHeight - getSectionTop(sections[nextIndex])) / viewportHeight;
        const shouldAdvance = nextVisibleRatio >= snapThreshold || (fastGesture && nextVisibleRatio >= relaxedThreshold);
        targetIndex = shouldAdvance && nextIndex !== currentIndex ? nextIndex : null;
      } else {
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);

        if (nextIndex > currentIndex && scrollY < getSectionTop(sections[nextIndex]) - 4) {
          const previousVisibleRatio = (getSectionTop(sections[nextIndex]) - scrollY) / viewportHeight;
          const shouldReturn = previousVisibleRatio >= snapThreshold || (fastGesture && previousVisibleRatio >= relaxedThreshold);
          targetIndex = shouldReturn ? currentIndex : null;
        }
      }

      if (targetIndex === null) {
        return;
      }

      targetIndex = Math.max(gestureStartIndex - 1, Math.min(gestureStartIndex + 1, targetIndex));
      maxGestureVelocity = 0;

      if (Math.abs(getSectionTop(sections[targetIndex]) - scrollY) > 8) {
        scrollToSection(sections[targetIndex]);
      }
    };

    const handleLenisScroll = (event: { scroll?: number; velocity?: number; direction?: number }) => {
      const now = performance.now();
      const currentScroll = typeof event.scroll === "number" ? event.scroll : window.scrollY;
      const delta = currentScroll - lastScroll;
      const elapsed = Math.max(now - lastTime, 16);
      const manualVelocity = Math.abs(delta) / elapsed;
      const eventVelocity = typeof event.velocity === "number" ? Math.abs(event.velocity) : 0;

      if (Math.abs(delta) > 0.5) {
        lastDirection = delta > 0 ? 1 : -1;
      } else if (typeof event.direction === "number" && event.direction !== 0) {
        lastDirection = event.direction > 0 ? 1 : -1;
      }

      maxGestureVelocity = Math.max(maxGestureVelocity, manualVelocity, eventVelocity);
      lastScroll = currentScroll;
      lastTime = now;
      ScrollTrigger.update();

      if (!isSnapping && performance.now() >= pauseSnapUntil) {
        const sections = getSnapSections();
        gestureStartIndex = sections.length > 0 ? getCurrentIndex(sections, currentScroll) : 0;
      }

      evaluateImmediateSnap(currentScroll);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      pauseSnapUntil = performance.now() + SNAP_NAV_PAUSE_MS;

      const url = new URL(anchor.href, window.location.href);
      const samePageHash =
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.hash.length > 1;

      if (!samePageHash) return;

      const targetSection = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!targetSection) return;

      event.preventDefault();
      isSnapping = true;

      lenis.scrollTo(Math.max(0, targetSection.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET), {
        duration: SNAP_DURATION,
        easing: easeOutExpo,
        lock: true,
        onComplete: () => {
          isSnapping = false;
          pauseSnapUntil = performance.now() + 420;
        }
      });
    };

    const handleRouteTransition = () => {
      pauseSnapUntil = performance.now() + SNAP_NAV_PAUSE_MS;
      maxGestureVelocity = 0;
    };

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    lenis.on("scroll", handleLenisScroll);
    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("yan:route-transition", handleRouteTransition);
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("yan:route-transition", handleRouteTransition);
      lenis.off("scroll", handleLenisScroll);
      lenis.destroy();
    };
  }, []);

  return children;
}
