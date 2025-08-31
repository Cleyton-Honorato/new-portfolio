import { Award, Briefcase, Headphones } from "lucide-react";
import { useEffect, useState } from "react";

export default function Info() {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    support: 0,
  });

  useEffect(() => {
    const animateCounts = () => {
      const targetCounts = {
        experience: 5,
        projects: 31,
        support: 24,
      };

      const duration = 2000; // 2 segundos
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;

        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          experience: Math.floor(targetCounts.experience * easeOutQuart),
          projects: Math.floor(targetCounts.projects * easeOutQuart),
          support: Math.floor(targetCounts.support * easeOutQuart),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(targetCounts);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Iniciar animação quando o componente entrar na viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounts();
          observer.unobserve(entry.target);
        }
      });
    });

    const infoElement = document.querySelector(".about__info");
    if (infoElement) {
      observer.observe(infoElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about__info grid">
      <div className="about__box" title="5 anos de experiência profissional">
        <Award className="about__icon" />
        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">{counts.experience} anos</span>
      </div>

      <div className="about__box" title="31+ projetos concluídos com sucesso">
        <Briefcase className="about__icon" />
        <h3 className="about__title">Concluído</h3>
        <span className="about__subtitle">{counts.projects} + Projetos</span>
      </div>

      <div className="about__box" title="Suporte disponível 24/7">
        <Headphones className="about__icon" />
        <h3 className="about__title">Suporte</h3>
        <span className="about__subtitle">Online {counts.support}/7</span>
      </div>
    </div>
  );
}
