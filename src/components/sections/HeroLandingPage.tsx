// src/components/sections/HeroLandingPage.tsx

export default function HeroLandingPage() {
  return (
    <>
      {/* HERO com degradê */}
      <section className="min-h-[560px] flex items-center text-white bg-gradient-to-br from-brand-900 via-[#0b224e] to-brand-300">
        <div className="w-full max-w-6xl mx-auto px-4 py-20">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm">
            Landing Page
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
  Páginas que atraem e vendem.
</h1>


          <p className="mt-3 max-w-2xl text-white/85">
            Design responsivo, copy e integrações com WhatsApp/CRM.
          </p>
        </div>
      </section>

      {/* BLOCO DESTACADO DO SERVIÇO (tint suave) */}
      <section className="rounded-3xl bg-brand-300/10 ring-1 ring-black/5 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <span className="inline-flex rounded-full bg-brand-300/30 text-brand-900 px-3 py-1 text-sm font-medium">
            Landing Page
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900">
            Páginas que atraem e vendem.
          </h2>

          {/* cards / bullets aqui */}
          {/* Exemplo:
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="rounded-2xl bg-white p-5 ring-1 ring-black/5">Layout moderno e rápido</li>
            <li className="rounded-2xl bg-white p-5 ring-1 ring-black/5">SEO básico e performance</li>
            <li className="rounded-2xl bg-white p-5 ring-1 ring-black/5">Provas sociais e CTA</li>
            <li className="rounded-2xl bg-white p-5 ring-1 ring-black/5">Integração com WhatsApp</li>
          </ul>
          */}
        </div>
      </section>
    </>
  );
}
    





