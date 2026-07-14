"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NavGroup } from "@/lib/navigation";

export function MegaMenu({
  group,
  onClose
}: {
  group: NavGroup;
  onClose?: () => void;
}) {
  return (
    <div
      onMouseLeave={onClose}
      className="glass absolute left-1/2 top-[calc(100%+10px)] hidden w-[min(760px,calc(100vw-32px))] -translate-x-1/2 rounded-[8px] p-4 lg:block"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-[7px] border border-line bg-white/[0.03] p-5">
          <p className="eyebrow mb-4">{group.title}</p>
          <p className="text-sm leading-6 text-muted">
            Navigate YAN VENTURES through a focused institutional structure.
          </p>
        </div>
        <div className="grid gap-2">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group rounded-[7px] border border-transparent p-4 transition hover:border-line hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-medium text-foreground">{item.title}</div>
                <ArrowUpRight size={15} className="text-muted transition group-hover:text-gold" />
              </div>
              <p className="mt-2 text-xs leading-5 text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
