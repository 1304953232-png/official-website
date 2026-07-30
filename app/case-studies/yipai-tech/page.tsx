import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { FeaturedCompanyCase } from "@/components/featured-company-case";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui-button";
import { Card } from "@/components/ui-card";
import { caseHighlights, caseServices, caseTimeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "一湃科技 | YAN VENTURES",
  description: "燕南创新参与一湃科技公司创建、天使轮投资、战略梳理、融资推进和联合实验室建设。"
};

export default function YipaiTechCasePage() {
  return (
    <>
      <AnimatedSection className="overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="grid-mask absolute inset-0 opacity-45" aria-hidden />
        <div className="container-shell relative">
          <Link
            href="/case-studies#companies"
            className="focus-ring mb-10 inline-flex items-center gap-2 rounded-sm text-sm text-muted transition hover:text-foreground"
          >
            <ArrowLeft size={16} aria-hidden />
            返回企业案例
          </Link>
          <p className="eyebrow mb-6">共创企业 / 工业智能</p>
          <h1 className="max-w-5xl text-[clamp(54px,9vw,128px)] font-semibold leading-[0.88]">一湃科技</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-muted">
            从公司设立、种子资本到产业验证，围绕工业具身智能建立可规模化的柔性精密制造能力。
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(70px,9vw,110px)]">
        <div className="container-shell">
          <FeaturedCompanyCase compact />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="公司共创"
            title="从公司设立到产业验证"
            text="燕南创新以机构化联合创始人的方式参与关键节点，不止提供资源连接，也参与战略与资本路径建设。"
          />
          <div className="grid gap-3 md:grid-cols-2">
            {caseServices.map((service, index) => (
              <Card key={service} className="grid min-h-32 grid-cols-[48px_1fr] gap-4 p-5 md:p-6">
                <span className="text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base leading-7">{service}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(76px,10vw,130px)]">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading eyebrow="阶段进展" title="看得见的执行里程碑" className="mb-0" />
          <div className="divide-y divide-line border-y border-line">
            {caseTimeline.map((item, index) => (
              <div
                key={item.date}
                data-reveal-item
                className="grid gap-3 py-6 sm:grid-cols-[56px_120px_1fr]"
              >
                <span className="text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium">{item.date}</span>
                <span className="text-sm leading-6 text-muted">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <SectionHeading eyebrow="当前验证" title="已经被事实验证的关键信号" />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {caseHighlights.map((item) => (
              <Card key={item.label} className="min-h-44 p-5">
                <div className="text-xs uppercase tracking-[0.14em] text-gold">{item.label}</div>
                <div className="mt-8 text-base leading-7 text-muted">{item.value}</div>
              </Card>
            ))}
          </div>
          <Button asChild variant="secondary" className="mt-8">
            <Link href="/case-studies#programs">
              查看生态项目 <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      <CTASection title="正在创建一家工业智能公司？" text="向我们介绍你的技术、团队和产业场景。" />
    </>
  );
}
