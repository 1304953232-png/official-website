import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui-card";
import { focusAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Focus Areas | YAN VENTURES",
  description: "YAN VENTURES 关注 AI Agent、AI Infrastructure、具身智能、大模型、智能硬件等前沿方向。"
};

export default function FocusAreasPage() {
  return (
    <>
      <PageHero eyebrow="Focus Areas" title="Focus Areas" subtitle="Where we build, invest and incubate." />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Area Grid"
            title="Where We Build"
            text="我们聚焦 AI 驱动的前沿科技方向，寻找具备技术壁垒、产业价值和长期成长潜力的早期项目。"
          />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={area.title} className={index === 2 || index === 7 ? "p-5 xl:col-span-2" : "p-5"}>
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-gold" />
                    <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-12 text-2xl font-medium leading-tight">{area.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{area.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(80px,10vw,140px)] text-ink">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Our Thesis</p>
            <h2 className="mt-5 text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">From research depth to industrial value</h2>
            <p className="mt-8 text-lg leading-8 text-ink/70">
              我们寻找具备技术壁垒、产业价值和长期成长潜力的早期项目，尤其关注能够从高校科研、实验室成果或产业痛点中生长出来的前沿科技公司。
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
