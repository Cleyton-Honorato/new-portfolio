import { useState, type CSSProperties } from "react";
import { elements, stackGroups, type StackGroup } from "../data/content";
import { SplitWords } from "./motion/SplitWords";
import "./Stack.css";

type Element = (typeof elements)[number];

/** One periodic-table tile: atomic number, symbol and name. */
function ElementTile({ element }: { element: Element }) {
  const number = elements.indexOf(element) + 1;
  return (
    <div className={`element element--${element.group} element--md`}>
      <span className="element__number">{number}</span>
      <span className="element__symbol">{element.symbol}</span>
      <span className="element__name">{element.name}</span>
    </div>
  );
}

export function Stack() {
  const [focus, setFocus] = useState<StackGroup | null>(null);

  return (
    <div className="stack" id="stack">
      <div className="stack__head">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Stack</span>
          <h3 className="section-title">
            <SplitWords segments={["A tabela periódica do meu dia a dia."]} />
          </h3>
        </div>

        <ul className="stack__legend" aria-label="Grupos" data-reveal="stagger">
          {stackGroups.map((g, i) => (
            <li key={g.id} style={{ "--i": i } as CSSProperties}>
              <button
                type="button"
                className={`stack__legend-item element--${g.id}${focus === g.id ? " is-active" : ""}`}
                onMouseEnter={() => setFocus(g.id)}
                onMouseLeave={() => setFocus(null)}
                onFocus={() => setFocus(g.id)}
                onBlur={() => setFocus(null)}
                onClick={() => setFocus((f) => (f === g.id ? null : g.id))}
                aria-pressed={focus === g.id}
              >
                <span className="stack__legend-dot" aria-hidden="true" />
                {g.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ul
        className={`stack__table${focus ? " has-focus" : ""}`}
        data-reveal="stagger"
        aria-label="Tecnologias"
      >
        {elements.map((el, i) => (
          <li
            key={el.symbol}
            className={focus && focus !== el.group ? "is-dimmed" : undefined}
            style={{ "--i": i } as CSSProperties}
          >
            <ElementTile element={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}
