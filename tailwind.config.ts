import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F1',
        sand: '#EFE6DC',
        taupe: '#C9B8A8',
        bronze: '#A9794F',
        cocoa: '#5E4332',
        espresso: '#2B211B',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(43, 33, 27, 0.08)',
        card: '0 16px 40px rgba(43, 33, 27, 0.14)',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: { ticker: 'ticker 40s linear infinite' },
    },
  },
  plugins: [],
}
export default config
