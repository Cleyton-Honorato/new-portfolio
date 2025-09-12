import { ExternalLink } from "lucide-react";

import "./Services.css";

// Importando as imagens
import logo from "../../assets/wallpaper.png";
import brand from "../../assets/brand.png";
import firebank from "../../assets/firebanking.svg";
import trilogo from "../../assets/trilogo.png";
import tijuca from "../../assets/tijuca.png";

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
      title: "Trílogo",
      subtitle: "Software de Manutenção de Predial",
      image: trilogo,
      background: createBackground("solid", ["#4C12A1"]),
      description:
        "Contribuí para o desenvolvimento de funcionalidades como o módulo de tickets públicos e melhorias em processos internos. Atuei na realização de testes unitários, participei do planejamento de sprints junto ao Scrum Master e colaborei para a entrega de soluções alinhadas às necessidades do negócio.",
      features: [
        "Módulo de tickets públicos",
        "Melhorias em processos internos",
        "Testes unitários",
        "Planejamento de sprints",
        "Sistema de geolocalização para mapa de calor dos tickets",
      ],
      technologies: [
        "React JS",
        "Vue JS",
        "Google Maps API",
        "Redux Toolkit",
        "Node JS",
        "Docker",
        "TypeScript",
      ],
      links: {
        demo: "https://app-demo.com",
        github: "https://github.com/project/mobile-app",
        website: "https://app-website.com",
      },
    },
    {
      id: 4,
      title: "Tijuca Alimentos",
      subtitle: "",
      image: tijuca,
      background: createBackground("solid", ["#003266"]),
      description:
        "Liderei a equipe de desenvolvimento mobile na criação de um aplicativo em React Native para gestão de vendas externas. O sistema permitia aos representantes realizar pedidos em campo, mesmo offline, com sincronização automática ao sistema interno da empresa. Esse projeto trouxe maior agilidade ao processo comercial, redução de erros e melhoria na experiência dos vendedores.",
      features: [
        "Gráficos interativos e responsivos",
        "Filtros avançados de dados",
        "Exportação de relatórios em PDF/Excel",
        "Alertas e notificações automáticas",
        "Integração com múltiplas fontes de dados",
      ],
      technologies: [
        "React Native",
        "styled-components",
        "PHP",
        "MySQL",
        "RealmDB",
      ],
      links: {
        demo: "https://dashboard-demo.com",
        github: "https://github.com/project/dashboard",
        website: "https://dashboard-website.com",
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
