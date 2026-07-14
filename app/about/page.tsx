import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { InfoCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui-card";
import { aboutCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About YAN VENTURES / 燕南创新",
  description: "了解燕南创新的公司定位、使命与 AI 早期创业孵化平台价值。"
};

const positioning = [
  ["Innovation Think Tank", "围绕前沿科技趋势、产业痛点和高校成果转化路径形成系统判断。"],
  ["Venture Services", "为早期团队提供公司设立、团队组建、政策申报和治理支持。"],
  ["Incubation & Investment", "通过孵化与早期资本支持帮助项目完成从 0 到 1 的关键跨越。"],
  ["Global Frontier Resources", "链接高校、科研院所、产业资本、政府政策与全球创业者。"]
].map(([title, text]) => ({ title, text }));

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About YAN VENTURES"
        subtitle="源自北京大学、扎根中关村的 AI 早期创业孵化平台。"
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Company Overview"
            title="From Research to Real-World Impact"
            text="燕南创新（YAN VENTURES）是源自北京大学、总部设于北京中关村的全栈式国际科创生态平台，深度扎根中国科技创新核心区域，链接全球前沿科创资源，构建从创意到产业化的完整生态闭环。"
          />
          <Card className="p-8">
            <p className="eyebrow mb-5">Our Mission</p>
            <p className="text-2xl leading-10 text-foreground">
              搭建高校、资本、产业、政府多方协同生态，赋能科技成果转化。
            </p>
            <p className="mt-6 leading-8 text-muted">
              整合高校、资本、产业、政府多方核心资源，搭建专业化、系统化的科创要素协同生态体系，推动前沿科技成果转化落地。
            </p>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <SectionHeading eyebrow="Positioning" title="A Full-Stack Innovation Platform" />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {positioning.map((item) => (
              <InfoCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Timeline" title="Building the Venture Ecosystem" />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              return <InfoCard key={card.value} title={card.value} text={card.label} icon={Icon} />;
            })}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
