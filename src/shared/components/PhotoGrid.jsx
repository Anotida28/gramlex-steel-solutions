import { useState } from "react";
import { Expand } from "lucide-react";
import { Photo } from "@/shared/components/Photo.jsx";
import { PhotoLightbox } from "@/shared/components/PhotoLightbox.jsx";
import { AnimatedSection } from "@/shared/components/AnimatedSection.jsx";
import { cn } from "@/shared/lib/utils";

const spanClasses = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  large: "sm:col-span-2 sm:row-span-2",
};

/**
 * Bento-style photo grid; each tile opens the full-screen lightbox.
 *
 * @param {{ name: string, alt: string, span?: "wide"|"tall"|"large" }[]} photos
 */
export function PhotoGrid({ photos, className }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div
        className={cn(
          "grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:auto-rows-[240px]",
          className
        )}
      >
        {photos.map((item, i) => (
          <AnimatedSection
            key={item.name}
            animation="scale-in"
            delay={Math.min((i % 4) * 100 + 100, 400)}
            className={cn("relative", spanClasses[item.span])}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-2xl bg-steel-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/60"
              aria-label={`View photo: ${item.alt}`}
            >
              <Photo
                name={item.name}
                alt=""
                sizes={
                  item.span === "large"
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                }
                className="block h-full w-full"
                imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 text-left text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  {item.alt}
                </span>
                <Expand className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              </span>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <PhotoLightbox photos={photos} index={index} onClose={() => setIndex(-1)} />
    </>
  );
}

export default PhotoGrid;
