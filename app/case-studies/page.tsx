import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui-card";
import { activityPrograms, caseHighlights, caseServices, caseTimeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Case Studies | YAN VENTURES",
  description: "查看 YAN VENTURES 孵化案例与代表性生态活动。"
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Case Studies" title="Case Studies" subtitle="Incubation, programs and ecosystem building in action." />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured Case"
            title="一湃科技 / Industrial Embodied Intelligence"
            text="国际化产业老兵 + 顶尖科研团队，聚焦离散制造流程与柔性精密制造优化，致力于通过具身智能技术实现规模化和确定性交付。"
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card className="p-6 md:p-8">
              <p className="text-lg leading-8 text-muted">
                一湃科技围绕工业具身智能与柔性精密制造场景，探索如何在不依赖大量专业技术和制造人员的情况下，在全球任意位置，以接近批量制造的节拍效率，完成质量高度一致的离散型制造。
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {caseHighlights.map((item) => (
                  <div key={item.label} className="rounded-[7px] border border-line p-4">
                    <div className="text-xs uppercase tracking-[0.14em] text-gold">{item.label}</div>
                    <div className="mt-3 text-sm leading-6 text-muted">{item.value}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6 md:p-8">
              <p className="eyebrow mb-6">YAN VENTURES Support</p>
              <div className="grid gap-4">
                {caseServices.map((item, index) => (
                  <div key={item} className="grid grid-cols-[40px_1fr] gap-3 border-b border-line pb-4 last:border-b-0">
                    <div className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</div>
                    <div className="text-sm leading-6">{item}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {caseTimeline.map((item) => (
              <Card key={item.date} className="p-5">
                <div className="text-sm text-gold">{item.date}</div>
                <div className="mt-3 text-sm leading-6 text-muted">{item.text}</div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Programs & Activities"
            title="Representative ecosystem programs"
            text="从高校创业营、企业参访到城市级创新赛事，持续连接项目、人才、产业政策与早期资本。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {activityPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
