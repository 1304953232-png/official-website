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
    label: "01 / 技术源头",
    title: "从科研线索中识别创业机会",
    text: "持续连接实验室、科研团队与技术创始人，在产业叙事形成之前识别真正值得投入的变化。"
  },
  {
    label: "02 / 公司共创",
    title: "把技术判断变成公司行动",
    text: "让战略、产品、公司设立、团队组建和早期验证在一套清晰的共创机制中同步推进。"
  },
  {
    label: "03 / 资本与落地",
    title: "连接长期资本与真实产业",
    text: "为项目连接天使投资人、战略资本、产业伙伴与地方政策资源，支持公司进入下一阶段。"
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
          <p className="eyebrow mb-6">公司共创体系</p>
          <h2 className="max-w-3xl text-[clamp(42px,7vw,96px)] font-semibold leading-[0.92]">
            一套贯穿 AI 公司创建全程的执行系统
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            项目发现、公司共创与资本连接不是彼此割裂的服务，而是一条持续推进的创业路径。
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
