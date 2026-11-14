import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, MapPin, MessageCircle, Send } from "lucide-react";
import { profile, socials } from "../data/content";
import { SocialIcon } from "./SocialIcon";
import { useMagnetic } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import "./Contact.css";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const submit = useMagnetic<HTMLButtonElement>(0.2);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // No backend: the form composes the message in the visitor's own mail app.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || `Contato pelo portfólio — ${name}`;
    const message = String(data.get("message") ?? "").trim();
    const body = `${message}\n\n— ${name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="sheet contact" id="contato">
      <div className="inner">
        <div className="contact__panel" data-reveal>

          <div className="contact__intro">
            <span className="eyebrow">Contato</span>
            <h2 className="contact__title">
              <SplitWords
                segments={["Tem um projeto em mente?", { text: "Vamos conversar.", className: "hl" }]}
                step={55}
              />
            </h2>
            <p className="section-lead">
              Aberto a oportunidades, parcerias e boas conversas.
            </p>

            <div className="contact__email">
              <a href={`mailto:${profile.email}`} className="contact__email-link">
                {profile.email}
              </a>
              <button
                type="button"
                className="icon-btn"
                onClick={copyEmail}
                aria-label={copied ? "E-mail copiado" : "Copiar e-mail"}
              >
                {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              </button>
              <span className="contact__copied" role="status">
                {copied ? "Copiado!" : ""}
              </span>
            </div>

            <ul className="contact__channels" data-reveal="stagger">
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="contact__channel">
                  <MessageCircle aria-hidden="true" />
                  <span>
                    <strong>WhatsApp</strong>
                    {profile.phoneLabel}
                  </span>
                  <ArrowUpRight aria-hidden="true" className="contact__arrow" />
                </a>
              </li>
              {socials
                .filter((s) => s.id !== "github")
                .map((s) => (
                  <li key={s.id}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="contact__channel">
                      <SocialIcon id={s.id} />
                      <span>
                        <strong>{s.label}</strong>
                        {s.handle}
                      </span>
                      <ArrowUpRight aria-hidden="true" className="contact__arrow" />
                    </a>
                  </li>
                ))}
              <li className="contact__channel contact__channel--static">
                <MapPin aria-hidden="true" />
                <span>
                  <strong>Localização</strong>
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="cf-name">Nome</label>
              <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Como posso te chamar?" required />
            </div>
            <div className="field">
              <label htmlFor="cf-subject">Assunto</label>
              <input id="cf-subject" name="subject" type="text" placeholder="Projeto, vaga, parceria…" />
            </div>
            <div className="field">
              <label htmlFor="cf-message">Mensagem</label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                placeholder="Conte um pouco sobre o que você precisa."
                required
              />
            </div>
            <button ref={submit} type="submit" className="btn btn--primary btn--shine contact__submit">
              Enviar mensagem
              <Send aria-hidden="true" />
            </button>
            <p className="contact__hint">Abre seu app de e-mail com a mensagem pronta.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
