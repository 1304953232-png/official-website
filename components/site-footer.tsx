import Link from "next/link";
import Image from "next/image";
import { footerNavigation } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background py-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <Image
            src="/brand/yan-ventures-logo-light.png"
            alt="YAN VENTURES 燕南创新"
            width={280}
            height={215}
            className="h-auto w-64 opacity-95"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Venture Studio for Early-Stage AI Innovation</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">From university research to scalable AI companies.</p>
        </div>
        <div className="grid gap-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="Footer navigation">
            {footerNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-muted">© 2026 YAN VENTURES. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
