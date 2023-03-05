// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'cta-bg': {
          '0%': { 'background-position': '0 0' },
          '50%': { 'background-position': '100%' },
          '100%': { 'background-position': '0 0' },
        },
      },
      animation: {
        'cta-bg': 'cta-bg 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

module.exports = config;
