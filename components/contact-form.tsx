"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui-button";
import { Input, Textarea } from "@/components/ui-input";
import { contactStages } from "@/lib/site-data";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const supportOptions = [
  "公司共创",
  "科技成果转化",
  "融资支持",
  "产业资源对接",
  "生态合作",
  "其他需求"
];

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const startedAtRef = useRef(Date.now());

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/project-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          organization: formData.get("organization"),
          email: formData.get("email"),
          stage: formData.get("stage"),
          support: formData.get("support"),
          projectUrl: formData.get("projectUrl"),
          message: formData.get("message"),
          website: formData.get("website"),
          consent: formData.get("consent") === "on",
          startedAt: startedAtRef.current,
          source: window.location.pathname
        })
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "提交失败，请稍后重试。");
      }

      form.reset();
      startedAtRef.current = Date.now();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "提交失败，请稍后重试。");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      onChange={() => {
        if (status === "success" || status === "error") setStatus("idle");
      }}
      className="relative rounded-[8px] border border-line bg-background-soft/62 p-5 md:p-8"
    >
      <div className="mb-7 border-b border-line pb-6">
        <p className="eyebrow">项目提交</p>
        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">请介绍你正在做的事</h2>
        <p className="mt-3 text-sm leading-6 text-muted">必填项用于完成初步判断，项目链接可填写官网、产品演示或在线 BP。</p>
      </div>

      <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          姓名
          <Input name="name" required minLength={2} maxLength={80} autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          团队或机构
          <Input name="organization" maxLength={120} autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          联系邮箱
          <Input name="email" type="email" required maxLength={160} autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          项目阶段
          <select
            name="stage"
            className="focus-ring h-12 w-full rounded-[7px] border border-line bg-[#080b12] px-4 text-sm text-foreground"
            defaultValue=""
            required
          >
            <option value="" disabled>
              请选择当前阶段
            </option>
            {contactStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm text-muted">
          希望获得的支持
          <select
            name="support"
            className="focus-ring h-12 w-full rounded-[7px] border border-line bg-[#080b12] px-4 text-sm text-foreground"
            defaultValue=""
            required
          >
            <option value="" disabled>
              请选择合作诉求
            </option>
            {supportOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm text-muted">
          项目链接 <span className="sr-only">（选填）</span>
          <Input
            name="projectUrl"
            type="url"
            maxLength={500}
            inputMode="url"
            autoComplete="url"
            placeholder="https://"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm text-muted">
        项目介绍
        <Textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          placeholder="请简要介绍项目、团队、核心技术、当前进展、市场验证和本次合作诉求。"
        />
      </label>
      <label className="mt-4 flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--gold)]"
        />
        <span>
          我同意 YAN VENTURES 为项目评估与后续联系使用以上信息，并已阅读
          <Link href="/privacy" className="ml-1 text-foreground underline decoration-white/30 underline-offset-4 hover:text-gold">
            隐私说明
          </Link>
          。
        </span>
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>
          {status === "submitting" ? (
            <>
              正在提交 <LoaderCircle size={16} className="animate-spin" />
            </>
          ) : (
            <>
              提交项目 <Send size={16} />
            </>
          )}
        </Button>
        {status === "success" ? (
          <p role="status" className="flex items-start gap-2 text-sm leading-6 text-gold">
            <CircleCheck size={17} className="mt-0.5 shrink-0" />
            项目信息已发送。如方向匹配，我们会通过你填写的邮箱联系。
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="flex items-start gap-2 text-sm leading-6 text-red-300">
            <TriangleAlert size={17} className="mt-0.5 shrink-0" />
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
