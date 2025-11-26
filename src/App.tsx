// src/App.tsx
import { useState } from "react";
import WhatsFloat from "@/components/WhatsFloat";
import Home from "@/pages/Home";
import logo from "@/assets/logos/logo.png"; // ✅ caminho corrigido

export default function App() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  // Rolagem suave para as âncoras
  const goto = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Header global — o <nav> pode ser ocultado na Home via CSS se quiser só o menu de seções */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo (volta ao topo) */}
          <a href="#top" onClick={goto("#top")} className="flex items-center gap-2">
            <div className="h-[48px] w-[48px] overflow-hidden rounded-full shadow ring-1 ring-black/5">
              <img src={logo} alt="Rabelo Digital" className="h-full w-full object-cover" />
            </div>
            <span className="sr-only">Rabelo Digital</span>
          </a>

          {/* Menu desktop */}
          <nav className="hidden items-center gap-4 text-sm md:flex">
            <a href="#landing-page" onClick={goto("#landing-page")} className="hover:text-brand-700">Landing Page</a>
            <a href="#google-meu-negocio" onClick={goto("#google-meu-negocio")} className="hover:text-brand-700">GMN</a>
            <a href="#bio-ig" onClick={goto("#bio-ig")} className="hover:text-brand-700">Bio Instagram</a>
            <a href="#portfolio" onClick={goto("#portfolio")} className="hover:text-brand-700">Portfólio</a>
            <a href="#rabelo-automacoes" onClick={goto("#rabelo-automacoes")} className="hover:text-brand-700">Rabelo Automações</a>
          </nav>

          {/* Menu mobile (hambúrguer) */}
          <button
            type="button"
            className="rounded-md px-3 py-2 ring-1 ring-black/10 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(v => !v)}
          >
            Menu
          </button>
        </div>

        {/* Itens do menu mobile */}
        <div id="site-nav" className={`md:hidden ${open ? "block" : "hidden"}`}>
          <div className="mx-auto max-w-6xl px-4 pb-3">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#landing-page" onClick={goto("#landing-page")} className="rounded-md px-2 py-2 hover:bg-black/5">Landing Page</a>
              <a href="#google-meu-negocio" onClick={goto("#google-meu-negocio")} className="rounded-md px-2 py-2 hover:bg-black/5">GMN</a>
              <a href="#bio-ig" onClick={goto("#bio-ig")} className="rounded-md px-2 py-2 hover:bg-black/5">Bio Instagram</a>
              <a href="#portfolio" onClick={goto("#portfolio")} className="rounded-md px-2 py-2 hover:bg-black/5">Portfólio</a>
              <a href="#rabelo-automacoes" onClick={goto("#rabelo-automacoes")} className="rounded-md px-2 py-2 hover:bg-black/5">Rabelo Automações</a>
            </div>
          </div>
        </div>
      </header>

      {/* Página única com as seções */}
      <Home />

      {/* WhatsApp flutuante */}
      <WhatsFloat />
    </>
  );
}




    










