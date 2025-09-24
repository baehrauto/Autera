/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        clickupPurple: {
          DEFAULT: '#7B68EE', // Main ClickUp purple
          light: '#E9E6FB',
          dark: '#5F4B8B',
        },
        clickupBlue: {
          DEFAULT: '#00B3F6',
          light: '#E6F7FB',
          dark: '#007EA7',
        },
        clickupPink: {
          DEFAULT: '#FF63ED',
          light: '#FFE6FA',
          dark: '#C13C9B',
        },
        clickupGradientStart: '#7B68EE',
        clickupGradientEnd: '#00B3F6',
      },
      fontFamily: {
        'sans': ['Inter', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      boxShadow: {
        'clickup': '0 4px 32px 0 rgba(123,104,238,0.10)',
      },
    },
  },
  plugins: [],
} 