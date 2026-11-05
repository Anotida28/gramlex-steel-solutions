import { cn } from '@/shared/lib/utils';

/**
 * Section wrapper. Scroll-reveal motion was removed on purpose: the hero load (headline
 * and steel tags settling on their wire) is the site's one orchestrated moment, and
 * everything below it renders statically.
 *
 */
export function AnimatedSection({
  children,
  className,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

export default AnimatedSection;
