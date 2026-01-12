import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import { cn } from '@/shared/lib/utils';

/**
 * Animated wrapper component for scroll-triggered animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type: 'fade-up', 'fade-in', 'fade-left', 'fade-right', 'scale-in', 'blur-in'
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.delay - Delay in ms (100, 200, 300, etc.)
 * @param {number} props.threshold - Intersection threshold (0-1)
 * @param {string} props.as - HTML element type (default: 'div')
 */
export function AnimatedSection({
  children,
  animation = 'fade-up',
  className,
  delay,
  threshold = 0.1,
  as: Component = 'div',
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <Component
      ref={ref}
      className={cn(
        animation,
        isVisible && 'is-visible',
        delayClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Animated container for staggered child animations
 * Useful for grids and lists where children should animate in sequence
 */
export function StaggeredContainer({
  children,
  animation = 'fade-up',
  className,
  staggerDelay = 100,
  threshold = 0.1,
  as: Component = 'div',
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  return (
    <Component ref={ref} className={className} {...props}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                animation,
                isVisible && 'is-visible',
                `delay-${Math.min(index * staggerDelay, 800)}`
              )}
              style={{
                transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
              }}
            >
              {child}
            </div>
          ))
        : children}
    </Component>
  );
}

export default AnimatedSection;
