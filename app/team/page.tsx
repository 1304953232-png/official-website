import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui-card";
import { teamRoles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Team | YAN VENTURES",
  description: "YAN VENTURES 由高校创新领导者、Venture Builders、投资专业人士和产业顾问共同建设。"
};

const advisors = [
  ["UIL", "University Innovation Leaders"],
  ["VB", "Venture Builders"],
  ["IP", "Investment Professionals"]
].map(([initials, title]) => ({ initials, title }));

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Team"
        subtitle="Built by innovation leaders, venture builders and industry advisors."
      />

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Team Roles" title="The capabilities behind venture building" />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {teamRoles.map((role) => (
              <Card key={role.title} className="p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white/[0.04] text-sm text-gold">
                  {role.initials}
                </div>
                <h2 className="mt-12 text-xl font-medium leading-tight">{role.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{role.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-background-soft py-[clamp(80px,10vw,140px)]">
        <div className="container-shell">
          <SectionHeading eyebrow="Advisors & Operators" title="Profiles being updated" text="Team profiles are being updated." />
          <div className="grid gap-3 md:grid-cols-3">
            {advisors.map((advisor) => (
              <Card key={advisor.title} className="p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white/[0.04] text-sm text-gold">
                  {advisor.initials}
                </div>
                <h2 className="mt-10 text-2xl font-medium">{advisor.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">持续更新中</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
