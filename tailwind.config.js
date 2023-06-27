/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '104': '24rem',
        '112': '26rem',
        '120': '28rem',
        '128': '30rem',
        '136': '34rem',
        '144': '36rem',
        '168': '42rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '384': '96rem',
        '424': '106rem',
      },
      width: {
        '104': '24rem',
        '112': '26rem',
        '120': '28rem',
        '128': '30rem',
        '136': '34rem',
        '144': '36rem',
        '168': '42rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '384': '96rem',
        '424': '106rem',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'off': {
          'white': '#FAFAFA',
          'black': '#101010'
        },
        'marabunta': {
          'red': '#e3032f',
          'cyan': '#50c1e0',
          'yellow': '#fcea1e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      /*Awfully useful animation timing functions*/
      transitionTimingFunction: {
        'sine': {
          'in': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
          'out': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
          'in-out': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        },
        'quadratic': {
          'in': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
          'out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'in-out': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
        },
        'cubic': {
          'in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          'out': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          'in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
        },
        'quartic': {
          'in': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
          'out': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)'
        },
        'quintic': {
          'in': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          'out': 'cubic-bezier(0.23, 1, 0.32, 1)',
          'in-out': 'cubic-bezier(0.86, 0, 0.07, 1)'
        },
        'exponential': {
          'in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
          'out': 'cubic-bezier(0.19, 1, 0.22, 1)',
          'in-out': 'cubic-bezier(1, 0, 0, 1)'
        },
        'circular': {
          'in': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
          'out': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
          'in-out': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)'
        },
        'back': {
          'in': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
          'out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          'in-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }
      },
      animationDuration: {
        1200: '1200ms',
        1400: '1400ms',
        1600: '1600ms',
        1800: '1800ms',
        2000: '2000ms',
        2200: '2200ms',
        2400: '2400ms',
      },
      keyframes: {
        'pan-text-rtl' : {
          '0%' : {transform: 'translate(0%)'},
          '100%': {transform: 'translate(-50%)'},
        },
        'float-up-sm': {
          '0%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-16px)'},
          '100%': {transform: 'translateY(0px)'},
        },
      },
      animation: {
        'pan-text-rtl' : 'pan-text-rtl 30s linear infinite backwards',
        'float-up-sm': 'float-up-sm 5s ease-in-out infinite forwards',

      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
