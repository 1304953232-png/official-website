"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui-button";
import { Input, Textarea } from "@/components/ui-input";
import { contactStages } from "@/lib/site-data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatedSection id="contact" className="relative overflow-hidden bg-background-soft section-pad">
      <div className="absolute inset-0 grid-mask opacity-35" aria-hidden />
      <div className="container-shell relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="text-[clamp(46px,8vw,120px)] font-semibold leading-[0.9]">
            Build the Next AI Company with YAN VENTURES
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            如果你是科研团队、AI 创业者、产业合作伙伴、投资机构或高校创新平台，欢迎与我们建立连接。我们期待与真正具备技术深度和产业潜力的团队共同创造下一代 AI 公司。
          </p>
        </div>
        <form onSubmit={onSubmit} className="rounded-[8px] border border-line bg-background/62 p-5 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-muted">
              Name
              <Input name="name" required autoComplete="name" />
            </label>
            <label className="grid gap-2 text-sm text-muted">
              Organization
              <Input name="organization" autoComplete="organization" />
            </label>
            <label className="grid gap-2 text-sm text-muted">
              Email
              <Input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="grid gap-2 text-sm text-muted">
              Project Stage
              <select
                name="stage"
                className="focus-ring h-12 w-full rounded-[7px] border border-line bg-[#080b12] px-4 text-sm text-foreground"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a stage
                </option>
                {contactStages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm text-muted">
            Message
            <Textarea name="message" required />
          </label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button type="submit">
              Submit Project <Send size={16} />
            </Button>
            {submitted ? (
              <p role="status" className="text-sm leading-6 text-gold">
                Thank you. Your project information has been received. Our team will get in touch if there is a potential fit.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
