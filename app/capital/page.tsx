import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui-card";
import { fundItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Capital | YAN VENTURES",
  description: "YAN VENTURES 围绕早期 AI 创业投资、科技成果转化和 Venture Studio 深度孵化构建基金生态。"
};

export default function CapitalPage() {
  return (
    <>
      <PageHero eyebrow="Capital" title="Capital" subtitle="Capital for the earliest stage of AI innovation." />

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Capital Approach"
            title="Capital connected to venture building"
            text="YAN VENTURES 围绕早期 AI 创业投资、科技成果转化和 Venture Studio 深度孵化构建基金生态，联动高校资源、产业资本和市场化投资机构，为早期前沿科技项目提供资金与长期资源支持。"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {fundItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <Icon size={18} className="text-gold" />
                  <h2 className="mt-10 text-2xl font-medium">{item.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
                  <div className="mt-5 text-xs uppercase tracking-[0.14em] text-muted">{item.status}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(80px,10vw,140px)] text-ink">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Notice</p>
            <h2 className="mt-5 text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">Responsible disclosure</h2>
            <p className="mt-8 text-lg leading-8 text-ink/70">
              未确认基金规模、备案信息、具体合作机构不在页面写死；相关信息以正式披露为准，未确认内容使用 Coming Soon / To Be Announced。
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
