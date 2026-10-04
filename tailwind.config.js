/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          base: '#08090B',
          subtle: '#0F1115',
          elevated: '#16181F',
        },
        metallic: {
          titanium: '#D1D5DB',
          champagne: '#E5C396',
          amber: '#F59E0B',
          cyan: '#38BDF8',
        },
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      letterSpacing: {
        widest: '0.15em',
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
