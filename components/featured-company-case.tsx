import Link from "next/link";
import { ArrowUpRight, Factory, Network, Workflow } from "lucide-react";
import { Button } from "@/components/ui-button";
import { caseHighlights } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const systemNodes = [
  { label: "感知", icon: Network },
  { label: "规划", icon: Workflow },
  { label: "交付", icon: Factory }
];

export function FeaturedCompanyCase({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid overflow-hidden rounded-[8px] border border-black/10 bg-[#f6f1e7]",
        compact ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
      )}
    >
      <div className="relative min-h-[390px] overflow-hidden bg-[#080b12] p-6 text-foreground md:min-h-[500px] md:p-9">
        <div className="grid-mask absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_68%_32%,rgba(110,139,255,0.3),transparent_34%),radial-gradient(circle_at_26%_76%,rgba(200,169,106,0.22),transparent_30%)]"
          aria-hidden
        />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-muted">
            <span>共创企业</span>
            <span>工业智能 / 2026</span>
          </div>

          <div className="py-12">
            <div className="text-[clamp(70px,11vw,150px)] font-semibold leading-[0.78] text-foreground">一湃</div>
            <div className="mt-6 max-w-xl text-[clamp(26px,4vw,48px)] font-semibold leading-[0.95]">
              工业具身智能
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {systemNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Icon size={15} aria-hidden />
                    <span className="text-xs">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium">{node.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between p-6 text-ink md:p-9">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">企业共创案例</p>
          <h2 className="mt-5 text-[clamp(38px,5vw,72px)] font-semibold leading-[0.92]">一湃科技</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            国际化产业老兵与顶尖科研团队共同创建，聚焦离散制造流程和柔性精密制造优化，以具身智能提高复杂制造的交付确定性。
          </p>

          {!compact ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {caseHighlights.map((item) => (
                <div key={item.label} className="border-t border-black/10 pt-4">
                  <div className="text-xs uppercase tracking-[0.12em] text-[#76633e]">{item.label}</div>
                  <div className="mt-2 text-sm leading-6 text-ink/65">{item.value}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <Button asChild className="mt-9 w-fit bg-ink text-foreground hover:bg-ink/90">
          <Link href="/case-studies/yipai-tech">
            查看企业详情 <ArrowUpRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
