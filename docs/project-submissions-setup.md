# Project submission email setup

The contact form posts to `/api/project-submissions`. Resend sends each valid project submission directly to the YAN VENTURES receiving mailbox. The form reports success only after Resend accepts the email.

## 1. Configure Resend

1. Create a Resend account and API key.
2. For production, verify the website domain in Resend.
3. Choose the receiving mailbox and a sender on the verified domain.

Resend's testing sender can normally send only to the account owner's email. A verified domain is required for normal production delivery.

## 2. Add environment variables

Add the values from `.env.example` to `.env.local` for local development and to **Vercel > Project Settings > Environment Variables** for production:

```dotenv
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=projects@example.com
CONTACT_FROM_EMAIL=YAN VENTURES <projects@your-domain.com>
```

`CONTACT_TO_EMAIL` supports multiple comma-separated addresses.

## 3. Deploy and test

Redeploy after adding the Vercel environment variables. Submit one test project from `/contact`, then verify that the receiving mailbox gets the notification and replying targets the submitter's email.

The API includes field validation, a honeypot, a minimum completion time, and a basic per-instance hourly rate limit. For high traffic, replace the in-memory rate limit with a shared service such as Upstash Redis.
