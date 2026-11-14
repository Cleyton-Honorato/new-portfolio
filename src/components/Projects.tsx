import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, Github } from "lucide-react";
import {
  featuredProject,
  projectFilters,
  projects,
  type Project,
  type ProjectCategory,
} from "../data/content";
import { useMagnetic, useTilt } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import "./Projects.css";

type Filter = "all" | ProjectCategory;

const allProjects = [featuredProject, ...projects];
const numberOf = (p: Project) => String(allProjects.indexOf(p) + 1).padStart(2, "0");
const matches = (p: Project, f: Filter) => f === "all" || p.categories.includes(f);

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="project__stack" aria-label="Tecnologias" data-reveal="stagger">
      {items.map((tech, i) => (
        <li key={tech} className="chip" style={{ "--i": i + 4 } as CSSProperties}>
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Featured({ project: p }: { project: Project }) {
  const tilt = useTilt<HTMLElement>(3);
  const cta = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <div data-reveal="scale">
      <article ref={tilt} className="featured tilt spotlight">
        <div className="featured__cover">
          <img src={p.cover} alt={`Tela de apresentação do ${p.title}`} loading="lazy" />
          <span className="featured__badge">Projeto principal</span>
        </div>

        <div className="featured__body">
          <div className="project__meta">
            <span>{numberOf(p)}</span>
            <span>{p.role}</span>
          </div>
          <h3 className="featured__title">{p.title}</h3>
          <p className="featured__tagline">{p.tagline}</p>
          <p className="featured__desc">{p.description}</p>

          {p.highlights && (
            <ul className="featured__highlights" data-reveal="stagger">
              {p.highlights.map((h, i) => (
                <li key={h} style={{ "--i": i + 2 } as CSSProperties}>
                  <Check aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <Stack items={p.stack} />

          {p.url && (
            <a
              ref={cta}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--shine featured__cta"
            >
              Conhecer o {p.title}
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tilt = useTilt<HTMLElement>(10);

  return (
    <div
      className="project-reveal"
      data-reveal
      style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
    >
      <article ref={tilt} className="project-card tilt spotlight">
        <div
          className={`project-card__logo${project.cover ? " project-card__logo--cover" : ""}`}
          style={{ background: project.brandColor }}
        >
          {project.cover ? (
            <img src={project.cover} alt={`Capa do ${project.title}`} loading="lazy" />
          ) : (
            project.logo && <img src={project.logo} alt={`Logo ${project.title}`} loading="lazy" />
          )}
        </div>
        <div className="project-card__body">
          <div className="project__meta">
            <span>{numberOf(project)}</span>
            <span>{project.role}</span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
          <p className="project-card__desc">{project.description}</p>
          <Stack items={project.stack} />
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Visitar site
              <ArrowUpRight aria-hidden="true" className="project-card__link-arrow" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <Github aria-hidden="true" />
              Ver código
              <ArrowUpRight aria-hidden="true" className="project-card__link-arrow" />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

/** Pill tabs with a highlight that slides to the active tab. */
function FilterTabs({ value, onChange }: { value: Filter; onChange: (f: Filter) => void }) {
  const list = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<CSSProperties>({});

  useLayoutEffect(() => {
    const update = () => {
      const active = list.current?.querySelector<HTMLButtonElement>('[aria-selected="true"]');
      if (active) setPill({ width: active.offsetWidth, transform: `translateX(${active.offsetLeft}px)` });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [value]);

  return (
    <div ref={list} className="filters" role="tablist" aria-label="Filtrar projetos" data-reveal>
      <span className="filters__pill" style={pill} aria-hidden="true" />
      {projectFilters.map((f) => {
        const count = allProjects.filter((p) => matches(p, f.id)).length;
        return (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={value === f.id}
            className="filters__tab"
            onClick={() => onChange(f.id)}
          >
            {f.label}
            <span className="filters__count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const showFeatured = matches(featuredProject, filter);
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <section className="sheet projects" id="projetos">
      <div className="inner">
        <div className="projects__head">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Trabalhos selecionados</span>
            <h2 className="section-title">
              <SplitWords segments={["Projetos que", { text: "saíram do papel.", className: "hl" }]} />
            </h2>
            <p className="section-lead">
              Do produto próprio a sistemas que rodam empresas.
            </p>
          </div>
          <FilterTabs value={filter} onChange={setFilter} />
        </div>

        {/* Keying by filter remounts the list so the cards animate back in */}
        <div key={filter} className="projects__list">
          {showFeatured && <Featured project={featuredProject} />}

          {visible.length > 0 && (
            <div className="projects__grid">
              {visible.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
