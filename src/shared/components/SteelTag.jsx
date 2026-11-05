import { cn } from "@/shared/lib/utils.js";

// Spoken names for schedule shorthand, so screen readers don't announce "O with stroke".
const SPOKEN_LABELS = {
  "Ø": "Bar diameter",
};

// Literal class names: Tailwind purges component classes it can't find spelled out in source.
const VARIANT_CLASS = { row: "steel-tag--row", hang: "steel-tag--hang" };
const SIZE_CLASS = { sm: "steel-tag--sm", md: "" };

/**
 * A galvanised bundle tag, like the stamped plates wired to rebar bundles in a steel yard.
 * The punched hole is cut out with a CSS mask, so whatever sits behind the tag shows through.
 *
 * @param {"row"|"hang"} variant
 *   row:  hole on the left, cells side by side, like one line of a bar bending schedule.
 *   hang: hole at the top, a single cell, meant to hang from a tie wire (see .tag-wire).
 * @param {string} [mark]  schedule mark shown as the first cell
 * @param {{label: string, value: string}[]} items
 * @param {"sm"|"md"} [size]
 */
export function SteelTag({ variant = "row", size = "md", mark, items = [], className, style }) {
  const cells = mark ? [{ label: "Mark", value: mark }, ...items] : items;

  return (
    <div className={cn("steel-tag", VARIANT_CLASS[variant], SIZE_CLASS[size], className)} style={style}>
      <dl className="steel-tag-grid">
        {cells.map(({ label, value }) => (
          <div key={label} className="steel-tag-cell">
            <dt>
              {SPOKEN_LABELS[label] ? <abbr title={SPOKEN_LABELS[label]}>{label}</abbr> : label}
            </dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
