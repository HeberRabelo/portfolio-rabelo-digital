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

  // --- Campos usados no card de Landing ---
  nome?: string;   // nome do cliente (sempre exibido no card de LP)
  capa?: string;   // screenshot 16:9 da landing
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
  // 👉 arquivo de PÁGINA INTEIRA
  capa: "/assets/projetos/getison-araujo-lp-full.png",

  // campos “legado” (ok repetir a mesma imagem)
  titulo: "Getison Araujo",
  descricao_curta: "LP de captura com VSL.",
  imagem: "/assets/projetos/getison-araujo-lp-full.png",
  selo: "Landing Page",
},
      {
    id: "marina-costa",
    tipo: "landing-page",

    // card de LP
    nome: "Marina Costa",
    capa: "/assets/projetos/marina-costa-lp.jpg",
    nicho: "Beleza e Estética",

    // legado (outros cards)
    titulo: "Marina Costa",
    descricao_curta: "LP focada em agendamentos pelo WhatsApp.",
    imagem: "/assets/projetos/marina-costa-thumb.jpg",
    selo: "Landing Page",
  },

  // pode adicionar mais itens aqui…
];


