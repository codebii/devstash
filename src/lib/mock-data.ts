// Temporary mock data for the dashboard UI. Replace with Prisma queries once the database is set up.

export type ContentType = "TEXT" | "FILE" | "URL";

export interface MockUser {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
}

export interface MockItemType {
  id: string;
  name: string;
  slug: string;
  contentType: ContentType;
  color: string;
  icon: string;
  pro: boolean;
  itemCount: number;
}

export interface MockCollection {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  defaultTypeId: string;
  itemCount: number;
  typeCounts: Record<string, number>;
}

export interface MockItem {
  id: string;
  title: string;
  description: string;
  contentType: ContentType;
  content: string | null;
  url: string | null;
  fileName: string | null;
  fileSize: number | null;
  language: string | null;
  isFavorite: boolean;
  isPinned: boolean;
  tags: string[];
  itemTypeId: string;
  collectionIds: string[];
  createdAt: string;
  updatedAt: string;
}

export const mockUser: MockUser = {
  id: "user_demo",
  name: "Demo user",
  email: "demo@devstash.io",
  image: null,
  isPro: false,
};

export const mockStats = {
  items: 151,
  collections: 7,
  favorites: 18,
};

export const mockItemTypes: MockItemType[] = [
  { id: "type_snippet", name: "snippet", slug: "snippets", contentType: "TEXT", color: "#3b82f6", icon: "Code", pro: false, itemCount: 42 },
  { id: "type_prompt", name: "prompt", slug: "prompts", contentType: "TEXT", color: "#8b5cf6", icon: "Sparkles", pro: false, itemCount: 23 },
  { id: "type_command", name: "command", slug: "commands", contentType: "TEXT", color: "#f97316", icon: "Terminal", pro: false, itemCount: 18 },
  { id: "type_note", name: "note", slug: "notes", contentType: "TEXT", color: "#fde047", icon: "StickyNote", pro: false, itemCount: 31 },
  { id: "type_file", name: "file", slug: "files", contentType: "FILE", color: "#6b7280", icon: "File", pro: true, itemCount: 6 },
  { id: "type_image", name: "image", slug: "images", contentType: "FILE", color: "#ec4899", icon: "Image", pro: true, itemCount: 4 },
  { id: "type_link", name: "link", slug: "links", contentType: "URL", color: "#10b981", icon: "Link", pro: false, itemCount: 27 },
];

export const mockCollections: MockCollection[] = [
  {
    id: "col_react_patterns",
    name: "React Patterns",
    description: "Hooks, composition and state patterns I reuse.",
    isFavorite: true,
    defaultTypeId: "type_snippet",
    itemCount: 21,
    typeCounts: { type_snippet: 14, type_note: 5, type_link: 2 },
  },
  {
    id: "col_prompt_library",
    name: "Prompt Library",
    description: "System prompts and reusable AI prompts.",
    isFavorite: true,
    defaultTypeId: "type_prompt",
    itemCount: 21,
    typeCounts: { type_prompt: 19, type_note: 2 },
  },
  {
    id: "col_terminal_toolkit",
    name: "Terminal Toolkit",
    description: "Git, Docker and shell one-liners.",
    isFavorite: false,
    defaultTypeId: "type_command",
    itemCount: 17,
    typeCounts: { type_command: 16, type_note: 1 },
  },
  {
    id: "col_context_files",
    name: "Context Files",
    description: "Project context docs for AI assistants.",
    isFavorite: false,
    defaultTypeId: "type_file",
    itemCount: 8,
    typeCounts: { type_file: 5, type_note: 3 },
  },
  {
    id: "col_interview_prep",
    name: "Interview Prep",
    description: "Questions, answers and code to revise.",
    isFavorite: false,
    defaultTypeId: "type_note",
    itemCount: 21,
    typeCounts: { type_note: 11, type_snippet: 7, type_link: 3 },
  },
  {
    id: "col_python_snippets",
    name: "Python Snippets",
    description: "Utilities, decorators and scripts.",
    isFavorite: false,
    defaultTypeId: "type_snippet",
    itemCount: 14,
    typeCounts: { type_snippet: 12, type_command: 2 },
  },
  {
    id: "col_ui_inspiration",
    name: "UI Inspiration",
    description: "Interfaces and docs worth borrowing from.",
    isFavorite: false,
    defaultTypeId: "type_link",
    itemCount: 13,
    typeCounts: { type_link: 9, type_image: 4 },
  },
];

export const mockItems: MockItem[] = [
  {
    id: "item_use_debounce",
    title: "useDebounce hook",
    description: "Debounce any fast-changing value, e.g. search input.",
    contentType: "TEXT",
    content: `import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}`,
    url: null,
    fileName: null,
    fileSize: null,
    language: "typescript",
    isFavorite: true,
    isPinned: true,
    tags: ["react", "hooks"],
    itemTypeId: "type_snippet",
    collectionIds: ["col_react_patterns", "col_interview_prep"],
    createdAt: "2026-11-20T09:00:00.000Z",
    updatedAt: "2026-11-25T10:00:00.000Z",
  },
  {
    id: "item_code_review_assistant",
    title: "Code review assistant",
    description: "System prompt for a strict but kind senior reviewer.",
    contentType: "TEXT",
    content:
      "You are a senior engineer reviewing a pull request. Be strict about correctness, security and readability, but kind in tone. Point out issues with file and line references, explain why each matters, and suggest a fix.",
    url: null,
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: true,
    isPinned: true,
    tags: ["review", "system"],
    itemTypeId: "type_prompt",
    collectionIds: ["col_prompt_library"],
    createdAt: "2026-11-18T14:00:00.000Z",
    updatedAt: "2026-11-24T12:00:00.000Z",
  },
  {
    id: "item_undo_last_commit",
    title: "Undo last commit, keep changes",
    description: "Soft reset: moves HEAD back one commit, keeps your work staged.",
    contentType: "TEXT",
    content: "git reset --soft HEAD~1",
    url: null,
    fileName: null,
    fileSize: null,
    language: "bash",
    isFavorite: false,
    isPinned: true,
    tags: ["git"],
    itemTypeId: "type_command",
    collectionIds: ["col_terminal_toolkit"],
    createdAt: "2026-11-10T08:00:00.000Z",
    updatedAt: "2026-11-25T09:00:00.000Z",
  },
  {
    id: "item_server_vs_client",
    title: "Server vs Client Components",
    description: 'When to reach for "use client" in the App Router.',
    contentType: "TEXT",
    content:
      '# Server vs Client Components\n\nDefault to Server Components. Add "use client" only for state, effects, event handlers or browser APIs.',
    url: null,
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: true,
    isPinned: false,
    tags: ["nextjs", "react"],
    itemTypeId: "type_note",
    collectionIds: ["col_react_patterns", "col_interview_prep"],
    createdAt: "2026-11-25T08:00:00.000Z",
    updatedAt: "2026-11-25T08:00:00.000Z",
  },
  {
    id: "item_retry_decorator",
    title: "Retry decorator with backoff",
    description: "Retries a flaky function with exponential backoff.",
    contentType: "TEXT",
    content: `import time
from functools import wraps

def retry(times=3, base_delay=0.5):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            for attempt in range(times):
                try:
                    return fn(*args, **kwargs)
                except Exception:
                    if attempt == times - 1:
                        raise
                    time.sleep(base_delay * 2 ** attempt)
        return wrapper
    return decorator`,
    url: null,
    fileName: null,
    fileSize: null,
    language: "python",
    isFavorite: false,
    isPinned: false,
    tags: ["python", "resilience"],
    itemTypeId: "type_snippet",
    collectionIds: ["col_python_snippets"],
    createdAt: "2026-11-23T11:00:00.000Z",
    updatedAt: "2026-11-23T11:00:00.000Z",
  },
  {
    id: "item_prisma_upgrade",
    title: "Prisma 7 upgrade guide",
    description: "New prisma-client generator, prisma.config.ts and driver adapters.",
    contentType: "URL",
    content: null,
    url: "https://www.prisma.io/docs/guides/upgrade-prisma-orm/v7",
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["prisma", "docs"],
    itemTypeId: "type_link",
    collectionIds: [],
    createdAt: "2026-11-25T07:30:00.000Z",
    updatedAt: "2026-11-25T07:30:00.000Z",
  },
  {
    id: "item_devstash_context",
    title: "devstash-context.md",
    description: "Project overview to paste into AI chats before coding sessions.",
    contentType: "FILE",
    content: null,
    url: null,
    fileName: "devstash-context.md",
    fileSize: 12698,
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["ai", "context"],
    itemTypeId: "type_file",
    collectionIds: ["col_context_files"],
    createdAt: "2026-11-25T08:00:00.000Z",
    updatedAt: "2026-11-25T08:00:00.000Z",
  },
  {
    id: "item_find_port",
    title: "Find what is using port 3000",
    description: "Lists the process holding a port so you can kill it.",
    contentType: "TEXT",
    content: "lsof -i :3000\nkill -9 <PID>",
    url: null,
    fileName: null,
    fileSize: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    tags: ["macos", "debug"],
    itemTypeId: "type_command",
    collectionIds: ["col_terminal_toolkit"],
    createdAt: "2026-11-20T15:00:00.000Z",
    updatedAt: "2026-11-20T15:00:00.000Z",
  },
  {
    id: "item_dashboard_wireframe",
    title: "Dashboard wireframe",
    description: "Rough layout: sidebar, collection grid, item drawer.",
    contentType: "FILE",
    content: null,
    url: null,
    fileName: "dashboard-wireframe.png",
    fileSize: 253952,
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["design"],
    itemTypeId: "type_image",
    collectionIds: ["col_ui_inspiration"],
    createdAt: "2026-11-18T10:00:00.000Z",
    updatedAt: "2026-11-18T10:00:00.000Z",
  },
  {
    id: "item_commit_message_writer",
    title: "Conventional commit writer",
    description: "Turns a staged diff into a conventional commits message.",
    contentType: "TEXT",
    content:
      "Read the diff below and write a single conventional commit message (feat, fix, chore, etc.). Keep the subject under 72 characters and add a short body explaining why.",
    url: null,
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["git", "ai"],
    itemTypeId: "type_prompt",
    collectionIds: ["col_prompt_library"],
    createdAt: "2026-11-22T13:00:00.000Z",
    updatedAt: "2026-11-22T13:00:00.000Z",
  },
  {
    id: "item_docker_prune",
    title: "Docker deep clean",
    description: "Removes stopped containers, unused images, networks and volumes.",
    contentType: "TEXT",
    content: "docker system prune -af --volumes",
    url: null,
    fileName: null,
    fileSize: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    tags: ["docker"],
    itemTypeId: "type_command",
    collectionIds: ["col_terminal_toolkit"],
    createdAt: "2026-11-11T16:00:00.000Z",
    updatedAt: "2026-11-11T16:00:00.000Z",
  },
  {
    id: "item_lucide_icons",
    title: "Lucide icons",
    description: "Icon set used by shadcn/ui; search and copy icon names for items.",
    contentType: "URL",
    content: null,
    url: "https://lucide.dev/icons/",
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["icons", "ui"],
    itemTypeId: "type_link",
    collectionIds: ["col_ui_inspiration"],
    createdAt: "2026-11-24T09:00:00.000Z",
    updatedAt: "2026-11-24T09:00:00.000Z",
  },
];
