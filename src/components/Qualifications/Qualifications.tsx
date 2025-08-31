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
      <div className="qualification__header">
        <h2 className="section__title">Qualificação</h2>
        <span className="section__subtitle">Jornada Pessoal</span>
      </div>

      <div className="qualification__container container">
        <div className="qualification__content-wrapper">
          {/* Elementos decorativos */}
          <div className="qualification__decoration">
            <div className="qualification__decoration-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="qualification__tabs">
            <div
              className={
                toggleState === EQualification.education
                  ? "qualification__button qualification__active"
                  : "qualification__button"
              }
              onClick={() => onToggleTab(EQualification.education)}
            >
              <div className="qualification__button-icon">
                <GraduationCap className="qualification__icon" />
              </div>
              <span>Education</span>
            </div>

            <div
              className={
                toggleState === EQualification.experience
                  ? "qualification__button qualification__active"
                  : "qualification__button"
              }
              onClick={() => onToggleTab(EQualification.experience)}
            >
              <div className="qualification__button-icon">
                <Briefcase className="qualification__icon" />
              </div>
              <span>Experience</span>
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
              <div className="qualification__timeline">
                <div className="qualification__timeline-line"></div>

                <div className="qualification__cards-grid">
                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">
                        Redes de Computadores
                      </h3>
                      <span className="qualification__subtitle">Técnico</span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2016 - 2018</span>
                      </div>
                    </div>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">React Native</h3>
                      <span className="qualification__subtitle">
                        Certificação - Udemy
                      </span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2021</span>
                      </div>
                    </div>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">ReactJS</h3>
                      <span className="qualification__subtitle">
                        Certificação - Rocketseat
                      </span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">Nodejs</h3>
                      <span className="qualification__subtitle">
                        Certificação - Rocketseat
                      </span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">Fullstack Master</h3>
                      <span className="qualification__subtitle">
                        Certificação - Dev Pleno
                      </span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2025</span>
                      </div>
                    </div>
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
              <div className="qualification__timeline">
                <div className="qualification__timeline-line"></div>

                <div className="qualification__cards-grid">
                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">Tijuca Alimentos</h3>
                      <span className="qualification__subtitle">Estágio</span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2019 - 2019</span>
                      </div>
                    </div>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">Tijuca Alimentos</h3>
                      <span className="qualification__subtitle">
                        Desenvolvedor Júnior
                      </span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2019 - 2020</span>
                      </div>
                    </div>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">Trílogo</h3>
                      <span className="qualification__subtitle">
                        Desenvolvedor Pleno
                      </span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2020 - 2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-marker"></div>
                    <div className="qualification__card-content">
                      <h3 className="qualification__title">pantheo.tech</h3>
                      <span className="qualification__subtitle">Tech Lead</span>
                      <div className="qualification__calendar">
                        <Calendar className="qualification__calendar-icon" />
                        <span>2025 - Atualmente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
