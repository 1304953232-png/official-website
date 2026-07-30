import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { FeaturedCompanyCase } from "@/components/featured-company-case";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { activityPrograms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "企业与生态项目 | YAN VENTURES",
  description: "查看 YAN VENTURES 深度参与创建的企业，以及持续发现前沿项目的代表性生态活动。"
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="实践案例"
        title="我们如何把资源变成结果"
        subtitle="区分深度参与创建的企业与持续发现前沿项目的生态活动，展示燕南创新如何把资源转化为公司成长。"
      />

      <AnimatedSection id="companies" className="bg-ivory py-[clamp(76px,10vw,130px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="企业共创"
            title="与创业者一起创建的公司"
            text="企业案例只展示燕南创新实际参与公司创建、资本支持、战略梳理或产业验证的项目。"
            className="text-ink [&_p]:text-ink/65"
          />
          <FeaturedCompanyCase />
        </div>
      </AnimatedSection>

      <AnimatedSection id="programs" className="bg-background-soft py-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="生态项目"
            title="在活动中发现项目，也建立长期连接"
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
