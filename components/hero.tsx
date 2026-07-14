"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AbstractCanvas } from "@/components/abstract-canvas";
import { OpeningTransition } from "@/components/opening-transition";
import { Button } from "@/components/ui-button";
import { useParallaxMouse } from "@/hooks/use-parallax-mouse";
import { socialProof } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useParallaxMouse(heroRef, [
    { selector: "[data-hero-glow]", strength: 42, rotate: 2 },
    { selector: ".grid-mask", strength: 18 },
    { selector: "[data-hero-content]", strength: 12, rotate: 1.2 }
  ]);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const titleLines = gsap.utils.toArray<HTMLElement>("[data-title-line]");
      const delayedItems = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]");
      const glowLayers = gsap.utils.toArray<HTMLElement>("[data-hero-glow]");

      if (reduceMotion) {
        gsap.set([...titleLines, ...delayedItems, ...glowLayers], { autoAlpha: 1, clearProps: "all" });
        return;
      }

      gsap.set(titleLines, {
        autoAlpha: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        filter: isMobile ? "blur(8px)" : "blur(22px)",
        scale: isMobile ? 0.97 : 0.92,
        yPercent: isMobile ? 86 : 145,
        rotateX: isMobile ? 0 : -18
      });
      gsap.set(delayedItems, { autoAlpha: 0, filter: "blur(14px)", y: isMobile ? 24 : 58, scale: isMobile ? 1 : 0.96 });
      gsap.set(glowLayers, { autoAlpha: 0.42, scale: 0.76 });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(glowLayers, { autoAlpha: 1, scale: 1, duration: 1.25, stagger: 0.12 })
        .to(
          titleLines,
          {
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            filter: "blur(0px)",
            scale: 1,
            yPercent: 0,
            rotateX: 0,
            duration: isMobile ? 0.82 : 1.18,
            stagger: isMobile ? 0.1 : 0.18,
            clearProps: "clipPath,filter,transform"
          },
          "-=0.78"
        )
        .to(
          delayedItems,
          {
            autoAlpha: 1,
            filter: "blur(0px)",
            scale: 1,
            y: 0,
            duration: isMobile ? 0.7 : 1.02,
            stagger: isMobile ? 0.08 : 0.14,
            clearProps: "filter,transform"
          },
          "-=0.28"
        );

      if (!isMobile) {
        gsap.to("[data-hero-content]", {
          y: -130,
          scale: 0.88,
          autoAlpha: 0.34,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        gsap.to(glowLayers, {
          yPercent: (index) => (index % 2 === 0 ? 34 : -28),
          xPercent: (index) => (index % 2 === 0 ? -16 : 18),
          scale: (index) => (index % 2 === 0 ? 1.2 : 0.86),
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        gsap.to(".hero-orb", {
          y: (index) => (index % 2 === 0 ? -32 : 38),
          x: (index) => (index % 2 === 0 ? 24 : -28),
          rotate: (index) => (index % 2 === 0 ? 12 : -10),
          duration: 5.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.4
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} id="top" className="hero-stage relative flex min-h-screen overflow-hidden pt-32">
      <OpeningTransition />
      <div data-hero-glow className="hero-aurora hero-aurora-main" aria-hidden />
      <div data-hero-glow className="hero-orb hero-orb-left" aria-hidden />
      <div className="grid-mask absolute inset-0 opacity-85" aria-hidden />
      <div className="hero-noise absolute inset-0" aria-hidden />
      <AbstractCanvas />
      <div className="absolute inset-x-0 top-1/3 h-px gold-line opacity-70" aria-hidden />

      <div
        data-hero-content
        className="container-shell relative z-10 grid min-h-[calc(100vh-8rem)] content-center gap-12 pb-16"
      >
        <div className="max-w-6xl">
          <div
            data-hero-reveal
            className="mb-9 inline-flex items-center gap-4 rounded-[8px] border border-line bg-white/[0.055] px-5 py-4 backdrop-blur-sm"
          >
            <Image
              src="/brand/yan-ventures-mark-light.png"
              alt=""
              width={58}
              height={58}
              aria-hidden="true"
              priority
              className="h-12 w-12 object-contain opacity-95"
            />
            <div>
              <div className="text-sm font-semibold tracking-[0.18em]">YAN VENTURES</div>
              <div className="mt-1 text-xs text-muted">燕南创新 / AI Venture Studio</div>
            </div>
          </div>
          <p data-hero-reveal className="eyebrow mb-8">
            AI Venture Studio / University Innovation Ecosystem
          </p>
          <h1 className="text-balance text-[clamp(58px,11vw,168px)] font-semibold leading-[0.86] tracking-normal">
            {["Venture Studio", "for Early-Stage", "AI Innovation"].map((line) => (
              <span key={line} className="block overflow-hidden pb-3">
                <span data-title-line className="block origin-bottom will-change-transform">
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <div data-hero-reveal className="mt-7 grid max-w-4xl gap-5 md:grid-cols-[1fr_1.15fr]">
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">
              燕南创新连接高校科研、产业资本与全球创业者，推动前沿科技从实验室走向产业化。
            </p>
            <p className="text-base leading-7 text-muted md:text-lg">
              We build, incubate and accelerate early-stage AI companies through a full-stack innovation ecosystem.
            </p>
          </div>
          <div data-hero-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="magnetic-cta glow-cta">
              <Link href="/ecosystem">
                Explore Our Ecosystem <ArrowUpRight size={17} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="magnetic-cta glow-cta">
              <Link href="/contact">Submit Your Project</Link>
            </Button>
          </div>
        </div>

        <div data-hero-reveal className="grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
          {socialProof.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 text-sm text-muted">
                <Icon size={16} className="text-gold" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <a
        href="/about"
        aria-label="Go to about page"
        className="focus-ring absolute bottom-6 right-6 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition hover:border-gold hover:text-foreground md:flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
