// src/components/ServicesNav.tsx
export default function ServicesNav() {
  const items = [
    { href: "#landing-page", label: "Landing Page" },
    { href: "#google-meu-negocio", label: "GMN" },
    { href: "#bio-instagram", label: "Bio IG" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#rabelo-automacoes", label: "Rabelo Automações" },
  ];
  return (
    <nav className="sticky top-0 z-20 w-full bg-gradient-to-b from-[#e9f1ff] to-[#d3e1ff] border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex gap-6 text-sm">
        {items.map((it) => (
          <a key={it.href} href={it.href} className="text-slate-800 hover:underline">
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}








