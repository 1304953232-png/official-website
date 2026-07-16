"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CSSProperties } from "react";
import { useRef } from "react";
import { Card } from "@/components/ui-card";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stages = [
  {
    label: "01 / Source",
    title: "University research signals",
    text: "We map labs, founders and technical inflection points before they become obvious market narratives."
  },
  {
    label: "02 / Build",
    title: "Studio operating system",
    text: "Strategy, product, company formation and early validation move together through a structured venture studio flow."
  },
  {
    label: "03 / Capital",
    title: "Fundraising and landing network",
    text: "Projects are connected with angels, strategic investors, industrial partners and local policy resources."
  }
];

type StageStyle = CSSProperties & {
  "--index": number;
};

export function HomeWowSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (!root || reduceMotion) {
        return;
      }

      const delayedCall = gsap.delayedCall(0.5, () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-wow-panel]", root);
        const cards = gsap.utils.toArray<HTMLElement>("[data-wow-card]", root);
        const beam = root.querySelector<HTMLElement>("[data-wow-beam]");

        gsap.set(cards, {
          autoAlpha: 0,
          x: isDesktop ? 96 : 0,
          y: isDesktop ? 72 : 34,
          rotateX: isDesktop ? 10 : 0,
          rotateY: isDesktop ? -14 : 0,
          scale: isDesktop ? 0.92 : 0.97,
          transformPerspective: 1200,
          transformOrigin: "center right"
        });
        gsap.set(panels, { autoAlpha: 0, y: isDesktop ? 28 : 18 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: isDesktop ? "top 72%" : "top 82%",
            once: true
          }
        });

        timeline
          .to(
            cards,
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: isDesktop ? 0.96 : 0.72,
              stagger: isDesktop ? 0.16 : 0.09,
              ease: "expo.out",
              clearProps: "transform"
            },
            0
          )
          .to(
            panels,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.68,
              stagger: isDesktop ? 0.16 : 0.09,
              ease: "power3.out",
              clearProps: "transform"
            },
            0.14
          );

        if (beam) {
          timeline.fromTo(
            beam,
            { scaleX: 0.12, xPercent: -42, autoAlpha: 0.25 },
            { scaleX: 1, xPercent: 32, autoAlpha: 1, duration: 1.15, ease: "power3.out" },
            0
          );
        }
      });

      return () => delayedCall.kill();
    },
    { scope }
  );

  return (
    <section ref={scope} className="wow-section relative overflow-hidden py-[clamp(84px,12vw,150px)]">
      <div className="wow-orbit" aria-hidden />
      <div data-wow-beam className="wow-beam" aria-hidden />
      <div className="container-shell relative z-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="eyebrow mb-6">Venture OS</p>
          <h2 className="max-w-3xl text-[clamp(42px,7vw,96px)] font-semibold leading-[0.92]">
            An integrated operating layer for AI company creation
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Research sourcing, studio build, and capital connection move as one integrated pipeline.
          </p>
        </div>

        <div className="grid gap-4 lg:min-h-[520px]">
          {stages.map((stage, index) => (
            <Card
              key={stage.title}
              data-wow-card
              className="relative overflow-hidden p-6 lg:ml-[calc(var(--index)*24px)]"
              style={{ "--index": index } as StageStyle}
            >
              <div data-wow-panel>
                <div className="text-xs uppercase tracking-[0.18em] text-gold">{stage.label}</div>
                <h3 className="mt-5 text-2xl font-semibold md:text-4xl">{stage.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base md:leading-7">{stage.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
