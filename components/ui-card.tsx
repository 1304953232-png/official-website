import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-line bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition duration-300",
        className
      )}
      {...props}
    />
  );
}
