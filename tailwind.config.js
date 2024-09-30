/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  "./layout/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      dancing: ["Dancing Script", "sans-serif", "cursive"], // Ajout de la police Dancing Script
    },
    colors: {
      // Couleurs pour le mode clair
      primary: {
        light: "#070d47", // Couleur principale en mode clair
        dark: "#07d0e5", // Couleur principale en mode sombre
      },
      background: {
        light: "#ffffff", // Fond en mode clair
        dark: "#1a202c", // Fond en mode sombre
      },
      text: {
        light: "#070d47", // Couleur du texte en mode clair
        dark: "#f7fafc", // Couleur du texte en mode sombre
      },
      // Couleur supplémentaire Aqua
      aqua: "#00FFFF",
    },
  },
};
export const plugins = [];
