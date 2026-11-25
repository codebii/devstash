# Current Feature

**Dashboard UI Phase 1**: the first of 3 phases of the dashboard layout. Sets up shadcn/ui, the `/dashboard` route, the main layout with dark mode by default, and a display-only top bar, with placeholders for the sidebar and main area.

## Status

Completed

## Goals

- Initialise shadcn/ui and install the components needed
- Add the dashboard route at `/dashboard`
- Build the main dashboard layout and any global styles
- Make dark mode the default
- Add a top bar with search and a "New item" button (display only)
- Add placeholders for the sidebar and main area: an `h2` with "Sidebar" and one with "Main"

## Notes

- Spec: @context/features/dashboard-phase-1-spec.md
- Later phases: @context/features/dashboard-phase-2-spec.md, @context/features/dashboard-phase-3-spec.md
- Design reference: @context/design-screenshots/dark-mode/ and @context/design-screenshots/light-mode/
- Mock data: @src/lib/mock-data.ts
- Project overview: @context/project-overview.md

## History

<!-- Keep this updated. Earliest to latest -->

| Version | Title | Description |
:---: | :---: | :---
| v0.1 | **Initial setup** | Next.js 16 project created with Create Next App (React 19, TypeScript, Tailwind CSS v4, ESLint). Added `CLAUDE.md`, `AGENTS.md` and the `context/` docs. |
| v0.2 | **Dashboard UI Phase 1** | Initialised shadcn/ui (`base-nova`; button, input, kbd). Added `/dashboard` in an `(app)` route group with a shared layout: sidebar and main placeholders plus a display-only top bar (search + New item). Dark mode by default, with a slightly cool dark palette and Geist fonts fixed. |
