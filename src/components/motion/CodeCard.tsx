import type { CSSProperties, ReactNode } from "react";

/** Tokens for a tiny hand-made syntax highlighter. */
const k = (t: string) => <span className="tok-k">{t}</span>;
const v = (t: string) => <span className="tok-v">{t}</span>;
const p = (t: string) => <span className="tok-p">{t}</span>;
const s = (t: string) => <span className="tok-s">"{t}"</span>;

/**
 * Editor-style card whose lines appear one after another, ending in a
 * blinking caret. Purely decorative (the same facts are in the page text).
 */
export function CodeCard({ delay = 0 }: { delay?: number }) {
  const lines: ReactNode[] = [
    <>
      {k("const")} {v("cleycode")} {p("= {")}
    </>,
    <>
      {"  "}
      {p("dev:")} {s("Cleyton")}
      {p(",")}
    </>,
    <>
      {"  "}
      {p("role:")} {s("Fullstack")}
      {p(",")}
    </>,
    <>
      {"  "}
      {p("stack:")} {p("[")}
      {s("React")}
      {p(",")} {s("Node")}
      {p(",")} {s("RN")}
      {p("],")}
    </>,
    <>
      {"  "}
      {p("local:")} {s("Fortaleza, CE")}
      {p(",")}
    </>,
    <>{p("};")}</>,
  ];

  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card__bar">
        <span />
        <span />
        <span />
        <em>cleycode.ts</em>
      </div>
      <pre className="code-card__body">
        {lines.map((line, i) => (
          <span
            key={i}
            className="code-card__line"
            style={{ "--d": `${delay + i * 260}ms` } as CSSProperties}
          >
            <i>{i + 1}</i>
            {line}
            {i === lines.length - 1 && <b className="code-card__caret" />}
          </span>
        ))}
      </pre>
    </div>
  );
}
