import { MARK_PATHS } from "./brandMarkPaths";

/**
 * The cleycode mark: {c_} — curly braces, a "c" and a blinking cursor.
 * Glyphs outlined from Sora (see cleycode-brand/). Colors come from CSS
 * custom properties so each placement can theme it:
 *   --mark-brace, --mark-letter, --mark-cursor
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`brand-mark ${className}`} viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
      <path className="brand-mark__brace" d={MARK_PATHS.braceLeft} />
      <path className="brand-mark__letter" d={MARK_PATHS.letter} />
      <rect className="brand-mark__cursor" x="568.0" y="548.8" width="120" height="70" rx="16" />
      <path className="brand-mark__brace" d={MARK_PATHS.braceRight} />
    </svg>
  );
}
