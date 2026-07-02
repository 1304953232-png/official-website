import { footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-background py-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="text-lg font-semibold tracking-[0.16em]">YAN VENTURES</div>
          <div className="mt-1 text-sm text-muted">燕南创新</div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Venture Studio for Early-Stage AI Innovation</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">From university research to scalable AI companies.</p>
        </div>
        <div className="grid gap-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="text-sm text-muted">© 2026 YAN VENTURES. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
