import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for early/late triggering
 * @param {boolean} options.triggerOnce - Only trigger animation once
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
} = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

/**
 * Hook for staggered animations on multiple children
 * @param {number} childCount - Number of children to animate
 * @param {Object} options - Configuration options
 * @returns {[React.RefObject, boolean, number[]]} - Ref, visibility, and delay array
 */
export function useStaggeredAnimation(childCount, options = {}) {
  const [ref, isVisible] = useScrollAnimation(options);
  const { staggerDelay = 100 } = options;

  const delays = Array.from({ length: childCount }, (_, i) => i * staggerDelay);

  return [ref, isVisible, delays];
}

export default useScrollAnimation;
