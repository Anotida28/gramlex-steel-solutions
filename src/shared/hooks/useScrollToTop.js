import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change and focuses main content for accessibility.
 * Respects user's reduced motion preference.
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scroll to top - instant if reduced motion preferred
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });

    // Focus main content after scroll completes
    // Using double rAF ensures DOM is painted and scroll is settled
    const focusMain = () => {
      const main = document.getElementById("main-content");
      if (main) {
        main.focus({ preventScroll: true });
      }
    };

    // Double requestAnimationFrame waits for:
    // 1. First rAF: queued for next frame
    // 2. Second rAF: ensures paint is complete
    requestAnimationFrame(() => {
      requestAnimationFrame(focusMain);
    });
  }, [location.pathname]);
};
