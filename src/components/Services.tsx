import type { CSSProperties, ReactNode } from "react";
import { services } from "../data/content";
import { useTilt } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import "./Services.css";

/**
 * A solid-looking 3D object: `depth` 1px slices stacked behind a front face
 * (same technique as the phone in "Sobre"). `extra` goes in the middle of
 * the body, e.g. the chip's pins.
 */
function Extrude({
  className,
  depth,
  children,
  extra,
}: {
  className: string;
  depth: number;
  children: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <div className={`x3d ${className}`} style={{ "--d": `${depth}px` } as CSSProperties}>
      {extra}
      {Array.from({ length: depth }, (_, i) => (
        <span key={i} className="x3d__layer" style={{ transform: `translateZ(${i - depth / 2}px)` }} />
      ))}
      <div className="x3d__face">{children}</div>
    </div>
  );
}

const objects: Record<(typeof services)[number]["icon"], () => ReactNode> = {
  // Browser window with code
  web: () => (
    <Extrude className="x3d--web" depth={12}>
      <span className="x3d__bar">
        <i />
        <i />
        <i />
      </span>
      <span className="x3d__code">
        <b />
        <b />
        <b />
        <b />
      </span>
    </Extrude>
  ),
  // Phone with the cleycode mark on screen
  mobile: () => (
    <Extrude className="x3d--phone" depth={10}>
      <span className="x3d__screen">
        <span>{"{c}"}</span>
      </span>
    </Extrude>
  ),
  // Rack of three servers
  server: () => (
    <div className="x3d-rack">
      {[0, 1, 2].map((i) => (
        <Extrude key={i} className="x3d--server" depth={22}>
          <i />
          <i />
          <b />
        </Extrude>
      ))}
    </div>
  ),
  // AI chip with pins
  ai: () => (
    <Extrude
      className="x3d--chip"
      depth={14}
      extra={
        <>
          <span className="x3d__pins" />
          <span className="x3d__pins x3d__pins--side" />
        </>
      }
    >
      <span>AI</span>
    </Extrude>
  ),
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const tilt = useTilt<HTMLElement>(14);

  return (
    <div data-reveal style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}>
      <article ref={tilt} className="service" style={{ "--float-delay": `${index * -1.2}s` } as CSSProperties}>
        <div className="service__body">
          <span className="service__glare" aria-hidden="true" />
          <div className="service__object" aria-hidden="true">
            <span className="service__shadow" />
            <div className="service__float">
              <div className="service__turn">{objects[service.icon]()}</div>
            </div>
          </div>
          <span className="service__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="service__title">{service.title}</h3>
          <p className="service__desc">{service.description}</p>
          <ul className="service__tags">
            {service.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export function Services() {
  return (
    <section className="panel services" id="servicos">
      <div className="inner">
        <div className="services__head">
          <div className="section-head" data-reveal>
            <span className="eyebrow">O que eu faço</span>
            <h2 className="section-title">
              <SplitWords segments={["Da ideia ao deploy, em toda a stack."]} />
            </h2>
          </div>
          <p className="section-lead services__lead" data-reveal>
            Interface, app, API ou IA — onde o produto precisar.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
