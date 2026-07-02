import { AnimatedSection } from "@/components/animated-section";
import { Card } from "@/components/ui-card";
import { focusAreas } from "@/lib/site-data";

export function FocusAreas() {
  return (
    <AnimatedSection id="focus-areas" className="relative overflow-hidden bg-background-soft section-pad">
      <div className="grid-mask absolute inset-0 opacity-40" aria-hidden />
      <div className="container-shell relative">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="eyebrow mb-6">Focus Areas</p>
            <h2 className="section-title font-semibold">Where We Build</h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-muted">
            我们聚焦 AI 驱动的前沿科技方向，寻找具备技术壁垒、产业价值和长期成长潜力的早期项目。
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.title}
                className={[
                  "group min-h-48 p-5 hover:-translate-y-1 hover:border-blue/50 hover:bg-white/[0.065] hover:shadow-[0_0_54px_rgba(110,139,255,0.1)]",
                  index === 2 || index === 9 ? "xl:col-span-2" : ""
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <Icon size={18} className="text-gold" />
                  <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-14 text-2xl font-medium leading-tight">{area.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted opacity-85 transition group-hover:opacity-100">
                  {area.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
