// src/data/projetos.ts
export type ProjetoTipo =
  | "landing-page"
  | "google-meu-negocio"
  | "bio-instagram"
  | "portfolio"
  | "rabelo-automacoes";

export interface Projeto {
  id: string;
  tipo: ProjetoTipo;

  // --- Campos usados no card de Landing/Portfólio ---
  nome?: string;   // nome do cliente (sempre exibido no card de LP/Portfólio)
  capa?: string;   // screenshot 16:9 da landing/portfólio
  nicho?: string;  // ex.: "Clínica Odontológica" (opcional)

  // --- Campos usados por outros componentes (ex.: CardProjeto “legado”) ---
  titulo: string;
  descricao_curta: string;
  imagem: string;       // ex: "/assets/projetos/meu-projeto-thumb.jpg"
  link?: string;        // link para case/site (opcional)
  resultado?: string;   // ex: "+62% cliques"
  selo?: string;        // ex: "Landing Page"
}

export const PROJETOS: Projeto[] = [
  {
    id: "lp-getison-araujo",
    tipo: "landing-page",

    // usados no card/portfólio
    nome: "Getison Araujo",
    nicho: "Comunicação Persuasiva",
    // 👉 arquivo de PÁGINA INTEIRA (landing)
    capa: "/assets/projetos/lp-getison-araujo.png",

    // campos “legado” (ok repetir a mesma imagem)
    titulo: "Getison Araujo",
    descricao_curta: "LP de captura com VSL.",
    imagem: "/assets/projetos/getison-araujo-lp-full.png",
    selo: "Landing Page",
    },

  {
    id: "lp-advocacia",
    tipo: "landing-page",

    // usados no card/portfólio
    nome: "Modelo Advocacia",
    nicho: "Advocacia",
    // 👉 arquivo de PÁGINA INTEIRA (landing)
    capa: "/assets/projetos/lp-advocacia.png",

    // campos “legado” (ok repetir a mesma imagem)
    titulo: "Modelo Advocacia",
    descricao_curta: "LP de captura com VSL.",
    imagem: "/assets/projetos/lp-advocacia.png",
    selo: "Landing Page",
  },

  {
    id: "lp-clínica-de-estética",
    tipo: "landing-page",

    // card de LP
    nome: "Modelo Clínica de Estética",
    capa: "/assets/projetos/lp-clinica-de-estetica.png",
    nicho: "Beleza e Estética",

    // legado (outros cards)
    titulo: "Modelo Clínica de Eestética",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/lp-clinica-de-estetica.png",
    selo: "Landing Page",
  },

  {
    id: "lp-pet",
    tipo: "landing-page",

    // card de LP
    nome: "Modelo Petshop",
    capa: "/assets/projetos/lp-pet.png",
    nicho: "Petshop",

    // legado (outros cards)
    titulo: "Modelo Petshop",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/lp-pet.png",
    selo: "Landing Page",
  },

  {
    id: "lp-nutri",
    tipo: "landing-page",

    // card de LP
    nome: "Modelo Nutricionista",
    capa: "/assets/projetos/lp-nutri.png",
    nicho: "Nutricionista",

    // legado (outros cards)
    titulo: "Modelo Nutricionista",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/lp-nutri.png",
    selo: "Landing Page",
  },

  {
    id: "lp-dentista",
    tipo: "landing-page",

    // card de LP
    nome: "Modelo Odontologia",
    capa: "/assets/projetos/lp-dentista.png",
    nicho: "Odontologia",

    // legado (outros cards)
    titulo: "Modelo Odontologia",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/lp-dentista.png",
    selo: "Landing Page",
  },

{
    id: "lp-barber",
    tipo: "landing-page",

    // card de LP
    nome: "Modelo Barbearia",
    capa: "/assets/projetos/lp-barber.png",
    nicho: "Barbearia",

    // legado (outros cards)
    titulo: "Modelo Barbearia",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/lp-barber.png",
    selo: "Landing Page",
  },

  {
    id: "lp-Contabilidade",
    tipo: "landing-page",

    // card de LP
    nome: "Modelo Contabilidade",
    capa: "/assets/projetos/lp-contabilidade.png",
    nicho: "Contabilidade",

    // legado (outros cards)
    titulo: "Modelo Contabilidade",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/lp-contabilidade.png",
    selo: "Landing Page",
  },

  {
    id: "lp-Contabilidade",
    tipo: "landing-page",

    // card de LP
    nome: "Modelo Hamburgueria",
    capa: "/assets/projetos/lp-hamburgueria.png",
    nicho: "Hamburgueria",

    // legado (outros cards)
    titulo: "Modelo Hamburgueria",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/lp-hamburgueria.png",
    selo: "Landing Page",
  },

  // 🔹 Portfólio profissional (carrossel da seção "Portfólio")
  {
    id: "portfolio-rabelo-digital",
    tipo: "portfolio",

    // usados no card/portfólio
    nome: "Rabelo Digital",
    nicho: "Marketing Digital",
    // 👉 screenshot do portfólio inteiro
    capa: "/assets/projetos/portfolio-rabelo-digital.png",

    // campos “legado”
    titulo: "Portfólio profissional – Rabelo Digital",
    descricao_curta:
      "Portfólio em link único com trabalhos, provas e contatos organizados.",
    imagem: "/assets/projetos/portfolio-rabelo-digital.png",
    selo: "Portfólio",
  },

  // pode adicionar mais itens aqui…
];



