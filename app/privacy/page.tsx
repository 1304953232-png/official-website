import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy | YAN VENTURES",
  description: "YAN VENTURES 项目提交与网站访问隐私说明。"
};

const privacySections = [
  {
    title: "我们收集的信息",
    text: "当你提交项目时，我们会收集姓名、机构、邮箱、项目阶段、项目链接、支持诉求及项目介绍。网站不会要求你在公开页面提交身份证件、银行账户或其他高度敏感信息。"
  },
  {
    title: "信息的使用方式",
    text: "上述信息仅用于项目评估、合作匹配、后续联系和改善服务。我们不会出售你的个人信息，也不会将项目材料用于与上述目的无关的营销活动。"
  },
  {
    title: "邮件发送与必要服务",
    text: "项目提交内容会通过受控的邮件发送服务投递至 YAN VENTURES 指定收件邮箱。相关服务商仅在完成投递所必需的范围内处理信息。"
  },
  {
    title: "保存与安全",
    text: "我们会在项目评估与后续合作所需的合理期限内保存信息，并采取访问控制等合理措施降低未经授权访问、泄露或滥用的风险。"
  },
  {
    title: "你的选择",
    text: "你可以通过项目提交页面再次联系我们，申请更正或删除此前提交的信息。我们会在核实请求后按照适用规则处理。"
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy"
        subtitle="How project information is received, reviewed and protected."
      />
      <AnimatedSection className="pb-[clamp(88px,12vw,160px)]">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow">Project Submissions</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              本说明适用于通过 YAN VENTURES 官网提交的项目与合作信息。更新日期：2026 年 7 月。
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-sm text-sm text-foreground transition hover:text-gold"
            >
              <ArrowLeft size={16} aria-hidden />
              返回项目提交
            </Link>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {privacySections.map((section, index) => (
              <section key={section.title} className="grid gap-4 py-7 md:grid-cols-[52px_1fr] md:py-9">
                <span className="text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">{section.title}</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">{section.text}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
