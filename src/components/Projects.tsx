import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredProject, projects, type Project } from "../data/content";
import { SplitWords } from "./motion/SplitWords";
import "./Projects.css";

const linkOf = (p: Project) => p.url ?? p.repo;
const hostOf = (url?: string) => (url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "");

/** BolaMarcada inside a browser window, with a short pitch beside it. */
function Showcase({ project: p }: { project: Project }) {
  return (
    <div className="showcase">
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="browser"
        data-reveal="scale"
        aria-label={`Abrir o site do ${p.title}`}
      >
        <div className="browser__bar" aria-hidden="true">
          <span className="browser__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser__url">{hostOf(p.url)}</span>
        </div>
        <div className="browser__screen">
          <img src={p.cover} alt={`Tela de apresentação do ${p.title}`} loading="lazy" />
        </div>
      </a>

      <div className="showcase__body" data-reveal>
        <span className="showcase__badge">{p.role}</span>
        <h3 className="showcase__title">
          {p.title}
          <span className="showcase__dot">.</span>
        </h3>
        <p className="showcase__tagline">{p.tagline}</p>

        <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary showcase__cta">
          Conhecer o projeto
          <ArrowUpRight aria-hidden="true" />
        </a>

        <div className="others">
          <span className="others__label">Também construí</span>
          <ul className="others__row">
            {projects.map((o, i) => (
              <LogoTile key={o.id} project={o} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** One of the other projects: its logo on the brand color, name on hover. */
function LogoTile({ project: p, index }: { project: Project; index: number }) {
  const href = linkOf(p);
  const style = { "--reveal-delay": `${index * 60}ms` } as CSSProperties;
  const inner = (
    <>
      <span
        className={`tile__logo${p.cover ? " tile__logo--cover" : ""}`}
        style={{ background: p.brandColor }}
        data-id={p.id}
        aria-hidden="true"
      >
        <img src={p.cover ?? p.logo} alt="" loading="lazy" />
      </span>
      <span className="tile__tip" aria-hidden="true">
        <strong>{p.title}</strong>
        <span>{p.tagline}</span>
      </span>
      <span className="tile__name" aria-hidden="true">
        {p.title}
      </span>
    </>
  );

  return (
    <li className="tile" data-reveal style={style}>
      {href ? (
        <a className="tile__link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} — ${p.tagline}`}>
          {inner}
        </a>
      ) : (
        <span className="tile__link" tabIndex={0} aria-label={`${p.title} — ${p.tagline}`}>
          {inner}
        </span>
      )}
    </li>
  );
}

export function Projects() {
  return (
    <section className="sheet projects" id="projetos">
      <div className="inner">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Trabalhos selecionados</span>
          <h2 className="section-title">
            <SplitWords segments={["Fora do", { text: "papel.", className: "hl" }]} />
          </h2>
          <p className="section-lead">Do produto próprio a sistemas que rodam empresas.</p>
        </div>

        <Showcase project={featuredProject} />
      </div>
    </section>
  );
}
