"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { AbstractCanvas } from "@/components/abstract-canvas";
import { Button } from "@/components/ui-button";
import { socialProof } from "@/lib/site-data";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="top" className="relative flex min-h-screen overflow-hidden pt-28">
      <div className="grid-mask absolute inset-0 opacity-70" aria-hidden />
      <AbstractCanvas />
      <div className="absolute inset-x-0 top-1/3 h-px gold-line opacity-60" aria-hidden />

      <motion.div
        className="container-shell relative z-10 grid min-h-[calc(100vh-7rem)] content-center gap-12 pb-16"
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="max-w-6xl">
          <motion.p variants={item} className="eyebrow mb-8">
            AI Venture Studio / University Innovation Ecosystem
          </motion.p>
          <motion.h1
            variants={item}
            className="text-balance text-[clamp(58px,11vw,168px)] font-semibold leading-[0.86] tracking-normal"
          >
            Venture Studio for Early-Stage AI Innovation
          </motion.h1>
          <motion.div variants={item} className="mt-9 grid max-w-4xl gap-5 md:grid-cols-[1fr_1.15fr]">
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">
              燕南创新连接高校科研、产业资本与全球创业者，推动前沿科技从实验室走向产业化。
            </p>
            <p className="text-base leading-7 text-muted md:text-lg">
              We build, incubate and accelerate early-stage AI companies through a full-stack innovation ecosystem.
            </p>
          </motion.div>
          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#ecosystem">
                Explore Our Ecosystem <ArrowUpRight size={17} />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">Submit Your Project</a>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={item} className="grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
          {socialProof.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 text-sm text-muted">
                <Icon size={16} className="text-gold" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="focus-ring absolute bottom-6 right-6 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition hover:border-gold hover:text-foreground md:flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
