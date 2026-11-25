import { Globe, Paperclip, Pin, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getItemTypeStyle } from "@/lib/item-type-styles";
import { capitalize, formatFileSize, formatRelativeTime, getHostname, getItemType } from "@/lib/items";
import type { MockItem } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const CODE_PREVIEW_LINES = 3;
const CODE_TYPES = new Set(["snippet", "command"]);

interface ItemCardProps {
  item: MockItem;
  now: number;
}

function ItemPreview({ item, typeName }: { item: MockItem; typeName: string | undefined }) {
  if (item.content && typeName && CODE_TYPES.has(typeName)) {
    const preview = item.content.split("\n").slice(0, CODE_PREVIEW_LINES).join("\n").trimEnd();
    return (
      <pre className="overflow-hidden rounded-lg bg-muted px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
        {preview}
      </pre>
    );
  }

  if (item.url) {
    return (
      <p className="flex items-center gap-2 text-muted-foreground">
        <Globe aria-hidden="true" className="size-4 shrink-0" />
        <span className="truncate">{getHostname(item.url)}</span>
      </p>
    );
  }

  if (item.fileName) {
    return (
      <p className="flex items-center gap-2 text-muted-foreground">
        <Paperclip aria-hidden="true" className="size-4 shrink-0" />
        <span className="flex-1 truncate">{item.fileName}</span>
        {item.fileSize !== null && <span className="shrink-0">{formatFileSize(item.fileSize)}</span>}
      </p>
    );
  }

  return null;
}

export function ItemCard({ item, now }: ItemCardProps) {
  const type = getItemType(item.itemTypeId);
  const { icon: Icon, textClass, borderClass, iconBgClass } = getItemTypeStyle(type?.name);
  const subtitle = [type && capitalize(type.name), item.language].filter(Boolean).join(" · ");

  return (
    <Card className={cn("gap-4 border px-5 ring-0 [--card-spacing:--spacing(5)]", borderClass)}>
      <div className="flex items-start gap-3">
        <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg", iconBgClass)}>
          <Icon aria-hidden="true" className={cn("size-5", textClass)} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold">{item.title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {item.isPinned && <Pin aria-label="Pinned" className="size-4 text-muted-foreground" />}
          {item.isFavorite && <Star aria-label="Favorite" className="size-4 fill-yellow-400 text-yellow-400" />}
        </div>
      </div>

      {item.description && <p className="text-muted-foreground">{item.description}</p>}

      <ItemPreview item={item} typeName={type?.name} />

      <div className="mt-auto flex items-center justify-between gap-3">
        <ul className="flex min-w-0 flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">#{tag}</Badge>
            </li>
          ))}
        </ul>
        <time dateTime={item.updatedAt} className="shrink-0 text-xs text-muted-foreground">
          {formatRelativeTime(item.updatedAt, now)}
        </time>
      </div>
    </Card>
  );
}
