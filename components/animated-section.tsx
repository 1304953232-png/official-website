"use client";

import { ReactNode, useRef } from "react";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";
import { cn } from "@/lib/utils";

export function AnimatedSection({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useRevealAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative", className)}
    >
      {children}
    </section>
  );
}
