import { useState } from "react";
import {
  X,
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Code,
  Palette,
} from "lucide-react";

import "./Services.css";

// Importando as imagens
import logo from "../../assets/wallpaper.png";
import brand from "../../assets/brand.png";

export function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const projects = [
    {
      id: 1,
      title: "BolaMarcada",
      subtitle: "Seu SAAS de Gestão Esportiva",
      icon: <img src={brand} alt="BolaMarcada" className="brand" />,
      description:
        "Ideal para gestão de arenas esportivas, plataforma desenvolvida para otimizar a administração de quadras esportivas, oferecendo um conjunto completo de ferramentas para agendamento online, controle financeiro, gestão de pagamentos e envio de notificações automatizadas. O sistema tem como objetivo simplificar a rotina de gestores, centralizando operações em um ambiente digital seguro e eficiente, garantindo maior organização, praticidade e melhoria na experiência dos clientes.",
      features: [
        "Gestão completa de times e jogadores",
        "Organização de campeonatos e torneios",
        "Sistema de pontuação e rankings",
        "Dashboard interativo com estatísticas",
        "App mobile para acompanhamento em tempo real",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "React Native", "AWS"],
      links: {
        demo: "https://bolamarcada.github.io/landingpage/",
        github: "https://github.com/bolamarcada",
        website: "https://bolamarcada.github.io/landingpage/",
      },
      isMainProject: true,
      image: logo,
    },
    {
      id: 2,
      title: "E-commerce Premium",
      subtitle: "Loja Virtual Completa",
      icon: <Globe className="services__icon" />,
      description:
        "Plataforma de e-commerce desenvolvida com foco em conversão e experiência do usuário, incluindo sistema de pagamentos e gestão de estoque.",
      features: [
        "Catálogo de produtos com filtros avançados",
        "Sistema de carrinho e checkout otimizado",
        "Integração com gateways de pagamento",
        "Painel administrativo completo",
        "Sistema de avaliações e reviews",
      ],
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "AWS"],
      links: {
        demo: "https://ecommerce-demo.com",
        github: "https://github.com/project/ecommerce",
        website: "https://ecommerce-website.com",
      },
    },
    {
      id: 3,
      title: "App Mobile - Delivery",
      subtitle: "Aplicativo de Entrega",
      icon: <Smartphone className="services__icon" />,
      description:
        "Aplicativo mobile nativo para delivery de alimentos, com sistema de rastreamento em tempo real e interface intuitiva.",
      features: [
        "Interface nativa para iOS e Android",
        "Sistema de geolocalização e rastreamento",
        "Chat integrado entre cliente e entregador",
        "Sistema de notificações push",
        "Integração com mapas e rotas",
      ],
      technologies: [
        "React Native",
        "Firebase",
        "Google Maps API",
        "Redux",
        "Expo",
      ],
      links: {
        demo: "https://app-demo.com",
        github: "https://github.com/project/mobile-app",
        website: "https://app-website.com",
      },
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      subtitle: "Painel de Análise de Dados",
      icon: <Code className="services__icon" />,
      description:
        "Dashboard interativo para análise de dados empresariais, com gráficos dinâmicos e relatórios personalizáveis.",
      features: [
        "Gráficos interativos e responsivos",
        "Filtros avançados de dados",
        "Exportação de relatórios em PDF/Excel",
        "Alertas e notificações automáticas",
        "Integração com múltiplas fontes de dados",
      ],
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Chart.js"],
      links: {
        demo: "https://dashboard-demo.com",
        github: "https://github.com/project/dashboard",
        website: "https://dashboard-website.com",
      },
    },
    {
      id: 5,
      title: "Landing Page Premium",
      subtitle: "Site Institucional Moderno",
      icon: <Palette className="services__icon" />,
      description:
        "Landing page moderna e otimizada para conversão, com design responsivo e foco em SEO e performance.",
      features: [
        "Design responsivo e moderno",
        "Otimização para SEO e Core Web Vitals",
        "Formulários de captura otimizados",
        "Integração com Google Analytics",
        "Sistema de blog integrado",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Vercel",
        "Contentful",
        "Framer Motion",
      ],
      links: {
        demo: "https://landing-demo.com",
        github: "https://github.com/project/landing",
        website: "https://landing-website.com",
      },
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="services__header">
        <h2 className="section__title">Projetos & Produtos</h2>
        <span className="section__subtitle">Portfólio de Desenvolvimento</span>
      </div>

      <div className="services__container container">
        <div className="services__content-wrapper">
          {/* Elementos decorativos */}
          <div className="services__decoration">
            <div className="services__decoration-line"></div>
            <div className="services__decoration-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="services__grid">
            {/* Projeto Principal - BolaMarcada */}
            <div className="services__main-project">
              {projects
                .filter((project) => project.isMainProject)
                .map((project) => (
                  <div
                    key={project.id}
                    className="services__card services__card--main"
                  >
                    <div className="services__card-badge">
                      <span>Projeto Principal</span>
                    </div>

                    <div className="services__card-header">
                      <div className="services__card-icon-wrapper">
                        {project.icon}
                      </div>
                      <div className="services__card-info">
                        <h3 className="services__card-title">
                          {project.title}
                        </h3>
                        <p className="services__card-subtitle">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="services__card-image">
                      <img src={project.image} alt={project.title} />
                    </div>

                    <p className="services__card-description">
                      {project.description}
                    </p>

                    <div className="services__card-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="services__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      className="services__card-button"
                      onClick={() => {
                        if (project.isMainProject) {
                          window.open(
                            project.links.website,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        } else {
                          openModal(project.id);
                        }
                      }}
                      title={
                        project.isMainProject
                          ? "Visitar site da BolaMarcada"
                          : "Ver detalhes do projeto"
                      }
                    >
                      <span>
                        {project.isMainProject
                          ? "Visitar Site"
                          : "Ver Detalhes"}
                      </span>
                      <ExternalLink className="services__button-icon" />
                    </button>
                  </div>
                ))}
            </div>

            {/* Demais Projetos */}
            <div className="services__other-projects">
              {projects
                .filter((project) => !project.isMainProject)
                .map((project) => (
                  <div key={project.id} className="services__card">
                    <div className="services__card-header">
                      <div className="services__card-icon-wrapper">
                        {project.icon}
                      </div>
                      <div className="services__card-info">
                        <h3 className="services__card-title">
                          {project.title}
                        </h3>
                        <p className="services__card-subtitle">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="services__card-description">
                      {project.description}
                    </p>

                    <div className="services__card-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="services__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      className="services__card-button"
                      onClick={() => openModal(project.id)}
                    >
                      <span>Ver Detalhes</span>
                      <ExternalLink className="services__button-icon" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="services__modal-overlay" onClick={closeModal}>
          <div className="services__modal" onClick={(e) => e.stopPropagation()}>
            <div className="services__modal-content">
              <button className="services__modal-close" onClick={closeModal}>
                <X className="services__modal-close-icon" />
              </button>

              {projects.find((p) => p.id === activeModal) && (
                <>
                  <div className="services__modal-header">
                    <div className="services__modal-icon-wrapper">
                      {projects.find((p) => p.id === activeModal)?.icon}
                    </div>
                    <div>
                      <h3 className="services__modal-title">
                        {projects.find((p) => p.id === activeModal)?.title}
                      </h3>
                      <p className="services__modal-subtitle">
                        {projects.find((p) => p.id === activeModal)?.subtitle}
                      </p>
                    </div>
                  </div>

                  {projects.find((p) => p.id === activeModal)
                    ?.isMainProject && (
                    <div className="services__modal-image">
                      <img
                        src={projects.find((p) => p.id === activeModal)?.image}
                        alt={projects.find((p) => p.id === activeModal)?.title}
                      />
                    </div>
                  )}

                  <p className="services__modal-description">
                    {projects.find((p) => p.id === activeModal)?.description}
                  </p>

                  <div className="services__modal-section">
                    <h4 className="services__modal-section-title">
                      Funcionalidades Principais
                    </h4>
                    <ul className="services__modal-features">
                      {projects
                        .find((p) => p.id === activeModal)
                        ?.features.map((feature, index) => (
                          <li key={index} className="services__modal-feature">
                            <div className="services__modal-feature-icon">
                              ✓
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="services__modal-section">
                    <h4 className="services__modal-section-title">
                      Tecnologias Utilizadas
                    </h4>
                    <div className="services__modal-technologies">
                      {projects
                        .find((p) => p.id === activeModal)
                        ?.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="services__modal-tech-tag"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="services__modal-links">
                    <a
                      href={
                        projects.find((p) => p.id === activeModal)?.links.demo
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="services__modal-link"
                    >
                      <Globe className="services__modal-link-icon" />
                      <span>Ver Demo</span>
                    </a>
                    <a
                      href={
                        projects.find((p) => p.id === activeModal)?.links.github
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="services__modal-link"
                    >
                      <Github className="services__modal-link-icon" />
                      <span>Código Fonte</span>
                    </a>
                    <a
                      href={
                        projects.find((p) => p.id === activeModal)?.links
                          .website
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="services__modal-link"
                    >
                      <ExternalLink className="services__modal-link-icon" />
                      <span>Website</span>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
