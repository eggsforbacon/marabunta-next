/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/model/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            height: {
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
            spacing: {
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
                'solomon': ['Solomon', 'sans-serif'],
                'galano': ['Galano grotesque', 'sans-serif'],
            },
            colors: {
                'off': {
                    'white': '#FAFAFA',
                    'black': '#0e0e0e'
                },
                'marabunta': {
                    'red': '#e20830',
                    'cyan': '#51c1e1',
                    'yellow': '#fcea1e',
                    'yellow-alt': '#fdd24c',
                },
                'projects': {
                    'cali-sonreir': {
                        'orange': '#f06d3f',
                        'yellow': '#fdd22d',
                        'green': '#279a5b',
                        'purple': '#4d2d68',
                    },
                    'pueblo-22': {
                        'fuchsia': '#750c62',
                        'cyan': '#009aa3',
                        'yellow': '#f7b905',
                        'salmon-red': '#e8494b',
                        'emerald-green': '#20a069',
                    },
                    'clinicannabis': {
                        'caribbean-green': '#00B451',
                        'GO-green': "#00AC69",
                        'persian-green': "#00A98F",
                        'viridian-green': '#009490',
                        'midnight-green': "#005361",
                        'rich-black': "#0C3A41",
                        'bgOrange': '#FCF4CB'
                    },
                    'ingenieria_sas': {
                        'blue': '#0F265C'
                    },
                    'panamericanos-21': {
                        'yellow': '#fcdc00',
                        'pink': '#e5077e',
                        'ocean-blue': '#160b8b',
                        'sky-blue': '#1b9cd9',
                    },
                    'fondo-mixto': {
                        'red': '#f22536',
                        'blue': '#1a47bc',
                        'gray': '#55565b',
                    },
                    'pueblo-21': {
                        'purple': '#3a3173',
                        'teal': '#00a594',
                        'yellow': '#f5b508',
                        'fuchsia': '#9c197b',
                        'rose-red': '#e64a4a',
                    },
                    'ambientales': {
                        'green': '#016c38',
                        'blue': '#0f1e49',
                    },
                    'bio-expo': {
                        'lime': '#8fb51d',
                        'blue': '#0072aa',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            transitionProperty: {
                'shadow-border': 'box-shadow, border, drop-shadow',
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
                'pan-text-rtl': {
                    '0%': {transform: 'translate(0%)'},
                    '100%': {transform: 'translate(-50%)'},
                },
                'float-up-sm': {
                    '0%': {transform: 'translateY(0px)'},
                    '50%': {transform: 'translateY(-16px)'},
                    '100%': {transform: 'translateY(0px)'},
                },
                'wave-left': {
                    '0%': {transform: 'translateX(0) scale(var(--tw-scale-x), var(--tw-scale-y))'},
                    '100%': {transform: 'translateX(-100%) scale(var(--tw-scale-x), var(--tw-scale-y))'},
                },
                'rotate-blob': {
                    '0%': {transformOrigin: "center", rotate: "0deg"},
                    '50%': {scale: "1 1.5"},
                    '100%': {transformOrigin: "center", rotate: "360deg"},
                },
                'rotate-geoid': {
                    '0%': {transformOrigin: "center", rotate: "0deg"},
                    '50%': {scale: "1.1 1.15"},
                    '100%': {transformOrigin: "center", rotate: "360deg"},
                },
                'fade-out-in': {
                    '0%, 100%': {opacity: '1'},
                    '25%, 50%': {opacity: '0'},
                },
                'fade-in': {
                  '0%': {opacity: '0'},
                  '100%': {opacity: '1'},
                },
                'slide-infinite': {
                    '0%': {transform: 'translateX(0)'},
                    '100%': {transform: 'translateX(calc(-100% - 1rem))'},
                },
            },
            animation: {
                'pan-text-rtl': 'pan-text-rtl 30s linear infinite backwards',
                'float-up-sm': 'float-up-sm 5s ease-in-out infinite forwards',
                'wave-left': 'wave-left 45s ease-in-out infinite',
                'rotate-blob': "rotate-blob linear 20s infinite",
                'rotate-geoid': "rotate-geoid linear 25s infinite",
                'rotate-geoid-reverse': "rotate-geoid linear 25s infinite both reverse",
                'fade-out-in': "fade-out-in 1s ease-in-out 1 both",
                'fade-in': "fade-in 1s ease-in-out 1 both",
                'slide-infinite': "slide-infinite linear 50s infinite both",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwindcss-animation")],
}
