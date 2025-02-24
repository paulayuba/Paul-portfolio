/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "4", // Tailwind spacing scale (adjust as needed)
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["var(--font-jetbrainsMono)"], 
    },
    extend: {
      colors: { 
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99", 
          hover: "#00e18", 
        },
      },
    },
  },
  plugins: [],
};
