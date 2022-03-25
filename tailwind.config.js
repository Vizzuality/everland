/* eslint-disable @typescript-eslint/no-var-requires */
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');
const lineClamp = require('./src/lib/tailwind/line-clamp');

module.exports = {
  content: ['./**/*.ts', './**/*.tsx'],
  darkMode: 'media', // 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [forms, typography, lineClamp],
};
