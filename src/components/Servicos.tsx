import { Globe, Search, LinkIcon, Workflow } from "lucide-react";

const itens = [
  {
    icon: Globe,
    titulo: "Landing Pages",
    bullets: [
      "Design responsivo e moderno",
      "Foco em conversão (copy + UX)",
      "Integração com WhatsApp/CRM"
    ],
  },
  {
    icon: Search,
    titulo: "Google Meu Negócio",
    bullets: [
      "Configuração completa do perfil",
      "Roteiro de reviews e fotos",
      "SEO local para destaque"
    ],
  },
  {
    icon: LinkIcon,
    titulo: "Bio Instagram",
    bullets: [
      "Mini site com vários CTAs",
      "Materiais, produtos e agenda",
      "Captura de leads"
    ],
  },
  {
    icon: Workflow,
    titulo: "Automações",
    bullets: [
      "WhatsApp + E-mail + Planilhas",
      "Follow-up automático",
      "Relatórios de desempenho"
    ],
  },
];

eexport default function Servicos() {
  const cards = [
    {
      titulo: "Landing Pages",
      texto: "Páginas bonitas — e feitas para converter. Integração com WhatsApp, formulários e pixel.",
      items: ["Design responsivo", "Velocidade alta (Vite + Tailwind)", "SEO on-page básico"],
    },
    {
      titulo: "Google Meu Negócio (GMB)",
      texto: "Colocamos sua empresa no mapa do Google e no topo das buscas locais.",
      items: ["Configuração completa", "Otimização de perfil", "Estratégia de reviews"],
    },
    {
      titulo: "Portfólio",
      texto: "Mostre seus projetos e resultados reais com um layout que inspira confiança.",
      items: ["Filtros por serviço", "Cards com métricas", "Links de prova"],
    },
    {
      titulo: "Mini Site na Bio (Instagram)",
      texto: "Um hub de links com CTA’s estratégicos para materiais, produtos e contatos.",
      items: ["CTR alto no WhatsApp", "Rápido e leve", "Marca personalizada"],
    },
    {
      titulo: "Rabelo Automações",
      texto: "Fluxos automáticos para leads e clientes via WhatsApp, e-mail e planilhas.",
      items: ["Follow-up automático", "Recuperação de carrinho", "Notificações e relatórios"],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight">Nossos Serviços</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.titulo} className="rounded-2xl border bg-white p-6 shadow-card">
            <h3 className="text-xl font-semibold">{c.titulo}</h3>
            <p className="mt-2 text-gray-600">{c.texto}</p>
            <ul className="mt-4 space-y-1 text-sm text-gray-700">
              {c.items.map((i) => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


