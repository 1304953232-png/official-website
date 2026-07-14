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
          <SectionHeading eyebrow="Ecosystem Numbers" title="A Network Built for Frontier Founders" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemStats.map((stat, index) => (
              <Card key={stat.label} className={index % 5 === 0 ? "min-h-48 p-6 sm:col-span-2" : "min-h-40 p-6"}>
                <div className="text-[clamp(34px,5vw,72px)] font-semibold leading-none">
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
          <SectionHeading eyebrow="Ecosystem Layers" title="Four Layers of Venture Support" />
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
        <div className="container-shell">
          <SectionHeading
            eyebrow="YAN Ecosystem"
            title="An integrated platform for venture creation"
            text="燕缘生态覆盖 Lab、专业孵化器、国际科创大赛、创投、人才社区、媒体智库、会客厅与公益服务，形成协同运转的科创平台。"
          />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {yanYuanEcosystem.map((item) => (
              <Card key={item.title} className="p-5">
                <h2 className="text-xl font-medium">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </Card>
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
              <Link href="/case-studies">View Activities</Link>
            </Button>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {activityPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} variant="light" />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
