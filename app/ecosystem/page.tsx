import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CountUp } from "@/components/count-up";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui-button";
import { Card } from "@/components/ui-card";
import { activityPrograms, ecosystemCards, ecosystemStats, yanYuanEcosystem } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ecosystem | YAN VENTURES",
  description: "燕南创新连接高校科研、资本、产业和政策资源，形成面向早期科技项目的生态网络。"
};

const layerNames = ["University Research", "Founder Communities", "Capital Network", "Industrial & Policy Support"];
const featuredStatIndexes = new Set([0, 2, 5, 6, 8, 11, 12, 13]);
const featuredEcosystemStats = ecosystemStats.filter((_, index) => featuredStatIndexes.has(index));

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="Ecosystem"
        subtitle="Connecting research, capital, industry and policy into one venture-building network."
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Selected Network Signals"
            title="A focused network for frontier founders"
            text="数字用于说明燕南创新可触达的高校、科研、资本与创业者网络，不等同于投资组合规模。"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredEcosystemStats.map((stat) => (
              <Card key={stat.label} className="min-h-40 p-6">
                <div className="text-[clamp(34px,5vw,68px)] font-semibold leading-none">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-5 text-sm leading-5 text-muted">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <SectionHeading eyebrow="Ecosystem Layers" title="Four layers of venture support" />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {ecosystemCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="p-6">
                  <Icon size={18} className="text-gold" />
                  <div className="mt-10 text-xs uppercase tracking-[0.14em] text-muted">{layerNames[index]}</div>
                  <h2 className="mt-3 text-xl font-medium">{card.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
                </Card>
              );
            })}
          </div>
          <Button asChild className="mt-10">
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeading
            eyebrow="YAN Ecosystem"
            title="An integrated platform for venture creation"
            text="从 Lab、专业孵化器和创投，到人才社区、科创媒体与长期公益，形成协同运转的创业支持平台。"
            className="mb-0"
          />
          <div className="grid gap-x-8 md:grid-cols-2">
            {yanYuanEcosystem.map((item, index) => (
              <div key={item.title} data-reveal-item className="grid grid-cols-[44px_1fr] gap-4 border-t border-line py-5">
                <span className="text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ivory py-[clamp(72px,9vw,120px)] text-ink">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Program Deal Flow</p>
              <h2 className="mt-5 max-w-5xl text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">
                Programs that continuously surface frontier projects
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/case-studies#programs">View All Activities</Link>
            </Button>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {activityPrograms.slice(0, 3).map((program) => (
              <ProgramCard key={program.slug} program={program} variant="light" />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
