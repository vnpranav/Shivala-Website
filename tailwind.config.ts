import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage : {
        bckgrnd : "url('/shiva.png')",
        bgoverlay : "radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%"
      },
    },
  },
  plugins: [],
} satisfies Config;
