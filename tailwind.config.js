/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    // MARK: Extend TailwindCSS
    extend: {
      borderWidth: {
        3: '3px',
        6: '6px',
        '3-rem': '3rem',
      },
      lineHeight: {
        4.5: '1.125rem',
      },
      height: {
        '1/8': '12.5%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '7/8': '87.5%',
        '5/8': '62.5%',
        '3/8': '37.5%',
        '5/12': '41.666667%',
        '1/12': '8.333333%',
        '1/15': '6.666667%',
        '13.5p': '13.5%',
        15: '15%',
      },
      width: {
        '1/8': '12.5%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '7/8': '87.5%',
        '5/8': '62.5%',
        '3/8': '37.5%',
        '5/12': '41.666667%',
        '1/12': '8.333333%',
        '1/15': '6.666667%',
      },
      backgroundImage: {
        'brick-wall': "url('/src/static/imgs/BrickWall.png')",
        'burger-boy': "url('/src/static/imgs/iconography/burgerboy.png')",
        'graphics-poster': "url('/src/static/imgs/posters/GraphicsPoster.png')",
        'dev-poster': "url('/src/static/imgs/posters/DevPoster.png')",
        'stuff-poster': "url('/src/static/imgs/posters/StuffPoster.png')",
        'dnc-poster': "url('/src/static/imgs/posters/DnCPoster.png')",
        'box-office-border': "url('/src/static/imgs/BoxOfficeBorder.png')",
      },
      boxShadow: {
        'neon-yellow-in': '0 0 15px 0px yellow inset',
        'neon-yellow-bottom': '0 0px 10px 0px #ffff00dd inset, 0 2px 2px 0.75px #f2f28bdd',
        'neon-top':
          '0px -3px 2px 0px #0090ff88, 0px -5px 1px 1px #fffd, 0 -6px 3px 4px #619efcdd, 0 2px 3px 1px #fffc inset, 0 3px 4px 1px #619efcdd inset',
        'dim-in': '0px 0px 10px 1px black inset',
        dim: 'rgba(17, 17, 26, 0.2) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
        'bright-top':
          'rgba(254, 242, 197, 0.8) 0px 0px, rgba(254, 242, 197, 0.5) 0px -5px, rgba(254, 242, 197, 0.4) 0px -10px, rgba(254, 242, 197, 0.3) 0px -15px',
        'bright-bottom':
          'rgba(254, 242, 197, 0.5) 0px 5px, rgba(254, 242, 197, 0.4) 0px 10px, rgba(254, 242, 197, 0.3) 0px 15px',
        'bright-left':
          'rgba(254, 242, 197, 0.5) -5px 0px, rgba(254, 242, 197, 0.4) -10px 0px, rgba(254, 242, 197, 0.3) -15px 0px',
        'bright-right':
          'rgba(254, 242, 197, 0.5) 5px 0px, rgba(254, 242, 197, 0.4) 10px 0px, rgba(254, 242, 197, 0.3) 15px 0px',
      },
      clipPath: {
        'marquee-l': 'polygon(0 4%, 100% 0, 100% 98%, 0 100%)',
        'marquee-r': 'polygon(0 0, 100% 4%, 100% 100%, 0 96%)',
      },
      textShadow: {
        'neon-blue': '0 0 1px #ffffff88, 0 0 4px #0000ff, 0 0 0.5em #61dcfc',
        'neon-blue-intense':
          '0 0 1.5px #ffffff, 0 0 2px #61dcfc, 0 0 1em #0055ffcc, 0 0 2em #0055ffcc, 0 0 3em #0022ff88',
        'neon-orange': '0 0 1px #ffffff, 0 0 3px #ff888888, 0 0 6px #ffff44cf',
        'neon-orange-bright': '0 0 3px #ffffff, 0 0 5px #ff888888, 0 0 10px #ffff44cf',
      },
      fontSize: {
        '4xs': ['0.5rem', { lineHeight: '0.75rem' }],
        '3xs': ['0.625rem', { lineHeight: '0.875rem' }],
        '2xs': ['0.7rem', { lineHeight: '1rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],
      },
    },
    colors: ({ colors }) => ({
      // MARK: Default TailwindCSS colors
      inherit: colors.inherit,
      current: colors.current,
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,

      // MARK: Custom colors
      light: {
        main: {
          txt: '#134e4a', // teal-900
          bg: '#d6d3d1', // stone-300
          brdr: '#881337', // rose-900
          btn: '#fdba74', // orange-300
          svg: '#881337', // rose-900
        },
        nav: {
          txt: '#fce7f3', // pink-100
          bg: '#c084fc', // purple-400
          brdr: '#fce7f3', // pink-100
          btn: '#a1a1aa', // zinc-400
          svg: '#92400e', // amber-800
        },
        footer: {
          txt: '#44403c', // stone-700
          bg: 'red-200',
          brdr: 'red-200',
          btn: 'red-200',
          svg: 'red-200',
        },
      },
    }),
  },

  // MARK: DaisyUI
  daisyui: {
    styled: true,
    themes: [
      {
        movies: {
          primary: '#FFF3C5',
          'primary-content': '#16140E',
          secondary: '#42563f',
          'secondary-content': '#16140E',
          accent: '#61DCFC',
          'accent-content': '#C1E6EF',
          neutral: '#DC8B23',
          'neutral-content': '#F4C187',
          'base-100': '#16140E',
          'base-200': '#542f03',
          'base-300': '#00658E',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
  },
  plugins: [
    require('@nauverse/tailwind-dot-grid-backgrounds'),
    require('daisyui'),
    require('tailwindcss-border-image'),

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
