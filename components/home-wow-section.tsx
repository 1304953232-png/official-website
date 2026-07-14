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

      const delayedCall = gsap.delayedCall(1.05, () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-wow-panel]", root);
        const cards = gsap.utils.toArray<HTMLElement>("[data-wow-card]", root);
        const beam = root.querySelector<HTMLElement>("[data-wow-beam]");

        gsap.set(cards, { autoAlpha: 0.35, x: 80, rotateY: -12, transformPerspective: 1200 });
        gsap.set(panels, { autoAlpha: 0, y: 36 });

        if (!isDesktop) {
          gsap.to(panels, {
            autoAlpha: 1,
            y: 0,
            duration: 0.82,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: root, start: "top 78%", once: true }
          });
          gsap.to(cards, {
            autoAlpha: 1,
            x: 0,
            rotateY: 0,
            duration: 0.82,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: root, start: "top 74%", once: true }
          });
          return;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=110%",
            scrub: 0.55,
            pin: true
          }
        });

        timeline
          .to(panels, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power3.out" }, 0)
          .to(cards, { autoAlpha: 1, x: 0, rotateY: 0, duration: 0.8, stagger: 0.18, ease: "power3.out" }, 0.12)
          .to(cards[0], { y: -26, scale: 0.97, autoAlpha: 0.45, duration: 0.55 }, 0.95)
          .to(cards[1], { y: -18, scale: 1.04, duration: 0.55 }, 0.95)
          .to(cards[2], { y: 12, scale: 0.99, duration: 0.55 }, 0.95)
          .to(cards[1], { y: -32, scale: 0.97, autoAlpha: 0.52, duration: 0.55 }, 1.65)
          .to(cards[2], { y: -22, scale: 1.05, duration: 0.55 }, 1.65);

        if (beam) {
          timeline.fromTo(beam, { scaleX: 0.16, xPercent: -38 }, { scaleX: 1, xPercent: 36, duration: 1.8 }, 0);
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
            A pinned operating layer for AI company creation
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Scroll through the system: research sourcing, studio build, and capital connection move as one integrated pipeline.
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
