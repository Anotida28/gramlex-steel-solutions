/**
 * Motion constants (small token file)
 * Kept separate from component exports to satisfy fast-refresh rules.
 */
export const pageMotion = {
  distance: 8, // px
  duration: 200, // ms
  easing: "cubic-bezier(0.2, 0, 0.2, 1)",
};

export const staggerDefaults = {
  delay: 40, // ms per item
};

export default pageMotion;
