// src/components/Depoimentos.tsx
import { useEffect, useState } from "react";

type Depoimento = {
  nome: string;          // nome do especialista
  especialidade: string; // área / especialidade
  frase: string;         // frase sobre o tema
};

type Props = {
  servico: string;   // ex: "landing-page", "google-meu-negocio" etc.
  autoMs?: number;   // tempo do autoplay em ms
};

// 🔁 Frases de especialistas por serviço
const depoimentosPorServico: Record<string, Depoimento[]> = {
  // 1) Landing Page
  "landing-page": [
    {
      nome: "David Ogilvy",
      especialidade: "Pioneiro da publicidade moderna",
      frase:
        "Se o texto não vende, todo o resto é apenas decoração.",
    },
    {
      nome: "Seth Godin",
      especialidade: "Autor e estrategista de marketing",
      frase:
        "Marketing é contar uma história em que o cliente se reconhece.",
    },
    {
      nome: "Claude Hopkins",
      especialidade: "Pai da resposta direta",
      frase:
        "Teste tudo: o público vota com o clique e com a carteira.",
    },
  ],

  // 2) Google Meu Negócio
  "google-meu-negocio": [
    {
      nome: "Philip Kotler",
      especialidade: "Referência mundial em marketing",
      frase:
        "A melhor publicidade ainda é um cliente satisfeito falando de você.",
    },
    {
      nome: "Jeff Bezos",
      especialidade: "Empreendedor e fundador da Amazon",
      frase:
        "Sua marca é o que dizem de você quando você não está na sala.",
    },
    {
      nome: "Peter Drucker",
      especialidade: "Teórico da administração",
      frase:
        "O objetivo do marketing é tornar a venda algo quase inevitável.",
    },
  ],

  // 3) Bio Instagram
  "bio-instagram": [
    {
      nome: "Gary Vaynerchuk",
      especialidade: "Empresário e estrategista de conteúdo",
      frase:
        "Conteúdo é rei, mas contexto é o que faz o público clicar.",
    },
    {
      nome: "Simon Sinek",
      especialidade: "Autor e palestrante",
      frase:
        "As pessoas não compram o que você faz, e sim o porquê você faz.",
    },
    {
      nome: "Ann Handley",
      especialidade: "Especialista em marketing de conteúdo",
      frase:
        "Conte histórias em que o cliente é o herói, não a sua marca.",
    },
  ],

  // 4) Portfólio
  "portfolio": [
    {
      nome: "Steve Jobs",
      especialidade: "Empreendedor e designer de produtos",
      frase:
        "As pessoas julgam você pela experiência que vêem, não pela intenção que você teve.",
    },
    {
      nome: "Austin Kleon",
      especialidade: "Autor de 'Mostre seu Trabalho'",
      frase:
        "Mostrar o seu trabalho é o jeito mais simples de as pessoas encontrarem você.",
    },
    {
      nome: "Pablo Picasso",
      especialidade: "Artista e inovador criativo",
      frase:
        "A ação é o fundamento básico de qualquer conquista criativa.",
    },
  ],

  // 5) Rabelo Automações
  "rabelo-automacoes": [
    {
      nome: "Bill Gates",
      especialidade: "Empresário e tecnólogo",
      frase:
        "A automação aplicada a um bom processo multiplica resultados.",
    },
    {
      nome: "Andrew Ng",
      especialidade: "Cientista de dados e pesquisador em IA",
      frase:
        "Inteligência artificial é a nova eletricidade: ela passa por tudo que funciona bem.",
    },
    {
      nome: "Henry Ford",
      especialidade: "Industrial e inovador em processos",
      frase:
        "O que é padronizado pode ser melhorado, escalado e feito sempre com a mesma qualidade.",
    },
  ],
};

export default function Depoimentos({ servico, autoMs = 4000 }: Props) {
  const lista = depoimentosPorServico[servico] ?? [];
  const [index, setIndex] = useState(0);

  // Se mudar de serviço, volta para o primeiro depoimento
  useEffect(() => {
    setIndex(0);
  }, [servico]);

  // Autoplay simples
  useEffect(() => {
    if (lista.length <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % lista.length),
      autoMs
    );
    return () => clearInterval(id);
  }, [lista.length, autoMs]);

  if (!lista.length) return null;

  const atual = lista[index];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-md sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <span className="text-lg">“</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-slate-900">
            {atual.nome}
          </div>
          <div className="text-xs text-slate-500">
            {atual.especialidade}
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-700">{atual.frase}</p>

      {lista.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {lista.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ver frase ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-emerald-500" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
          <div className="text-[11px] uppercase tracking-wide text-slate-400">
            {index + 1} / {lista.length}
          </div>
        </div>
      )}
    </div>
  );
}










