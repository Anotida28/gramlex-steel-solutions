import { photo } from "@/shared/content/photos.js";

/**
 * Responsive <picture> for photos in src/assets/photos/.
 *
 * @param {string} name   - photo file name without extension
 * @param {string} alt    - alt text ("" for decorative images)
 * @param {string} sizes  - responsive sizes hint, defaults to full width
 * @param {boolean} priority - eager-load above-the-fold images
 */
export function Photo({
  name,
  alt = "",
  sizes = "100vw",
  priority = false,
  className,
  imgClassName,
  ...props
}) {
  const picture = photo(name);
  if (!picture) return null;

  return (
    <picture className={className}>
      {Object.entries(picture.sources).map(([format, srcset]) => (
        <source key={format} type={`image/${format}`} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // React 18 only passes the lowercase attribute through to the DOM
        fetchpriority={priority ? "high" : undefined}
        className={imgClassName}
        {...props}
      />
    </picture>
  );
}

export default Photo;
