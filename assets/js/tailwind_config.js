tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#0B0B0B',
          900: '#121212',
          850: '#161616',
          800: '#1C1C1C',
          750: '#222222',
          700: '#2A2A2A',
          600: '#383838',
        },
        gold: {
          300: '#FCE08B',
          400: '#F5C84C',
          500: '#E5B535',
          600: '#C4941E',
          900: '#2E240D',
        }
      }
    }
  }
};