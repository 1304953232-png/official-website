"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

function parseValue(value: string) {
  const number = Number(value.replace(/[^0-9]/g, ""));
  const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = value.match(/[^\d]*$/)?.[0] ?? "";
  return { number, prefix, suffix };
}

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const parsed = useMemo(() => parseValue(value), [value]);
  const [current, setCurrent] = useState(reduceMotion ? parsed.number : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setCurrent(parsed.number);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(parsed.number * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed.number, reduceMotion]);

  return (
    <span ref={ref}>
      {parsed.prefix}
      {current.toLocaleString("en-US")}
      {parsed.suffix}
    </span>
  );
}
