import { AnimatedSection } from "@/components/animated-section";
import { caseHighlights, caseServices, caseTimeline } from "@/lib/site-data";

export function CaseStudy() {
  return (
    <AnimatedSection id="case-study" className="section-pad">
      <div className="container-shell">
        <div className="mb-14 max-w-5xl">
          <p className="eyebrow mb-6">Case Study</p>
          <h2 className="section-title font-semibold">Incubation in Action</h2>
        </div>

        <div className="grid overflow-hidden rounded-[8px] border border-line bg-white/[0.035] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[560px] border-b border-line p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="grid-mask absolute inset-0 opacity-45" aria-hidden />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="text-sm text-muted">一湃科技 / Industrial Embodied Intelligence</div>
                <h3 className="mt-4 max-w-2xl text-[clamp(40px,6vw,86px)] font-semibold leading-[0.92]">
                  Industrial Embodied Intelligence
                </h3>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
                  国际化产业老兵 + 顶尖科研团队，聚焦离散制造流程与柔性精密制造优化，致力于通过具身智能技术实现规模化和确定性交付。
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                  一湃科技围绕工业具身智能与柔性精密制造场景，探索如何在不依赖大量专业技术和制造人员的情况下，在全球任何位置，以接近批量制造的节拍效率，完成质量高度一致的离散型制造。
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {caseHighlights.map((item) => (
                    <div key={item.label} className="rounded-[7px] border border-line bg-background/35 p-4">
                      <div className="text-xs uppercase tracking-[0.14em] text-gold">{item.label}</div>
                      <div className="mt-3 text-sm leading-6 text-muted">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-12 aspect-[1.5] w-full max-w-2xl overflow-hidden rounded-[8px] border border-line bg-background">
                <div className="absolute inset-0 grid-mask opacity-70" aria-hidden />
                <svg viewBox="0 0 680 420" className="absolute inset-0 h-full w-full" role="img" aria-label="Abstract industrial robotics line illustration">
                  <path d="M70 300 C150 190 220 210 285 250 C365 300 455 230 610 130" fill="none" stroke="rgba(200,169,106,.75)" strokeWidth="1.2" />
                  <path d="M110 330 H560 M160 280 H500 M230 230 H610" stroke="rgba(255,255,255,.13)" strokeWidth="1" />
                  <circle cx="285" cy="250" r="48" fill="none" stroke="rgba(110,139,255,.56)" strokeWidth="1.2" />
                  <circle cx="480" cy="205" r="74" fill="none" stroke="rgba(200,169,106,.35)" strokeWidth="1" />
                  <path d="M286 250 L360 178 L480 205 L548 146" fill="none" stroke="rgba(255,255,255,.52)" strokeWidth="1.2" />
                  <rect x="88" y="78" width="126" height="70" rx="4" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.14)" />
                  <rect x="418" y="286" width="156" height="54" rx="4" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.14)" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-gold">YAN VENTURES Support</p>
            <div className="mt-10 grid gap-5">
              {caseServices.map((item, index) => (
                <div key={item} className="grid grid-cols-[44px_1fr] gap-4 border-b border-line pb-5 last:border-b-0">
                  <div className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</div>
                  <div className="text-lg leading-7">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="text-sm uppercase tracking-[0.18em] text-gold">Timeline</p>
              <div className="mt-6 grid gap-5">
                {caseTimeline.map((item) => (
                  <div key={item.date} className="grid gap-2 rounded-[7px] border border-line bg-white/[0.025] p-4 sm:grid-cols-[120px_1fr]">
                    <div className="text-sm text-muted">{item.date}</div>
                    <div className="text-sm leading-6 text-foreground">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
