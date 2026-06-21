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
        cocoa: '#6B4636',
        latte: '#C4A88E',
        cream: '#F5EDE4',
        bronze: '#B08254',
        espresso: '#3A2A20',
      },
      fontFamily: {
        // Display serif for big headings
        display: ['Fraunces', 'Cormorant Garamond', 'serif'],
        // Script accent — boutique signature, short taglines only
        script: ['"Mr Dafoe"', 'cursive'],
        // Body + labels
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        luxury: '0 4px 20px rgba(58, 42, 32, 0.08)',
        'luxury-lg': '0 24px 50px rgba(58, 42, 32, 0.18)',
        warm: '0 18px 40px rgba(107, 70, 54, 0.22)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1.5%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
