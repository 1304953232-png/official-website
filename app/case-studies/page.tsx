import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui-card";
import { activityPrograms, caseHighlights, caseServices, caseTimeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Case Studies | YAN VENTURES",
  description: "查看 YAN VENTURES 孵化案例与代表性生态活动。"
};

const comingSoon = ["Lab-to-Market AI Project", "Alumni Founder Venture", "AI Infrastructure Startup"];

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
            text="这些活动适合作为官网“生态案例”展示：它们体现了燕南创新连接高校项目、城市产业政策、投资机构和创业人才的能力。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {activityPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.title} className="p-6">
                  <Icon size={18} className="text-gold" />
                  <div className="mt-8 text-xs uppercase tracking-[0.16em] text-muted">{program.tag}</div>
                  <h2 className="mt-3 text-2xl font-medium">{program.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{program.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {program.metrics.map((metric) => (
                      <span key={metric} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                        {metric}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Coming Soon" title="More venture-building cases are being updated" />
          <div className="grid gap-3 md:grid-cols-3">
            {comingSoon.map((item) => (
              <Card key={item} className="p-6">
                <h2 className="text-2xl font-medium">{item}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">Coming Soon / 持续更新中</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
