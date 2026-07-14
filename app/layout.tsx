import type { Metadata } from "next";
import "./globals.css";
import { InteractionEffects } from "@/components/interaction-effects";
import { RouteTransition } from "@/components/route-transition";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "YAN VENTURES / 燕南创新 | AI Venture Studio",
  description:
    "燕南创新（YAN VENTURES）是源自北京大学、总部设于北京中关村的 AI 早期创业孵化平台与全栈式国际科创生态平台。",
  keywords: ["YAN VENTURES", "燕南创新", "AI Venture Studio", "科技成果转化", "早期创业孵化", "中关村"],
  openGraph: {
    title: "YAN VENTURES / 燕南创新",
    description: "Venture Studio for Early-Stage AI Innovation.",
    siteName: "YAN VENTURES",
    locale: "zh_CN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SmoothScroll>
          <RouteTransition />
          <InteractionEffects />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
