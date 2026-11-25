# Current Feature

<!-- Feature name and short description -->

## Status

<!-- Not Started | In Progress | Completed -->

## Goals

<!-- Goals and requirements -->

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated. Earliest to latest -->

| Version | Title | Description |
:---: | :---: | :---
| v0.1 | **Initial setup** | Next.js 16 project created with Create Next App (React 19, TypeScript, Tailwind CSS v4, ESLint). Added `CLAUDE.md`, `AGENTS.md` and the `context/` docs. |
| v0.2 | **Dashboard UI Phase 1** | Initialised shadcn/ui (`base-nova`; button, input, kbd). Added `/dashboard` in an `(app)` route group with a shared layout: sidebar and main placeholders plus a display-only top bar (search + New item). Dark mode by default, with a slightly cool dark palette and Geist fonts fixed. |
| v0.3 | **Dashboard UI Phase 2** | Added a collapsible sidebar using shadcn's `Sidebar` component (avatar, badge, sheet and tooltip came with it). It's a drawer on mobile and toggled by a hamburger button in the top bar or ⌘B. It holds Dashboard / Favorites / Recently used links, item types linking to `/items/[type]` with coloured icons, counts and PRO badges, favorite and recent collections with dots coloured by their main type, and a user area at the bottom. Rewrote the `use-mobile` hook with `useSyncExternalStore` so it passes lint, and moved the Next.js dev badge to bottom-right. The open/closed state isn't saved yet. |
| v0.4 | **Dashboard UI Phase 3** | Built the dashboard main area from mock data: a header with 4 stats cards (items, collections, favorite items, favorite collections), pinned items, the 6 most recently active collections with a "View all" link, and the 10 most recently updated items. Item cards have a border coloured by type and show a code preview, link hostname or file name and size, tags and a relative time. Collection cards are tinted by their main type and show a count per type. Added shadcn's `card`. All server components; the pinned and recent sections render per request behind skeletons because their relative times use the current time (`cacheComponents` is on). |
