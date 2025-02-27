import { GraduationCap, Briefcase, Calendar } from "lucide-react";

import "./Qualifications.css";
import { useState } from "react";

enum EQualification {
  education,
  experience,
}

export function Qualifications() {
  const [toggleState, setToggleState] = useState(EQualification.education);

  function onToggleTab(index: number) {
    setToggleState(index);
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Jornada Pessoal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === EQualification.education
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => onToggleTab(EQualification.education)}
          >
            <GraduationCap className="uil qualification__icon" />
            Education
          </div>

          <div
            className={
              toggleState === EQualification.experience
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => onToggleTab(EQualification.experience)}
          >
            <Briefcase className="uil qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === EQualification.education
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Redes de Computadores</h3>
                <span className="qualification__subtitle">Técnico</span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" />
                  2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">FullStack Master</h3>
                <span className="qualification__subtitle">Certificação - DevPleno</span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Native</h3>
                <span className="qualification__subtitle">
                  Certificação - Udemy
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Nodejs, Reactjs</h3>
                <span className="qualification__subtitle">
                  Certificação - Rocketseat
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2024
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === EQualification.experience
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Tijuca Alimentos</h3>
                <span className="qualification__subtitle">Estágio</span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2019 -
                  2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Tijuca Alimentos</h3>
                <span className="qualification__subtitle">
                  Desenvolvedor Júnior
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" />
                  <span className="">2019 - 2020</span>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Trílogo</h3>
                <span className="qualification__subtitle">
                  Desenvolvedor Pleno
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2020 -
                  2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">pantheo.tech</h3>
                <span className="qualification__subtitle">Tech Lead</span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2025 -
                  presente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
