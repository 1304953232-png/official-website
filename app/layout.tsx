import type { Metadata, Viewport } from "next";
import "./globals.css";
import { InteractionEffects } from "@/components/interaction-effects";
import { RouteTransition } from "@/components/route-transition";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "YAN VENTURES / 燕南创新 | AI Venture Studio",
    template: "%s"
  },
  description: siteConfig.description,
  keywords: ["YAN VENTURES", "燕南创新", "AI Venture Studio", "科技成果转化", "早期创业孵化", "中关村"],
  authors: [{ name: siteConfig.shortName }],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,
  icons: {
    icon: [{ url: "/brand/yan-ventures-mark-light.png", type: "image/png" }],
    shortcut: "/brand/yan-ventures-mark-light.png",
    apple: "/brand/yan-ventures-mark-light.png"
  },
  openGraph: {
    title: siteConfig.name,
    description: "Venture Studio for Early-Stage AI Innovation.",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Venture Studio for Early-Stage AI Innovation.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/yan-ventures-logo-light.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beijing",
      addressRegion: "Beijing",
      addressCountry: "CN"
    }
  };

  return (
    <html lang="zh-CN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
