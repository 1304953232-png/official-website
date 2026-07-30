import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui-button";
import { Card } from "@/components/ui-card";
import { activityPrograms, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "业务体系 | YAN VENTURES",
  description: "燕南创新围绕科技成果转化、创业公司赋能、校友企业孵化和生态活动运营提供系统化支持。"
};

const support = [
  ["战略与商业判断", "战略梳理、商业概念验证、产业趋势判断和融资节奏规划。"],
  ["公司设立与落地", "股权架构、工商注册、园区选址、政策申报和企业落地。"],
  ["知识产权与成果转化", "技术确权、专利申请、成果转化和产学研合作落地。"],
  ["产业资源连接", "真实产业场景、客户资源、上下游协同和商业订单导入。"],
  ["融资与资本规划", "融资陪跑、路演辅导、财务顾问支持和后续轮次资本对接。"],
  ["治理与合规支持", "财务、法务、合规咨询和政府补贴申请支持。"]
].map(([title, text]) => ({ title, text }));

const programCapabilities = [
  ["项目发现", "通过 AI 创业营、城市赛事和高校社群持续发现早期科技项目。"],
  ["路演与专业评审", "组织路演、专家评审、投融资对接和赛后改进建议。"],
  ["城市与政策连接", "连接海淀、中关村、宁波、大湾区等城市级产业政策和人才项目。"],
  ["创业者长期社区", "通过参访、闭门交流、导师分享和创业者社群沉淀长期关系。"]
].map(([title, text]) => ({ title, text }));

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="业务体系"
        title="我们如何支持创业者"
        subtitle="围绕科技成果转化、创业公司赋能、校友企业孵化和生态活动运营，提供全周期、多维度支持。"
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="核心业务" title="围绕科研团队与创业者的关键需求" />
          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-6">
                  <Icon size={18} className="text-gold" />
                  <div className="mt-10 text-sm text-gold">{service.zhTitle}</div>
                  <h2 className="mt-3 text-2xl font-medium leading-tight">{service.title}</h2>
                  <p className="mt-5 text-sm leading-6 text-muted">{service.cn}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.keywords.map((item) => (
                      <span key={item} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="生态项目运营"
            title="把活动做成高密度的项目发现现场"
            text="通过 AI 创业营、产业参访、全球人才赛事和城市创新大赛，持续发现项目并连接政策、产业与资本资源。"
          />
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {programCapabilities.map((item) => (
                <Card key={item.title} className="p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
                </Card>
              ))}
            </div>
            <Card className="p-6 md:p-8">
              <p className="eyebrow mb-6">近期项目与活动</p>
              <div className="grid gap-4">
                {activityPrograms.map((program, index) => (
                  <Link
                    key={program.slug}
                    href={`/case-studies/${program.slug}`}
                    className="focus-ring group grid grid-cols-[42px_1fr_auto] gap-4 border-b border-line pb-4 last:border-b-0"
                  >
                    <div className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="text-lg font-medium">{program.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{program.metrics.join(" · ")}</p>
                    </div>
                    <ArrowUpRight
                      size={17}
                      className="mt-1 text-gold transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(80px,10vw,140px)] text-ink">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">全周期支持</p>
              <h2 className="mt-5 text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">从公司设立到产业与资本落地</h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {support.map((item) => (
              <Card key={item.title} className="border-black/10 bg-[#f6f1e7] p-6 shadow-none">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/65">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="寻找一位长期共创伙伴？" label="与我们沟通" />
    </>
  );
}
