"use client";

import { FormEvent, useRef, useState } from "react";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui-button";
import { Input, Textarea } from "@/components/ui-input";
import { contactStages } from "@/lib/site-data";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

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
      <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          Name
          <Input name="name" required minLength={2} maxLength={80} autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Organization
          <Input name="organization" maxLength={120} autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Email
          <Input name="email" type="email" required maxLength={160} autoComplete="email" />
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
        <Textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          placeholder="请简要介绍项目、团队、技术方向、当前进展和希望获得的支持。"
        />
      </label>
      <label className="mt-4 flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--gold)]"
        />
        <span>我同意 YAN VENTURES 为项目评估与后续联系使用以上信息。</span>
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>
          {status === "submitting" ? (
            <>
              Submitting <LoaderCircle size={16} className="animate-spin" />
            </>
          ) : (
            <>
              Submit Project <Send size={16} />
            </>
          )}
        </Button>
        {status === "success" ? (
          <p role="status" className="flex items-start gap-2 text-sm leading-6 text-gold">
            <CircleCheck size={17} className="mt-0.5 shrink-0" />
            项目信息已收到。如项目方向匹配，我们会通过你填写的邮箱联系。
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
