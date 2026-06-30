import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cBg: '#1e1e2e',
        cSurface: '#313244',
        cBorder: '#45475a',
        cH1: '#cdd6f4',
        cH2: '#cdd6f4',
        cBody: '#cdd6f4',
        cMuted: '#6c7086',
        cAccent: '#0ea5e9',
        cAccentHover: '#38bdf8',
        cLink: '#89b4fa',
        cLinkVisited: '#b4befe',
        cGreen: '#a6e3a1',
        cPeach: '#fab387',
        cMauve: '#cba6f7',
        cRed: '#f38ba8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
