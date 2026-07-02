import { AnimatedSection } from "@/components/animated-section";
import { Card } from "@/components/ui-card";
import { aboutCards } from "@/lib/site-data";

export function About() {
  return (
    <AnimatedSection id="about" className="section-pad">
      <div className="container-shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow mb-6">About YAN VENTURES</p>
          <h2 className="section-title max-w-4xl font-semibold">From Research to Real-World Impact</h2>
        </div>
        <div className="grid content-end gap-8">
          <div className="grid gap-5 text-lg leading-9 text-muted">
            <p>
              燕南创新（YAN VENTURES）是源自北京大学、总部设于北京中关村的全栈式国际科创生态平台。我们深度扎根中国科技创新核心区域，链接高校、科研院所、产业资本、政府政策与全球创业者，构建从创意发现、团队组建、公司设立、产业验证到资本退出的完整生态闭环。
            </p>
            <p>
              我们关注的不只是投资本身，而是如何让真正具备技术壁垒和产业潜力的早期项目完成从 0 到 1 的跨越。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.value} className="group p-5 hover:border-gold/50 hover:bg-white/[0.055]">
                  <Icon size={18} className="mb-8 text-gold transition group-hover:scale-105" />
                  <div className="text-xl font-medium">{card.value}</div>
                  <div className="mt-3 text-sm leading-6 text-muted">{card.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
