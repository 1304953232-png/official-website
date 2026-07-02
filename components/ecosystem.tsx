import { AnimatedSection } from "@/components/animated-section";
import { CountUp } from "@/components/count-up";
import { Card } from "@/components/ui-card";
import { ecosystemCards, ecosystemStats, partnerInstitutions, sourcingMix } from "@/lib/site-data";

export function Ecosystem() {
  return (
    <AnimatedSection id="ecosystem" className="section-pad">
      <div className="container-shell">
        <div className="mb-16 max-w-5xl">
          <p className="eyebrow mb-6">Ecosystem</p>
          <h2 className="section-title font-semibold">An Ecosystem Built for Frontier Founders</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            立足北京人工智能产业高地，我们整合高校、科研院所、创业社区、产业资本和企业家校友网络，形成面向早期科技项目的高质量资源池。
          </p>
        </div>

        <div className="mb-12 grid gap-3 md:grid-cols-3">
          {sourcingMix.map((item) => (
            <Card key={item.label} className="p-6">
              <div className="text-[clamp(34px,5vw,64px)] font-semibold leading-none text-gold">{item.value}</div>
              <div className="mt-5 text-lg font-medium">{item.label}</div>
              <div className="mt-2 text-sm text-muted">{item.note}</div>
            </Card>
          ))}
        </div>

        <div className="mb-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {ecosystemCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="p-5 hover:border-gold/50 hover:bg-white/[0.055]">
                <Icon size={18} className="text-gold" />
                <h3 className="mt-10 text-xl font-medium">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="mb-12 rounded-[8px] border border-line bg-white/[0.025] p-5 md:p-6">
          <div className="mb-5 text-sm uppercase tracking-[0.18em] text-gold">Selected Innovation Network</div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {partnerInstitutions.map((name) => (
              <div key={name} className="rounded-[6px] border border-line px-4 py-3 text-sm leading-5 text-muted">
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemStats.map((stat, index) => (
            <Card
              key={stat.label}
              className={index % 5 === 0 ? "min-h-48 p-6 sm:col-span-2" : "min-h-40 p-6"}
            >
              <div className="text-[clamp(34px,5vw,72px)] font-semibold leading-none text-foreground">
                <CountUp value={stat.value} />
              </div>
              <div className="mt-5 max-w-[15rem] text-sm leading-5 text-muted">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
