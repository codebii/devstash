import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
  icon?: LucideIcon;
  action?: ReactNode;
  children: ReactNode;
}

export function DashboardSection({ title, icon: Icon, action, children }: DashboardSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          {Icon && <Icon aria-hidden="true" className="size-4 text-muted-foreground" />}
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
