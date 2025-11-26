// src/components/CardProjeto.tsx
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Projeto {
  id: string;
  titulo: string;
  tipo: "landing-page" | "google-meu-negocio" | "bio-instagram" | "automacao";
  descricao_curta: string;
  resultado: string;
  imagem?: string;
  link_externo?: string;
}

const tipoLabels = {
  "landing-page": "Landing Page",
  "google-meu-negocio": "Google Meu Negócio",
  "bio-instagram": "Bio Instagram",
  automacao: "Automação",
} as const;

export default function CardProjeto({ projeto }: { projeto: Projeto }) {
  return (
    <Card className="hover-lift h-full flex flex-col transition-transform">
      {projeto.imagem && (
        <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-gray-100">
          <img src={projeto.imagem} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      <CardHeader>
        <div className="mb-2">
          <Badge>{tipoLabels[projeto.tipo]}</Badge>
        </div>
        <CardTitle>{projeto.titulo}</CardTitle>
        <CardDescription>{projeto.descricao_curta}</CardDescription>
      </CardHeader>

      <CardContent className="mt-auto flex items-center justify-between">
        <span className="text-sm text-gray-600">{projeto.resultado}</span>
        {projeto.link_externo && (
          <a
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline"
            href={projeto.link_externo}
            target="_blank"
            rel="noreferrer"
          >
            Ver
            <ExternalLink size={16} />
          </a>
        )}
      </CardContent>
    </Card>
  );
}

