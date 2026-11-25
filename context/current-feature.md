# Current Feature

Dashboard UI Phase 3: the main content area of `/dashboard` (stats, recent collections, pinned items and recent items), using mock data.

## Status

In Progress

## Goals

- Build the main area to the right of the sidebar
- 4 stats cards at the top: total items, collections, favorite items and favorite collections (not in the screenshot)
- Recent collections
- Pinned items
- 10 most recent items

## Notes

- Phase 3 of 3 for the dashboard UI layout.
- Match the design screenshots in `context/design-screenshots/dark-mode/` and `context/design-screenshots/light-mode/`.
- Import data directly from `src/lib/mock-data.js` until the database is set up.
- Follow the UI/UX rules in `context/project-overview.md`: collection card backgrounds take the colour of the type they hold most of, and item cards get a border coloured by type.
- Builds on `context/features/dashboard-phase-1-spec.md` and `context/features/dashboard-phase-2-spec.md`.

## History

<!-- Keep this updated. Earliest to latest -->

| Version | Title | Description |
:---: | :---: | :---
| v0.1 | **Initial setup** | Next.js 16 project created with Create Next App (React 19, TypeScript, Tailwind CSS v4, ESLint). Added `CLAUDE.md`, `AGENTS.md` and the `context/` docs. |
| v0.2 | **Dashboard UI Phase 1** | Initialised shadcn/ui (`base-nova`; button, input, kbd). Added `/dashboard` in an `(app)` route group with a shared layout: sidebar and main placeholders plus a display-only top bar (search + New item). Dark mode by default, with a slightly cool dark palette and Geist fonts fixed. |
| v0.3 | **Dashboard UI Phase 2** | Added a collapsible sidebar using shadcn's `Sidebar` component (avatar, badge, sheet and tooltip came with it). It's a drawer on mobile and toggled by a hamburger button in the top bar or ⌘B. It holds Dashboard / Favorites / Recently used links, item types linking to `/items/[type]` with coloured icons, counts and PRO badges, favorite and recent collections with dots coloured by their main type, and a user area at the bottom. Rewrote the `use-mobile` hook with `useSyncExternalStore` so it passes lint, and moved the Next.js dev badge to bottom-right. The open/closed state isn't saved yet. |
