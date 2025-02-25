import { Award, Briefcase, Headphones } from "lucide-react";

export default function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <Award className="about__icon" />
        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">5 anos</span>
      </div>

      <div className="about__box">
        <Briefcase className="about__icon" />
        <h3 className="about__title">Concluído</h3>
        <span className="about__subtitle">31 + Projetos</span>
      </div>

      <div className="about__box">
        <Headphones className="about__icon" />
        <h3 className="about__title">Suporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
