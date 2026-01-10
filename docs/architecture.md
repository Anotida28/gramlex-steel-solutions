# Architecture Overview

## App Shell

The application shell lives in `src/app/`:

- `App.jsx` bootstraps `BrowserRouter` and renders the route tree.
- `layout/` contains cross-route chrome (`RootLayout.jsx`, `Navigation.jsx`, `Footer.jsx`).
- `routes/index.jsx` declares the router configuration so every page renders inside the root layout and inherits scroll restoration and shared chrome.

This folder should stay lightweight and only hold wiring code, not feature logic.

## Feature Modules

Route-level UI lives in `src/features/`. Each folder represents a feature (e.g. `home`, `projects`) and contains:

- `<Feature>Page.jsx`: the page component rendered by the router.
- `index.js`: a barrel that re-exports the page for clean imports.
- Any feature-specific assets, hooks, or child components that are not shared elsewhere.

Adding a new page means creating a new feature folder, exporting the page component, and registering it in `src/app/routes/index.jsx`.

## Shared Layer

Reusable cross-cutting pieces live in `src/shared/`:

- `config/` holds company metadata and navigation data structures.
- `hooks/` contains utilities like `useScrollToTop` used by multiple pages.
- `lib/` contains helper utilities such as Tailwind class helpers.

This layer should contain logic that is agnostic to any single feature so that features remain thin.

## Routing

`src/app/routes/index.jsx` uses React Router v6.30 with a single root layout route. Index and child routes map to feature page components imported from their barrels. The wildcard route renders the not-found feature while preserving shared chrome.

## Styling

Tailwind CSS powers the design system. All layers, tokens, and component classes are centralised in `src/styles/global.css`, which is imported once by `src/main.jsx`. Tailwind scans `./src/**/*.{js,jsx}` via `tailwind.config.js` to pick up classes and variants. Any new global design tokens should be added to the CSS variables in `global.css`.
