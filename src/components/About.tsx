import { useEffect, useState, type CSSProperties } from "react";
import { Award, Briefcase, Building2, MapPin } from "lucide-react";
import working from "../assets/working.webp";
import { profile, stats } from "../data/content";
import { useCountUp, useTilt } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import "./About.css";

const statIcons = [Award, Briefcase, Building2];

function Stat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, value: current } = useCountUp<HTMLDivElement>(value);
  const Icon = statIcons[index];
  return (
    <div
      ref={ref}
      className={`bento__card bento__stat bento__stat--${index + 1}`}
      data-reveal="scale"
      style={{ "--reveal-delay": `${200 + index * 100}ms` } as CSSProperties}
    >
      <span className="bento__icon">
        <Icon aria-hidden="true" />
      </span>
      <strong>
        {current}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

/** Live local time in Fortaleza, refreshed every 30 seconds. */
function useFortalezaTime() {
  const format = () =>
    new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Fortaleza",
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function About() {
  const time = useFortalezaTime();
  const photo = useTilt<HTMLDivElement>(6);

  return (
    <section className="sheet about" id="sobre">
      <div className="inner">
        <div className="bento">
          <div className="bento__card bento__intro" data-reveal>
            <span className="eyebrow">Sobre mim</span>
            <h2 className="section-title">
              <SplitWords
                segments={["Código com intenção,", { text: "produto com cuidado.", className: "hl" }]}
                breakAfter={[0]}
              />
            </h2>
            <p>
              Trabalho com React, React Native, Next.js, Node/NestJS e PostgreSQL, além de AWS,
              Cloudflare e IA.
            </p>
            <p>
              Desde 2018 passei por indústria, SaaS, fintech e liderança técnica. Hoje construo a
              plataforma da Academe Educação.
            </p>
          </div>

          <div
            ref={photo}
            className="bento__card bento__photo tilt spotlight"
            data-reveal="clip"
          >
            <img
              src={working}
              alt="Cleyton sorrindo em frente ao notebook, com o neon roxo ao fundo"
              width={1200}
              height={960}
              loading="lazy"
            />
          </div>

          <div
            className="bento__card bento__location"
            data-reveal="scale"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <div className="bento__map" aria-hidden="true">
              <span className="bento__pin" />
            </div>
            <div className="bento__location-info">
              <span className="bento__icon">
                <MapPin aria-hidden="true" />
              </span>
              <div>
                <strong>{profile.location}</strong>
                <span>{time} · UTC−3</span>
              </div>
            </div>
          </div>

          {stats.map((s, i) => (
            <Stat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
