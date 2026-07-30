import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { CountUp } from "@/components/count-up";
import { FeaturedCompanyCase } from "@/components/featured-company-case";
import { Hero } from "@/components/hero";
import { HomeWowSection } from "@/components/home-wow-section";
import { ProgramCard } from "@/components/program-card";
import { Button } from "@/components/ui-button";
import { Card } from "@/components/ui-card";
import { activityPrograms } from "@/lib/site-data";

const featuredStats = [
  ["20+", "高校科技成果转化机构"],
  ["60+", "实验室"],
  ["200+", "早期投资机构"],
  ["1000+", "AI 创业者"]
].map(([value, label]) => ({ value, label }));

export const metadata: Metadata = {
  title: "YAN VENTURES / 燕南创新 | AI Venture Studio",
  description: "燕南创新连接高校科研、产业资本与全球创业者，推动前沿科技从实验室走向产业化。"
};

export default function Home() {
  const featuredPrograms = activityPrograms.slice(0, 3);

  return (
    <>
      <Hero />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div data-reveal-left>
              <p className="eyebrow mb-6">From Lab to Company</p>
              <h2 className="text-[clamp(42px,7vw,96px)] font-semibold leading-[0.92]">
                Research becomes a company when execution arrives
              </h2>
            </div>
            <div data-reveal-right>
              <p className="text-lg leading-8 text-muted">
                燕南创新（YAN VENTURES）源自北京大学、扎根北京中关村，面向 AI 与前沿科技团队，深度参与公司设立、团队搭建、资本规划、产业验证和长期成长。
              </p>
              <Button asChild variant="secondary" className="mt-8">
                <Link href="/about">
                  About YAN VENTURES <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredStats.map((stat) => (
              <Card key={stat.label} className="min-h-36 p-5">
                <div className="text-[clamp(34px,5vw,62px)] font-semibold leading-none">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-4 text-sm text-muted">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 text-ink md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Featured Company</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">
                Venture building in practice
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/case-studies#companies">All Company Cases</Link>
            </Button>
          </div>
          <FeaturedCompanyCase compact />
        </div>
      </AnimatedSection>

      <HomeWowSection />

      <AnimatedSection className="bg-background-soft py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">Programs as Deal Flow</p>
              <h2 className="max-w-5xl text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">
                Programs that surface frontier founders
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                高校创业营、产业参访和城市创新赛事是持续发现项目、验证团队与建立长期连接的入口。
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/case-studies#programs">
                View All Programs <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Build the Next AI Company with YAN VENTURES"
        text="我们关注具备原创技术、明确产业问题和长期创建意愿的早期团队。"
      />
    </>
  );
}
