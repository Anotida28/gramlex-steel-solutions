import React from "react";
import { cn } from "@/lib/utils";
import { staggerDefaults } from "./motionConstants";

/**
 * StaggerList
 * - Accepts children (array of elements). It clones each child and adds
 *   the `stagger-item` class and an inline `animationDelay` style based on index.
 * - `delay` is per-item in milliseconds (recommended 30-60ms; default from constants).
 * - Respects prefers-reduced-motion by disabling animation delays when set.
 */
export function StaggerList({
  children,
  delay = staggerDefaults.delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const prefersReduced = React.useMemo(() => {
    return typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const items = React.useMemo(() => React.Children.toArray(children).map((child, i) => {
    if (!React.isValidElement(child)) return child;
    const existingClass = (child.props as { className?: string }).className || "";
    const existingStyle = (child.props as { style?: React.CSSProperties }).style || {};
    const animationDelay = prefersReduced ? "0ms" : `${i * delay}ms`;
    const newStyle: React.CSSProperties = { ...(existingStyle as object), animationDelay };
    return React.cloneElement(child as React.ReactElement, {
      className: cn(existingClass, "stagger-item"),
      style: newStyle,
      key: (child as React.ReactElement).key ?? i,
    });
  }), [children, delay, prefersReduced]);

  // Render as fragment so grid/flex containers keep children as direct items
  return <>{items}</>;
}

export default StaggerList;
