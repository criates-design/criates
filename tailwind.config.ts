import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/view/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'carbona': ['Carbona', 'sans-serif'],
      },
      fontSize: {
        'xs': [
          '12px',
          {
            lineHeight: '1.2',
            fontWeight: 'medium'
          }
        ],
        'sm': [
          '14px',
          {
            lineHeight: '1.2',
            fontWeight: 'medium'
          }
        ],
        'md': [
          '20px',
          {
            lineHeight: '1.2',
            fontWeight: 'medium'
          }
        ],
        'lg': [
          '26px',
          {
            lineHeight: '1.2',
            fontWeight: 'medium'
          }
        ],
        'xl': [
          '28px',
          {
            lineHeight: '1.2',
            fontWeight: 'medium'
          }
        ],
        '2xl': [
          '32px',
          {
            lineHeight: '1.2',
            fontWeight: 'medium'
          }
        ],
        '3xl': [
          '36px',
          {
            lineHeight: '1.2',
            fontWeight: 'medium'
          }
        ]
      },
      colors: {
        criatesPurple: {
          DEFAULT: '#5852F2',
        },
        criatesGreen: {
          DEFAULT: '#D3EB79',
        },
        criatesBlack: {
          DEFAULT: '#2A2A2A',
        },
        criatesGray: {
          DEFAULT: '#F2F2F2',
        },
        criatesOrange: {
          DEFAULT: '#E0A70B',
        },
        criatesNeonGreen: {
          DEFAULT: '#0BE08B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light']
  }
}
export default config
