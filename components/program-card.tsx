import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui-card";
import type { ActivityProgram } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProgramCard({
  program,
  variant = "dark"
}: {
  program: ActivityProgram;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  return (
    <Link
      href={`/case-studies/${program.slug}`}
      className="focus-ring group block h-full rounded-[8px]"
      aria-label={`查看${program.title}案例详情`}
    >
      <Card
        className={cn(
          "h-full overflow-hidden p-0",
          isLight && "border-black/10 bg-[#f6f1e7] text-ink shadow-none"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
          <Image
            src={program.cover}
            alt={`${program.title}活动现场`}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" aria-hidden />
          <div className="absolute right-4 bottom-4 left-4 flex items-center gap-2 text-xs text-white/80">
            <MapPin size={14} aria-hidden />
            <span>{program.location}</span>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between gap-4">
            <span className={cn("text-xs uppercase tracking-[0.16em]", isLight ? "text-[#76633e]" : "text-gold")}>
              {program.tag}
            </span>
            <ArrowUpRight
              size={18}
              className={cn(
                "shrink-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
                isLight ? "text-[#76633e]" : "text-gold"
              )}
              aria-hidden
            />
          </div>
          <h3 className="mt-4 text-2xl font-semibold leading-tight">{program.title}</h3>
          <p className={cn("mt-4 line-clamp-4 text-sm leading-6", isLight ? "text-ink/65" : "text-muted")}>
            {program.text}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {program.metrics.slice(0, 3).map((metric) => (
              <span
                key={metric}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs",
                  isLight ? "border-black/10 text-ink/60" : "border-line text-muted"
                )}
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
