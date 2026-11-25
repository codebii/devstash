import {
  Code,
  File,
  ImageIcon,
  LinkIcon,
  Sparkles,
  StickyNote,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export interface ItemTypeStyle {
  icon: LucideIcon;
  textClass: string;
  bgClass: string;
  borderClass: string;
  iconBgClass: string;
  tintClass: string;
}

// Static class names so Tailwind can see them. Keep in sync with the type colours in mock-data.ts.
export const ITEM_TYPE_STYLES: Record<string, ItemTypeStyle> = {
  snippet: {
    icon: Code,
    textClass: "text-blue-500",
    bgClass: "bg-blue-500",
    borderClass: "border-blue-500/40",
    iconBgClass: "bg-blue-500/15",
    tintClass: "bg-blue-500/5",
  },
  prompt: {
    icon: Sparkles,
    textClass: "text-violet-500",
    bgClass: "bg-violet-500",
    borderClass: "border-violet-500/40",
    iconBgClass: "bg-violet-500/15",
    tintClass: "bg-violet-500/5",
  },
  command: {
    icon: Terminal,
    textClass: "text-orange-500",
    bgClass: "bg-orange-500",
    borderClass: "border-orange-500/40",
    iconBgClass: "bg-orange-500/15",
    tintClass: "bg-orange-500/5",
  },
  note: {
    icon: StickyNote,
    textClass: "text-yellow-300",
    bgClass: "bg-yellow-300",
    borderClass: "border-yellow-300/40",
    iconBgClass: "bg-yellow-300/15",
    tintClass: "bg-yellow-300/5",
  },
  link: {
    icon: LinkIcon,
    textClass: "text-emerald-500",
    bgClass: "bg-emerald-500",
    borderClass: "border-emerald-500/40",
    iconBgClass: "bg-emerald-500/15",
    tintClass: "bg-emerald-500/5",
  },
  file: {
    icon: File,
    textClass: "text-gray-500",
    bgClass: "bg-gray-500",
    borderClass: "border-gray-500/40",
    iconBgClass: "bg-gray-500/15",
    tintClass: "bg-gray-500/5",
  },
  image: {
    icon: ImageIcon,
    textClass: "text-pink-500",
    bgClass: "bg-pink-500",
    borderClass: "border-pink-500/40",
    iconBgClass: "bg-pink-500/15",
    tintClass: "bg-pink-500/5",
  },
};

export const FALLBACK_ITEM_TYPE_STYLE: ItemTypeStyle = {
  icon: File,
  textClass: "text-muted-foreground",
  bgClass: "bg-muted-foreground",
  borderClass: "border-border",
  iconBgClass: "bg-muted",
  tintClass: "bg-card",
};

export function getItemTypeStyle(typeName: string | undefined): ItemTypeStyle {
  return (typeName && ITEM_TYPE_STYLES[typeName]) || FALLBACK_ITEM_TYPE_STYLE;
}
