"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui-button";
import type { NavGroup } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu({
  groups,
  onClose
}: {
  groups: NavGroup[];
  onClose: () => void;
}) {
  const [openGroup, setOpenGroup] = useState(groups[0]?.title ?? "");

  return (
    <div className="glass mx-auto mt-2 max-w-[1320px] rounded-[8px] p-4 lg:hidden">
      <nav className="grid gap-2" aria-label="Mobile navigation">
        {groups.map((group) => {
          const expanded = openGroup === group.title;
          return (
            <div key={group.title} className="rounded-[7px] border border-line bg-white/[0.025]">
              <button
                type="button"
                onClick={() => setOpenGroup(expanded ? "" : group.title)}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm text-foreground"
              >
                {group.title}
                <ChevronDown size={16} className={cn("transition", expanded ? "rotate-180 text-gold" : "text-muted")} />
              </button>
              {expanded ? (
                <div className="grid gap-1 border-t border-line p-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="rounded-[6px] px-3 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-foreground"
                    >
                      <span className="block text-foreground">{item.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">{item.description}</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
        <Button asChild className="mt-3">
          <Link href="/contact" onClick={onClose}>
            Submit Project
          </Link>
        </Button>
      </nav>
    </div>
  );
}
