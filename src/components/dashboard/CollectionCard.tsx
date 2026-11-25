import Link from "next/link";
import { Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { getDominantTypeId } from "@/lib/collections";
import { getItemTypeStyle } from "@/lib/item-type-styles";
import { getItemType } from "@/lib/items";
import type { MockCollection } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  collection: MockCollection;
}

function TypeCounts({ typeCounts }: { typeCounts: MockCollection["typeCounts"] }) {
  const entries = Object.entries(typeCounts).sort(([, a], [, b]) => b - a);

  return (
    <ul className="flex flex-wrap gap-1.5">
      {entries.map(([typeId, count]) => {
        const type = getItemType(typeId);
        const { icon: Icon, textClass } = getItemTypeStyle(type?.name);

        return (
          <li
            key={typeId}
            aria-label={`${count} ${type?.slug ?? "items"}`}
            className="flex items-center gap-1 rounded-md bg-background/60 px-2 py-0.5 text-xs tabular-nums"
          >
            <Icon aria-hidden="true" className={cn("size-3.5", textClass)} />
            {count}
          </li>
        );
      })}
    </ul>
  );
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const dominantType = getItemType(getDominantTypeId(collection));
  const { icon: Icon, textClass, borderClass, iconBgClass, tintClass } = getItemTypeStyle(dominantType?.name);

  return (
    <Link href={`/collections/${collection.id}`} className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Card
        className={cn(
          "h-full gap-4 border px-5 ring-0 transition-colors [--card-spacing:--spacing(5)] group-hover:bg-accent/40",
          borderClass,
          tintClass,
        )}
      >
        <div className="flex items-start gap-3">
          <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg", iconBgClass)}>
            <Icon aria-hidden="true" className={cn("size-5", textClass)} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-semibold">{collection.name}</h3>
            <p className="text-muted-foreground">
              {collection.itemCount} {collection.itemCount === 1 ? "item" : "items"}
            </p>
          </div>
          {collection.isFavorite && (
            <Star aria-label="Favorite" className="size-4 shrink-0 fill-yellow-400 text-yellow-400" />
          )}
        </div>

        {collection.description && <p className="text-muted-foreground">{collection.description}</p>}

        <div className="mt-auto">
          <TypeCounts typeCounts={collection.typeCounts} />
        </div>
      </Card>
    </Link>
  );
}
