const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "Leonardo Dariva",
  role: "Front-end Developer",
  description:
    "Desenvolvedor front-end com background em UI/UX, construindo interfaces acessíveis, responsivas e orientadas a produto.",
  url: deploymentUrl,
  github: "https://github.com/leonardodariva",
  linkedin: "https://www.linkedin.com/in/leonardodariva",
  // Substitua pelo link wa.me com seu número quando quiser ativar o contato direto.
  whatsapp: "https://wa.me/?text=Ol%C3%A1%20Leonardo%2C%20vim%20pelo%20seu%20portf%C3%B3lio.",
  email: "leodarivask@gmail.com",
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  summary: string;
  objective: string;
  contribution: string;
  challenge: string;
  stack: string[];
  features: string[];
  metrics?: { value: string; label: string }[];
  liveUrl?: string;
  repositoryUrl: string;
  visual: "pirate" | "dance" | "portfolio" | "saas";
  coverImage: string;
  gallery: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "pirate-battle",
    title: "Pirate Battle",
    eyebrow: "Jungle Gaming · Technical Challenge",
    year: "2026",
    summary:
      "Um shooter naval 2D para navegador, com simulação em tempo real, controles por teclado e toque, inimigos com comportamentos distintos e uma camada de dados resiliente.",
    objective:
      "Transformar um desafio técnico em uma experiência de jogo completa, testável e pronta para produção — sem esconder a complexidade da simulação dentro da interface.",
    contribution:
      "Desenvolvi o produto de ponta a ponta: arquitetura, regras da simulação, renderização, interface, API mockada, persistência, acessibilidade e estratégia de testes.",
    challenge:
      "Separar o loop de jogo da renderização e da UI. A simulação roda em TypeScript puro com timestep fixo; PixiJS desenha snapshots e React recebe apenas um resumo semântico desacelerado.",
    stack: [
      "React 19",
      "TypeScript",
      "PixiJS 8",
      "Vite",
      "Vitest",
      "Playwright",
      "TanStack Query",
      "Axios",
      "MSW",
    ],
    features: [
      "Combate naval com três tipos de disparo",
      "Inimigos Chaser e Shooter",
      "Controles desktop e mobile",
      "Ranking e histórico de partidas",
      "Fila offline e registro idempotente",
      "Estados, colisões e persistência",
    ],
    metrics: [
      { value: "69", label: "testes unitários" },
      { value: "22", label: "cenários E2E" },
      { value: "60", label: "updates por segundo" },
      { value: "strict", label: "TypeScript" },
    ],
    liveUrl: "https://pirate-battle-pi.vercel.app/",
    repositoryUrl: "https://github.com/leonardodariva/pirate-battle",
    visual: "pirate",
    coverImage:
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample.png",
    gallery: [
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample_menu.png",
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample.png",
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample_ranking.png",
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample_result.png",
    ],
    featured: true,
  },
  {
    slug: "no-ritmo",
    title: "No Ritmo",
    eyebrow: "Produto real · Site institucional",
    year: "2026",
    summary:
      "Experiência digital para uma academia de dança, planejada para organizar serviços, modalidades, horários e conteúdo em uma presença institucional clara e acolhedora.",
    objective:
      "Estruturar uma grande quantidade de conteúdo sem perder ritmo, descoberta ou facilidade de manutenção em diferentes formatos de tela.",
    contribution:
      "Atuei na arquitetura da informação, design responsivo, sistema visual e implementação front-end com conteúdo desacoplado dos componentes.",
    challenge:
      "Criar uma base editorial extensível para páginas de aulas, projetos, formação, galeria e contato, mantendo consistência visual e técnica.",
    stack: ["React", "TypeScript", "Next.js", "CSS", "SEO", "Conteúdo estruturado"],
    features: [
      "Arquitetura de conteúdo reutilizável",
      "Navegação responsiva",
      "Páginas orientadas a SEO",
      "Galeria e diretório de projetos",
      "Experiência mobile-first",
      "Componentes editoriais compartilhados",
    ],
    repositoryUrl:
      "https://github.com/leonardodariva/no-ritmo-academia-de-danca",
    visual: "dance",
    coverImage:
      "https://raw.githubusercontent.com/leonardodariva/no-ritmo-academia-de-danca/main/public/images/demo/danca-hero-noritmo.png",
    gallery: [
      "https://raw.githubusercontent.com/leonardodariva/no-ritmo-academia-de-danca/main/public/images/demo/aula-em-grupo-noritmo.png",
      "https://raw.githubusercontent.com/leonardodariva/no-ritmo-academia-de-danca/main/public/images/demo/movimento-detalhe-noritmo.png",
    ],
    featured: false,
  },
  {
    slug: "portfolio-dev",
    title: "Portfólio Dev",
    eyebrow: "Projeto pessoal · Experiência digital",
    year: "2026",
    summary:
      "Portfólio profissional para apresentar projetos, repertório de produto e a conexão entre design de interface e desenvolvimento front-end.",
    objective:
      "Criar uma presença digital autoral, clara e com espaço para mostrar tanto o resultado visual quanto as decisões técnicas por trás de cada entrega.",
    contribution:
      "Direção visual, arquitetura da informação, componentes responsivos e implementação da experiência completa.",
    challenge:
      "Equilibrar personalidade editorial, navegação simples e conteúdo suficiente para comunicar experiência sem tornar a página cansativa.",
    stack: ["Next.js", "React", "TypeScript", "Faktum", "SF Pro Text", "CSS"],
    features: ["Tema claro e escuro", "Navegação responsiva", "Projetos em destaque", "Currículo integrado"],
    repositoryUrl: siteConfig.github,
    visual: "portfolio",
    coverImage: "/project-portfolio.svg",
    gallery: ["/project-portfolio.svg"],
    featured: false,
  },
  {
    slug: "saas-psicologia",
    title: "SaaS Psicologia",
    eyebrow: "Em construção · Produto SaaS",
    year: "2026",
    summary:
      "Sistema em construção para organizar atendimentos, informações e rotinas de profissionais da psicologia em uma experiência mais clara.",
    objective:
      "Transformar uma rotina complexa em fluxos simples, seguros e fáceis de acompanhar no dia a dia.",
    contribution:
      "Conceito do produto, estrutura de interface e experimentação dos primeiros fluxos do sistema.",
    challenge:
      "Projetar uma base preparada para crescer com cuidado, privacidade e consistência entre diferentes áreas do produto.",
    stack: ["React", "TypeScript", "Next.js", "Design Systems", "APIs"],
    features: ["Painel de acompanhamento", "Fluxos de atendimento", "Organização de dados", "Produto em evolução"],
    repositoryUrl: siteConfig.github,
    visual: "saas",
    coverImage: "/project-psicologia.svg",
    gallery: ["/project-psicologia.svg"],
    featured: false,
  },
];

export const technologyGroups = [
  {
    title: "Interface",
    description: "Da semântica ao sistema de componentes.",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Engenharia",
    description: "Ferramentas para entregar com confiança.",
    items: ["Git", "GitHub", "Node.js", "Vite", "REST APIs", "Axios", "TanStack Query", "TanStack Router"],
  },
  {
    title: "Qualidade",
    description: "Comportamento verificado, não presumido.",
    items: ["Vitest", "Playwright", "TypeScript strict", "ESLint", "Acessibilidade", "Performance"],
  },
  {
    title: "Produto",
    description: "Um diferencial que aproxima código e pessoas.",
    items: ["Figma", "UI/UX", "Design Systems", "Prototipação", "UX Research", "PixiJS", "Socket.IO"],
  },
];

export const experience = [
  {
    company: "Futuro Corp",
    role: "UI/UX & Product Designer",
    period: "Atual",
    description:
      "Participação na definição e evolução de produtos digitais, conectando fluxos, componentes, experiência e validação com stakeholders.",
  },
  {
    company: "Glass Aplicativos e Softwares",
    role: "Desenvolvedor Web · UI/UX · Product Designer",
    period: "Experiência anterior",
    description:
      "Desenvolvimento de interfaces web, dashboards e páginas responsivas com HTML, CSS e JavaScript, além de arquitetura de informação, protótipos e contato com clientes.",
  },
];
