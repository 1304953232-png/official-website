export const siteConfig = {
  name: "YAN VENTURES / 燕南创新",
  shortName: "YAN VENTURES",
  legalName: "燕南创新（北京）企业孵化器有限公司",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://official-website-sage-five.vercel.app").replace(/\/$/, ""),
  description:
    "源自北京大学、总部设于北京中关村的 AI 早期创业孵化平台与全栈式国际科创生态平台。",
  location: "北京 · 中关村"
} as const;
