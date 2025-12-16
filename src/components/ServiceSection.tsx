// src/components/ServiceSection.tsx
import type React from "react";
import { useMemo, useState, useEffect, useRef } from "react";
import Depoimentos from "@/components/Depoimentos";
import CardProjeto from "@/components/CardProjeto";
import { PROJETOS } from "@/data/projetos";

type TipoProjeto =
  | "landing-page"
  | "google-meu-negocio"
  | "bio-instagram"
  | "portfolio"
  | "rabelo-automacoes";

type KPI = { label: string; value: string; hint?: string };

type Props = {
  id: string;
  badge?: string;
  titulo: string;
  subtitulo?: string;
  bullets: string[];
  kpis?: KPI[];
  tipoProjeto?: TipoProjeto;
  maxProjetos?: number;
  depoimentoServico?: string;
  /** skins: azul claro, azul escuro, branco e acento (Rabelo Automações) */
  variant?: "sky" | "navy" | "white" | "accent" | "aqua";
  cta: {
    primaryHref: string;
    primaryLabel: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
  /** Logos (opcionais) */
  logosTitle?: string;
  logos?: string[];
};

/**
 * Se o link for de WhatsApp (wa.me ou whatsapp.com) e ainda NÃO tiver ?text=,
 * adiciona a mensagem de gatilho automaticamente.
 */
function buildWhatsAppUrl(href: string, message: string): string {
  if (!href) return href;

  const isWhats = href.includes("wa.me") || href.includes("whatsapp.com");
  if (!isWhats) return href;
  if (href.includes("text=")) return href; // já tem mensagem, não mexe

  const sep = href.includes("?") ? "&" : "?";
  return `${href}${sep}text=${encodeURIComponent(message)}`;
}

export default function ServiceSection({
  id,
  badge,
  titulo,
  subtitulo,
  bullets,
  kpis,
  tipoProjeto,
  maxProjetos = 10, // 👈 agora o padrão é 10 em vez de 3
  depoimentoServico,
  variant = "sky",
  cta,
  logosTitle,
  logos,
}: Props) {
  // ---- estado do carrossel/preview ----
  const [projIdx, setProjIdx] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);

  const projetos = useMemo(() => {
    if (!tipoProjeto) return [];

    // 🔁 Fallback: se for "portfolio" e ainda não existirem projetos
    // desse tipo, reaproveita os de "landing-page"
    let tipoFiltro: TipoProjeto = tipoProjeto;
    if (tipoProjeto === "portfolio") {
      const hasPortfolio = PROJETOS.some((p) => p.tipo === "portfolio");
      if (!hasPortfolio) {
        tipoFiltro = "landing-page";
      }
    }

    return PROJETOS.filter((p) => p.tipo === tipoFiltro).slice(0, maxProjetos);
  }, [tipoProjeto, maxProjetos]);

  useEffect(() => setProjIdx(0), [projetos.length]);

  // autoplay: pausa quando o lightbox está aberto
  useEffect(() => {
    if (preview) return;
    if (projetos.length < 2) return;
    const id = setInterval(
      () => setProjIdx((i) => (i + 1) % projetos.length),
      6000
    );
    return () => clearInterval(id);
  }, [projetos.length, preview]);

  // travar o body quando o lightbox abre
  useEffect(() => {
    if (!preview) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [preview]);

  // fechar com ESC
  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  // ----------------- ZOOM/PAN do LIGHTBOX -----------------
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const resetView = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  };
  const zoomBy = (delta: number) => {
    setScale((s) => Number(Math.min(5, Math.max(0.5, s + delta)).toFixed(2)));
  };
  const onWheelZoom: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    zoomBy(e.deltaY > 0 ? -0.1 : 0.1);
  };
  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };
    setPos((p) => ({ x: p.x + dx, y: p.y + dy }));
  };
  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
    dragging.current = false;
  };
  const onDoubleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setScale((s) => (s === 1 ? 2 : 1));
    if (scale !== 1) setPos({ x: 0, y: 0 });
  };
  useEffect(() => {
    resetView();
  }, [preview]);

  // --------- classes por variant ----------
  const isNavy = variant === "navy";
  const isAqua = variant === "aqua";
  const isAccent = variant === "accent";
  const isDark = isNavy || isAqua || isAccent;

  const wrapCls =
    isNavy
      ? "section-navy"
      : isAqua
      ? "section-aqua"
      : isAccent
      ? "section-accent"
      : variant === "white"
      ? "rounded-3xl ring-1 ring-black/5 bg-white"
      : "section-sky";

  const badgeCls = isDark
    ? "inline-flex rounded-full bg-white/15 text-white px-3 py-1 text-sm font-medium"
    : "inline-flex rounded-full bg-white/60 text-brand-900 px-3 py-1 text-sm font-medium";

  const titleCls = isDark
    ? "mt-3 text-3xl sm:text-4xl font-extrabold text-white"
    : "mt-3 text-3xl sm:text-4xl font-extrabold text-brand-900";

  const subCls = isDark
    ? "mt-2 max-w-3xl text-white/85"
    : "mt-2 max-w-3xl text-brand-900";

  const bulletItemCls = isDark
    ? "flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-3 shadow-sm text-white"
    : "flex items-start gap-3 rounded-xl border border-white/30 bg-white/80 p-3 shadow-sm text-slate-900";

  const kpiCardCls = isDark
    ? "rounded-2xl border border-white/15 bg-white/10 p-5"
    : "rounded-2xl border border-white/20 bg-white/60 p-5";
  const kpiValueCls = isDark
    ? "text-2xl font-extrabold text-white"
    : "text-2xl font-extrabold text-brand-900";
  const kpiLabelCls = isDark ? "text-white/85" : "text-brand-900";
  const kpiHintCls = isDark
    ? "mt-1 text-xs text-white/60"
    : "mt-1 text-xs text-brand-900/70";

  const heading3Cls = isDark
    ? "mb-4 text-xl font-semibold text-white"
    : "mb-4 text-xl font-semibold text-brand-900";

  const emptyTextCls = isDark
    ? "rounded-2xl border border-dashed p-6 text-white/80"
    : "rounded-2xl border border-dashed p-6 text-brand-900";

  const ctaSecondaryCls = isDark
    ? "w-full sm:w-auto rounded-full border border-white/25 px-5 py-3 text-center font-semibold text-white hover:bg-white/10"
    : "w-full sm:w-auto rounded-full border border-white/30 bg-white/50 px-5 py-3 text-center font-semibold text-brand-900 hover:bg-white/60";

  // ✅ cor dinâmica do botão principal (laranja no Rabelo Automações)
  const primaryBase =
    "w-full sm:w-auto rounded-full px-5 py-3 text-center font-semibold text-white shadow";
  const primaryBtnCls =
    tipoProjeto === "rabelo-automacoes"
      ? `${primaryBase} bg-orange-500 hover:bg-orange-600`
      : `${primaryBase} bg-green-500 hover:bg-green-600`;

  // ✅ Mensagem padrão de gatilho por tipo de serviço
  const defaultWhatsMessage =
    tipoProjeto === "landing-page"
      ? "Oi, Heber! Quero uma landing page para meu negócio."
      : tipoProjeto === "google-meu-negocio"
      ? "Oi, Heber! Quero melhorar a presença do meu negócio no Google."
      : tipoProjeto === "bio-instagram"
      ? "Oi, Heber! Quero um mini site na bio do Instagram."
      : tipoProjeto === "portfolio"
      ? "Oi, Heber! Quero um portfólio profissional."
      : tipoProjeto === "rabelo-automacoes"
      ? "Oi, Heber! Quero implementar automações para meu atendimento e vendas."
      : "Oi, Heber! Vim pelo seu portfólio e quero ajuda com minha presença online.";

  const isCarouselTipo =
    tipoProjeto === "landing-page" || tipoProjeto === "portfolio";

  // ---------------------------------------

  return (
    <section id={id} className={`mt-10 ${wrapCls}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        {/* Header */}
        <div>
          {badge && <span className={badgeCls}>{badge}</span>}
          <h2 className={titleCls}>{titulo}</h2>
          {subtitulo && <p className={subCls}>{subtitulo}</p>}
        </div>

        {/* Benefícios */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {bullets.map((b, i) => (
            <li key={i} className={bulletItemCls}>
              <Check
                className={
                  isDark
                    ? "mt-1 h-5 w-5 flex-none text-green-300"
                    : "mt-1 h-5 w-5 flex-none text-green-600"
                }
              />
              <span className={isDark ? "text-white" : "text-brand-900"}>
                {b}
              </span>
            </li>
          ))}
        </ul>

        {/* Logos Marquee opcional */}
        {logos && logos.length > 0 && (
          <div className="space-y-3">
            {logosTitle && (
              <h3 className={heading3Cls + " text-center"}>{logosTitle}</h3>
            )}
            <div
              className="logo-marquee mx-auto"
              style={
                {
                  ["--h" as any]: "56px",
                  ["--gap" as any]: "64px",
                  ["--speed" as any]: "26s",
                  maxWidth: "980px",
                } as React.CSSProperties
              }
            >
              <div className="logo-track">
                {[...logos, ...logos].map((src, i) => (
                  <img key={i} src={src} alt="" className="logo-item" />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KPIs */}
        {kpis && kpis.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k, i) => (
              <div key={i} className={kpiCardCls}>
                <div className={kpiValueCls}>{k.value}</div>
                <div className={kpiLabelCls}>{k.label}</div>
                {k.hint && <div className={kpiHintCls}>{k.hint}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Portfólio / Grid de projetos */}
        {tipoProjeto && (
          <div>
            <h3 className={heading3Cls}>Alguns Trabalhos</h3>
            {projetos.length > 0 ? (
              isCarouselTipo ? (
                <>
                  {(() => {
                    const p: any = projetos[projIdx] ?? {};

                    const categoriaLabel =
                      tipoProjeto === "landing-page"
                        ? "Landing page"
                        : "Portfólio profissional";

                    const ctaLabel =
                      tipoProjeto === "landing-page"
                        ? "Quero para meu negócio"
                        : "Quero um portfólio assim";

                    const whatsText =
                      tipoProjeto === "landing-page"
                        ? `Quero uma landing para meu negócio, no estilo de ${
                            p.nome ?? "este exemplo"
                          }`
                        : `Quero um portfólio profissional como o de ${
                            p.nome ?? "este exemplo"
                          }`;

                    return (
                      <article className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm max-w-3xl mx-auto">
                        <div className="relative w-full h-64 md:h-96 overflow-hidden bg-gray-100">
                          {p.capa ? (
                            <img
                              src={p.capa}
                              alt={p.nome ?? p.titulo ?? categoriaLabel}
                              className="absolute inset-0 h-full w-full object-cover object-top"
                              loading="lazy"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                          )}
                        </div>

                        <div className="p-4">
                          <div className="text-[11px] uppercase tracking-wide text-gray-500">
                            {categoriaLabel}
                          </div>
                          <div className="mt-1 text-lg font-semibold text-gray-900">
                            {p.nome ?? p.titulo ?? "Cliente"}
                          </div>
                          {p.nicho && (
                            <div className="text-gray-500">{p.nicho}</div>
                          )}

                          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                            <button
                              type="button"
                              onClick={() => p.capa && setPreview(p.capa)}
                              className="rounded-full border px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-50"
                            >
                              Ver imagens
                            </button>
                            <a
                              href={`https://wa.me/5575992590971?text=${encodeURIComponent(
                                whatsText
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full bg-green-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-green-600"
                            >
                              {ctaLabel}
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })()}

                  <div className="mt-3 flex items-center justify-center gap-2">
                    {projetos.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Ir para projeto ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition-all ${
                          i === projIdx ? "bg-gray-800" : "bg-gray-300"
                        }`}
                        onClick={() => setProjIdx(i)}
                      />
                    ))}
                  </div>

                  {preview && (
                    <div
                      className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-2 md:p-4"
                      onClick={() => setPreview(null)}
                      role="dialog"
                      aria-modal="true"
                    >
                      <div
                        className="relative max-h-[95vh] max-w-[95vw] select-none"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={onWheelZoom}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseUp}
                        onDoubleClick={onDoubleClick}
                        style={{
                          cursor: dragging.current
                            ? ("grabbing" as const)
                            : ("grab" as const),
                        }}
                      >
                        <button
                          className="absolute right-2 top-2 z-[81] rounded-full bg-black/60 px-3 py-1 text-white text-sm"
                          onClick={() => setPreview(null)}
                          aria-label="Fechar"
                        >
                          ✕
                        </button>
                        <img
                          src={preview}
                          alt="Prévia"
                          className="block max-h-[95vh] max-w-[95vw] w-auto h-auto object-contain rounded"
                          style={{
                            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projetos.map((p) => (
                    <CardProjeto key={p.id} projeto={p} />
                  ))}
                </div>
              )
            ) : (
              <div className={emptyTextCls}>
                Em breve publicaremos estudos de caso deste serviço.
              </div>
            )}
          </div>
        )}

        {/* Depoimentos */}
        {depoimentoServico && (
          <div className="pb-2 sm:pb-0">
            <Depoimentos servico={depoimentoServico as any} autoMs={5000} />
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* CTA principal com mensagem automática se for WhatsApp */}
          <a
            href={buildWhatsAppUrl(cta.primaryHref, defaultWhatsMessage)}
            target="_blank"
            rel="noreferrer"
            className={primaryBtnCls}
          >
            {cta.primaryLabel}
          </a>

          {cta.secondaryHref && cta.secondaryLabel && (
            <a
              href={buildWhatsAppUrl(cta.secondaryHref, defaultWhatsMessage)}
              target="_blank"
              rel="noreferrer"
              className={ctaSecondaryCls}
            >
              {cta.secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function Check({
  className = "mt-1 h-5 w-5 flex-none text-green-600",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 10.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

































