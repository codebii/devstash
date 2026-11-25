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
}

// Static class names so Tailwind can see them. Keep in sync with the type colours in mock-data.ts.
export const ITEM_TYPE_STYLES: Record<string, ItemTypeStyle> = {
  snippet: { icon: Code, textClass: "text-blue-500", bgClass: "bg-blue-500" },
  prompt: { icon: Sparkles, textClass: "text-violet-500", bgClass: "bg-violet-500" },
  command: { icon: Terminal, textClass: "text-orange-500", bgClass: "bg-orange-500" },
  note: { icon: StickyNote, textClass: "text-yellow-300", bgClass: "bg-yellow-300" },
  link: { icon: LinkIcon, textClass: "text-emerald-500", bgClass: "bg-emerald-500" },
  file: { icon: File, textClass: "text-gray-500", bgClass: "bg-gray-500" },
  image: { icon: ImageIcon, textClass: "text-pink-500", bgClass: "bg-pink-500" },
};

export const FALLBACK_ITEM_TYPE_STYLE: ItemTypeStyle = {
  icon: File,
  textClass: "text-muted-foreground",
  bgClass: "bg-muted-foreground",
};

export function getItemTypeStyle(typeName: string | undefined): ItemTypeStyle {
  return (typeName && ITEM_TYPE_STYLES[typeName]) || FALLBACK_ITEM_TYPE_STYLE;
}
