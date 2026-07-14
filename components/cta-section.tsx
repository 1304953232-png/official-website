import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui-button";

export function CTASection({
  title,
  text,
  href = "/contact",
  label = "Submit Your Project"
}: {
  title: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <AnimatedSection className="py-20">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[8px] border border-line bg-background-soft p-8 md:p-12">
          <div className="grid-mask absolute inset-0 opacity-30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow mb-5">Connect</p>
              <h2 className="max-w-4xl text-[clamp(40px,7vw,92px)] font-semibold leading-[0.92]">{title}</h2>
              {text ? <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{text}</p> : null}
            </div>
            <Button asChild size="lg">
              <Link href={href}>
                {label} <ArrowUpRight size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
