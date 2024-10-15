import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playFair:['Playfair Display','serif'],
        Inter:['Inter','sans-serif']
      },
      backgroundImage:{
        'bg-primary':"url('/background.png')",
      }
    },
  },
  plugins: [],
};
export default config;
