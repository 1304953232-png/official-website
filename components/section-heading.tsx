import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  className
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-4xl", className)}>
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2 className="text-[clamp(38px,6vw,84px)] font-semibold leading-[0.95]">{title}</h2>
      {text ? <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
