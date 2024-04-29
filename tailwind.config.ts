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
        'hero': "url('/img/backgrounds/hero-background.png')",
        'about': "url('/img/backgrounds/about-background.png')",
        'services': "url('/img/backgrounds/services-background.png')",
        'career': "url('/img/backgrounds/career-background.png')",
        'gallery': "url('/img/backgrounds/gallery-background.png')",
        'contacts': "url('/img/backgrounds/contacts-background.png')",
        
      },
      screens: {
        'sm': '768px', 
        'md': '1280px',
      },
      container: {
      padding: {
        sm: '0px',
        md: '0px',
        lg: '24px',
        }
    },

    },
  },
  plugins: [
          
  ],
};
export default config;
