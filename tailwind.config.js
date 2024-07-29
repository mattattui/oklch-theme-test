const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}'
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'oklch(from var(--border) l c var(--theme-hue))',
        input: 'oklch(from var(--input) l c var(--theme-hue))',
        ring: 'oklch(from var(--ring) l c var(--theme-hue))',
        background: 'oklch(from var(--background) l calc(c * 0.5) var(--theme-hue))',
        foreground: 'oklch(from var(--foreground) l c var(--theme-hue))',
        primary: {
          DEFAULT: 'oklch(from var(--primary) l c var(--theme-hue))',
          foreground: 'oklch(from var(--primary-foreground) l c var(--theme-hue))'
        },
        secondary: {
          DEFAULT: 'oklch(from var(--secondary) l c var(--theme-hue))',
          foreground: 'oklch(from var(--secondary-foreground) l c var(--theme-hue))'
        },
        destructive: {
          DEFAULT: 'oklch(from var(--destructive) l c var(--theme-hue))',
          foreground: 'oklch(from var(--destructive-foreground) l c var(--theme-hue))'
        },
        muted: {
          DEFAULT: 'oklch(from var(--muted) l c var(--theme-hue))',
          foreground: 'oklch(from var(--muted-foreground) l c var(--theme-hue))'
        },
        accent: {
          DEFAULT: 'oklch(from var(--accent) l c var(--theme-hue))',
          foreground: 'oklch(from var(--accent-foreground) l c var(--theme-hue))'
        },
        popover: {
          DEFAULT: 'oklch(from var(--popover) l c var(--theme-hue))',
          foreground: 'oklch(from var(--popover-foreground) l c var(--theme-hue))'
        },
        card: {
          DEFAULT: 'oklch(from var(--card) l c var(--theme-hue))',
          foreground: 'oklch(from var(--card-foreground) l c var(--theme-hue))'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      }
    }
  },
  plugins: [animate]
}
