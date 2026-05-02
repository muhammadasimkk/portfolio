import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#08090a',
        surface: '#0f1012',
        'surface-2': '#161719',
        border: 'rgba(255,255,255,0.07)',
        'border-hover': 'rgba(255,255,255,0.12)',
        accent: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          purple: '#a855f7',
          green: '#10b981',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #a855f7 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(34,211,238,0.05) 0%, rgba(168,85,247,0.05) 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(34,211,238,0.15)',
        'glow-blue': '0 0 40px rgba(59,130,246,0.15)',
        'glow-purple': '0 0 40px rgba(168,85,247,0.15)',
        'card': '0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,211,238,0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config
