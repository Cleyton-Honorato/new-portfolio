import { ArrowUp, Code2 } from "lucide-react";
import { profile, socials } from "../data/content";
import { SocialIcon } from "./SocialIcon";
import "./Footer.css";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#stack", label: "Stack" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="inner footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-row">
            <span className="footer__mark" aria-hidden="true">
              <Code2 />
            </span>
            <span className="footer__wordmark">{profile.brand}</span>
          </span>
          <p>
            © {year} {profile.name}
            <br />
            {profile.role}
            <br />
            {profile.location}
          </p>
        </div>

        <nav className="footer__col" aria-label="Rodapé">
          <h2>Navegação</h2>
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2>Contato</h2>
          <ul>
            <li>
              <a href={`mailto:${profile.email}`}>E-mail</a>
            </li>
            <li>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#contato">Formulário</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2>Redes</h2>
          <ul>
            {socials.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <ul className="footer__socials" aria-label="Redes sociais">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn icon-btn--on-purple"
                  aria-label={s.label}
                >
                  <SocialIcon id={s.id} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#inicio" className="footer__top">
            Voltar ao topo
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
