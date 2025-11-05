Button API: buttonVariants moved to sidecar

What changed
- The style constant `buttonVariants` has been moved from `src/components/ui/button.tsx` into a dedicated sidecar module: `src/components/ui/buttonVariants.tsx`.
- This reduces component-level exports in `button.tsx` (helps Fast Refresh & component-only export rules).

Compatibility
- To preserve backwards compatibility, `src/components/ui/button.tsx` re-exports `buttonVariants`:
  ```ts
  export { buttonVariants } from "./buttonVariants"
  ```
  This means existing imports like
  ```ts
  import { Button, buttonVariants } from "@/components/ui/button"
  ```
  will continue to work for now.

Recommended migration (preferred)
- Update your imports to reference the new module directly. This makes the dependency explicit and aligns with the new project structure.

  Old:
  ```ts
  import { buttonVariants } from "@/components/ui/button"
  ```

  New (preferred):
  ```ts
  import buttonVariants from "@/components/ui/buttonVariants"
  // or
  import { buttonVariants } from "@/components/ui/buttonVariants"
  ```

Automated update (optional)
- To find usages:
  ```bash
  grep -R "from \"@/components/ui/button\"" -n src || true
  ```

- To replace usages in-place (review changes after running):
  ```bash
  # preview replacements
  grep -R "from \"@/components/ui/button\"" -n src | cut -d: -f1 | uniq | xargs -I{} sed -n '1,200p' {}

  # automated replacement (USE WITH CAUTION):
  # This replaces named imports referencing buttonVariants. Keep a git stash/commit.
  perl -pi -e "s/from \"@\/components\/ui\/button\"/from \"@\/components\/ui\/buttonVariants\"/g" \
    $(grep -R "from \"@/components/ui/button\"" -l src || true)
  ```

Notes
- ESLint's `react-refresh/only-export-components` rule may warn while both re-export and component exports exist in the same file. The re-export is intentional for compatibility; consider migrating consumers and then removing the re-export to satisfy the rule.
- This is a non-breaking change for now since re-export is present. The re-export may be removed in a future major release; migrate when convenient.

If you'd like, I can:
- Run the automated replacement and open a PR updating imports across the repo.
- Remove the re-export and update all consumers in a single commit (breaking change) if you prefer the cleaner approach now.
