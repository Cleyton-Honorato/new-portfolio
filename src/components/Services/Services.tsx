import { useState } from "react";
import { X, ExternalLink, Github, Globe } from "lucide-react";

import "./Services.css";

// Importando as imagens
import logo from "../../assets/wallpaper.png";
import brand from "../../assets/brand.png";
import firebank from "../../assets/firebanking.svg";

// Interface para os projetos
interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  background?: string;
  description: string;
  features: string[];
  technologies: string[];
  links: {
    demo: string;
    github: string;
    website: string;
  };
}

export function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Função utilitária para criar backgrounds personalizados
  const createBackground = (
    type: "gradient" | "solid" | "image",
    colors?: string[],
    imageUrl?: string,
    direction: string = "90deg"
  ) => {
    switch (type) {
      case "gradient":
        if (colors && colors.length > 0) {
          return `linear-gradient(${direction}, ${colors.join(", ")})`;
        }
        return `linear-gradient(${direction}, #667eea, #764ba2)`;
      case "solid":
        return colors?.[0] || "#667eea";
      case "image":
        return `url(${imageUrl}) center/cover`;
      default:
        return "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))";
    }
  };

  // Projeto Principal - BolaMarcada
  const mainProject = {
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
    image: logo,
  };

  // Projetos Secundários - Cards diferentes
  const secondaryProjects: Project[] = [
    {
      id: 2,
      title: "Fire Banking",
      subtitle: "Onboard de Captação de Clientes",
      image: firebank,
      background: createBackground("gradient", [
        "rgba(28, 31, 35, 1)",
        "#cc6942 100%",
      ]),
      description:
        "Sistema de onboarding completo para captação de clientes bancários, incluindo cadastro, validação de documentos, autenticação segura e processo de aprovação. Desenvolvido com foco em conversão e experiência do usuário.",
      features: [
        "Sistema de cadastro com validação de documentos",
        "Autenticação e login seguro com 2FA",
        "Processo de onboarding otimizado para conversão",
        "Validação em tempo real de dados pessoais",
        "Dashboard de acompanhamento do processo",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
      ],
      links: {
        demo: "https://firebanking-demo.com",
        github: "https://github.com/project/firebanking",
        website: "https://firebanking.com",
      },
    },
    {
      id: 3,
      title: "App Mobile - Delivery",
      subtitle: "Aplicativo de Entrega",
      image: brand,
      background: createBackground(
        "gradient",
        ["#4ecdc4 30%", "#44a08d 80%"],
        undefined,
        "135deg"
      ),
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
      image: "../../assets/work2.jpg",
      background: createBackground(
        "gradient",
        ["#667eea 0%", "#764ba2 70%"],
        undefined,
        "45deg"
      ),
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
      image: "../../assets/work3.jpg",
      background: createBackground("solid", ["#6366f1"]), // Exemplo de cor sólida
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
              <div className="services__card services__card--main">
                <div className="services__card-badge">
                  <span>Projeto Principal</span>
                </div>

                <div className="services__card-header">
                  <div className="services__card-icon-wrapper">
                    {mainProject.icon}
                  </div>
                  <div className="services__card-info">
                    <h3 className="services__card-title">
                      {mainProject.title}
                    </h3>
                    <p className="services__card-subtitle">
                      {mainProject.subtitle}
                    </p>
                  </div>
                </div>

                <div className="services__card-image">
                  <img src={mainProject.image} alt={mainProject.title} />
                </div>

                <p className="services__card-description">
                  {mainProject.description}
                </p>

                <div className="services__card-technologies">
                  {mainProject.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="services__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className="services__card-button"
                  onClick={() => {
                    window.open(
                      mainProject.links.website,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  title="Visitar site da BolaMarcada"
                >
                  <span>Visitar Site</span>
                  <ExternalLink className="services__button-icon" />
                </button>
              </div>
            </div>

            {/* Demais Projetos - Cards Secundários */}
            <div className="services__other-projects">
              {secondaryProjects.map((project) => (
                <div key={project.id} className="services__card-secondary">
                  {/* Imagem do projeto */}
                  <div
                    className="services__card-secondary-image"
                    style={{
                      background:
                        project.background ||
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="services__card-secondary-img"
                    />
                  </div>

                  {/* Título e subtítulo */}
                  <div className="services__card-secondary-header">
                    <h3 className="services__card-secondary-title">
                      {project.title}
                    </h3>
                    <p className="services__card-secondary-subtitle">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Descrição */}
                  <p className="services__card-secondary-description">
                    {project.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="services__card-secondary-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="services__secondary-tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botão */}
                  <button
                    className="services__card-secondary-button"
                    onClick={() => openModal(project.id)}
                  >
                    <span>Ver Detalhes</span>
                    <ExternalLink className="services__secondary-button-icon" />
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

              {secondaryProjects.find((p) => p.id === activeModal) && (
                <>
                  <div className="services__modal-header">
                    <div className="services__modal-icon-wrapper">
                      <img
                        src={
                          secondaryProjects.find((p) => p.id === activeModal)
                            ?.image
                        }
                        alt={
                          secondaryProjects.find((p) => p.id === activeModal)
                            ?.title
                        }
                        className="services__modal-icon"
                      />
                    </div>
                    <div>
                      <h3 className="services__modal-title">
                        {
                          secondaryProjects.find((p) => p.id === activeModal)
                            ?.title
                        }
                      </h3>
                      <p className="services__modal-subtitle">
                        {
                          secondaryProjects.find((p) => p.id === activeModal)
                            ?.subtitle
                        }
                      </p>
                    </div>
                  </div>

                  <p className="services__modal-description">
                    {
                      secondaryProjects.find((p) => p.id === activeModal)
                        ?.description
                    }
                  </p>

                  <div className="services__modal-section">
                    <h4 className="services__modal-section-title">
                      Funcionalidades Principais
                    </h4>
                    <ul className="services__modal-features">
                      {secondaryProjects
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
                      {secondaryProjects
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
                        secondaryProjects.find((p) => p.id === activeModal)
                          ?.links.demo
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
                        secondaryProjects.find((p) => p.id === activeModal)
                          ?.links.github
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
                        secondaryProjects.find((p) => p.id === activeModal)
                          ?.links.website
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
