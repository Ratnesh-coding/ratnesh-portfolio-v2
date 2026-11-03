/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
    colors: { ink: '#08090d', panel: '#11131a', muted: '#a1a1aa', electric: '#6d8cff', violet: '#a78bfa' }
  }},
  plugins: []
}
