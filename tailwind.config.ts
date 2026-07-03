import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        primary: '#6C63FF',
        secondary: '#00F5D4',
        accent: '#8B5CF6',
        glow: '#38BDF8',
        surface: 'rgba(255,255,255,0.05)',
      },
      boxShadow: {
        glow: '0 0 80px rgba(108,99,255,0.18)',
        soft: '0 20px 120px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        space: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        satoshi: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(108,99,255,0.16), transparent 35%)',
        'aurora': 'linear-gradient(135deg, rgba(108,99,255,0.14), rgba(0,245,212,0.1), rgba(56,189,248,0.12))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
