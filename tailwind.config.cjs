/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const { gray, grayDark } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          100: gray.gray1,
          200: gray.gray2,
          300: gray.gray3,
          400: gray.gray4,
          500: gray.gray5,
          600: gray.gray6,
          700: gray.gray7,
          800: gray.gray8,
          900: gray.gray9,
          1000: gray.gray10,
          1100: gray.gray11,
          1200: gray.gray12,
        },
        greyDark: {
          100: grayDark.gray1,
          200: grayDark.gray2,
          300: grayDark.gray3,
          400: grayDark.gray4,
          500: grayDark.gray5,
          600: grayDark.gray6,
          700: grayDark.gray7,
          800: grayDark.gray8,
          900: grayDark.gray9,
          1000: grayDark.gray10,
          1100: grayDark.gray11,
          1200: grayDark.gray12,
        },
      },
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
