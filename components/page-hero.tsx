import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <AnimatedSection className={cn("relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28", className)}>
      <div className="grid-mask absolute inset-0 opacity-45" aria-hidden />
      <div className="container-shell relative">
        {eyebrow ? <p className="eyebrow mb-6">{eyebrow}</p> : null}
        <h1 className="max-w-5xl text-[clamp(52px,9vw,128px)] font-semibold leading-[0.9]">{title}</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl">{subtitle}</p>
      </div>
    </AnimatedSection>
  );
}
