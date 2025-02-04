import AboutImg from "../../assets/about2.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";
import { SendIcon } from "../Icons";

import "./About.css";

export function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="my" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Sou desenvolvedor de software fullstack, com especialização em
            front-end e sólida experiência em tecnologias como JavaScript,
            TypeScript, ReactJS, React Native, NodeJS, Styled-Components e Vue.
            Também tenho habilidades no desenvolvimento back-end, o que me
            permite criar aplicações completas, escaláveis e de alto desempenho.
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV
            <SendIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
