"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui-button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1320px] items-center justify-between rounded-[8px] px-4 transition duration-300",
          scrolled || open ? "glass" : "border border-transparent bg-transparent"
        )}
      >
        <a href="#top" onClick={close} className="focus-ring rounded-[6px]">
          <div className="text-sm font-semibold tracking-[0.16em]">YAN VENTURES</div>
          <div className="mt-0.5 text-xs text-muted">燕南创新</div>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-[4px] text-xs text-muted transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="secondary">
            <a href="#contact">Submit Project</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[7px] border border-line lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-[1320px] rounded-[8px] p-4 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-[6px] px-3 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-3">
              <a href="#contact" onClick={close}>
                Submit Project
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
