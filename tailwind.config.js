/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html", "sobre.html", "servicos.html", "cases.html", "blog.html", "./projects/adv.html", "./projects/astron-motion.html", "./legal/lgpd.html", "./legal/politica-privacidade.html",  "./legal/termos-uso.html", "./assets/preline.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#ffffff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      }
    },
    fontFamily: {
      'body': [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
