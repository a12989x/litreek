/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const { gray, grayDark, pink, purple, indigo } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
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
        pink: {
          100: pink.pink1,
          200: pink.pink2,
          300: pink.pink3,
          400: pink.pink4,
          500: pink.pink5,
          600: pink.pink6,
          700: pink.pink7,
          800: pink.pink8,
          900: pink.pink9,
          1000: pink.pink10,
          1100: pink.pink11,
          1200: pink.pink12,
        },
        purple: {
          100: purple.purple1,
          200: purple.purple2,
          300: purple.purple3,
          400: purple.purple4,
          500: purple.purple5,
          600: purple.purple6,
          700: purple.purple7,
          800: purple.purple8,
          900: purple.purple9,
          1000: purple.purple10,
          1100: purple.purple11,
          1200: purple.purple12,
        },
        indigo: {
          100: indigo.indigo1,
          200: indigo.indigo2,
          300: indigo.indigo3,
          400: indigo.indigo4,
          500: indigo.indigo5,
          600: indigo.indigo6,
          700: indigo.indigo7,
          800: indigo.indigo8,
          900: indigo.indigo9,
          1000: indigo.indigo10,
          1100: indigo.indigo11,
          1200: indigo.indigo12,
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
        'slide-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'slide-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'cta-bg': 'cta-bg 2s ease-in-out infinite',
        'slide-down': 'slide-down 150ms ease-in-out',
        'slide-up': 'slide-up 150ms ease-in-out',
      },
    },
  },
  plugins: [],
};

module.exports = config;
