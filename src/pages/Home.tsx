// src/pages/Home.tsx
import ServiceSection from "@/components/ServiceSection";
import logo1 from "@/assets/logos/logo.png";
import logo2 from "@/assets/logos/react.svg";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section
        className="w-full border-b text-white/95"
        style={{
          background:
            "linear-gradient(135deg,#00134b 0%,#0b224e 40%,#113f6e 70%,#90cafb 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
            <span className="rounded-full border border-white/20 px-3 py-1">
              Portfólio
            </span>
            <span>•</span>
            <span>Rabelo Digital</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Presença online ativa: mais clientes, mais vendas, mais faturamento.
          </h1>

          <p className="mt-3 max-w-3xl text-white/85">
            Um ecossistema simples que trabalha por você: página rápida, Google
            que te encontra, bio integrada e automações — do clique à conversa e
            da conversa à venda.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5575992590971?text=Quero%20uma%20presen%C3%A7a%20online%20ativa%20para%20atrair%20clientes%20e%20vendas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-600"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Menu de seções — Âncoras */}
      <nav
        aria-label="Seções"
        className="sticky top-[64px] z-40 border-y bg-gradient-to-b from-sky-50 to-sky-100"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex gap-8 text-sm">
          <a href="#landing-page" className="hover:opacity-80">
            Landing Page
          </a>
          <a href="#google-meu-negocio" className="hover:opacity-80">
            GMN
          </a>
          <a href="#bio-ig" className="hover:opacity-80">
            Bio Instagram
          </a>
          <a href="#portfolio" className="hover:opacity-80">
            Portfólio
          </a>
          <a href="#rabelo-automacoes" className="hover:opacity-80">
            Rabelo Automações
          </a>
        </div>
      </nav>

      {/* 1) Landing Page */}
      <ServiceSection
        variant="sky"
        id="landing-page"
        badge="Landing Page"
        titulo="Páginas que atraem e vendem."
        subtitulo="Transformamos visitas em conversas no WhatsApp — e conversas em vendas."
        bullets={[
          "Abre rápido no celular (sem travar sua internet).",
          "Botões e mensagens prontos para falar no WhatsApp na hora.",
          "Depoimentos e resultados para passar confiança imediata.",
          "Passo a passo simples de como comprar ou agendar, sem enrolação.",
        ]}
        tipoProjeto="landing-page"
        depoimentoServico="landing-page"
        cta={{
          primaryHref:
            "https://wa.me/5575992590971?text=Quero%20uma%20Landing%20Page",
          primaryLabel: "Quero vender assim também",
          secondaryHref: "https://mpago.la/1W2f5EJ",
          secondaryLabel: "Contratar agora",
        }}
      />

      {/* 2) GMN */}
      <ServiceSection
        variant="navy"
        id="google-meu-negocio"
        badge="Google Meu Negócio"
        titulo="Colocamos sua empresa no mapa do Google e transformamos sua presença local em ligações e visitas."
        subtitulo="Perfil configurado para ser encontrado, passar confiança e receber contatos — sem complicação."
        bullets={[
          "Dados corretos e iguais em todo lugar (endereço, horários, telefone).",
          "Cliente fala em 1 clique: Ligar, Rotas e WhatsApp bem visíveis.",
          "Mais confiança com fotos reais e avaliações guiadas.",
          "Você não para: nós atualizamos, você só aprova.",
        ]}
        kpis={[
          { value: "4,8★", label: "Média de avaliações" },
          { value: "+35%", label: "Ligações (30 dias)" },
          { value: "+62%", label: "Visitas ao site (30 dias)" },
          { value: "TOP 3", label: "Mais destaque local" },
        ]}
        depoimentoServico="google-meu-negocio"
        cta={{
          primaryHref:
            "https://wa.me/5575992590971?text=Quero%20otimizar%20meu%20GMN",
          primaryLabel: "Quero chegar no topo das pesquisas",
        }}
      />

      {/* 3) Bio Instagram */}
      <ServiceSection
        variant="sky"
        id="bio-ig"
        badge="Bio Instagram"
        titulo="Um mini site na bio que guia o cliente em 1 clique."
        subtitulo="Conecte o visitante ao WhatsApp, produtos e Google — num atalho claro para vendas: leve e rastreável."
        bullets={[
          "Centralize tudo em 1 link: WhatsApp, ofertas e localização.",
          "Carregue rápido: navegação fluida até no 4G.",
          "WhatsApp em 1 toque: transforme visitas em conversas.",
          "Dá trabalho manter? Você envia as novidades; nós atualizamos.",
        ]}
        depoimentoServico="bio-instagram"
        logosTitle="Empresas que confiam"
        logos={[logo1, logo2]}
        cta={{
          primaryHref:
            "https://wa.me/5575992590971?text=Quero%20meu%20mini%20site%20na%20bio",
          primaryLabel: "Quero meu mini site na bio",
          secondaryHref: "https://mpago.la/1NFabxk",
          secondaryLabel: "Contratar agora",
        }}
      />

      {/* 4) Portfólio */}
      <ServiceSection
        variant="navy"
        id="portfolio"
        badge="Portfólio"
        titulo="Reúna sua trajetória profissional em um único link, pronto para enviar."
        subtitulo="Seus trabalhos, depoimentos e contatos organizados numa página bonita, confiável e fácil de atualizar."
        bullets={[
          "Um link com tudo: serviços, trabalhos e depoimentos.",
          "Fácil de enviar por WhatsApp, QR Code e redes sociais.",
          "Visual profissional, leve e pensado para celular.",
          "Você manda as novidades, nós mantemos atualizado.",
        ]}
        tipoProjeto="portfolio"
        depoimentoServico="portfolio"
        cta={{
          primaryHref:
            "https://wa.me/5575992590971?text=Quero%20um%20portf%C3%B3lio%20profissional",
          primaryLabel: "Quero meu Link Único",
          secondaryHref: "https://mpago.la/1wgJRKm",
          secondaryLabel: "Contratar agora",
        }}
      />

      {/* 5) Rabelo Automações */}
      <ServiceSection
        variant="aqua"
        id="rabelo-automacoes"
        badge="Rabelo Automações"
        titulo="Agentes de IA que falam como você: atendem, qualificam e encaminham 24h."
        subtitulo="Você define o tom; treinamos com seus materiais. Atendimento 24h no WhatsApp/site, lembretes e passagem para humano quando preciso."
        bullets={[
          "Primeiro contato automático, inclusive fora do horário.",
          "Qualifica e direciona para a pessoa certa do time.",
          "Lembretes/retomadas sem parecer robótico.",
          "Humano assume em 1 clique quando precisar.",
        ]}
        kpis={[
          { value: "-70%", label: "Tempo de resposta" },
          { value: "+28%", label: "Conversas retomadas" },
          { value: "24/7", label: "Disponibilidade" },
        ]}
        depoimentoServico="rabelo-automacoes"
        cta={{
          primaryHref:
            "https://wa.me/5575992590971?text=Quero%20automatizar%20meu%20atendimento",
          primaryLabel: "Quero automatizar meu atendimento",
        }}
      />
    </main>
  );
}





















    






