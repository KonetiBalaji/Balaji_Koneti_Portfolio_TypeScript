/** @type {import('tailwindcss').Config} */
module.exports = {
 // darkMode: ["selector", '[data-mode="dark"]'],
 darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
