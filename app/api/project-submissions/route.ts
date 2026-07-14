import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 30_000;
const MIN_SUBMIT_TIME_MS = 1_200;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type SubmissionPayload = {
  name: string;
  organization: string;
  email: string;
  stage: string;
  message: string;
  consent: boolean;
  startedAt: number;
  source: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asSingleLine(value: unknown) {
  return asText(value).replace(/\s+/g, " ");
}

function validatePayload(body: Record<string, unknown>): { data?: SubmissionPayload; error?: string } {
  const name = asSingleLine(body.name);
  const organization = asSingleLine(body.organization);
  const email = asText(body.email).toLowerCase();
  const stage = asSingleLine(body.stage);
  const message = asText(body.message);
  const source = asText(body.source) || "/contact";
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;

  if (name.length < 2 || name.length > 80) return { error: "请填写有效姓名。" };
  if (organization.length > 120) return { error: "机构名称过长。" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    return { error: "请填写有效邮箱。" };
  }
  if (!stage || stage.length > 80) return { error: "请选择项目阶段。" };
  if (message.length < 20 || message.length > 5000) {
    return { error: "项目介绍请填写 20 到 5000 个字符。" };
  }
  if (body.consent !== true) return { error: "请确认信息使用授权。" };
  if (!startedAt || Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
    return { error: "提交速度过快，请检查内容后重试。" };
  }

  return {
    data: { name, organization, email, stage, message, consent: true, startedAt, source: source.slice(0, 200) }
  };
}

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();

  for (const [ip, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(ip);
  }

  const current = rateLimitStore.get(key);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

async function sendEmail(id: string, submission: SubmissionPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL?.split(",").map((item) => item.trim()).filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL || "YAN VENTURES <onboarding@resend.dev>";

  if (!apiKey || !to?.length) return { configured: false, ok: false };

  const resend = new Resend(apiKey);

  const emailText = [
    `Submission ID: ${id}`,
    `Name: ${submission.name}`,
    `Organization: ${submission.organization || "-"}`,
    `Email: ${submission.email}`,
    `Project Stage: ${submission.stage}`,
    `Source: ${submission.source}`,
    "",
    "Project Introduction:",
    submission.message
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: submission.email,
    subject: `[YAN VENTURES 项目提交] ${submission.name}${submission.organization ? ` / ${submission.organization}` : ""}`,
    text: emailText
  });

  return { configured: true, ok: !error, deliveryId: data?.id, error: error?.name };
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ error: "提交内容过大。" }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return NextResponse.json({ error: "提交内容过大。" }, { status: 413 });
    }
    body = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "提交格式无效。" }, { status: 400 });
  }

  if (asText(body.website)) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const validation = validatePayload(body);
  if (!validation.data) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "提交次数过多，请稍后再试。" }, { status: 429 });
  }

  const submissionId = crypto.randomUUID();
  try {
    const email = await sendEmail(submissionId, validation.data);

    if (!email.configured) {
      console.error("Project submission email is not configured.");
      return NextResponse.json({ error: "提交服务尚未完成配置，请稍后重试。" }, { status: 503 });
    }

    if (!email.ok) {
      console.error("Project submission email delivery failed.", { submissionId, error: email.error });
      return NextResponse.json({ error: "提交暂时未能送达，请稍后重试。" }, { status: 502 });
    }
  } catch (error) {
    console.error("Project submission email delivery failed.", {
      submissionId,
      error: error instanceof Error ? error.message : "Unknown error"
    });
    return NextResponse.json({ error: "提交暂时未能送达，请稍后重试。" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, submissionId }, { status: 201 });
}
