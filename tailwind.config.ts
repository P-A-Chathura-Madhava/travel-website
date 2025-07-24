import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(190, 64%, 22%)',
          second: 'hsl(190, 64%, 22%)',
          alt: 'hsl(190, 64%, 15%)',
        },
        title: {
          DEFAULT: 'hsl(190, 64%, 18%)',
          dark: 'hsl(190, 24%, 95%)',
        },
        text: {
          DEFAULT: 'hsl(190, 24%, 35%)',
          light: 'hsl(190, 8%, 60%)',
          dark: 'hsl(190, 8%, 75%)',
        },
        input: {
          DEFAULT: 'hsl(190, 24%, 97%)',
          dark: 'hsl(190, 29%, 16%)',
        },
        body: {
          DEFAULT: 'hsl(190, 100%, 99%)',
          dark: 'hsl(190, 29%, 12%)',
        },
        scroll: {
          bar: 'hsl(190, 12%, 90%)',
          thumb: 'hsl(190, 12%, 75%)',
          'bar-dark': 'hsl(190, 12%, 48%)',
          'thumb-dark': 'hsl(190, 12%, 36%)',
        },
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        title: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'biggest': '2.5rem',
        'h1': '1.5rem',
        'h2': '1.25rem',
        'h3': '1rem',
        'normal': '.938rem',
        'small': '.813rem',
        'smaller': '.75rem',
      },
      spacing: {
        'header': '3rem',
      },
      zIndex: {
        'tooltip': '10',
        'fixed': '100',
      },
      transitionProperty: {
        'img': 'transform',
      },
      transitionDuration: {
        'img': '300ms',
      },
      scale: {
        'img': '1.1',
      },
    },
    screens: {
      'sm': '568px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      'tall': { 'raw': '(min-height: 721px)' },
    },
  },
  plugins: [],
};

export default config;