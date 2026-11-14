import type { CSSProperties, ReactNode } from "react";

interface Segment {
  text: string;
  className?: string;
}

/**
 * Splits text into words that slide up from behind a mask, one after another.
 * Pass plain strings or { text, className } segments to highlight parts.
 * Screen readers get the full sentence through aria-label.
 */
export function SplitWords({
  segments,
  delay = 0,
  step = 60,
  breakAfter = [],
}: {
  segments: (string | Segment)[];
  delay?: number;
  step?: number;
  /** Indexes of segments after which a line break is forced. */
  breakAfter?: number[];
}) {
  const normalized = segments.map((s) => (typeof s === "string" ? { text: s } : s));
  const label = normalized.map((s) => s.text).join(" ");

  let i = 0;
  const nodes: ReactNode[] = [];
  normalized.forEach((seg, segIndex) => {
    seg.text.split(" ").forEach((word, wordIndex) => {
      nodes.push(
        <span className="split__mask" key={`${segIndex}-${wordIndex}`}>
          <span
            className={`split__word${seg.className ? ` ${seg.className}` : ""}`}
            style={{ "--d": `${delay + i * step}ms` } as CSSProperties}
          >
            {word}
          </span>
        </span>,
        " "
      );
      i += 1;
    });
    if (breakAfter.includes(segIndex)) nodes.push(<br key={`br-${segIndex}`} />);
  });

  return (
    <span className="split" aria-label={label}>
      <span aria-hidden="true">{nodes}</span>
    </span>
  );
}
