/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta da marca
        brand: {
          900: "#00134b",
          300: "#90cafb",
        },
        // Paleta navy (opcional)
        navy: {
          50:  "#eef3fb",
          100: "#d9e4f7",
          200: "#b6ccf0",
          300: "#8aaee6",
          400: "#5f8fdb",
          500: "#3c71cf",
          600: "#2559b3",
          700: "#163f86",
          800: "#0f2f68",
          900: "#0b224e",
          950: "#081838",
        },
        // Azul claro (secundária opcional)
        sky: {
          50:  "#ecf8ff",
          100: "#d6f0ff",
          200: "#b3e2ff",
          300: "#86ceff",
          400: "#59b6ff",
          500: "#2f9dff",
          600: "#187fe6",
          700: "#1263b4",
          800: "#114f8c",
          900: "#113f6e",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(10,20,50,.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};







