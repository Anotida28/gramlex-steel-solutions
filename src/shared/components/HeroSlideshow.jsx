import { useCallback, useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Photo } from "@/shared/components/Photo.jsx";
import { cn } from "@/shared/lib/utils";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Full-bleed rotating hero background: slow crossfade + Ken Burns zoom.
 * Renders the background layer (`.hero-bg`) and a small control bar.
 * Autoplay is off for users who prefer reduced motion and pauses while the tab is hidden.
 *
 * @param {{ name: string, alt: string }[]} slides
 * @param {number} interval - ms each slide stays on screen
 */
export function HeroSlideshow({ slides, interval = 6000 }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  // Only mount slides once they're about to be shown, so we don't download all photos up front
  const [mounted, setMounted] = useState(() => new Set([0, 1 % slides.length]));

  const goTo = useCallback(
    (index) => {
      const next = (index + slides.length) % slides.length;
      setActive(next);
      setMounted((prev) => {
        const set = new Set(prev);
        set.add(next);
        set.add((next + 1) % slides.length);
        return set;
      });
    },
    [slides.length],
  );

  useEffect(() => {
    if (!playing || slides.length < 2) return undefined;
    const id = window.setInterval(() => {
      if (!document.hidden) goTo(active + 1);
    }, interval);
    return () => window.clearInterval(id);
  }, [playing, active, interval, goTo, slides.length]);

  return (
    <>
      <div className="hero-bg" aria-roledescription="carousel" aria-label="Featured site photos">
        {slides.map((slide, index) =>
          mounted.has(index) ? (
            <div
              key={slide.name}
              className={cn("hero-slide", index === active && "is-active")}
              aria-hidden={index !== active}
            >
              <Photo
                name={slide.name}
                alt={slide.alt}
                priority={index === 0}
                className="block h-full w-full"
              />
            </div>
          ) : null,
        )}
      </div>

      {slides.length > 1 && (
        <div className="hero-slide-controls">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="hero-slide-toggle"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          {slides.map((slide, index) => (
            <button
              key={slide.name}
              type="button"
              onClick={() => goTo(index)}
              className={cn("hero-slide-dot", index === active && "is-active")}
              aria-label={`Show photo ${index + 1} of ${slides.length}: ${slide.alt}`}
              aria-current={index === active}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default HeroSlideshow;
