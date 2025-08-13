
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
        black: '#000000',
        'gray-dark': '#333333',
        gray: '#666666',
        'gray-light': '#999999',
        white: '#FFFFFF',
        primary: '#FFFFFF',
        secondary: '#999999',
        accent: '#FFFFFF',
        text: '#FFFFFF',
        'text-dark': '#999999',
      },
      fontFamily: {
        'departure-mono': ['Departure Mono', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
