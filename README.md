# Gramlex Steel Solutions Frontend

This repository contains the marketing site for Gramlex Steel Solutions, built with React, Vite, React Router, and Tailwind CSS.

## Quickstart

```sh
# install dependencies
npm install

# start the dev server
npm run dev

# create a production build
npm run build

# check lint rules or auto-fix
npm run lint
npm run lint:fix

# format source files
npm run format

# type-check (if you add TypeScript files)
npm run typecheck
```

## Folder Structure

```
src/
  app/         # application shell, layout, and route registration
  features/    # page-level feature modules (home, about, services, ...)
  shared/      # cross-cutting config, hooks, and utilities
  components/  # compatibility re-exports & shared UI primitives
  styles/      # global Tailwind layers (global.css)
```

## Adding New Pages

1. Create a new folder under `src/features/<route>/`.
2. Add `<RouteName>Page.jsx` and export it via `index.js`.
3. Register the page in `src/app/routes/index.jsx`.
4. Use shared config/hook utilities from `src/shared/` when possible.

## Shared Utilities

- Company/navigation config: `src/shared/config/`
- Reusable hooks: `src/shared/hooks/`
- Tailwind helpers (e.g. `cn`): `src/shared/lib/`

## Styling

Tailwind layers are centralised in `src/styles/global.css`, imported once by `src/main.jsx`. Adjust design tokens there to update the site-wide theme.

## Continuous Integration

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs linting and the production build on every push or pull request to keep the main branch healthy.
