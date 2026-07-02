import { AnimatedSection } from "@/components/animated-section";
import { Card } from "@/components/ui-card";
import { teamPeople, teamRoles } from "@/lib/site-data";

export function Team() {
  return (
    <AnimatedSection id="team" className="section-pad">
      <div className="container-shell">
        <div className="mb-14 max-w-5xl">
          <p className="eyebrow mb-6">Team / Ecosystem</p>
          <h2 className="section-title font-semibold">Built by Innovation Leaders, Venture Builders and Industry Advisors</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            YAN VENTURES 的团队由高校创新创业生态建设者、科技成果转化专家、早期投资人、产业顾问和连续创业者共同组成。我们理解科研、产业、资本和创业之间的复杂连接，也长期陪伴创业团队完成关键阶段的成长。
          </p>
        </div>

        <div className="mb-14 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {teamPeople.map((person) => (
            <Card key={person.name} className="p-5 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.055]">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.04] text-sm text-gold">
                  {person.initials}
                </div>
                <div>
                  <div className="text-xl font-medium">{person.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-gold">{person.role}</div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-6 text-muted">{person.bio}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {teamRoles.map((role) => (
            <Card key={role.title} className="p-5 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.055]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white/[0.04] text-sm text-gold">
                {role.initials}
              </div>
              <h3 className="mt-12 text-xl font-medium leading-tight">{role.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{role.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
