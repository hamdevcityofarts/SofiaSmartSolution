/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // Breakpoints personnalisés
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Couleurs personnalisées
      colors: {
        primary: "#1E293B",   // sagesse
        accent: "#3B82F6",    // innovation
        soft: "#F8FAFC"
      }
    }
  },
  plugins: []
}