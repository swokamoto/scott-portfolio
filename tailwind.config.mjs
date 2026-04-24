/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          app: '#0B0F1A',
          surface: '#121829', 
          card: '#1A2238'
        },
        text: {
          primary: '#E6EAF2',
          secondary: '#9AA4BF', 
          muted: '#6B738D'
        },
        accent: {
          blue: '#4DA3FF',
          purple: '#A66BFF'
        },
        border: {
          subtle: '#2A3552'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      spacing: {
        section: '3rem',
        container: '1.5rem',
      },
      maxWidth: {
        content: '72rem',
        reading: '56rem',
      },
      fontSize: {
        'fluid-lg': 'clamp(1.125rem, 2.5vw, 1.5rem)',
        'fluid-xl': 'clamp(1.25rem, 3vw, 1.875rem)', 
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2.25rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 3rem)',
        'fluid-4xl': 'clamp(2.25rem, 6vw, 3.75rem)'
      }
    },
  },
  plugins: [],
}