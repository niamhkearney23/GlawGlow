import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F3',
        blush: '#F9E4DC',
        peach: '#F6CDB9',
        nude: '#E9C5AE',
        bronze: '#B8845A',
        gold: '#D9A877',
        cocoa: '#6B4636',
        espresso: '#3A2A20',
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'serif'],
        script: ['"Mr Dafoe"', 'cursive'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(107, 70, 54, 0.10)',
        glow: '0 20px 60px rgba(184, 132, 90, 0.28)',
        card: '0 18px 45px rgba(107, 70, 54, 0.16)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
