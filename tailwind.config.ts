import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url('/img/backgrounds/hero-background.jpg')"
      },
      screens: {
        'sm': '768px', 
        'md': '1280px',
      },
      container: {
      padding: {
        sm: '20px',
        md: '32px',
        lg: '80px',
        }
    },

    },
  },
  plugins: [],
};
export default config;
