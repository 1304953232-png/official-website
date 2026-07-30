import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { teamPeople, teamRoles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Team | YAN VENTURES",
  description: "认识 YAN VENTURES 的创业顾问和执行团队，覆盖高校创新、成果转化、早期投资与公司创建。"
};

export default function TeamPage() {
  const advisors = teamPeople.filter((person) => person.role === "创业顾问");
  const operators = teamPeople.filter((person) => person.role === "执行团队");

  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Team"
        subtitle="高校创新、成果转化、早期投资与公司创建经验，共同构成燕南创新的执行底座。"
      />

      <AnimatedSection className="bg-ivory py-[clamp(76px,10vw,130px)] text-ink">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Advisors</p>
            <h2 className="mt-5 text-[clamp(40px,6vw,82px)] font-semibold leading-[0.94]">
              Innovation and technology transfer leadership
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[8px] border border-black/10 bg-black/10 md:grid-cols-2">
            {advisors.map((person, index) => (
              <article
                key={person.name}
                data-reveal-item
                className="relative min-h-[360px] overflow-hidden bg-[#f6f1e7] p-6 md:p-8"
              >
                <div
                  className="absolute top-4 right-5 text-[clamp(72px,10vw,136px)] font-semibold leading-none text-black/[0.045]"
                  aria-hidden
                >
                  {person.initials}
                </div>
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.15em] text-[#76633e]">
                    <span>{person.role}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <div className="mb-8 flex size-16 items-center justify-center rounded-full border border-black/15 text-sm font-semibold text-[#76633e]">
                      {person.initials}
                    </div>
                    <h3 className="text-4xl font-semibold">{person.name}</h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-ink/65">{person.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Venture Builders"
            title="Operators across company creation and capital"
            text="团队覆盖创业孵化、投资银行、早期投资、产品运营与跨境资本规划，围绕项目从公司设立到后续融资持续协作。"
          />
          <div className="grid gap-3 md:grid-cols-2">
            {operators.map((person, index) => (
              <article
                key={person.name}
                data-reveal-item
                className="grid min-h-64 grid-cols-[64px_1fr] gap-5 rounded-[8px] border border-line bg-white/[0.035] p-5 md:grid-cols-[88px_1fr] md:p-7"
              >
                <div className="flex size-16 items-center justify-center rounded-full border border-line bg-white/[0.04] text-sm font-semibold text-gold md:size-20">
                  {person.initials}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-gold">{person.role}</span>
                    <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold">{person.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted md:text-base">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Operating Capabilities" title="One team, five capability layers" />
          <div className="divide-y divide-line border-y border-line">
            {teamRoles.map((role, index) => (
              <div
                key={role.title}
                data-reveal-item
                className="grid gap-4 py-6 md:grid-cols-[72px_0.8fr_1.2fr] md:items-center"
              >
                <span className="text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <p className="text-sm leading-6 text-muted">{role.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
