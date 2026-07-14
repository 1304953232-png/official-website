import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui-card";

export function InfoCard({
  title,
  text,
  icon: Icon
}: {
  title: string;
  text: string;
  icon?: LucideIcon;
}) {
  return (
    <Card className="p-6 hover:border-gold/50 hover:bg-white/[0.055]">
      {Icon ? <Icon size={18} className="mb-10 text-gold" /> : null}
      <h3 className="text-2xl font-medium leading-tight">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted">{text}</p>
    </Card>
  );
}
