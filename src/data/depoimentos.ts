// src/data/depoimentos.ts

// chaves de serviço aceitas nas seções
export type ServicoKey =
  | "landing-page"
  | "google-meu-negocio"
  | "bio-instagram"
  | "portfolio"
  | "rabelo-automacoes";

export interface Depoimento {
  id: string;
  autor: string;
  cargo?: string;
  texto: string;
  avatar?: string;
  servico: ServicoKey; // <- IMPORTANTE
}

export const DEPOIMENTOS: Depoimento[] = [
  // --- Landing Page ---
  {
    id: "d1",
    autor: "Maria Souza",
    cargo: "Dentista",
    texto: "A landing page ficou incrível e já comecei a receber mais contatos!",
    avatar: "/assets/avatars/maria.jpg",
    servico: "landing-page",
  },

  // --- Google Meu Negócio (GMN) ---
  {
    id: "d2",
    autor: "João Lima",
    cargo: "Padaria Sabor",
    texto: "O Google Meu Negócio foi otimizado e o telefone não para de tocar.",
    avatar: "/assets/avatars/joao.jpg",
    servico: "google-meu-negocio",
  },
  {
    id: "gmb-1",
    servico: "google-meu-negocio",
    texto:
      "Eu só aprovava as sugestões. Em poucas semanas já tínhamos mais ligações e rotas. Ficou fácil para o cliente achar e falar com a gente.",
    autor: "Mariana Souza",
    cargo: "Clínica Odontológica",
    // avatar opcional: ex. "/assets/avatars/mariana.jpg"
  },
  {
    id: "gmb-2",
    servico: "google-meu-negocio",
    texto:
      "Nada de promessas milagrosas — só o básico bem feito. Horários, fotos e categorias certas. Hoje recebo mensagens direto do perfil.",
    autor: "Rafael Lima",
    cargo: "Assistência Técnica",
  },
  {
    id: "gmb-3",
    servico: "google-meu-negocio",
    texto:
      "Gostei da transparência. Eles cuidam, me mostram o que mudou e eu só aprovo. As avaliações vieram com naturalidade e ajudaram muito.",
    autor: "Patrícia Almeida",
    cargo: "Estúdio de Beleza",
  },

  // --- Bio Instagram (3 itens para o carrossel girar) ---
  {
    id: "bio-1",
    autor: "Teste",
    cargo: "Empresa do Futuro",
    texto: "O mini site tem feito grande diferença no meu perfil do Instagram.",
    avatar: "/assets/avatars/joao.jpg",
    servico: "bio-instagram",
  },
  {
    id: "bio-2",
    autor: "Ana Luiza",
    cargo: "Studio Ana",
    texto:
      "Centralizei WhatsApp, ofertas e localização. As conversões aumentaram.",
    avatar: "/assets/avatars/ana.jpg",
    servico: "bio-instagram",
  },
  {
    id: "bio-3",
    autor: "Carlos Nunes",
    cargo: "Clínica Vitta",
    texto:
      "Com o mini site na bio ficou fácil falar no WhatsApp e agendar consultas.",
    avatar: "/assets/avatars/carlos.jpg",
    servico: "bio-instagram",
  },

  // --- Exemplos extras (opcionais) ---
  // {
  //   id: "d4",
  //   autor: "Ana Ribeiro",
  //   cargo: "Consultora",
  //   texto: "Apresentar meu trabalho em um portfólio único aumentou as conversões.",
  //   avatar: "/assets/avatars/ana.jpg",
  //   servico: "portfolio",
  // },
  // {
  //   id: "d5",
  //   autor: "Carlos A.",
  //   cargo: "E-commerce",
  //   texto: "As automações reduziram o tempo de resposta e aumentaram as vendas.",
  //   avatar: "/assets/avatars/carlos.jpg",
  //   servico: "rabelo-automacoes",
  // },
];

    

