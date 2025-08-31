import AboutImg from "../../assets/about2.jpg";
import CV from "../../assets/curriculo.pdf";
import Info from "./Info";
import { SendIcon } from "../Icons";

import "./About.css";

export function About() {
  return (
    <section className="about section" id="about">
      <div className="about__header">
        <h2 className="section__title">Sobre</h2>
        <span className="section__subtitle">Minha Jornada</span>
      </div>

      <div className="about__container container">
        <div className="about__content">
          <div className="about__image-section">
            {/* Elementos decorativos */}
            <div className="about__image-decoration">
              <div className="about__decoration-circle"></div>
              <div className="about__decoration-square"></div>
              <div className="about__decoration-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="about__image-wrapper">
              <img
                src={AboutImg}
                alt="Cleyton Honorato"
                className="about__img"
              />
              <div className="about__image-overlay"></div>
              <div className="about__image-border"></div>
            </div>
          </div>

          <div className="about__info-section">
            <div className="about__intro">
              <h3 className="about__intro-title">Desenvolvedor FullStack</h3>
              <p className="about__description">
                Sou desenvolvedor de software fullstack, com especialização em
                front-end e sólida experiência em tecnologias como ReactJS,
                NextJS, React Native, VueJS, JavaScript, TypeScript. Também
                tenho habilidades no desenvolvimento back-end, o que me permite
                criar aplicações completas, escaláveis e de alto desempenho.
              </p>
            </div>

            <div className="about__stats">
              <Info />
            </div>

            <div className="about__action">
              <a download="" href={CV} className="about__cv-button">
                <span>Download CV</span>
                <SendIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
