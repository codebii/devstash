import { Card } from "@/components/ui/card";

interface Stat {
  label: string;
  value: number;
}

interface StatsCardsProps {
  stats: Stat[];
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} size="sm" className="min-w-32 gap-1 px-4">
          <dt className="text-sm text-muted-foreground">{stat.label}</dt>
          <dd className="text-2xl font-semibold tabular-nums">{stat.value}</dd>
        </Card>
      ))}
    </dl>
  );
}
