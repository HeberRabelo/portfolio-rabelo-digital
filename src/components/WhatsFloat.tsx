// src/components/WhatsFloat.tsx
export default function WhatsFloat() {
  // 1) Troque pelo seu número COM DDI+DDD (só dígitos)
  //    Exemplo: 55 11 91234-5678  ->  "5511912345678"
  const phone = "5575991396595";

  // 2) Personalize a mensagem inicial (será automaticamente codificada)
  const rawMessage = "Olá! Quero maiores informações sobre o serviço.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(rawMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      aria-label="Falar no WhatsApp"
    >
      {/* Ícone WhatsApp em SVG (sem dependências) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.05c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.22-.66.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.47.13-.62.13-.13.3-.35.46-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.69-1.66-.95-2.27-.25-.6-.5-.52-.69-.53-.18-.01-.38-.01-.58-.01s-.53.07-.81.38c-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.09 2.95 1.24 3.15.15.2 2.16 3.3 5.24 4.62.73.31 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.77-.73 2.02-1.44.25-.71.25-1.33.17-1.46-.07-.13-.27-.2-.57-.35z" />
        <path d="M26.6 5.42C23.86 2.68 20.2 1.2 16.32 1.2 8.79 1.2 2.68 7.31 2.68 14.84c0 2.35.61 4.64 1.77 6.66L2 30.8l9.52-2.37c1.94 1.06 4.14 1.61 6.38 1.61 7.53 0 13.64-6.11 13.64-13.64 0-3.88-1.48-7.55-4.32-10.38zM17.9 27.08c-2.01 0-3.99-.54-5.72-1.56l-.41-.24-5.65 1.41 1.51-5.5-.26-.45a11.53 11.53 0 0 1-1.73-6.1c0-6.39 5.2-11.6 11.59-11.6 3.09 0 6 1.2 8.19 3.4 2.19 2.19 3.4 5.1 3.4 8.2 0 6.39-5.2 11.6-11.6 11.6z" />
      </svg>
      <span className="font-semibold">Falar no WhatsApp</span>
    </a>
  );
}

