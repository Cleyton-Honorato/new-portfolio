import { ArrowRight, Instagram, Mail, Send, MapPin, Phone } from "lucide-react";

import "./Contact.css";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__header">
        <h2 className="section__title">Entre Em Contato</h2>
        <span className="section__subtitle">Vamos Conversar</span>
      </div>

      <div className="contact__container container">
        <div className="contact__content-wrapper">
          {/* Elementos decorativos */}
          <div className="contact__decoration">
            <div className="contact__decoration-circle"></div>
            <div className="contact__decoration-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="contact__content">
            <div className="contact__info-section">
              <div className="contact__info-header">
                <h3 className="contact__title">Informações de Contato</h3>
                <p className="contact__description">
                  Estou sempre aberto a novas oportunidades e colaborações.
                  Entre em contato e vamos criar algo incrível juntos!
                </p>
              </div>

              <div className="contact__cards-grid">
                <div className="contact__card">
                  <div className="contact__card-header">
                    <div className="contact__card-icon-wrapper">
                      <Mail className="contact__card-icon" />
                    </div>
                    <h4 className="contact__card-title">E-mail</h4>
                  </div>
                  <div className="contact__card-content">
                    <span className="contact__card-data">
                      limacleyton82@gmail.com
                    </span>
                    <a
                      href="mailto:limacleyton82@gmail.com"
                      className="contact__button"
                      title="Enviar e-mail"
                    >
                      <span>Enviar E-mail</span>
                      <ArrowRight className="contact__button-icon" />
                    </a>
                  </div>
                </div>

                <div className="contact__card">
                  <div className="contact__card-header">
                    <div className="contact__card-icon-wrapper">
                      <Phone className="contact__card-icon" />
                    </div>
                    <h4 className="contact__card-title">Telefone</h4>
                  </div>
                  <div className="contact__card-content">
                    <span className="contact__card-data">(85) 99451-2680</span>
                    <a
                      href="https://api.whatsapp.com/send?phone=5585994512680&text=Olá! Gostaria de conversar sobre oportunidades de colaboração."
                      className="contact__button"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir WhatsApp"
                    >
                      <span>Enviar Mensagem</span>
                      <ArrowRight className="contact__button-icon" />
                    </a>
                  </div>
                </div>

                <div className="contact__card">
                  <div className="contact__card-header">
                    <div className="contact__card-icon-wrapper">
                      <Instagram className="contact__card-icon" />
                    </div>
                    <h4 className="contact__card-title">Instagram</h4>
                  </div>
                  <div className="contact__card-content">
                    <span className="contact__card-data">@cleytin.1</span>
                    <a
                      href="https://www.instagram.com/cleytin.1/"
                      className="contact__button"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visitar Instagram"
                    >
                      <span>Ver Perfil</span>
                      <ArrowRight className="contact__button-icon" />
                    </a>
                  </div>
                </div>

                <div className="contact__card">
                  <div className="contact__card-header">
                    <div className="contact__card-icon-wrapper">
                      <MapPin className="contact__card-icon" />
                    </div>
                    <h4 className="contact__card-title">Localização</h4>
                  </div>
                  <div className="contact__card-content">
                    <span className="contact__card-data">
                      Fortaleza, CE - Brasil
                    </span>
                    <a
                      href="https://maps.google.com/?q=Fortaleza,CE,Brasil"
                      className="contact__button"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver no Google Maps"
                    >
                      <span>Ver Localização</span>
                      <ArrowRight className="contact__button-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact__form-section">
              <div className="contact__form-header">
                <h3 className="contact__title">Envie uma Mensagem</h3>
                <p className="contact__description">
                  Preencha o formulário abaixo e eu entrarei em contato o mais
                  breve possível.
                </p>
              </div>

              <form className="contact__form" action="">
                <div className="contact__form-group">
                  <div className="contact__form-div">
                    <input
                      type="text"
                      name="name"
                      className="contact__form-input"
                      placeholder="Seu nome completo"
                      required
                    />
                    <label className="contact__form-tag">Nome</label>
                  </div>

                  <div className="contact__form-div">
                    <input
                      type="email"
                      name="email"
                      className="contact__form-input"
                      placeholder="seu@email.com"
                      required
                    />
                    <label className="contact__form-tag">E-mail</label>
                  </div>
                </div>

                <div className="contact__form-div">
                  <input
                    type="text"
                    name="subject"
                    className="contact__form-input"
                    placeholder="Assunto da mensagem"
                    required
                  />
                  <label className="contact__form-tag">Assunto</label>
                </div>

                <div className="contact__form-div contact__form-area">
                  <textarea
                    name="message"
                    className="contact__form-input"
                    placeholder="Conte-me sobre seu projeto ou proposta..."
                    rows={6}
                    required
                  ></textarea>
                  <label className="contact__form-tag">Mensagem</label>
                </div>

                <button type="submit" className="contact__submit-button">
                  <span>Enviar Mensagem</span>
                  <div className="contact__submit-icon">
                    <Send className="contact__submit-icon-svg" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
