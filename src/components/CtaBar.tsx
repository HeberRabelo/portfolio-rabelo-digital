export default function CtaBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-2xl bg-navy-800 p-6 text-white">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Pronto para destravar seus resultados?</h3>
            <p className="text-white/80">Fale direto no WhatsApp ou contrate agora.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/5575991904195?text=Quero%20um%20or%C3%A7amento"
              target="_blank" rel="noopener"
              className="inline-flex items-center rounded-full bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://SEU-CHECKOUT" target="_blank" rel="noopener"
              className="inline-flex items-center rounded-full bg-white px-5 py-3 font-semibold text-navy-800 hover:bg-white/90"
            >
              Contratar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


