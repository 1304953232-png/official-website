import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui-button";
import { Card } from "@/components/ui-card";
import { ventureComparisons, ventureSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Venture Studio | YAN VENTURES",
  description: "了解 YAN VENTURES 以机构化联合创始人方式深度参与 0 到 1 创业过程的 Venture Studio 模式。"
};

export default function VentureStudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Venture Studio"
        title="Venture Studio"
        subtitle="Beyond Capital: A Co-Founder Style Venture Studio"
      />

      <div className="sticky top-[104px] z-30 border-y border-line bg-background/74 backdrop-blur-xl">
        <nav className="container-shell flex gap-2 overflow-x-auto py-3 text-xs uppercase tracking-[0.16em] text-muted">
          {[
            ["Definition", "#definition"],
            ["Process", "#process"],
            ["Comparison", "#comparison"],
            ["Contact", "#venture-contact"]
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="interactive-target whitespace-nowrap rounded-[6px] border border-line px-3 py-2 transition hover:border-gold/60 hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <AnimatedSection id="definition" className="py-[clamp(64px,8vw,112px)]">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Definition"
            title="Beyond Capital"
            text="YAN VENTURES 不只是提供资金，而是以 Venture Studio 模式深度参与 0 到 1 的创业过程，像机构化联合创始人一样，为项目提供启动资金、共享中台、团队组建、战略制定、产业对接、融资陪跑和公司治理支持。"
          />
          <div id="process" className="grid gap-3 scroll-mt-32">
            {ventureSteps.map((step, index) => (
              <Card key={step.title} className="p-5">
                <div className="flex gap-5">
                  <div className="text-sm text-gold">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h2 className="text-2xl font-medium">{step.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="comparison" className="bg-background-soft py-[clamp(64px,8vw,112px)]">
        <div className="container-shell">
          <SectionHeading eyebrow="Comparison" title="Venture Studio vs Traditional Models" />
          <div className="grid gap-3 lg:grid-cols-3">
            {ventureComparisons.map((item) => (
              <Card key={item.model} className="p-6">
                <h2 className="text-2xl font-medium">{item.model}</h2>
                <dl className="mt-6 grid gap-4 text-sm leading-6">
                  <div>
                    <dt className="text-muted">介入阶段</dt>
                    <dd className="mt-1">{item.stage}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">价值提供</dt>
                    <dd className="mt-1">{item.value}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">参与深度</dt>
                    <dd className="mt-1">{item.depth}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link href="/contact" id="venture-contact">Submit Project</Link>
          </Button>
        </div>
      </AnimatedSection>

      <CTASection title="Start from zero. Build with us." />
    </>
  );
}
