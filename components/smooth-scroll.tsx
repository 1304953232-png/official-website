"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SNAP_THRESHOLD = 0.4;

const TABLET_SNAP_THRESHOLD = 0.45;
const FAST_SCROLL_RELAXED_THRESHOLD = 0.24;
const FAST_SCROLL_VELOCITY = 1.05;
const TABLET_FAST_SCROLL_VELOCITY = 1.45;
const SNAP_DURATION = 0.88;
const SNAP_NAV_PAUSE_MS = 1100;
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
      duration: isTouch ? 0.82 : 0.94,
      smoothWheel: true,
      easing: easeOutExpo,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.08
    });

    let rafId = 0;
    let refreshFrame = 0;
    let routeRefreshTimer = 0;
    let pauseSnapUntil = 0;
    let isSnapping = false;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let lastDirection = 1;
    let maxGestureVelocity = 0;
    let gestureStartIndex = 0;
    let sections: HTMLElement[] = [];
    let sectionTops: number[] = [];

    const getElementTop = (section: HTMLElement) => {
      const rawTop = section.getBoundingClientRect().top + window.scrollY;
      return Math.max(0, rawTop - (rawTop > 8 ? HEADER_OFFSET : 0));
    };

    const refreshSnapSections = () => {
      refreshFrame = 0;

      if (!snapEnabled) {
        sections = [];
        sectionTops = [];
        return;
      }

      const viewportHeight = window.innerHeight;
      sections = Array.from(document.querySelectorAll<HTMLElement>("main > section")).filter((section) => {
        if (section.dataset.snapSkip === "true") return false;
        if (section.offsetHeight < 220) return false;
        if (section.offsetHeight > viewportHeight * MAX_SNAP_SECTION_RATIO) return false;
        return section.getBoundingClientRect().width > 0;
      });
      sectionTops = sections.map(getElementTop);
      gestureStartIndex = getCurrentIndex(window.scrollY);
    };

    const queueSectionRefresh = () => {
      if (refreshFrame) cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(refreshSnapSections);
    };

    function getCurrentIndex(scrollY: number) {
      let index = 0;

      for (let i = 0; i < sectionTops.length; i += 1) {
        if (sectionTops[i] <= scrollY + 4) {
          index = i;
        } else {
          break;
        }
      }

      return index;
    }

    const scrollToSection = (index: number) => {
      const targetTop = sectionTops[index];
      if (typeof targetTop !== "number") return;

      isSnapping = true;
      pauseSnapUntil = performance.now() + SNAP_DURATION * 1000 + 180;

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
      if (!snapEnabled || sections.length < 2 || isSnapping || performance.now() < pauseSnapUntil) {
        maxGestureVelocity = 0;
        return;
      }

      const viewportHeight = window.innerHeight;
      const currentIndex = getCurrentIndex(scrollY);
      const relaxedThreshold = Math.min(snapThreshold, FAST_SCROLL_RELAXED_THRESHOLD);
      const fastGesture = maxGestureVelocity >= fastVelocityThreshold;
      let targetIndex: number | null = null;

      if (lastDirection >= 0) {
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        const nextVisibleRatio =
          nextIndex === currentIndex ? 0 : (scrollY + viewportHeight - sectionTops[nextIndex]) / viewportHeight;
        const shouldAdvance = nextVisibleRatio >= snapThreshold || (fastGesture && nextVisibleRatio >= relaxedThreshold);
        targetIndex = shouldAdvance && nextIndex !== currentIndex ? nextIndex : null;
      } else {
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);

        if (nextIndex > currentIndex && scrollY < sectionTops[nextIndex] - 4) {
          const previousVisibleRatio = (sectionTops[nextIndex] - scrollY) / viewportHeight;
          const shouldReturn =
            previousVisibleRatio >= snapThreshold || (fastGesture && previousVisibleRatio >= relaxedThreshold);
          targetIndex = shouldReturn ? currentIndex : null;
        }
      }

      if (targetIndex === null) return;

      targetIndex = Math.max(gestureStartIndex - 1, Math.min(gestureStartIndex + 1, targetIndex));
      maxGestureVelocity = 0;

      if (Math.abs(sectionTops[targetIndex] - scrollY) > 8) {
        scrollToSection(targetIndex);
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

      if (!snapEnabled) return;

      if (!isSnapping && now >= pauseSnapUntil) {
        gestureStartIndex = getCurrentIndex(currentScroll);
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

      lenis.scrollTo(getElementTop(targetSection), {
        duration: SNAP_DURATION,
        easing: easeOutExpo,
        lock: true,
        onComplete: () => {
          isSnapping = false;
          pauseSnapUntil = performance.now() + 320;
        }
      });
    };

    const handleRouteTransition = () => {
      pauseSnapUntil = performance.now() + SNAP_NAV_PAUSE_MS;
      maxGestureVelocity = 0;
      queueSectionRefresh();
      window.clearTimeout(routeRefreshTimer);
      routeRefreshTimer = window.setTimeout(queueSectionRefresh, 360);
    };

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const main = document.querySelector("main");
    const resizeObserver = snapEnabled && main ? new ResizeObserver(queueSectionRefresh) : null;
    resizeObserver?.observe(main as Element);

    const mutationObserver = snapEnabled && main ? new MutationObserver(queueSectionRefresh) : null;
    mutationObserver?.observe(main as Element, { childList: true });

    lenis.on("scroll", handleLenisScroll);
    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("resize", queueSectionRefresh, { passive: true });
    window.addEventListener("yan:route-transition", handleRouteTransition);
    ScrollTrigger.addEventListener("refresh", queueSectionRefresh);
    document.fonts?.ready.then(queueSectionRefresh);
    queueSectionRefresh();
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(refreshFrame);
      window.clearTimeout(routeRefreshTimer);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("resize", queueSectionRefresh);
      window.removeEventListener("yan:route-transition", handleRouteTransition);
      ScrollTrigger.removeEventListener("refresh", queueSectionRefresh);
      lenis.off("scroll", handleLenisScroll);
      lenis.destroy();
    };
  }, []);

  return children;
}
