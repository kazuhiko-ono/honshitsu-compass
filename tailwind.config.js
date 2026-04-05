import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        heading: 'var(--aw-color-text-heading)',
        surface: '#f2f7f4',
        gray: {
          50: '#fcfbf9',
          100: '#f5f0ea',
          200: '#e8e2da',
          300: '#dbd3c9',
          400: '#c0b6aa',
          500: '#a2968a',
          600: '#837668',
          700: '#736b64',
          800: '#504842',
          900: '#374842',
          950: '#2a3832',
        },
        slate: {
          200: '#e8e2da',
          300: '#eef5f1',
          400: '#c5d6cc',
          500: '#7a9a90',
          600: '#6a8a80',
          700: '#506860',
          800: '#374842',
          900: '#304038',
        },
        blue: {
          50: '#f2f7f4',
          100: '#deeee6',
          200: '#a8d2c6',
          400: '#82b2a4',
          500: '#6a9e8e',
          600: '#588a7c',
        },
        green: {
          600: '#82b2a4',
          700: '#6a9e8e',
          800: '#508070',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
