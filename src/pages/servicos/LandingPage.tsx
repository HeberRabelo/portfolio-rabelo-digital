// src/pages/servicos/LandingPage.tsx
import HeroLandingPage from "../../components/sections/HeroLandingPage";
import ServiceSection from "../../components/ServiceSection";

export default function LandingPageService() {
  return (
    <main data-page="landing">
      {/* Hero específico da página de serviço */}
      <HeroLandingPage />

      {/* Seção completa reusando o mesmo componente da Home
         -> evita duplicar carrossel/portfólio */}
      <ServiceSection
        id="landing-page"
        badge="Landing Page"
        titulo="Páginas que atraem e vendem."
        subtitulo="Transformamos visitas em conversas no WhatsApp — e conversas em vendas."
        bullets={[
          "Abre rápido no celular (sem travar sua internet).",
          "Botões e mensagens prontos para falar no WhatsApp na hora.",
          "Depoimentos e resultados para passar confiança imediata.",
          "Passo a passo simples de como comprar ou agendar, sem enrolação."
        ]}
        tipoProjeto="landing-page"
        depoimentoServico="landing-page"
        cta={{
          primaryHref:
            "https://wa.me/5575992590971?text=Quero%20uma%20Landing%20Page",
          primaryLabel: "Quero minha landing",
          secondaryHref: "https://SEU-CHECKOUT",
          secondaryLabel: "Contratar agora",
        }}
      />
    </main>
  );
}




