import type { CSSProperties } from "react";
import { logos } from "../data/content";
import "./LogoStrip.css";

/** "Where I've built products" — logos on small purple tiles, shown inside the hero. */
export function LogoStrip() {
  return (
    <div className="logo-strip">
      <p className="logo-strip__label">Onde já construí produtos</p>
      <ul className="logo-strip__list">
        {logos.map((l, i) => (
          <li key={l.name} style={{ "--i": i } as CSSProperties}>
            {l.src && <img src={l.src} alt={l.name} loading="lazy" />}
            {(!l.src || l.withName) && <span>{l.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
