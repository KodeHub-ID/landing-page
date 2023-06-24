/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const presets = require('./src/assets/presets/main')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: { ...presets.fonts },
      colors: {
        primary: presets.colors.primary,
        secondary: presets.colors.secondary,
        neutral: presets.colors.neutral,
        danger: presets.colors.danger,
        info: presets.colors.info,
        warning: presets.colors.warning,
        success: presets.colors.success
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}

