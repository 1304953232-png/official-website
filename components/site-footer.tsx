import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { footerNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background py-12 md:py-16">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.7fr] lg:gap-16">
          <div>
            <Image
              src="/brand/yan-ventures-logo-light.png"
              alt="YAN VENTURES 燕南创新"
              width={280}
              height={215}
              className="h-auto w-56 opacity-95"
            />
            <p className="mt-6 max-w-md text-base leading-7 text-foreground">
              面向 AI 与前沿科技的早期创业孵化平台。
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              让高校科研、创业人才与产业资源形成真正的创建合力。
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">网站导航</p>
            <nav className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted" aria-label="页脚导航">
              {footerNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-foreground">
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="eyebrow mb-5">联系我们</p>
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} className="text-gold" aria-hidden />
              {siteConfig.location}
            </div>
            <Link
              href="/contact"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-foreground transition hover:text-gold"
            >
              提交项目
              <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-line pt-6 text-xs leading-6 text-muted md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p>© 2026 {siteConfig.shortName}。保留所有权利。</p>
            <p className="mt-1 max-w-3xl">
              本网站内容仅用于机构与业务介绍，不构成投资建议、募集说明或任何承诺。
            </p>
          </div>
          <Link href="/privacy" className="transition hover:text-foreground">
            隐私说明
          </Link>
        </div>
      </div>
    </footer>
  );
}
