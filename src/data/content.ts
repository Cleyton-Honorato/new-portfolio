import bolamarcadaCover from "../assets/bolamarcada-cover.webp";
import bolamarcadaMark from "../assets/bolamarcada-mark.webp";
import academe from "../assets/academe.svg";
import pantheo from "../assets/pantheo.webp";
import saltfix from "../assets/saltfix.svg";
import walletLogo from "../assets/wallet-logo.webp";
import tamandaCover from "../assets/tamanda-cover.webp";
import firebanking from "../assets/firebanking.svg";
import trilogo from "../assets/trilogo.png";
import tijuca from "../assets/tijuca.png";

const CAREER_START = 2018;

export const profile = {
  name: "Cleyton Honorato",
  shortName: "Cleyton",
  role: "Fullstack Developer",
  brand: "cleycode",
  company: "Academe Educação",
  location: "Fortaleza, CE — Brasil",
  email: "limacleyton82@gmail.com",
  phoneLabel: "(85) 99451-2680",
  whatsapp:
    "https://api.whatsapp.com/send?phone=5585994512680&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20oportunidades%20de%20colabora%C3%A7%C3%A3o.",
  yearsOfExperience: new Date().getFullYear() - CAREER_START,
};

export const socials = [
  {
    id: "github",
    label: "GitHub",
    handle: "Cleyton-Honorato",
    href: "https://github.com/Cleyton-Honorato",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "cleyton-honorato",
    href: "https://www.linkedin.com/in/cleyton-honorato-a5586215a/",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@cleycode",
    href: "https://www.instagram.com/cleycode/",
  },
] as const;

export const stats = [
  { value: profile.yearsOfExperience, suffix: "+", label: "anos construindo software" },
  { value: 31, suffix: "+", label: "projetos entregues" },
  { value: 5, suffix: "", label: "empresas na trajetória" },
];


export type ProjectCategory = "web" | "mobile" | "saas";

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "saas", label: "SaaS" },
];

export interface Project {
  id: string;
  categories: ProjectCategory[];
  title: string;
  tagline: string;
  role: string;
  description: string;
  highlights?: string[];
  stack: string[];
  logo?: string;
  /** Background behind the logo, using the project's own brand color. */
  brandColor: string;
  cover?: string;
  url?: string;
  /** Public source code. */
  repo?: string;
}

export const featuredProject: Project = {
  id: "bolamarcada",
  categories: ["saas", "web", "mobile"],
  title: "BolaMarcada",
  tagline: "SaaS de gestão para arenas esportivas",
  role: "Produto próprio",
  description:
    "Agendamento, financeiro e notificações num só lugar para quem administra quadras esportivas.",
  highlights: [
    "Agendamento online",
    "Financeiro e pagamentos",
    "Notificações automáticas",
    "App mobile",
  ],
  stack: ["React", "Node.js", "PostgreSQL", "React Native", "AWS"],
  brandColor: "#0b0d12",
  cover: bolamarcadaCover,
  url: "https://bolamarcada.github.io/landingpage/",
};

export const projects: Project[] = [
  {
    id: "academe",
    categories: ["saas", "web", "mobile"],
    title: "Academe Educação",
    tagline: "Plataforma de IA para escolas",
    role: "Atual · Fullstack",
    description:
      "Avaliação de atividades por IA, backoffice, insígnias e a infraestrutura da plataforma.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "React", "React Native", "IA"],
    logo: academe,
    brandColor: "linear-gradient(135deg, #892cdd 0%, #5b12a0 100%)",
    url: "https://www.academe.com.br/",
  },
  {
    id: "saltfix",
    categories: ["web"],
    title: "SALTFIX Tecnologia",
    tagline: "Software house de sistemas sob medida",
    role: "Front-End Developer",
    description:
      "Front-end de sistemas e sites sob medida para clientes.",
    stack: ["Vue.js", "AngularJS", "JavaScript"],
    logo: saltfix,
    brandColor: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
    url: "https://saltfix.com.br",
  },
  {
    id: "firebanking",
    categories: ["web"],
    title: "Fire Banking",
    tagline: "Onboarding de captação de clientes",
    role: "Fullstack",
    description:
      "Abertura de conta com validação de documentos e 2FA, pensada para converter.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    logo: firebanking,
    brandColor: "linear-gradient(135deg, #1c1f23 0%, #cc6942 100%)",
  },
  {
    id: "trilogo",
    categories: ["saas", "web"],
    title: "Trílogo",
    tagline: "Software de manutenção predial",
    role: "Desenvolvedor Pleno",
    description:
      "Tickets públicos, mapa de calor de chamados e testes unitários.",
    stack: ["React", "Vue", "Redux Toolkit", "Google Maps API", "Docker"],
    logo: trilogo,
    brandColor: "#4c12a1",
  },
  {
    id: "tijuca",
    categories: ["mobile"],
    title: "Tijuca Alimentos",
    tagline: "App de vendas externas offline-first",
    role: "Líder do time mobile",
    description:
      "Pedidos em campo, mesmo sem internet, com sincronização automática.",
    stack: ["React Native", "RealmDB", "styled-components", "PHP", "MySQL"],
    logo: tijuca,
    brandColor: "#003266",
  },
  {
    id: "wallet",
    categories: ["web"],
    title: "Wallet",
    tagline: "Controle financeiro pessoal",
    role: "Projeto pessoal",
    description:
      "Receitas, despesas, orçamentos e metas — na web como PWA e no desktop, com lançamentos por IA.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NestJS", "Electron"],
    logo: walletLogo,
    brandColor: "#081639",
    repo: "https://github.com/Cleyton-Honorato/wallet-next",
  },
  {
    id: "tamanda",
    categories: ["web"],
    title: "Tamanda League 3X3",
    tagline: "Plataforma de campeonato de basquete 3x3",
    role: "Projeto pessoal",
    description:
      "Agenda, classificação, chaveamento e galeria, com painel admin e súmula ao vivo.",
    stack: ["Next.js", "React 19", "MongoDB", "Cloudinary", "GSAP"],
    cover: tamandaCover,
    brandColor: "#0b0b0f",
    repo: "https://github.com/Cleyton-Honorato/tamanda-league",
  },
];

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  current?: boolean;
}

export const experience: TimelineItem[] = [
  { title: "Desenvolvedor Fullstack", org: "Academe Educação", period: "2025 — hoje", current: true },
  { title: "Tech Lead", org: "pantheo.tech", period: "2025" },
  { title: "Front-End Developer", org: "SALTFIX Tecnologia", period: "2025" },
  { title: "Desenvolvedor Pleno", org: "Trílogo", period: "2020 — 2024" },
  { title: "Mobile Developer · líder do time mobile", org: "Tijuca Alimentos", period: "2019 — 2020" },
  { title: "Estágio", org: "Tijuca Alimentos", period: "2018 — 2019" },
];

export const education: TimelineItem[] = [
  { title: "Fullstack Master", org: "Dev Pleno", period: "2025" },
  { title: "Node.js", org: "Rocketseat", period: "2024" },
  { title: "ReactJS", org: "Rocketseat", period: "2024" },
  { title: "React Native", org: "Udemy", period: "2021" },
  { title: "Bacharelado em Tecnologia de Sistemas de Computação", org: "Wyden", period: "2019 — 2023" },
  { title: "Técnico em Redes de Computadores", org: "EEEP Mário Alencar", period: "2016 — 2018" },
];

/** Companies and products shown in the logo strip under the hero. */
export const logos: { name: string; src?: string; withName?: boolean }[] = [
  { name: "pantheo.tech", src: pantheo },
  { name: "Academe", src: academe },
  { name: "SALTFIX", src: saltfix },
  { name: "BolaMarcada", src: bolamarcadaMark, withName: true },
  { name: "Fire Banking", src: firebanking },
  { name: "Trílogo", src: trilogo },
  { name: "Tijuca Alimentos", src: tijuca },
];

export const services = [
  {
    icon: "web",
    title: "Aplicações web",
    description:
      "Interfaces rápidas e acessíveis com React, Next.js e Vue.",
    tags: ["React", "Next.js", "Vue"],
  },
  {
    icon: "mobile",
    title: "Apps mobile",
    description:
      "Apps React Native, inclusive offline-first.",
    tags: ["React Native", "RealmDB"],
  },
  {
    icon: "server",
    title: "Back-end & APIs",
    description:
      "APIs em Node.js e NestJS, com Prisma, PostgreSQL e AWS.",
    tags: ["NestJS", "Prisma", "AWS"],
  },
  {
    icon: "ai",
    title: "IA aplicada",
    description:
      "Agentes e fluxos com LLMs integrados ao produto.",
    tags: ["LLMs", "LangChain", "Strands Agents"],
  },
] as const;

export type StackGroup = "front" | "mobile" | "back" | "infra";

export const stackGroups: { id: StackGroup; label: string }[] = [
  { id: "front", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "back", label: "Backend & dados" },
  { id: "infra", label: "Infra, IA & time" },
];

/** The stack rendered as a periodic table: symbol, name and group. */
export const elements: { symbol: string; name: string; group: StackGroup }[] = [
  { symbol: "Re", name: "React", group: "front" },
  { symbol: "Nx", name: "Next.js", group: "front" },
  { symbol: "Ts", name: "TypeScript", group: "front" },
  { symbol: "Js", name: "JavaScript", group: "front" },
  { symbol: "Vu", name: "Vue", group: "front" },
  { symbol: "Rx", name: "Redux", group: "front" },
  { symbol: "Rn", name: "React Native", group: "mobile" },
  { symbol: "Rm", name: "RealmDB", group: "mobile" },
  { symbol: "Of", name: "Offline-first", group: "mobile" },
  { symbol: "No", name: "Node.js", group: "back" },
  { symbol: "Ne", name: "NestJS", group: "back" },
  { symbol: "Pr", name: "Prisma", group: "back" },
  { symbol: "Pg", name: "PostgreSQL", group: "back" },
  { symbol: "My", name: "MySQL", group: "back" },
  { symbol: "Mg", name: "MongoDB", group: "back" },
  { symbol: "Gq", name: "GraphQL", group: "back" },
  { symbol: "To", name: "TypeORM", group: "back" },
  { symbol: "Fb", name: "Firebase", group: "back" },
  { symbol: "Aw", name: "AWS", group: "infra" },
  { symbol: "Cf", name: "Cloudflare", group: "infra" },
  { symbol: "Ai", name: "Agentes de IA", group: "infra" },
  { symbol: "Dk", name: "Docker", group: "infra" },
  { symbol: "Ut", name: "Testes unitários", group: "infra" },
  { symbol: "Sc", name: "Scrum", group: "infra" },
  { symbol: "Tl", name: "Liderança técnica", group: "infra" },
];

