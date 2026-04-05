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
        surface: '#eef4f0',
        gray: {
          50: '#faf8f5',
          100: '#f0ebe4',
          200: '#e0d8ce',
          300: '#d0c6ba',
          400: '#b0a696',
          500: '#8a7a6a',
          600: '#6b5e52',
          700: '#5a5048',
          800: '#3d3530',
          900: '#2c3a35',
          950: '#1e2a25',
        },
        slate: {
          200: '#e0d8ce',
          300: '#e8f2ee',
          400: '#b5c9bf',
          500: '#5a7069',
          600: '#4a6059',
          700: '#3a4f47',
          800: '#2c3a35',
          900: '#243530',
        },
        blue: {
          50: '#eef4f0',
          100: '#d4e8df',
          200: '#7ab8a8',
          400: '#5d9d8c',
          500: '#4a7c6f',
          600: '#3e6a5e',
        },
        green: {
          600: '#4a7c6f',
          700: '#3e6a5e',
          800: '#2c5a4e',
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
