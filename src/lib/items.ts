import { mockItemTypes, type MockItem, type MockItemType } from "@/lib/mock-data";

const RECENT_ITEMS_LIMIT = 10;

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

export function getItemType(typeId: string): MockItemType | undefined {
  return mockItemTypes.find((type) => type.id === typeId);
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function byUpdatedDesc(a: MockItem, b: MockItem): number {
  return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
}

export function getPinnedItems(items: MockItem[]): MockItem[] {
  return items.filter((item) => item.isPinned).sort(byUpdatedDesc);
}

export function getRecentItems(items: MockItem[], limit = RECENT_ITEMS_LIMIT): MockItem[] {
  return [...items].sort(byUpdatedDesc).slice(0, limit);
}

function plural(count: number, unit: string): string {
  return `${count} ${unit}${count === 1 ? "" : "s"} ago`;
}

// Short, human-friendly age, e.g. "5m ago", "2h ago", "Yesterday", "3 days ago".
export function formatRelativeTime(iso: string, now: number): string {
  const diff = Math.max(0, now - Date.parse(iso));

  if (diff < MINUTE) return "Just now";
  if (diff < HOUR) return `${Math.floor(diff / MINUTE)}m ago`;
  if (diff < DAY) return `${Math.floor(diff / HOUR)}h ago`;
  if (diff < 2 * DAY) return "Yesterday";
  if (diff < WEEK) return plural(Math.floor(diff / DAY), "day");
  if (diff < 5 * WEEK) return plural(Math.floor(diff / WEEK), "week");

  return new Date(iso).toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric" });
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;

  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let unit = 0;

  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit++;
  }

  return `${size < 100 ? Number(size.toFixed(1)) : Math.round(size)} ${units[unit]}`;
}

export function getHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
