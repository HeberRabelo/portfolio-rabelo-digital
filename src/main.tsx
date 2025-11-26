// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Esconde o menu do cabeçalho só na Home (a regra do index.css depende disso)
document.body.dataset.page = "home";

// ErrorBoundary simples para erros em tempo de render
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: any) {
    console.error("Erro de render:", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <pre
          style={{
            whiteSpace: "pre-wrap",
            padding: 16,
            borderRadius: 12,
            background: "#0b224e",
            color: "#fff",
            maxWidth: 960,
            margin: "24px auto",
          }}
        >
{`Um erro ocorreu ao renderizar a página:

${this.state.error.message}

Confira o Console (F12 → Console) para detalhes.`}
        </pre>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);

// Carrega o App dinamicamente e mostra a falha na tela se der erro de import
(async () => {
  try {
    const { default: App } = await import("./App");
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (err: any) {
    const msg = err?.message ?? String(err);
    const stack = err?.stack ? `\n\n${err.stack}` : "";
    rootEl.innerHTML = `<pre style="white-space:pre-wrap;padding:16px;border-radius:12px;background:#0b224e;color:#fff;max-width:960px;margin:24px auto">
Falha ao carregar o App:

${msg}${stack}

Abra o Console (F12 → Console) e copie a primeira linha do erro.
</pre>`;
    console.error("Falha ao importar ./App:", err);
  }
})();



