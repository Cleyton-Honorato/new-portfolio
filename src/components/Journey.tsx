import { Briefcase, GraduationCap } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { education, experience, type TimelineItem } from "../data/content";
import { Stack } from "./Stack";
import { useElementProgress } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import "./Journey.css";

function Timeline({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: TimelineItem[];
}) {
  const progress = useElementProgress<HTMLOListElement>();

  return (
    <div className="timeline" data-reveal>
      <h3 className="timeline__heading">
        <span className="timeline__icon">{icon}</span>
        {title}
      </h3>
      <ol ref={progress} className="timeline__list" data-reveal="stagger">
        {items.map((item, i) => (
          <li
            key={`${item.title}-${item.period}`}
            className={`timeline__item${item.current ? " timeline__item--current" : ""}`}
            style={{ "--i": i * 2 + 2 } as CSSProperties}
          >
            <div className="timeline__main">
              <h4 className="timeline__title">{item.title}</h4>
              <p className="timeline__org">{item.org}</p>
            </div>
            <span className="timeline__period">{item.period}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section className="panel journey" id="trajetoria">
      <div className="inner">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Trajetória</span>
            <h2 className="section-title">
              <SplitWords segments={["Do estágio ao Tech Lead —", { text: "e sempre no código.", className: "hl" }]} />
            </h2>
            <p className="section-lead">
              Produto em contextos diferentes — estudando sempre.
            </p>
          </div>

          <div className="journey__grid">
            <Timeline title="Experiência" icon={<Briefcase aria-hidden="true" />} items={experience} />
            <Timeline title="Formação & certificações" icon={<GraduationCap aria-hidden="true" />} items={education} />
          </div>

        <Stack />
      </div>
    </section>
  );
}
