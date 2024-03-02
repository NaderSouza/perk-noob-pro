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
        sans: ["Fira Code", "sans-serif"],
        // sans: ["Inter", "sans-serif"],
        black: ['blackOps2', 'sans-serif']
      },
      colors: {
        woods: '#ec6f00',
      },
    },
  },
  plugins: [],
};

export default config;
// sans: ["Inter", "sans-serif"],