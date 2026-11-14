import type { CSSProperties } from "react";
import { Code2, Server, Smartphone, Sparkles } from "lucide-react";
import { services } from "../data/content";
import { useTilt } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import "./Services.css";

const icons = {
  web: Code2,
  mobile: Smartphone,
  server: Server,
  ai: Sparkles,
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const tilt = useTilt<HTMLElement>(8);
  const Icon = icons[service.icon];

  return (
    <div data-reveal style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}>
      <article ref={tilt} className="service tilt">
        <span className="service__index">{String(index + 1).padStart(2, "0")}</span>
        <span className="service__icon">
          <Icon aria-hidden="true" />
        </span>
        <h3 className="service__title">{service.title}</h3>
        <p className="service__desc">{service.description}</p>
        <ul className="service__tags">
          {service.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
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
