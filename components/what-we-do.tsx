import { AnimatedSection } from "@/components/animated-section";
import { Card } from "@/components/ui-card";
import { services } from "@/lib/site-data";

export function WhatWeDo() {
  return (
    <AnimatedSection id="what-we-do" className="bg-ivory py-[clamp(80px,11vw,150px)] text-ink">
      <div className="container-shell">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#76633e]">What We Do</p>
            <h2 className="mt-6 text-[clamp(44px,8vw,112px)] font-semibold leading-[0.9]">
              What We Build With Founders
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-ink/70">
            我们围绕实验室成果、优质创业公司和校友创业企业，提供从技术到产业的系统化支持。
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group border-black/10 bg-[#f6f1e7] p-7 shadow-none hover:border-[#c8a96a] hover:bg-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[7px] border border-black/10 text-[#76633e]">
                  <Icon size={20} />
                </div>
                <div className="mt-12 text-sm font-medium text-[#76633e]">{service.zhTitle}</div>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{service.title}</h3>
                <p className="mt-5 text-base leading-7 text-ink/68">{service.cn}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-black/10 px-3 py-1 text-xs text-ink/62">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="mt-7 border-t border-black/10 pt-5">
                  <div className="text-xs uppercase tracking-[0.14em] text-ink/45">Project Examples</div>
                  <div className="mt-3 grid gap-2">
                    {service.examples.map((example) => (
                      <div key={example} className="text-sm leading-6 text-ink/65">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
