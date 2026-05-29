# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 03: Auth — complete

## Current Goal

- Build editor canvas and layout page using the navbar + sidebar shells.

## Completed

- Feature 01: Design system — shadcn/ui initialized, 7 UI primitives added (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react installed, lib/utils.ts with cn() created, globals.css rewritten as dark-only with project color tokens.
- Feature 02: Editor chrome — `components/editor/editor-navbar.tsx` (fixed navbar with sidebar toggle, PanelLeftOpen/PanelLeftClose icons, left/center/right sections) and `components/editor/project-sidebar.tsx` (floating overlay, slides from left, Projects title + close button, My Projects/Shared tabs with empty states, full-width New Project button).
- Feature 03: Auth — `proxy.ts` at project root (protected-first, public routes: `/`, `/sign-in`, `/sign-up`); `ClerkProvider` wrapping root layout with `dark` theme and CSS variable overrides; `app/(auth)/layout.tsx` (two-panel: left branding panel hidden on mobile, right centered form); `app/(auth)/sign-in/[[...sign-in]]/page.tsx` and `app/(auth)/sign-up/[[...sign-up]]/page.tsx`; `app/page.tsx` redirects authenticated users to `/editor` and unauthenticated to `/sign-in`; `UserButton` added to editor navbar right section; `@clerk/ui` installed; Clerk sign-in/sign-up/after-redirect env vars added.

## In Progress

- None.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Tailwind v4 (CSS-first, no tailwind.config.js). shadcn/ui tokens and project design tokens are both defined as CSS custom properties in globals.css under :root (dark-only, no .dark class toggle needed).
- shadcn/ui uses `base-nova` style (Tailwind v4 default). Components live in components/ui/ and must not be modified.

## Session Notes

- All shadcn semantic tokens (--background, --foreground, etc.) are set to dark values in :root. No light mode. Project tokens (--bg-base, --accent-primary, etc.) coexist alongside shadcn tokens.
