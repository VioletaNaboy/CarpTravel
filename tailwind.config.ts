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
        'atvs-desc': "url('/img/backgrounds/atvs-traveling.png')",
        'rafting-desc': "url('/img/backgrounds/rafting.png')",
        'airBall-desc': "url('/img/backgrounds/hot-air-ballooning.png')",
        'skyding-desc': "url('/img/backgrounds/skydiving.png')",
        'rockClimb-desc': "url('/img/backgrounds/rock-climbing.png')",
        'career': "url('/img/backgrounds/career-background.png')",
        'gallery': "url('/img/backgrounds/gallery-background.png')",
        'contacts': "url('/img/backgrounds/contacts-background.png')"       
      },
      screens: {
        'sm': '420px',
        'md': '768px', 
        'lg': '1280px',
      },
      container: {
      padding: {
        sm: '0px',
        md: '0px',
        lg: '24px',
        }
      },
      fontSize: {
        'xs-mob': ['12px', '20px'],
        'xs-tab': ['12px', '20px'],
        'xs-des': ['12px', '24px'],
        's-mob': ['14px', '20px'],
        's-tab': ['16px', '20px'],
        's-des': ['18px', '24px'],
        'm-mob': ['20px', '17px'],
        'm-tab': ['22px', '18px'],
        'm-des': ['28px', '24px'],
        'btn-mob': ['30px', 'normal'],
        'btn-tab': ['30px', 'normal'],
        'btn-des': ['32px', 'normal'],
        'l-mob': ['40px', '56px'],
        'l-tab': ['67px', 'normal'],
        'l-des': ['98px', 'normal'],
    }

    },
  },
  plugins: [
          
  ],
};
export default config;
