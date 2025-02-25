import Frontend from "./Frontend";
import Backend from "./Backend";

import "./Skills.css";

export function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Nível Técnico</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
