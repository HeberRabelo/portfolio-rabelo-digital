// src/components/Faq.tsx
import React from "react";

const FAQS = [
  {
    categoria: "Landing Page",
    itens: [
      {
        q: "Qual a diferença entre landing page e site completo?",
        a: "Landing page é uma página única focada em converter (capturar leads ou vendas). Um site completo tem várias páginas e objetivos variados. Para campanhas e ofertas, a landing converte mais."
      },
      {
        q: "Em quanto tempo fica pronta?",
        a: "Geralmente de 7 a 15 dias após recebermos textos, imagens e a oferta. Projetos simples podem sair antes."
      },
      {
        q: "Já vem integrada com WhatsApp e pixel?",
        a: "Sim. Configuramos seus CTAs com WhatsApp/checkout, adicionamos pixel/meta tag e configuramos eventos básicos."
      },
      {
        q: "Preciso de manutenção mensal?",
        a: "Não é obrigatório. Mas recomendamos um plano leve para otimizações de conversão e pequenos ajustes conforme seus resultados."
      }
    ]
  },
  {
    categoria: "Google Meu Negócio",
    itens: [
      {
        q: "O que vocês fazem no Google Meu Negócio?",
        a: "Criamos ou otimizamos o perfil, cadastramos categorias, serviços, fotos, realizamos ajustes de SEO local e orientamos o roteiro de reviews."
      },
      {
        q: "Em quanto tempo aparecem resultados?",
        a: "Melhorias de posição e ligações costumam aparecer entre 2 e 8 semanas, dependendo de concorrência e consistência dos dados."
      },
      {
        q: "Preciso postar toda semana?",
        a: "Postagens ajudam, mas o básico (dados consistentes, fotos e reviews) já gera impacto. Se puder postar 1x/semana, melhor."
      },
      {
        q: "Vocês ajudam com avaliações dos clientes?",
        a: "Sim. Entregamos roteiro e materiais para solicitar avaliações sem infringir políticas do Google."
      }
    ]
  },
  {
    categoria: "Portfólio",
    itens: [
      {
        q: "Qual a vantagem de ter um portfólio online?",
        a: "Prova social. Você mostra resultados e aumenta a confiança do cliente, encurtando o ciclo de venda."
      },
      {
        q: "Posso atualizar os projetos depois?",
        a: "Sim. Entregamos o projeto organizado para você adicionar novos cases e métricas com facilidade."
      },
      {
        q: "Dá para integrar com WhatsApp e agendamento?",
        a: "Sim. Inserimos botões para WhatsApp, formulários, calendly ou o sistema de sua preferência."
      },
      {
        q: "E se eu ainda não tiver cases?",
        a: "Podemos montar um portfólio ‘seed’ com estudos de caso e amostras, deixando a estrutura pronta para seus futuros resultados."
      }
    ]
  },
  {
    categoria: "Mini Site na Bio",
    itens: [
      {
        q: "Por que um mini site na bio é melhor que um link único?",
        a: "Você controla a jornada: destaque promoções, captação de leads, WhatsApp, materiais e produtos em uma página rápida e leve."
      },
      {
        q: "Funciona bem no celular?",
        a: "Sim. É pensado mobile-first, com carregamento rápido e botões grandes para cliques fáceis."
      },
      {
        q: "Posso mudar os links sempre que quiser?",
        a: "Pode. A estrutura facilita reorganizar botões e destaques conforme suas campanhas."
      },
      {
        q: "Dá para medir cliques?",
        a: "Sim. Configuramos UTM/pixel para você medir CTR, origem e conversões."
      }
    ]
  },
  {
    categoria: "Rabelo Automações",
    itens: [
      {
        q: "O que exatamente vocês automatizam?",
        a: "Fluxos de WhatsApp e e-mail: follow-up, recuperação de carrinho, confirmação de agendamento, nutrição de leads e mensagens condicionais."
      },
      {
        q: "Isso substitui atendimento humano?",
        a: "Não. A automação filtra e adianta o atendimento. Quando precisa de humano, a conversa é passada para você com contexto."
      },
      {
        q: "Quais resultados posso esperar?",
        a: "Em geral: mais respostas, menos tempo perdido e aumento de conversão. Muitos clientes veem +20% a +40% em respostas/fechamentos."
      },
      {
        q: "É complicado de manter?",
        a: "Nós deixamos os fluxos documentados e fáceis de editar. Se preferir, oferecemos plano de suporte para evoluir seus fluxos com base nos dados."
      }
    ]
  }
];

export default function Faq() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Perguntas frequentes</h2>
      <div className="space-y-10">
        {FAQS.map((bloco) => (
          <div key={bloco.categoria}>
            <h3 className="text-xl font-semibold mb-4">{bloco.categoria}</h3>
            <div className="space-y-3">
              {bloco.itens.map((i, idx) => (
                <details key={idx} className="rounded-lg border p-4">
                  <summary className="cursor-pointer font-medium">{i.q}</summary>
                  <p className="mt-2 text-gray-700">{i.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




