import { AnimatedSection } from "@/components/animated-section";
import { Card } from "@/components/ui-card";
import { fundFacts, fundItems } from "@/lib/site-data";

export function Fund() {
  return (
    <AnimatedSection id="fund" className="bg-ivory py-[clamp(84px,11vw,150px)] text-ink">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Fund</p>
          <h2 className="mt-6 text-[clamp(44px,8vw,112px)] font-semibold leading-[0.9]">
            Capital for the Earliest Stage of AI Innovation
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-ink/72">
            YAN VENTURES 围绕早期 AI 创业投资、科技成果转化和 Venture Studio 深度孵化构建基金生态，联动高校资源、产业资本和市场化投资机构，为早期前沿科技项目提供资金与长期资源支持。
          </p>
          <p className="mt-5 text-sm leading-6 text-ink/55">
            以下信息来自公司介绍材料；处于设立中或计划中的事项，页面保留对应状态标注，不作为最终备案或募集文件披露。
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {fundItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-black/10 bg-[#f6f1e7] p-5 shadow-none">
                  <Icon size={18} className="text-[#76633e]" />
                  <div className="mt-10 text-xl font-semibold">{item.title}</div>
                  <p className="mt-4 text-sm leading-6 text-ink/65">{item.text}</p>
                  <div className="mt-5 text-xs uppercase tracking-[0.14em] text-ink/45">{item.status}</div>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 rounded-[8px] border border-black/10 bg-[#f6f1e7] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-[#76633e]">Fund Facts</div>
            <div className="mt-5 grid gap-4">
              {fundFacts.map((fact) => (
                <div key={fact.label} className="grid gap-2 border-b border-black/10 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[150px_1fr]">
                  <div className="text-sm text-ink/50">{fact.label}</div>
                  <div className="text-sm leading-6 text-ink/72">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
