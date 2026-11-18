import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredProject, projects, type Project } from "../data/content";
import { SplitWords } from "./motion/SplitWords";
import "./Projects.css";

const linkOf = (p: Project) => p.url ?? p.repo;

function Featured({ project: p }: { project: Project }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="work-featured"
      data-reveal="scale"
    >
      <div className="work-featured__cover">
        <img src={p.cover} alt={`Tela de apresentação do ${p.title}`} loading="lazy" />
        <span className="work-featured__badge">Produto próprio</span>
      </div>
      <div className="work-featured__body">
        <div>
          <h3 className="work-featured__title">
            {p.title}
            <span className="work-dot">.</span>
          </h3>
          <p className="work-featured__tagline">{p.tagline}</p>
        </div>
        <span className="work-featured__cta" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
    </a>
  );
}

function Row({ project: p, index }: { project: Project; index: number }) {
  const href = linkOf(p);
  const style = { "--reveal-delay": `${index * 60}ms` } as CSSProperties;
  const content = (
    <>
      <span
        className={`work-row__logo${p.cover ? " work-row__logo--cover" : ""}`}
        style={{ background: p.brandColor }}
        data-id={p.id}
        aria-hidden="true"
      >
        <img src={p.cover ?? p.logo} alt="" loading="lazy" />
      </span>
      <span className="work-row__text">
        <span className="work-row__title">{p.title}</span>
        <span className="work-row__tagline">{p.tagline}</span>
      </span>
      {href && <ArrowUpRight className="work-row__arrow" aria-hidden="true" />}
    </>
  );

  return (
    <li data-reveal style={style}>
      {href ? (
        <a className="work-row" href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <div className="work-row">{content}</div>
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
            <SplitWords segments={["Projetos que", { text: "saíram do papel.", className: "hl" }]} />
          </h2>
          <p className="section-lead">Do produto próprio a sistemas que rodam empresas.</p>
        </div>

        <div className="work">
          <Featured project={featuredProject} />

          <div className="work-others">
            <span className="work-others__label">Outros projetos</span>
            <ul className="work-list">
              {projects.map((p, i) => (
                <Row key={p.id} project={p} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
