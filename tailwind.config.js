/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'wf-blue':        '#004182',
        'wf-blue-deep':   '#003068',
        'wf-blue-light':  '#79afd9',
        'wf-blue-soft':   '#eaf2fa',
        'wf-orange':      '#f5a525',
        'wf-orange-2':    '#f5a822',
        'wf-orange-deep': '#d98a0e',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft:  '0 4px 20px -8px rgba(0,65,130,0.15)',
        card:  '0 10px 30px -12px rgba(0,65,130,0.25)',
        cardH: '0 20px 40px -12px rgba(245,165,37,0.35)',
      },
      animation: {
        'fade-up':    'fadeUp .8s ease forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
