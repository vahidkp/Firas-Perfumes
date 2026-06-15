import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Extra small-phone breakpoint (390px) so padding/typography can step up
      // from the iPhone-SE tier without disturbing the default sm/md/lg scale.
      screens: {
        xs: '390px',
      },
      colors: {
        onyx: '#1A1A1A',
        gold: '#B8860B',
        'gold-light': '#D4AF37',
        'bottle-green': '#1F3D2B',
        teal: '#8FCFC8',
        'teal-deep': '#5BA8A0',
        ivory: '#F7F2E8',
        grey: '#8A8A8A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
