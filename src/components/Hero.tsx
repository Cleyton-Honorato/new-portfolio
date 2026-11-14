import type { CSSProperties } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import photo from "../assets/hero-photo.webp";
import cv from "../assets/curriculo.pdf";
import { profile } from "../data/content";
import { useMagnetic, useTilt } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import { CodeCard } from "./motion/CodeCard";
import { LogoStrip } from "./LogoStrip";
import "./Hero.css";

/** Hand-drawn style arrow that curls from the text toward the photo. */
function CurlyArrow() {
  return (
    <svg className="hero__arrow" viewBox="0 0 90 120" fill="none" aria-hidden="true">
      <path
        className="hero__arrow-line"
        d="M20 112c-14-10-16-30 0-36 14-5 22 12 10 20-12 8-24-6-14-26 9-18 30-36 52-52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        className="hero__arrow-head"
        d="M60 14l10-6-2 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  const visual = useTilt<HTMLElement>(10);
  const cta = useMagnetic<HTMLAnchorElement>(0.35);

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--a" />
        <span className="hero__glow hero__glow--b" />
        <span className="hero__grid" />
      </div>

      <div className="inner hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            <span className="hero__hello">
              <SplitWords delay={120} step={80} segments={["Olá, eu sou", { text: "Cleyton", className: "hl" }]} />
            </span>
            <span className="hero__claim">
              <SplitWords delay={420} step={60} segments={["Construo produtos digitais de ponta a ponta."]} />
            </span>
          </h1>

          <p className="hero__lead hero__fade" style={{ "--d": "750ms" } as CSSProperties}>
            Fullstack do front à infra, cada vez mais perto da IA. Há {profile.yearsOfExperience} anos transformando problemas em produtos.
          </p>

          <div className="hero__actions hero__fade" style={{ "--d": "880ms" } as CSSProperties}>
            <a ref={cta} href="#projetos" className="btn btn--primary btn--shine hero__primary">
              Ver projetos
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={cv} download="Cleyton-Honorato-CV.pdf" className="btn hero__ghost">
              Baixar CV
              <Download aria-hidden="true" />
            </a>
          </div>

          <div className="hero__fade" style={{ "--d": "1000ms" } as CSSProperties}>
            <LogoStrip />
          </div>
        </div>

        <figure ref={visual} className="hero__visual">
          <span className="hero__dots" aria-hidden="true" />
          <div className="hero__circle">
            <img src={photo} alt="Cleyton no estúdio, sorrindo em frente ao notebook com o neon roxo ao fundo" width={1000} height={1000} />
          </div>
          <span className="hero__ring" aria-hidden="true" />
          <div className="hero__code">
            <CodeCard delay={1300} />
          </div>
          <CurlyArrow />
        </figure>
      </div>
    </section>
  );
}
