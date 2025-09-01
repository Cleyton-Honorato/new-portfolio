import { Github, Instagram, Linkedin, Heart } from "lucide-react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__header">
            <h2 className="footer__title">Cleyton Honorato</h2>
            <p className="footer__subtitle">Desenvolvedor FullStack</p>
          </div>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/cleytin.1/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <Instagram className="footer__social-icon" />
            </a>
            <a
              href="https://github.com/Cleyton-Honorato"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github className="footer__social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/cleyton-honorato-a5586215a/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Linkedin className="footer__social-icon" />
            </a>
          </div>

          <div className="footer__bottom">
            <span className="footer__copy">
              Feito com <Heart className="footer__heart" /> por Cleyton Honorato
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
