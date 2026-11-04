/**
 * Photo registry.
 *
 * Every JPG in src/assets/photos/ is processed at build time by vite-imagetools
 * into responsive WebP + JPEG variants. Reference photos by file name (without
 * extension), e.g. `photo("rebar-bundles")`.
 *
 * Source and licence details for each file live in docs/PHOTO_CREDITS.md.
 */
const modules = import.meta.glob("/src/assets/photos/*.jpg", {
  query: { w: "480;800;1024", format: "webp;jpg", as: "picture" },
  import: "default",
  eager: true,
});

const registry = Object.fromEntries(
  Object.entries(modules).map(([path, picture]) => [
    path.split("/").pop().replace(/\.jpg$/, ""),
    picture,
  ]),
);

export const photo = (name) => {
  const picture = registry[name];
  if (!picture && import.meta.env.DEV) {
    console.warn(`[photos] Unknown photo "${name}"`);
  }
  return picture ?? null;
};

/** Plain URL (largest JPEG) — for CSS backgrounds, lightbox slides, meta tags. */
export const photoSrc = (name) => photo(name)?.img?.src ?? "";

export const photoNames = Object.keys(registry);
