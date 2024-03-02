import { Orbitron } from 'next/font/google';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif']
      },
      colors: {
        bo2: '#ec6f00',
      },
    },
  },
  plugins: [],
};

export default config;
// sans: ["Inter", "sans-serif"],