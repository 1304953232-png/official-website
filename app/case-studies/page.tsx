import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { FeaturedCompanyCase } from "@/components/featured-company-case";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { activityPrograms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Companies & Programs | YAN VENTURES",
  description: "查看 YAN VENTURES 深度参与创建的企业，以及持续发现前沿项目的代表性生态活动。"
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Companies & Programs"
        title="Built in Practice"
        subtitle="区分深度参与创建的企业与持续发现前沿项目的生态活动，展示燕南创新如何把资源转化为公司成长。"
      />

      <AnimatedSection id="companies" className="bg-ivory py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Companies Built"
            title="Companies we help create"
            text="企业案例只展示燕南创新实际参与公司创建、资本支持、战略梳理或产业验证的项目。"
            className="text-ink [&_p]:text-ink/65"
          />
          <FeaturedCompanyCase />
        </div>
      </AnimatedSection>

      <AnimatedSection id="programs" className="bg-background-soft py-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Programs & Deal Flow"
            title="Programs that surface frontier founders"
            text="活动案例体现项目发现和生态运营能力，与企业孵化案例分开呈现。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {activityPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
