// src/components/Depoimentos.tsx
import { useEffect, useMemo, useState } from "react";
import { DEPOIMENTOS, type ServicoKey } from "@/data/depoimentos";

type Props = {
  /** filtra por serviço; se não passar, mostra todos */
  servico?: ServicoKey;
  /** tempo entre trocas (ms). 0 desliga autoplay */
  autoMs?: number;
};

export default function Depoimentos({ servico, autoMs = 3500 }: Props) {
  const itens = useMemo(
    () => (servico ? DEPOIMENTOS.filter((d) => d.servico === servico) : DEPOIMENTOS),
    [servico]
  );
  if (!itens || itens.length === 0) return null;

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // autoplay (pausa no hover)
  useEffect(() => {
    if (autoMs <= 0 || itens.length < 2 || paused) return;
    const id = setInterval(() => setIdx((v) => (v + 1) % itens.length), autoMs);
    return () => clearInterval(id);
  }, [autoMs, itens.length, paused]);

  const go = (dir: number) => setIdx((v) => (v + dir + itens.length) % itens.length);
  const d = itens[idx];

  return (
    <div
      className="mx-auto max-w-4xl rounded-2xl border border-gray-100 bg-white p-6 shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* topo: grupo invisível (espaçador) • texto central • setas reais */}
      <div className="mb-3 flex items-start justify-between">
        {/* espaçador com largura idêntica ao grupo de setas */}
        <div className="invisible flex items-center gap-1">
          <button className="rounded-md px-2 py-1">‹</button>
          <button className="rounded-md px-2 py-1">›</button>
        </div>

        {/* texto centralizado */}
        <div className="flex-1 text-center">
          <div className="font-semibold text-gray-900">{d.autor}</div>
          {d.cargo && <div className="text-sm text-gray-500">{d.cargo}</div>}
        </div>

        {/* setas reais */}
        {itens.length > 1 ? (
          <div className="flex items-center gap-1">
            <button
              aria-label="Anterior"
              className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50"
              onClick={() => go(-1)}
            >
              ‹
            </button>
            <button
              aria-label="Próximo"
              className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50"
              onClick={() => go(+1)}
            >
              ›
            </button>
          </div>
        ) : (
          // quando não há setas, mantém equilíbrio visual
          <div className="w-[64px]" />
        )}
      </div>

      {/* texto */}
      <p className="leading-relaxed text-gray-700">“{d.texto}”</p>

      {/* dots */}
      {itens.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {itens.map((_, i) => (
            <button
              key={i}
              aria-label={`ir para depoimento ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === idx ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}








