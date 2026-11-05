import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Photo } from "@/shared/components/Photo.jsx";
import { PhotoLightbox } from "@/shared/components/PhotoLightbox.jsx";
import { cn } from "@/shared/lib/utils";

/**
 * Swipeable photo carousel with thumbnails and a full-screen lightbox.
 *
 * @param {{ name: string, alt: string }[]} photos
 */
export function PhotoCarousel({ photos, className, aspect = "aspect-[16/9]" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: photos.length > 1 });
  const [selected, setSelected] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Reset to first slide when the photo set changes (e.g. next project in modal)
  useEffect(() => {
    emblaApi?.reInit();
    emblaApi?.scrollTo(0, true);
  }, [emblaApi, photos]);

  if (!photos?.length) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {photos.map((item, index) => (
            <div key={item.name} className={cn("relative min-w-0 flex-[0_0_100%]", aspect)}>
              <button
                type="button"
                className="group absolute inset-0 block h-full w-full cursor-zoom-in"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open photo ${index + 1} of ${photos.length} full screen`}
              >
                <Photo
                  name={item.name}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  priority={index === 0}
                  className="block h-full w-full"
                  imgClassName="h-full w-full object-cover"
                />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition hover:bg-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition hover:bg-white"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {photos.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === selected ? "w-6 bg-brand" : "w-2 bg-white/70 hover:bg-white",
                )}
                aria-label={`Go to photo ${index + 1}`}
                aria-current={index === selected}
              />
            ))}
          </div>
        </>
      )}

      <PhotoLightbox
        photos={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
      />
    </div>
  );
}

export default PhotoCarousel;
