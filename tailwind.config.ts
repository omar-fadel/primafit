import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '599px',
        md: '904px',
        lg: '1440px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-1': 'url(/backgrounds/bg-1.png)',
      },
      fontFamily: {
        display: ['"SF Pro Display"'],
        body: ['"SF Pro Display"'],
      },
      colors: {
        primary: '#D31922',
        secondary: '#234199',
      },
    },
    fontSize: {
      h1: '96px',
      h2: '60px',
      h3: '48px',
      h4: '36px',
      h5: '32px',
      body: '24px',
      body2: '20px',
      body3: '16px',
      button: '18px',
    },
    fontFamily: {
      sans: [
        '"SF Pro Display"',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
  },
  plugins: [],
};
export default config;
