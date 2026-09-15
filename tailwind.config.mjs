/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Saans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Saans Mono', 'monospace'],
        display: ['Saans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1b1b1b',
        paper: '#1b1b1b',
        wool: '#f6f2eb',
        f7: '#f7f5f2',
        muted: '#929292',
        line: '#454543',
        accent: '#c496ff',
        mint: '#a1d8c0',
        violet: '#8942e4',
        pill: '#242424',
      },
      borderRadius: {
        pill: '12rem',
        card: '24rem',
        sm: '6rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#f7f5f2',
            '--tw-prose-headings': '#f7f5f2',
            '--tw-prose-links': '#c496ff',
            '--tw-prose-bold': '#f7f5f2',
            '--tw-prose-code': '#c496ff',
            '--tw-prose-quotes': 'rgba(247,245,242,0.7)',
            '--tw-prose-quote-borders': '#454543',
            '--tw-prose-hr': 'rgba(247,245,242,0.12)',
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              backgroundColor: 'rgba(247,245,242,0.08)',
              padding: '0.15rem 0.4rem',
              borderRadius: '6rem',
              fontWeight: '400',
            },
            'pre code': { backgroundColor: 'transparent', padding: '0' },
            'h2, h3': { 'scroll-margin-top': '7rem' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
