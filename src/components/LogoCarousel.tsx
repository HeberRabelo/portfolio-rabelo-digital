// src/components/LogoCarousel.tsx
import React from "react";

type Props = {
  logos: string[];           // caminhos/imports das imagens
  speedSec?: number;         // velocidade do scroll
  height?: number;           // altura de cada logo (px)
  gapPx?: number;            // espaçamento entre logos (px)
  altPrefix?: string;        // prefixo do alt
};

export default function LogoCarousel({
  logos,
  speedSec = 28,
  height = 32,
  gapPx = 48,
  altPrefix = "Logo",
}: Props) {
  const items = [...logos, ...logos]; // duplica p/ loop contínuo
  const style = {
    ["--speed" as any]: `${speedSec}s`,
    ["--gap" as any]: `${gapPx}px`,
    ["--h" as any]: `${height}px`,
  } as React.CSSProperties;

  return (
    <div className="logo-marquee" style={style}>
      <div className="logo-track">
        {items.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            className="logo-item"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

