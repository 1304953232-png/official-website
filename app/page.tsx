import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BrainCircuit, Handshake, Landmark } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { CountUp } from "@/components/count-up";
import { HomeWowSection } from "@/components/home-wow-section";
import { InfoCard } from "@/components/cards";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui-button";
import { Card } from "@/components/ui-card";
import { activityPrograms, activityStats } from "@/lib/site-data";

const featuredStats = [
  ["20+", "高校科技成果转化机构"],
  ["60+", "实验室"],
  ["200+", "早期投资机构"],
  ["1000+", "AI 创业者"]
].map(([value, label]) => ({ value, label }));

const pillars = [
  {
    title: "Lab-to-Market",
    text: "连接高校实验室技术成果与公司化、产品化、产业化路径。",
    icon: Landmark
  },
  {
    title: "Venture Studio",
    text: "以机构化联合创始人方式参与早期项目从 0 到 1。",
    icon: BrainCircuit
  },
  {
    title: "Capital & Ecosystem",
    text: "联动高校资源、产业资本、投资机构与政策落地能力。",
    icon: Handshake
  }
];

export const metadata: Metadata = {
  title: "YAN VENTURES / 燕南创新 | AI Venture Studio",
  description: "燕南创新连接高校科研、产业资本与全球创业者，推动前沿科技从实验室走向产业化。"
};

export default function Home() {
  return (
    <>
      <Hero />

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal-left>
            <p className="eyebrow mb-6">Brief About</p>
            <h2 className="text-[clamp(42px,7vw,96px)] font-semibold leading-[0.92]">
              From Research to Real-World Impact
            </h2>
          </div>
          <div data-reveal-right>
            <p className="text-lg leading-8 text-muted">
              燕南创新（YAN VENTURES）是源自北京大学、总部设于北京中关村的全栈式国际科创生态平台，聚焦 AI 与前沿科技项目的早期孵化、成果转化和产业落地。
            </p>
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/about">
                About YAN VENTURES <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(76px,10vw,130px)] text-ink">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Three Pillars</p>
            <h2 className="mt-5 text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">How We Build</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} className="border-black/10 bg-[#f6f1e7] p-6 shadow-none">
                  <Icon size={18} className="text-[#76633e]" />
                  <h3 className="mt-12 text-2xl font-semibold">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/65">{pillar.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <HomeWowSection />

      <AnimatedSection className="bg-background-soft py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">Programs & Ecosystem Events</p>
              <h2 className="max-w-5xl text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">
                From AI venture camps to city-level innovation competitions
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/case-studies">View Programs</Link>
            </Button>
          </div>
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activityStats.map((stat) => (
              <Card key={stat.label} className="p-5">
                <div className="text-[clamp(32px,5vw,56px)] font-semibold leading-none">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-4 text-sm leading-5 text-muted">{stat.label}</div>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {activityPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.title} className="p-6">
                  <Icon size={18} className="text-gold" />
                  <div className="mt-8 text-xs uppercase tracking-[0.16em] text-muted">{program.tag}</div>
                  <h3 className="mt-3 text-2xl font-semibold">{program.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{program.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">Ecosystem Numbers</p>
              <h2 className="text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">
                A focused network for early AI founders
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/ecosystem">View Ecosystem</Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredStats.map((stat) => (
              <Card key={stat.label} className="min-h-40 p-6">
                <div className="text-[clamp(36px,5vw,68px)] font-semibold leading-none">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-5 text-sm text-muted">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-20">
        <div className="container-shell">
          <div className="grid gap-6 overflow-hidden rounded-[8px] border border-line bg-white/[0.035] p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow mb-5">Featured Case</p>
              <h2 className="text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">一湃科技</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                聚焦工业具身智能与柔性精密制造，探索以更高确定性完成离散型制造的规模化交付。
              </p>
            </div>
            <div className="self-end">
              <InfoCard
                title="Industrial Embodied Intelligence"
                text="YAN VENTURES 提供股权架构、天使轮直投、战略梳理、种子轮 FA、联合实验室与后续融资对接支持。"
              />
              <Button asChild className="mt-6">
                <Link href="/case-studies">View Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Build the Next AI Company with YAN VENTURES" />
    </>
  );
}
