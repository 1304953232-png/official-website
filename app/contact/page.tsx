import type { Metadata } from "next";
import { CheckCircle2, FileText, Route } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "联系我们 | YAN VENTURES",
  description: "联系 YAN VENTURES，提交 AI 创业项目、科研成果转化项目或合作需求。"
};

const intakeGuide = [
  {
    icon: CheckCircle2,
    title: "我们重点判断什么",
    text: "原创技术与产品判断、创始团队能力、真实产业需求，以及从验证走向规模化的路径。"
  },
  {
    icon: FileText,
    title: "建议提供哪些信息",
    text: "请说明团队背景、技术壁垒、当前进展、用户或产业验证，以及希望获得的具体支持。"
  },
  {
    icon: Route,
    title: "提交之后会发生什么",
    text: "材料会直接发送至项目评估邮箱。方向匹配时，团队将通过提交邮箱联系并安排进一步沟通。"
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="联系我们" title="把你正在做的事，讲给我们听" subtitle="我们期待遇见具备原创技术、真实产业价值和长期创建意愿的团队。" />

      <AnimatedSection className="pb-[clamp(88px,12vw,160px)]">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-7">提交之前</p>
            <div className="divide-y divide-line border-y border-line">
              {intakeGuide.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="grid grid-cols-[42px_1fr] gap-4 py-7">
                    <div className="pt-1">
                      <Icon size={18} className="text-gold" aria-hidden />
                      <span className="mt-3 block text-[10px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
