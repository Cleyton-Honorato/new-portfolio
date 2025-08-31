import Frontend from "./Frontend";
import Backend from "./Backend";

import "./Skills.css";

export function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__header">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Nível Técnico</span>
      </div>

      <div className="skills__container container">
        <div className="skills__content-wrapper">
          {/* Elementos decorativos */}
          <div className="skills__decoration">
            <div className="skills__decoration-line"></div>
            <div className="skills__decoration-circle"></div>
          </div>

          <div className="skills__grid">
            <Frontend />
            <Backend />
          </div>
        </div>
      </div>
    </section>
  );
}
