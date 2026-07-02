"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { serviceMatrix, ventureComparisons, ventureSteps } from "@/lib/site-data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function VentureStudio() {
  const scope = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 1024) return;
      const items = gsap.utils.toArray<HTMLElement>(".studio-step");
      ScrollTrigger.create({
        trigger: scope.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          setActive(Math.min(items.length - 1, Math.floor(self.progress * items.length)));
        }
      });
    },
    { scope }
  );

  return (
    <section id="venture-studio" ref={scope} className="relative bg-background-soft">
      <div className="container-shell grid gap-10 py-[clamp(90px,12vw,180px)] lg:grid-cols-[0.86fr_1.14fr]">
        <div className="top-28 h-fit lg:sticky">
          <p className="eyebrow mb-6">Venture Studio</p>
          <h2 className="text-[clamp(44px,7vw,96px)] font-semibold leading-[0.92]">
            Beyond Capital: A Co-Founder Style Venture Studio
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted">
            YAN VENTURES 不只是提供资金，更以 Venture Studio 模式深度参与早期项目的 0 到 1 过程。我们像机构化联合创始人一样，围绕战略方向、资金支持、团队搭建、公司设立、产业验证和后续融资，为创业团队提供长期、系统、深度的共创式赋能。
          </p>
        </div>

        <div className="grid gap-5">
          <AnimatedSection className="mb-6">
            <div className="rounded-[8px] border border-line bg-white/[0.03] p-5 md:p-6">
              <div className="mb-5 text-sm uppercase tracking-[0.18em] text-gold">
                Venture Studio vs. Traditional Incubator vs. Traditional VC
              </div>
              <div className="grid gap-3 xl:grid-cols-3">
                {ventureComparisons.map((item) => (
                  <div key={item.model} className="rounded-[7px] border border-line bg-background/35 p-5">
                    <h3 className="text-xl font-medium">{item.model}</h3>
                    <dl className="mt-5 grid gap-4 text-sm leading-6">
                      <div>
                        <dt className="text-muted">介入阶段</dt>
                        <dd className="mt-1 text-foreground">{item.stage}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">价值提供</dt>
                        <dd className="mt-1 text-foreground">{item.value}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">参与深度</dt>
                        <dd className="mt-1 text-foreground">{item.depth}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">核心目标</dt>
                        <dd className="mt-1 text-foreground">{item.goal}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {ventureSteps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "studio-step rounded-[8px] border p-6 transition duration-500",
                active === index
                  ? "border-gold/70 bg-white/[0.07] shadow-[0_0_44px_rgba(200,169,106,0.08)]"
                  : "border-line bg-white/[0.025]"
              )}
            >
              <div className="flex items-start gap-5">
                <span className={cn("text-sm", active === index ? "text-gold" : "text-muted")}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-medium">{step.title}</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-muted">{step.text}</p>
                </div>
              </div>
            </div>
          ))}

          <AnimatedSection className="mt-10">
            <div className="mb-4 text-sm uppercase tracking-[0.18em] text-gold">Full-Cycle Support</div>
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {serviceMatrix.map((item) => (
                <div key={item} className="rounded-[6px] border border-line px-4 py-3 text-sm text-muted">
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
