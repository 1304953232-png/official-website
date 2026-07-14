"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { MegaMenu } from "@/components/mega-menu";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui-button";
import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(headerRef.current, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      gsap.fromTo(
        headerRef.current,
        { autoAlpha: 0, y: -14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "transform"
        }
      );
    },
    { scope: headerRef }
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = navigation.find((group) => group.title === activeGroup);

  return (
    <header ref={headerRef} className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "relative mx-auto flex h-20 max-w-[1320px] items-center justify-between rounded-[8px] px-4 transition duration-300",
          scrolled || mobileOpen || activeGroup ? "glass" : "border border-transparent bg-transparent"
        )}
      >
        <Link href="/" onClick={() => setMobileOpen(false)} className="focus-ring rounded-[6px]">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/yan-ventures-logo-light.png"
              alt="YAN VENTURES 燕南创新"
              width={128}
              height={98}
              priority
              className="h-auto w-[92px] object-contain opacity-95 md:w-[112px]"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[0.16em]">YAN VENTURES</div>
              <div className="mt-0.5 text-xs text-muted">燕南创新</div>
            </div>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 lg:flex">
          {navigation.map((group) => (
            <div key={group.title} onMouseEnter={() => setActiveGroup(group.title)}>
              <button
                type="button"
                onClick={() => setActiveGroup(activeGroup === group.title ? null : group.title)}
                className="focus-ring rounded-[6px] px-3 py-2 text-xs text-muted transition hover:bg-white/5 hover:text-foreground"
              >
                {group.title}
              </button>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="secondary">
            <Link href="/contact">Submit Project</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[7px] border border-line lg:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {active ? <MegaMenu group={active} onClose={() => setActiveGroup(null)} /> : null}
      </div>

      {mobileOpen ? <MobileMenu groups={navigation} onClose={() => setMobileOpen(false)} /> : null}
    </header>
  );
}
